import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, updateQuantity, removeItem } from "../../redux/cartSlice";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, status, error } = useSelector((state) => state.cart);
  const token = useSelector((state) => state.user.token);
  const [notification, setNotification] = useState("");

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else if (status === "idle") {
      dispatch(fetchCart(token))
        .unwrap()
        .catch((error) => {
          if (error.message === "Cart not found") {
            console.error("Cart is empty:", error);
          } else {
            console.error("Failed to fetch cart:", error);
          }
        });
    }
  }, [token, status, dispatch, navigate]);

  if (!token) {
    return null;
  }

  const handleIncrease = (id, productId, quantity) => {
    dispatch(updateQuantity({ token, productId, quantity: quantity + 1 }));
  };

  const handleDecrease = (id, productId, quantity) => {
    if (quantity > 1) {
      dispatch(updateQuantity({ token, productId, quantity: quantity - 1 }));
    }
  };

  const handleRemove = (productId) => {
    dispatch(removeItem({ token, productId })).then(() => {
      setNotification("Sản phẩm đã được xóa khỏi giỏ hàng.");
      setTimeout(() => setNotification(""), 3000);
    });
  };

  const renderCartItems = () => {
    return items.map((item) => (
      <div key={item.id} className="grid grid-cols-3 items-start gap-4">
        <div className="col-span-2 flex items-start gap-4">
          <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 bg-gray-100 p-2 rounded-md">
            <img
              src={item.product?.image}
              className="w-full h-full object-contain"
              alt={item.product?.name}
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-base font-bold text-gray-800">
              {" "}
              {item.product?.name}{" "}
            </h3>
            <p className="text-xs font-semibold text-gray-500 mt-0.5">
              {" "}
              {formatCurrency(item.product?.price)}{" "}
            </p>
            <button
              type="button"
              className="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1 shrink-0"
              onClick={() => handleRemove(item.productId)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 fill-current inline"
                viewBox="0 0 24 24"
              >
                <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" />
              </svg>
              Xóa
            </button>
          </div>
        </div>
        <div className="ml-auto">
          <h4 className="text-lg max-sm:text-base font-bold text-gray-800">
            {" "}
            {formatCurrency(item.quantity * (item.product?.price || 0))}{" "}
          </h4>
          <div className="mt-6 flex items-center gap-1">
            <button
              type="button"
              className="px-2 py-1 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
              onClick={() =>
                handleDecrease(item.id, item.product.id, item.quantity)
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-2.5 fill-current"
                viewBox="0 0 124 124"
              >
                <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" />
              </svg>
            </button>
            <span className="mx-3 font-bold">{item.quantity}</span>
            <button
              type="button"
              className="px-2 py-1 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md"
              onClick={() =>
                handleIncrease(item.id, item.product.id, item.quantity)
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-2.5 fill-current"
                viewBox="0 0 42 42"
              >
                <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    ));
  };

  const totalAmount = items.reduce(
    (total, item) => total + item.quantity * (item.product?.price || 0),
    0
  );

  return (
    <div className="font-sans max-w-5xl max-md:max-w-xl mx-auto bg-white py-4">
      <h1 className="text-3xl font-bold text-gray-800">Giỏ hàng</h1>
      {notification && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4"
          role="alert"
        >
          <strong className="font-bold">Thông báo! </strong>
          <span className="block sm:inline">{notification}</span>
        </div>
      )}
      <div className="grid md:grid-cols-3 gap-8 my-16">
        <div className="md:col-span-2 space-y-4">
          {status === "loading" && <div>Loading...</div>}
          {status === "failed" && <div>Error: {error}</div>}
          {status === "succeeded" && (
            <>
              {items.length === 0 ? (
                <div>
                  <h2 className="font-semibold text-[20px]">
                    Giỏ hàng đang trống
                  </h2>
                  <Link to="/store" className="text-blue-600 hover:underline">
                    Tiếp tục mua sắm
                  </Link>
                </div>
              ) : (
                <>
                  {renderCartItems()}
                  <hr className="border-gray-300" />
                </>
              )}
            </>
          )}
        </div>
        <div className="bg-gray-100 rounded-md p-4 h-max">
          <h3 className="text-lg max-sm:text-base font-bold text-gray-800 border-b border-gray-300 pb-2">
            {" "}
            Hóa đơn{" "}
          </h3>
          <form className="mt-6">
            <div>
              <h3 className="text-base text-gray-800 font-semibold mb-4">
                {" "}
                Thông tin{" "}
              </h3>
              <div className="space-y-3">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b focus:border-gray-800 outline-none"
                  />
                </div>
                <div className="relative flex items-center">
                  <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b focus:border-gray-800 outline-none"
                  />
                </div>
                <div className="relative flex items-center">
                  <input
                    type="number"
                    placeholder="Phone No."
                    className="px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b focus:border-gray-800 outline-none"
                  />
                </div>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="Address"
                    className="px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b focus:border-gray-800 outline-none"
                  />
                </div>
              </div>
            </div>
          </form>
          <ul className="text-gray-800 mt-6 space-y-3">
            <li className="flex flex-wrap gap-4 text-sm">
              Phí giao hàng <span className="ml-auto font-bold">0đ</span>
            </li>
            <li className="flex flex-wrap gap-4 text-sm">
              Tổng
              <span className="ml-auto font-bold">
                {formatCurrency(totalAmount)}
              </span>
            </li>
          </ul>
          <button
            type="button"
            className="mt-6 w-full py-2 bg-blue-600 text-white rounded-md"
          >
            Đặt Hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

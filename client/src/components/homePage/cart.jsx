import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form"; // Import useForm từ react-hook-form
import {
  fetchCart,
  updateQuantity,
  removeItem,
  clearCart,
} from "../../redux/cartSlice";
import { createOrder } from "../../redux/orderSlice";
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  const handleCheckout = (formData) => {
    const orderData = {
      items: items.map((item) => ({
        productId: item.product.id,
        quantity: item.quantity,
        price: item.product.price,
      })),
      totalAmount: items.reduce(
        (total, item) => total + item.quantity * (item.product?.price || 0),
        0
      ),
      customerInfo: formData,
    };

    dispatch(createOrder(orderData))
      .unwrap()
      .then(() => {
        setNotification("Đơn hàng đã được đặt thành công!");
        dispatch(clearCart());
      })
      .catch(() => {
        setNotification("Có lỗi xảy ra khi đặt hàng.");
      });
  };

  const renderCartItems = () =>
    items.map((item) => (
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
              {item.product?.name}
            </h3>
            <p className="text-xs font-semibold text-gray-500 mt-0.5">
              {formatCurrency(item.product?.price)}
            </p>
            <button
              type="button"
              className="mt-6 font-semibold text-red-500 text-xs flex items-center gap-1"
              onClick={() => handleRemove(item.productId)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 fill-current"
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
            {formatCurrency(item.quantity * (item.product?.price || 0))}
          </h4>
          <div className="mt-6 flex items-center gap-1">
            <button
              type="button"
              className="px-2 py-1 border border-gray-300 text-gray-800 text-xs bg-transparent rounded-md"
              onClick={() =>
                handleDecrease(item.id, item.product.id, item.quantity)
              }
            >
              -
            </button>
            <span className="mx-3 font-bold">{item.quantity}</span>
            <button
              type="button"
              className="px-2 py-1 border border-gray-300 text-gray-800 text-xs bg-transparent rounded-md"
              onClick={() =>
                handleIncrease(item.id, item.product.id, item.quantity)
              }
            >
              +
            </button>
          </div>
        </div>
      </div>
    ));

  const totalAmount = items.reduce(
    (total, item) => total + item.quantity * (item.product?.price || 0),
    0
  );

  return (
    <div className="font-sans max-w-5xl mx-auto bg-white py-4">
      <h1 className="text-3xl font-bold text-gray-800">Giỏ hàng</h1>
      {notification && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4"
          role="alert"
        >
          <strong className="font-bold">Thông báo! </strong>
          <span>{notification}</span>
        </div>
      )}
      <div className="grid md:grid-cols-3 gap-8 my-16">
        <div className="md:col-span-2 space-y-4">
          {status === "loading" && <div>Loading...</div>}
          {status === "failed" && <div>Error: {error}</div>}
          {status === "succeeded" &&
            (items.length === 0 ? (
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
            ))}
        </div>
        {items.length > 0 && (
          <div className="space-y-6 bg-gray-100 p-4 rounded-md">
            <h3 className="text-lg font-bold text-gray-800">Hóa đơn</h3>
            <form className="space-y-3" onSubmit={handleSubmit(handleCheckout)}>
              <input
                type="text"
                name="fullName"
                placeholder="Họ và tên"
                className="px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b focus:border-gray-800 outline-none"
                {...register("fullName", { required: "Họ và tên là bắt buộc" })}
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs">
                  {errors.fullName.message}
                </p>
              )}

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b focus:border-gray-800 outline-none"
                {...register("email", {
                  required: "Email là bắt buộc",
                  pattern: {
                    value: /^[^@]+@[^@]+\.[^@]+$/,
                    message: "Email không hợp lệ",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}

              <input
                type="text"
                name="phone"
                placeholder="Số điện thoại"
                className="px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b focus:border-gray-800 outline-none"
                {...register("phone", {
                  required: "Số điện thoại là bắt buộc",
                  minLength: 10,
                })}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs">{errors.phone.message}</p>
              )}
              {errors.phone?.type === "minLength" && (
                <p className="text-red-500 text-xs">Số điện thoại phải hợp lệ</p>
              )}

              <input
                type="text"
                name="address"
                placeholder="Địa chỉ"
                className="px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-b focus:border-gray-800 outline-none"
                {...register("address", { required: "Địa chỉ là bắt buộc" })}
              />
              {errors.address && (
                <p className="text-red-500 text-xs">{errors.address.message}</p>
              )}
              <div className="flex justify-between mt-4">
                <span className="font-bold text-gray-800">Tổng cộng</span>
                <span className="font-bold text-gray-800">
                  {formatCurrency(totalAmount)}
                </span>
              </div>

              <button
                type="submit"
                className="mt-6 w-full bg-green-600 text-white font-semibold py-2 rounded-md"
              >
                Đặt hàng
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

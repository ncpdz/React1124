import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/productSlice";
import { addToCart } from "../../redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductDetail() {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const token = useSelector((state) => state.user.token);
  const cartError = useSelector((state) => state.cart.error);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const product = products.find((product) => product.id === Number(id));

  const handleAddToCart = () => {
    if (!token) {
      navigate("/login");
    } else {
      dispatch(addToCart({ token, productId: product.id, quantity }))
        .unwrap()
        .then(() => {
          toast.success("Sản phẩm đã được thêm vào giỏ hàng!");
        })
        .catch((error) => {
          console.error("Failed to add product to cart:", error);
          toast.error("Thêm sản phẩm vào giỏ hàng thất bại.");
        });
    }
  };

  if (!product) {
    return <div>Sản phẩm không tồn tại.</div>;
  }

  const handleQuantityChange = (value) => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + value;
      return newQuantity < 1 ? 1 : newQuantity;
    });
  };

  const handleInputChange = (event) => {
    const newValue = Number(event.target.value);
    if (!isNaN(newValue) && newValue >= 1) {
      setQuantity(newValue);
    }
  };

  return (
    <div className="font-sans my-10">
      <div className="p-4 lg:max-w-5xl max-w-lg mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-6 max-lg:gap-12">
          <div className="w-full top-0 sm:flex gap-2">
            <img
              src={product.image}
              alt="Product"
              className="w-4/5 rounded-md object-cover"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <p className="text-gray-800 text-xl font-bold">
                {formatCurrency(product.price)}
              </p>
            </div>
            <div className="flex space-x-2 mt-4">
              {[1, 2, 3, 4].map((i) => (
                <svg
                  key={i}
                  className={`w-5 ${
                    i <= 4 ? "fill-blue-600" : "fill-[#CED5D8]"
                  }`}
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              ))}
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800">Số lượng:</h3>
              <div className="flex items-center gap-0 mt-4">
                <button
                  type="button"
                  onClick={() => handleQuantityChange(-1)}
                  className="h-10 px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-l-md font-medium"
                >
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  onChange={handleInputChange}
                  className="h-10 border-t border-b w-14 p-2 text-center font-semibold"
                  min="1"
                />
                <button
                  type="button"
                  onClick={() => handleQuantityChange(1)}
                  className="h-10 px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-r-md font-medium"
                >
                  +
                </button>
              </div>
            </div>
            <button
              type="button"
              className="w-full mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold rounded-md"
              onClick={handleAddToCart}
            >
              Thêm vào giỏ hàng
            </button>
            {cartError && <div className="mt-4 text-red-600">{cartError}</div>}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800">Mô tả:</h3>
              <p>{product.description}</p>
            </div>
            <div className="mt-8"></div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ProductDetail;

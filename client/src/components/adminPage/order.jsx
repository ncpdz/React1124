import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchOrders,
  fetchProductDetails,
  fetchUserDetails,
  updateOrder,
} from "../../redux/orderSlice";

function Order() {
  const [selectedOrder, setSelectedOrder] = useState(null); // For modal visibility and selected order
  const dispatch = useDispatch();
  const { orders, status, error } = useSelector((state) => state.order);
  const [userDetails, setUserDetails] = useState({});
  const [productDetails, setProductDetails] = useState({});

  // Fetch orders on initial render
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchOrders());
    }
  }, [dispatch, status]);

  // Fetch user and product details as needed
  useEffect(() => {
    async function fetchData() {
      for (const order of orders) {
        if (!userDetails[order.userId]) {
          try {
            const user = await dispatch(
              fetchUserDetails(order.userId)
            ).unwrap();
            setUserDetails((prev) => ({ ...prev, [order.userId]: user }));
          } catch {
            console.error(
              `Failed to fetch user details for userId: ${order.userId}`
            );
          }
        }
        for (const item of order.items) {
          if (!productDetails[item.productId]) {
            try {
              const product = await dispatch(
                fetchProductDetails(item.productId)
              ).unwrap();
              setProductDetails((prev) => ({
                ...prev,
                [item.productId]: product,
              }));
            } catch {
              console.error(
                `Failed to fetch product details for productId: ${item.productId}`
              );
            }
          }
        }
      }
    }
    if (orders.length) {
      fetchData();
    }
  }, [orders, dispatch, userDetails, productDetails]);

  const statusOptions = [
    { value: 1, label: "Đang xử lý" },
    { value: 2, label: "Đã hủy" },
    { value: 3, label: "Đang giao hàng" },
    { value: 4, label: "Đã nhận hàng" },
  ];

  const handleStatusChange = (id, newStatus) => {
    const order = orders.find((order) => order.id === id);
    if (order && newStatus > order.status) {
      dispatch(updateOrder({ id, status: newStatus }));
    } else {
      alert("Không thể chọn trạng thái nhỏ hơn trạng thái hiện tại");
    }
  };

  const handleShowDetails = (order) => {
    setSelectedOrder(order);
  };

  const handleCloseModal = () => {
    setSelectedOrder(null);
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

  return (
    <div className="overflow-x-auto font-[sans-serif] p-10 w-full">
      <h1 className="mb-10 text-[32px] font-bold">Quản lý đơn hàng</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}

      <table className="min-w-full bg-white">
        <thead className="bg-gray-100 whitespace-nowrap">
          <tr>
            <th className="p-4 text-left text-sm font-semibold text-black">
              Tên khách hàng
            </th>
            <th className="p-4 text-left text-sm font-semibold text-black">
              Đơn mua
            </th>
            <th className="p-4 text-left text-sm font-semibold text-black">
              Tình trạng
            </th>
            <th className="p-4 text-left text-sm font-semibold text-black">
              Xem chi tiết
            </th>
            {/* <th className="p-4 text-left text-sm font-semibold text-black">
              Action
            </th> */}
          </tr>
        </thead>
        <tbody className="whitespace-nowrap divide-y divide-gray-200">
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="p-4 text-sm">
                <div className="flex items-center cursor-pointer">
                  <div className="mx-4">
                    <p className="text-sm text-black">
                      {userDetails[order.userId]?.username || "Đang tải..."}
                    </p>
                  </div>
                </div>
              </td>
              <td className="p-4 text-sm">{order.items.length} sản phẩm</td>
              <td className="p-4 text-sm">
                <select
                  value={order.status}
                  onChange={(e) =>
                    handleStatusChange(order.id, parseInt(e.target.value))
                  }
                >
                  {statusOptions.map(
                    (option) =>
                      option.value >= order.status && (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      )
                  )}
                </select>
              </td>
              <td className="p-4 text-sm">
                <button
                  onClick={() => handleShowDetails(order)}
                  type="button"
                  className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-blue-700 outline-none bg-transparent hover:bg-blue-700 text-blue-700 hover:text-white transition-all duration-300"
                >
                  Xem chi tiết
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedOrder && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative bg-white rounded-lg shadow-xl max-w-lg w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-800">
                Chi tiết đơn hàng
              </h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700">
                  Tên khách hàng: {selectedOrder.customerInfo.fullName}
                </h4>

                <p>Số điện thoại: {selectedOrder.customerInfo.phone}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Sản phẩm:</h4>
                <table className="min-w-full bg-gray-50 rounded-lg">
                  <thead>
                    <tr className="text-sm font-medium text-gray-600 bg-gray-100">
                      <th className="p-2 text-left">Thông tin</th>
                      <th className="p-2 text-center">Số lượng</th>
                      <th className="p-2 text-right">Giá tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedOrder.items.map((item) => {
                      const product = productDetails[item.productId];
                      return (
                        <tr
                          key={item.productId}
                          className="text-sm text-gray-700 border-b"
                        >
                          <td className="p-2 flex items-center space-x-3">
                            <img
                              src={product?.image}
                              alt=""
                              className="w-12 h-12 rounded-md object-cover"
                            />
                            <span>{product?.name || "Đang tải..."}</span>
                          </td>
                          <td className="p-2 text-center">{item.quantity}</td>
                          <td className="p-2 text-right">
                            {product?.price
                              ? `${formatCurrency(
                                  product.price.toLocaleString()
                                )}`
                              : "Đang tải..."}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Tổng tiền:</h4>
                <p className="text-gray-600 font-medium text-red-600 font-semibold">
                  {formatCurrency(selectedOrder.totalAmount.toLocaleString())}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700">Địa chỉ:</h4>
                <p className="text-gray-600">
                  {selectedOrder.customerInfo.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Order;

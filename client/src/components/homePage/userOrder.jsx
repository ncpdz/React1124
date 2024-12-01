import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserOrders, updateOrder } from "../../redux/orderSlice";
import useAuth from "../../redux/useAuth"; // Import hook useAuth

function UserOrders() {
  const dispatch = useDispatch();
  const { orders, status, error } = useSelector((state) => state.order);
  const { user, logout } = useAuth(); // Sử dụng hook useAuth để lấy thông tin người dùng và hàm logout

  useEffect(() => {
    if (status === "idle" && user) {
      dispatch(fetchUserOrders());
    }
  }, [dispatch, status, user]);

  useEffect(() => {
    console.log('User orders:', orders); // Thêm log để kiểm tra dữ liệu trong component
  }, [orders]);

  const handleCancelOrder = (id) => {
    dispatch(updateOrder({ id, status: 2 })); // Đặt trạng thái thành "Đã hủy"
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(value);
  };

  return (
    <div className="p-10 w-full">
      <h1 className="mb-10 text-[32px] font-bold">Đơn hàng của tôi</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && (
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left text-sm font-semibold text-black">
                Mã đơn hàng
              </th>
              <th className="p-4 text-left text-sm font-semibold text-black">
                Sản phẩm
              </th>
              <th className="p-4 text-left text-sm font-semibold text-black">
                Tổng tiền
              </th>
              <th className="p-4 text-left text-sm font-semibold text-black">
                Trạng thái
              </th>
              <th className="p-4 text-left text-sm font-semibold text-black">
                Hủy đơn hàng
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="p-4 text-sm">{order.id}</td>
                <td className="p-4 text-sm">{order.items.length} sản phẩm</td>
                <td className="p-4 text-sm">{formatCurrency(order.totalAmount)}</td>
                <td className="p-4 text-sm">
                  {order.status === 1 && "Đang xử lý"}
                  {order.status === 2 && "Đã hủy"}
                  {order.status === 3 && "Đang giao hàng"}
                  {order.status === 4 && "Đã nhận hàng"}
                </td>
                <td className="p-4 text-sm">
                  {order.status === 1 ? (
                    <button
                      onClick={() => handleCancelOrder(order.id)}
                      className="px-5 py-2.5 rounded-lg text-sm font-medium border border-red-700 bg-transparent hover:bg-red-700 text-red-700 hover:text-white transition-all duration-300"
                    >
                      Hủy
                    </button>
                  ) : (
                    <button
                      disabled
                      className="px-5 py-2.5 rounded-lg text-sm font-medium border border-gray-300 bg-gray-300 text-gray-500 cursor-not-allowed"
                    >
                      Hủy
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UserOrders;

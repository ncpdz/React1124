import React from "react";
import { useDispatch } from "react-redux";
import { updateOrder } from "../../redux/orderSlice";

const OrderStatus = ({ order }) => {
  const dispatch = useDispatch();

  // Trạng thái và nhãn tương ứng
  const statusOptions = [
    { value: 1, label: "Đang xử lý" },
    { value: 2, label: "Đã hủy" },
    { value: 3, label: "Đang giao hàng" },
    { value: 4, label: "Đã nhận hàng" },
  ];

  // Lọc trạng thái khả dụng dựa trên trạng thái hiện tại
  const availableOptions = statusOptions.filter(
    (option) => option.value >= order.status
  );

  const handleStatusChange = (e) => {
    const newStatus = parseInt(e.target.value, 10);

    // Gửi yêu cầu cập nhật trạng thái
    dispatch(updateOrder({ id: order.id, status: newStatus }));
  };

  return (
    <select
      value={order.status}
      onChange={handleStatusChange}
      className="border border-gray-300 rounded p-2"
    >
      {availableOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default OrderStatus;

// components/UserOrders.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../../redux/orderSlice';

const UserOrders = () => {
  const dispatch = useDispatch();
  const { orders, status, error } = useSelector(state => state.order);
  const { user } = useSelector(state => state.user);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchOrders());
    }
  }, [dispatch, status]);

  const userOrders = orders.filter(order => order.userId === user.id);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Lịch sử đơn hàng của bạn</h2>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {userOrders.map(order => (
        <div key={order.id} className="border p-4 mb-4">
          <h3>Order ID: {order.id}</h3>
          <p>Trạng thái: {order.status}</p>
          <p>Tổng số tiền: {order.totalAmount}</p>
          <div>
            <h4>Items:</h4>
            <ul>
              {order.items.map((item, index) => (
                <li key={index}>
                  {item.productId}: {item.quantity} x {item.price}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserOrders;

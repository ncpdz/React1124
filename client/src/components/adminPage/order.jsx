// import { useState } from "react";

// function Order() {
// const [isModalVisible, setModalVisible] = useState(false);
// return (
//   <div className="overflow-x-auto font-[sans-serif] p-10 w-full">
//     <h1 className="mb-10 text-[32px] font-bold">Quản lý đơn hàng</h1>
//     {isModalVisible && (
//       <div class="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
//         <div class="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 relative">
//           <div class="flex items-center">
//             <h3 class="text-blue-600 text-xl font-bold flex-1">Đơn hàng</h3>

//             <svg
//               onClick={() => setModalVisible(false)}
//               xmlns="http://www.w3.org/2000/svg"
//               class="w-3 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
//               viewBox="0 0 320.591 320.591"
//             >
//               <path
//                 d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
//                 data-original="#000000"
//               ></path>
//               <path
//                 d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
//                 data-original="#000000"
//               ></path>
//             </svg>
//           </div>
//           <div class="mt-4">
//             <h1 class="mb-3">
//               Tên khách hàng: <b>Nguyễn Công Phi</b>
//             </h1>
//             <div class="mb-3">
//               <h2>Sản phẩm:</h2>
//               <div class="font-sans overflow-x-auto">
//                 <table class="min-w-full bg-white">
//                   <thead class="bg-gray-100 whitespace-nowrap">
//                     <tr>
//                       <th class="p-4 text-left text-xs font-semibold text-gray-800">
//                         Thông tin
//                       </th>
//                       <th class="p-4 text-left text-xs font-semibold text-gray-800">
//                         Số lượng
//                       </th>
//                       <th class="p-4 text-left text-xs font-semibold text-gray-800">
//                         Giá tiền
//                       </th>
//                     </tr>
//                   </thead>

//                   <tbody class="whitespace-nowrap">
//                     <tr class="hover:bg-gray-50">
//                       <td class="p-4 text-[15px] text-gray-800 flex items-center gap-2">
//                         <img
//                           src="https://media-fmplus.cdn.vccloud.vn/el-finder-file-system/thumb/v1_L3Byb2R1Y3RzLzIzMTBQVEFSODg4MDYwMS83MjQ5NzQ5MS1jYmZmLTQzNmMtYmIxZS1mM2EyYjZlNzRiMTFfOUExMDcyMDZDNDQxQTI1QUVFMjVCNDY4MDZBRTJGRTIuanBn0"
//                           alt=""
//                           width="40px"
//                           height="40px"
//                         />
//                         Áo Polo Regular Nam
//                       </td>
//                       <td class="p-4 text-[15px] text-gray-800 text-center">
//                         1
//                       </td>
//                       <td class="p-4 text-[15px] text-gray-800 text-center">
//                         289K
//                       </td>
//                     </tr>
//                     <tr class="hover:bg-gray-50">
//                       <td class="p-4 text-[15px] text-gray-800 flex items-center gap-2">
//                         <img
//                           src="https://media-fmplus.cdn.vccloud.vn/el-finder-file-system/thumb/v1_L3Byb2R1Y3RzLzIzMDlTS0FHMjk3MTgwMS81NWJkNmM0Ni00M2U1LTRjMDQtOGE5MC1mZmIyM2U3YWYzMWZfOENCRjZGQTUzMDBEM0I3MkYyQjZGRjk5MzIyMEY5MDUuanBn0"
//                           alt=""
//                           width="40px"
//                           height="40px"
//                         />
//                         Quần Short Kaki
//                       </td>
//                       <td class="p-4 text-[15px] text-gray-800 text-center">
//                         1
//                       </td>
//                       <td class="p-4 text-[15px] text-gray-800 text-center">
//                         295K
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//               <h1 class="mb-3">
//                 Tổng tiền: <b>584K</b>
//               </h1>
//               <h1 class="mb-3">
//                 Địa chỉ: <b>Hòa Xuân, Cẩm Lệ, Đà Nẵng</b>
//               </h1>
//             </div>
//           </div>
//         </div>
//       </div>
//     )}
//     <table className="min-w-full bg-white">
//       <thead className="bg-gray-100 whitespace-nowrap">
//         <tr>
//           <th className="p-4 text-left text-sm font-semibold text-black">
//             Tên khách hàng
//           </th>
//           <th className="p-4 text-left text-sm font-semibold text-black">
//             Đơn mua
//           </th>
//           <th className="p-4 text-left text-sm font-semibold text-black">
//             Tình trạng
//           </th>
//           <th className="p-4 text-left text-sm font-semibold text-black">
//             Xem chi tiết
//           </th>
//           <th className="p-4 text-left text-sm font-semibold text-black">
//             Action
//           </th>
//         </tr>
//       </thead>
//       <tbody className="whitespace-nowrap divide-y divide-gray-200">
//         <tr>
//           <td className="p-4 text-sm">
//             <div className="flex items-center cursor-pointer">
//               <div className="mx-4">
//                 <p className="text-sm text-black">Nguyễn Công Phi</p>
//               </div>
//             </div>
//           </td>
//           <td className="p-4 text-sm">2 sản phẩm</td>
//           <td className="p-4 text-sm">Đang giao hàng</td>
//           <td className="p-4 text-sm">
//             <button
//               onClick={() => setModalVisible(true)}
//               type="button"
//               className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-blue-700 outline-none bg-transparent hover:bg-blue-700 text-blue-700 hover:text-white transition-all duration-300"
//             >
//               Xem chi tiết
//             </button>
//           </td>
//           <td className="p-4 text-sm">
//             <button className="mr-4" title="Edit">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-5 fill-blue-500 hover:fill-blue-700"
//                 viewBox="0 0 348.882 348.882"
//               >
//                 <path
//                   d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
//                   data-original="#000000"
//                 />
//                 <path
//                   d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
//                   data-original="#000000"
//                 />
//               </svg>
//             </button>
//             <button title="Delete">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-5 fill-red-500 hover:fill-red-700"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
//                   data-original="#000000"
//                 />
//                 <path
//                   d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
//                   data-original="#000000"
//                 />
//               </svg>
//             </button>
//           </td>
//         </tr>
//         <tr>
//           <td className="p-4 text-sm">
//             <div className="flex items-center cursor-pointer">
//               <div className="mx-4">
//                 <p className="text-sm text-black">Nguyễn Công Phi</p>
//               </div>
//             </div>
//           </td>
//           <td className="p-4 text-sm">2 sản phẩm</td>
//           <td className="p-4 text-sm">Đang giao hàng</td>
//           <td className="p-4 text-sm">
//             <button
//               type="button"
//               class="px-5 py-2.5 rounded-lg text-sm tracking-wider
//             font-medium border border-blue-700 outline-none bg-transparent
//             hover:bg-blue-700 text-blue-700 hover:text-white transition-all
//             duration-300"
//             >
//               Xem chi tiết
//             </button>
//           </td>
//           <td className="p-4 text-sm">
//             <button className="mr-4" title="Edit">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-5 fill-blue-500 hover:fill-blue-700"
//                 viewBox="0 0 348.882 348.882"
//               >
//                 <path
//                   d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
//                   data-original="#000000"
//                 />
//                 <path
//                   d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
//                   data-original="#000000"
//                 />
//               </svg>
//             </button>
//             <button title="Delete">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-5 fill-red-500 hover:fill-red-700"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
//                   data-original="#000000"
//                 />
//                 <path
//                   d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
//                   data-original="#000000"
//                 />
//               </svg>
//             </button>
//           </td>
//         </tr>
//         <tr>
//           <td className="p-4 text-sm">
//             <div className="flex items-center cursor-pointer">
//               <div className="mx-4">
//                 <p className="text-sm text-black">Nguyễn Công Phi</p>
//               </div>
//             </div>
//           </td>
//           <td className="p-4 text-sm">2 sản phẩm</td>
//           <td className="p-4 text-sm">Đang giao hàng</td>
//           <td className="p-4 text-sm">
//             <button
//               type="button"
//               className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-blue-700 outline-none bg-transparent hover:bg-blue-700 text-blue-700 hover:text-white transition-all duration-300"
//             >
//               Xem chi tiết
//             </button>
//           </td>
//           <td className="p-4 text-sm">
//             <button className="mr-4" title="Edit">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-5 fill-blue-500 hover:fill-blue-700"
//                 viewBox="0 0 348.882 348.882"
//               >
//                 <path
//                   d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
//                   data-original="#000000"
//                 />
//                 <path
//                   d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
//                   data-original="#000000"
//                 />
//               </svg>
//             </button>
//             <button title="Delete">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="w-5 fill-red-500 hover:fill-red-700"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
//                   data-original="#000000"
//                 />
//                 <path
//                   d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
//                   data-original="#000000"
//                 />
//               </svg>
//             </button>
//           </td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
// );
// }

// export default Order;

// components/adminPage/AdminOrders.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchOrders,
  fetchProductDetails,
  fetchUserDetails,
  updateOrder,
} from "../../redux/orderSlice";

const Order = () => {
  const dispatch = useDispatch();
  const { orders, status, error } = useSelector((state) => state.order);
  const [userDetails, setUserDetails] = useState({});
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchOrders());
    }
  }, [dispatch, status]);

  useEffect(() => {
    // Lấy thông tin người dùng cho mỗi đơn hàng
    orders.forEach(async (order) => {
      if (!userDetails[order.userId]) {
        const user = await dispatch(fetchUserDetails(order.userId)).unwrap();
        setUserDetails((prev) => ({ ...prev, [order.userId]: user }));
      }
      // Lấy thông tin sản phẩm cho mỗi đơn hàng
      order.items.forEach(async (item) => {
        if (!productDetails[item.productId]) {
          const product = await dispatch(
            fetchProductDetails(item.productId)
          ).unwrap();
          setProductDetails((prev) => ({ ...prev, [item.productId]: product }));
        }
      });
    });
  }, [orders, dispatch, userDetails, productDetails]);

  const handleChangeStatus = (id, newStatus) => {
    dispatch(updateOrder({ id, status: newStatus }));
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Quản lý đơn hàng</h2>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="w-full border-b border-gray-300 bg-gray-200">
            <th className="p-4 text-left">ID</th>
            <th className="p-4 text-left">Người dùng</th>
            <th className="p-4 text-left">Items</th>
            <th className="p-4 text-left">Tổng số tiền</th>
            <th className="p-4 text-left">Trạng thái</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b border-gray-200">
              <td className="p-4">{order.id}</td>
              <td className="p-4">
                {userDetails[order.userId]
                  ? userDetails[order.userId].username
                  : "Đang tải..."}
              </td>
              <td className="p-4">
                {order.items.map((item) => {
                  const product = productDetails[item.productId];
                  return product ? (
                    <div key={item.productId} className="mb-2">
                      <img src={product.image} alt="" className="w-[60px]" />
                      <p>
                        <strong>{product.name}</strong> - Số lượng:{" "}
                        {item.quantity} - Giá: {product.price}₫
                      </p>
                    </div>
                  ) : (
                    <p key={item.productId}>Đang tải...</p>
                  );
                })}
                {order.customerInfo.email}
              </td>
              <td className="p-4">{order.totalAmount}</td>
              <td className="p-4">{order.status}</td>
              <td className="p-4 flex gap-2">
                <button
                  onClick={() => handleChangeStatus(order.id, "completed")}
                  className="py-1 px-3 bg-green-500 text-white rounded-md"
                >
                  Hoàn thành
                </button>
                <button
                  onClick={() => handleChangeStatus(order.id, "cancelled")}
                  className="py-1 px-3 bg-red-500 text-white rounded-md"
                >
                  Hủy
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;

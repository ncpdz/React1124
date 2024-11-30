import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, updateUser, deleteUser } from "../../redux/userSlice";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./category.css";
const UserManagement = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.items);
  const { register, handleSubmit, setValue, reset } = useForm();
  const [editingUser, setEditingUser] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  const onSubmit = (data) => {
    if (editingUser) {
      dispatch(updateUser({ id: editingUser.id, userData: data }))
        .unwrap()
        .then(() => {
          toast.success("Cập nhật người dùng thành công!");
          reset();
          setEditingUser(null);
          setIsEditModalOpen(false);
        })
        .catch(() => {
          toast.error("Cập nhật người dùng thất bại!");
        });
    }
  };
  const onEdit = (user) => {
    setValue("username", user.username);
    setValue("email", user.email);
    setValue("password", user.password);
    setValue("isActive", user.isActive);
    setValue("role", user.role);
    setEditingUser(user);
    setIsEditModalOpen(true);
  };
  const onDelete = (id) => {
    dispatch(deleteUser(id))
      .unwrap()
      .then(() => {
        toast.success("Xóa người dùng thành công!");
      })
      .catch(() => {
        toast.error("Xóa người dùng thất bại!");
      });
  };
  const closeModal = () => {
    setIsEditModalOpen(false);
    setEditingUser(null);
    reset();
  };
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Quản lý người dùng
      </h2>
      {isEditModalOpen && (
        <div className="modal fixed z-50 inset-0 overflow-y-auto flex items-center justify-center">
          <div className="modal-content bg-white p-6 rounded shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
            <h3 className="text-xl font-bold mb-4">Sửa người dùng</h3>
            <form className="w-[450px]" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Tên người dùng
                </label>
                <input
                  {...register("username", { required: true })}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Tên người dùng"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  {...register("email", { required: true })}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Mật khẩu
                </label>
                <input
                  {...register("password")}
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Mật khẩu mới"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Trạng thái
                </label>
                <select
                  {...register("isActive")}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value={true}>Hoạt động</option>
                  <option value={false}>Không hoạt động</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Vai trò
                </label>
                <select
                  {...register("role")}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="user">Người dùng</option>
                  <option value="admin">Quản trị viên</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
              >
                Cập nhật
              </button>
            </form>
          </div>
        </div>
      )}
      <h3 className="text-xl font-bold mb-2 text-center">
        Danh sách người dùng
      </h3>
      <table className="w-[90%] bg-white border mx-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 border-b border-l">Tên người dùng</th>
            <th className="py-2 border-b border-l">Email</th>
            <th className="py-2 border-b border-l">Vai trò</th>
            <th className="py-2 border-b border-l">Trạng thái</th>
            <th className="py-2 border-b border-l">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="py-2 border-b border-l text-center">
                {user.username}
              </td>
              <td className="py-2 border-b border-l text-center">
                {user.email}
              </td>
              <td className="py-2 border-b border-l text-center">
                {user.role}
              </td>
              <td className="py-2 border-b border-l text-center">
                {user.isActive ? "Hoạt động" : "Không hoạt động"}
              </td>
              <td className="py-2 border-b border-l text-center">
                <button
                  onClick={() => onEdit(user)}
                  className="text-white px-3 py-1 rounded mr-2 hover:bg-yellow-300 transition duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 fill-blue-500 hover:fill-blue-700"
                    viewBox="0 0 348.882 348.882"
                  >
                    <path
                      d="m333.988 11.758-.42-.383A43.363 43.363 0 0 0 304.258 0a43.579 43.579 0 0 0-32.104 14.153L116.803 184.231a14.993 14.993 0 0 0-3.154 5.37l-18.267 54.762c-2.112 6.331-1.052 13.333 2.835 18.729 3.918 5.438 10.23 8.685 16.886 8.685h.001c2.879 0 5.693-.592 8.362-1.76l52.89-23.138a14.985 14.985 0 0 0 5.063-3.626L336.771 73.176c16.166-17.697 14.919-45.247-2.783-61.418zM130.381 234.247l10.719-32.134.904-.99 20.316 18.556-.904.99-31.035 13.578zm184.24-181.304L182.553 197.53l-20.316-18.556L294.305 34.386c2.583-2.828 6.118-4.386 9.954-4.386 3.365 0 6.588 1.252 9.082 3.53l.419.383c5.484 5.009 5.87 13.546.861 19.03z"
                      data-original="#000000"
                    />
                    <path
                      d="M303.85 138.388c-8.284 0-15 6.716-15 15v127.347c0 21.034-17.113 38.147-38.147 38.147H68.904c-21.035 0-38.147-17.113-38.147-38.147V100.413c0-21.034 17.113-38.147 38.147-38.147h131.587c8.284 0 15-6.716 15-15s-6.716-15-15-15H68.904C31.327 32.266.757 62.837.757 100.413v180.321c0 37.576 30.571 68.147 68.147 68.147h181.798c37.576 0 68.147-30.571 68.147-68.147V153.388c.001-8.284-6.715-15-14.999-15z"
                      data-original="#000000"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => onDelete(user.id)}
                  className="text-white px-3 py-1 rounded hover:bg-red-300 transition duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 fill-red-500 hover:fill-red-700"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
                      data-original="#000000"
                    />
                    <path
                      d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
                      data-original="#000000"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};

export default UserManagement;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../../redux/categorySlice";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./category.css";

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.items);
  const { register, handleSubmit, setValue, reset } = useForm();
  const [editingCategory, setEditingCategory] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const onSubmit = (data) => {
    if (editingCategory) {
      dispatch(updateCategory({ id: editingCategory.id, category: data }))
        .unwrap()
        .then(() => {
          toast.success("Cập nhật loại hàng thành công!");
          reset();
          setEditingCategory(null);
          setIsEditModalOpen(false);
        })
        .catch(() => {
          toast.error("Cập nhật loại hàng thất bại!");
        });
    } else {
      dispatch(createCategory(data))
        .unwrap()
        .then(() => {
          toast.success("Thêm loại hàng thành công!");
          reset();
          setIsAddModalOpen(false);
        })
        .catch(() => {
          toast.error("Thêm loại hàng thất bại!");
        });
    }
  };

  const onEdit = (category) => {
    setValue("name", category.name);
    setValue("description", category.description);
    setEditingCategory(category);
    setIsEditModalOpen(true);
  };

  const onDelete = (id) => {
    dispatch(deleteCategory(id))
      .unwrap()
      .then(() => {
        toast.success("Xóa loại hàng thành công!");
      })
      .catch(() => {
        toast.error("Xóa loại hàng thất bại!");
      });
  };

  const closeModal = () => {
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
    setEditingCategory(null); 
    reset();
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Quản lý phân loại</h2>
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setIsAddModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Thêm loại hàng
        </button>
      </div>

      {isAddModalOpen && (
        <div className="modal fixed z-50 inset-0 overflow-y-auto flex items-center justify-center">
          <div className="modal-content bg-white p-6 rounded shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
            <h3 className="text-xl font-bold mb-4">Thêm loại hàng</h3>
            <form className="w-[500px]" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Tên loại hàng
                </label>
                <input
                  {...register("name", { required: true })}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Tên loại hàng"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Mô tả
                </label>
                <textarea
                  {...register("description")}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Mô tả"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
              >
                Thêm
              </button>
            </form>
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <div className="modal fixed z-50 inset-0 overflow-y-auto flex items-center justify-center">
          <div className="modal-content bg-white p-6 rounded shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
            <h3 className="text-xl font-bold mb-4">Sửa loại hàng</h3>
            <form className="w-[500px]" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Tên loại hàng
                </label>
                <input
                  {...register("name", { required: true })}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Tên loại hàng"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Mô tả
                </label>
                <textarea
                  {...register("description")}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Mô tả"
                />
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
        Danh sách loại hàng
      </h3>
      <table className="w-[90%] bg-white border mx-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 border-b border-l">Tên loại hàng</th>
            <th className="py-2 border-b border-l">Mô tả</th>
            <th className="py-2 border-b border-l">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id} className="hover:bg-gray-100">
              <td className="py-2 border-b border-l text-center">
                {category.name}
              </td>
              <td className="py-2 border-b border-l text-center">
                {category.description}
              </td>
              <td className="py-2 border-b border-l text-center">
                <button
                  onClick={() => onEdit(category)}
                  className=" text-white px-3 py-1 rounded mr-2 hover:bg-yellow-300 transition duration-200"
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
                  onClick={() => onDelete(category.id)}
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

export default Categories;

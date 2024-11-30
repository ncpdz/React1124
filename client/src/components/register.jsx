import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/userSlice"; 

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerUser = (data) => {
    dispatch(createUser(data))
      .unwrap()
      .then(() => {
        toast.success("Đăng ký tài khoản thành công!");
        navigate("/login"); 
      })
      .catch(() => {
        toast.error("Đăng ký thất bại! Vui lòng thử lại.");
      });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Đăng ký tài khoản
        </h2>
        <form onSubmit={handleSubmit(registerUser)}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              placeholder="Nhập email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500 text-xs mt-1">Email là bắt buộc.</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Tên tài khoản
            </label>
            <input
              {...register("username", { required: true })}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="Nhập tên tài khoản"
            />
            {errors.username?.type === "required" && (
              <p className="text-red-500 text-xs mt-1">Tên tài khoản là bắt buộc.</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Mật khẩu
            </label>
            <input
              {...register("password", { required: true, minLength: 6 })}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="password"
              placeholder="Nhập mật khẩu"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500 text-xs mt-1">Mật khẩu là bắt buộc.</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500 text-xs mt-1">
                Mật khẩu phải ít nhất 6 ký tự.
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Đăng ký
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-600 text-sm">
            Bạn đã có tài khoản?{" "}
            <a
              href="/login"
              className="text-blue-500 hover:underline font-medium"
            >
              Đăng nhập ngay
            </a>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Register;
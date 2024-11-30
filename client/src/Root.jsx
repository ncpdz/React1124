import "./App.css";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./layouts/header";
import Footer from "./layouts/footer";

export default function Root() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

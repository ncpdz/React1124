import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Root from "./Root.jsx";
import HomeUser from "./components/homePage/homeUser.jsx";
import Todos from "./components/todos.jsx";
import ProductDetail from "./components/homePage/product_detail.jsx";
import Login from "./components/login.jsx";
import UserManagement from "./components/adminPage/admin_user.jsx";
import Categories from "./components/adminPage/category.jsx";
import ProductManagement from "./components/adminPage/product.jsx";
import Order from "./components/adminPage/order.jsx";
import Store from "./components/homePage/store.jsx";
import Checkout from "./components/homePage/checkout.jsx";
import Cart from "./components/homePage/cart.jsx";
import Dashboard from "./components/adminPage/dashboard.jsx";
import store from "./redux/store.js";
import { Provider } from "react-redux";
import Register from "./components/register.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import UserOrders from "./components/homePage/userOrder.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <HomeUser /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "store", element: <Store /> },
      { path: "todos", element: <Todos /> },
      { path: "bill", element: <UserOrders /> },
      {
        path: "products/:id",
        element: <ProductDetail />,
      },
      
    ],
  },
  {
    path: "/admin",
    element: (
      <PrivateRoute>
        <App />
      </PrivateRoute>
    ),
    children: [
      { path: "", element: <Dashboard /> },
      { path: "users", element: <UserManagement /> },
      { path: "products", element: <ProductManagement /> },
      { path: "category", element: <Categories /> },
      { path: "order", element: <Order /> },
      { path: "todos", element: <Todos /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);

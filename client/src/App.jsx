import "./App.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./layouts/sidebar";
import { useEffect, useState } from "react";

export default function App() {
  let [count, setCount] = useState(0);
  let [text, setText] = useState("");
  useEffect(() => {
    console.log("Use Effect");
  }, [text]);

  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}

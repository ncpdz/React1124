import { useReducer } from "react";
import List from "./todos/list";
import FormAdd from "./todos/formAdd";
import TodoContext from "../contexts/todoContext";

function Todos() {

  return (
      <div className="todos w-full mx-10">
        <h1>Todo Management</h1>
        <FormAdd />
        <List />
      </div>
  );
}
export default Todos;
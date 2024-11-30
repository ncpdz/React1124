import { loadTodo } from "./todoSlice";
import axios from "axios";

function callAPITodo() {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://67403665d0b59228b7ef13a2.mockapi.io/todo"  //ncpdzai@gmail.com
      );
      dispatch(loadTodo(response.data));
      console.log(response);
    } catch (e) {
      dispatch(loadTodo(e.message));
    }
  };
}

export default callAPITodo;

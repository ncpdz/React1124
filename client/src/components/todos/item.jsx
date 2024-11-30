import { useDispatch } from "react-redux";
import { deleteTodo } from "../../redux/todoSlice";

function Item({ id, title }) {
  let dispatch = useDispatch();

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-4">{id}</td>
      <td className="px-6 py-4">{title}</td>
      <td className="px-6 py-4">
        <button
          onClick={() => {
            dispatch(deleteTodo(id));
          }}
          type="button"
          className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Delete
        </button>
        <button
          type="button"
          className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
        >
          Edit
        </button>
      </td>
    </tr>
  );
}

export default Item;

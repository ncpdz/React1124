import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    loadTodo: (state, action) => {
      state.value = action.payload;
    },
    addTodo: (state, action) => {
      state.value.push({ title: action.payload, id: new Date().getTime() });
    },
    deleteTodo: (state, action) => {
      state.value = state.value.filter(todo => todo.id !== action.payload);
    },
  },
});

export const reducer = todoSlice.reducer;
export const { addTodo, deleteTodo, loadTodo } = todoSlice.actions;

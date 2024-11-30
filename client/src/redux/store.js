import { configureStore } from "@reduxjs/toolkit";
import { reducer as todoReducer } from "./todoSlice";
import { todoApi } from "./createAPITodo";
import { setupListeners } from "@reduxjs/toolkit/query";
import userReducer from './userSlice';
import categoryReducer from './categorySlice';
import productReducer from './productSlice';

const store = configureStore({
  reducer: {
    // todos: todoReducer,
    [todoApi.reducerPath]: todoApi.reducer,
    user: userReducer, 
    categories: categoryReducer,
    products: productReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});

setupListeners(store.dispatch);

export default store;

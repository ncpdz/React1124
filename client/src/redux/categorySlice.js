import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async Thunks for API calls
export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await axios.get("http://localhost:3100/api/categories");
    return response.data;
  }
);

export const createCategory = createAsyncThunk(
  "categories/createCategory",
  async (category) => {
    const response = await axios.post(
      "http://localhost:3100/api/categories/create",
      category
    );
    return response.data;
  }
);

export const updateCategory = createAsyncThunk(
  "categories/updateCategory",
  async ({ id, category }) => {
    const response = await axios.put(
      `http://localhost:3100/api/categories/update/${id}`,
      category
    );
    return response.data;
  }
);

export const deleteCategory = createAsyncThunk(
  "categories/deleteCategory",
  async (id) => {
    await axios.delete(`http://localhost:3100/api/categories/delete/${id}`);
    return id;
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items[index] = action.payload;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      });
  },
});

export default categorySlice.reducer;

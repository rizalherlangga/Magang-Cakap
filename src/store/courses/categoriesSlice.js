import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axiosInstance from "@/lib/axios";

export const fetchCategoriesThunk = createAsyncThunk(
  "categories/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/categories");

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    list: [],
    selectedCategory: "",
    loading: false,
    error: null,
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategoriesThunk.fulfilled, (state, action) => {
        state.list = action.payload.data;
        state.loading = false;
        // console.log(action.payload);
      })
      .addCase(fetchCategoriesThunk.rejected, (state, action) => {
        state.error = action.payload || "Failed to fetch categories";
        state.loading = false;
      });
  },
});

export const { setSelectedCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;

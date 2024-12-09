import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  category: "",
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.list = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setCategories, setSelectedCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchFaqList } from "@/lib/api";

const initialState = {
  faq: [],
  loading: false,
  error: null,
};

export const fetchFaqThunk = createAsyncThunk(
  "categories/faq",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchFaqList({ tenant: "cakap" });
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch FAQ");
    }
  }
);

const faqSlice = createSlice({
  name: "faqList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFaqThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFaqThunk.fulfilled, (state, action) => {
        state.faq = action.payload.data.home;
        state.loading = false;
        console.log(state.faq);
      })
      .addCase(fetchFaqThunk.rejected, (state, action) => {
        state.error = action.payload || "Failed to fetch FAQ";
        state.loading = false;
      });
  },
});

export default faqSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPartnersList } from "@/lib/api";

const initialState = {
  courses: [],
  loading: false,
  error: null,
};

export const fetchPartnerCourseThunk = createAsyncThunk(
  "categories/fetchPartnerCourse",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchPartnersList({
        partnerType: "",
        showAll: false,
        limit: 6,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch categories");
    }
  }
);

const partnersListHomeSlice = createSlice({
  name: "partnersListHome",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPartnerCourseThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPartnerCourseThunk.fulfilled, (state, action) => {
        console.log("API Response:", action.payload);
        state.courses = action.payload.data.partner;
        state.loading = false;
      })
      .addCase(fetchPartnerCourseThunk.rejected, (state, action) => {
        state.error = action.payload || "Failed to fetch partners";
        state.loading = false;
      });
  },
});

export default partnersListHomeSlice.reducer;

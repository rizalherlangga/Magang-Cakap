import { fetchCourses } from "@/lib/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  page: 1,
  hasMore: true,
  orderBy: "",
  filter: { prakerjaFilter: false },
  loading: false,
  // highlightedCourses: [],
};
export const fetchCoursesThunk = createAsyncThunk(
  "courses/fetchCourses",
  async (args, { rejectWithValue }) => {
    try {
      const data = await fetchCourses(args);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch courses");
    }
  }
);

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.list = [...state.list, ...action.payload.course];
    },
    resetCourses(state) {
      state.list = [];
      state.page = 1;
      state.hasMore = true;
    },
    incrementPage(state) {
      state.page += 1;
    },
    setOrderBy: (state, action) => {
      state.orderBy = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = { ...state.filter, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoursesThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCoursesThunk.fulfilled, (state, action) => {
        console.log("API Response:", action.payload);
        state.list = [...state.list, ...action.payload.data.course];
        state.hasMore = action.payload.data.course.length > 0;
        state.loading = false;
      })
      .addCase(fetchCoursesThunk.rejected, (state, action) => {
        state.error = action.payload || "Failed to fetch courses";
        state.loading = false;
      });
  },
});

export const {
  setCourses,
  resetCourses,
  incrementPage,
  setOrderBy,
  setFilter,
} = coursesSlice.actions;
export default coursesSlice.reducer;

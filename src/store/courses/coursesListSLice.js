import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchCourses } from "@/lib/api";

const initialState = {
  list: [],
  page: 1,
  hasMore: true,
  loading: false,
  orderBy: "",
  filter: { prakerjaFilter: false },
  error: null,
  highlightedCourses: [],
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

export const fetchHighlightedCoursesThunk = createAsyncThunk(
  "courses/fetchHighlightedCourses",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchHighlightedCourses();
      return data;
    } catch (error) {
      return rejectWithValue(
        error.message || "Failed to fetch highlighted courses"
      );
    }
  }
);

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setOrderBy: (state, action) => {
      state.orderBy = action.payload;
    },
    resetCourses(state) {
      state.list = [];
      state.page = 1;
      state.hasMore = true;
      state.loading = false;
      state.error = null;
    },
    incrementPage(state) {
      state.page += 1;
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
      })
      .addCase(fetchHighlightedCoursesThunk.fulfilled, (state, action) => {
        state.highlightedCourses = action.payload.data;
      });
  },
});

export const { setOrderBy, resetCourses, incrementPage, setFilter } =
  coursesSlice.actions;
export default coursesSlice.reducer;

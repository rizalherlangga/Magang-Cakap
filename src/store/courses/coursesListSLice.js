import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "@/lib/axios";

const initialState = {
  list: [],
  page: 1,
  hasMore: true,
  loading: false,
  orderBy: "",
  filter: { prakerjaFilter: false },
  error: null,
};

export const fetchCoursesThunk = createAsyncThunk(
  "courses/fetchCourses",
  async (
    { page = 1, limit = 10, categoriesId, courseOrderBy },
    { rejectWithValue }
  ) => {
    const params = {
      page,
      limit,
      ...(categoriesId && { categoriesId }),
      ...(courseOrderBy && { courseOrderBy }),
    };

    // console.log("Params in Thunk:", params);

    try {
      const response = await axiosInstance.get("/course/list", { params });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchHighlightedCoursesThunk = createAsyncThunk(
  "courses/fetchHighlight",
  async () => {
    const response = await axiosInstance.get("/course/highlight");
    return response.data;
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

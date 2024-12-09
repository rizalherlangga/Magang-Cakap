import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPartnersList } from "@/lib/api";

const initialState = {
  courses: [],
  payments: [],
  loading: false,
  error: null,
  selectedCategory: "COURSE",
};

export const fetchBothPartnersThunk = createAsyncThunk(
  "partners/fetchBothPartners",
  async (_, { rejectWithValue }) => {
    try {
      const [course, payment] = await Promise.all([
        fetchPartnersList({ partnerType: "COURSE" }),
        fetchPartnersList({ partnerType: "PAYMENT" }),
      ]);

      return {
        courses: course.data.partner,
        payments: payment.data.partner,
      };
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch categories");
    }
  }
);

export const fetchPartnerCourseThunk = createAsyncThunk(
  "categories/fetchPartnerCourse",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchPartnersList("COURSE");
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch categories");
    }
  }
);

export const fetchPartnerPaymentThunk = createAsyncThunk(
  "categories/fetchPartnerPayment",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchPartnersList("PAYMENT");
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch categories");
    }
  }
);

const partnersListSlice = createSlice({
  name: "partnersList",
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBothPartnersThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBothPartnersThunk.fulfilled, (state, action) => {
        state.courses = action.payload.courses;
        state.payments = action.payload.payments;
        state.loading = false;
      })
      .addCase(fetchBothPartnersThunk.rejected, (state, action) => {
        state.error = action.payload || "Failed to fetch partners";
        state.loading = false;
      });
  },
});

export const { setSelectedCategory } = partnersListSlice.actions;
export default partnersListSlice.reducer;

// export const fetchBothPartnersThunk = createAsyncThunk(
//   "partners/fetchBothPartners",
//   async (_, { rejectWithValue }) => {
//     try {
//       const [courses, payments] = await Promise.all([
//         axiosInstance.get("/partner", {
//           params: {
//             partnerType: "COURSE",
//             showAll: true,
//             search: "",
//             limit: 10,
//           },
//         }),
//         axiosInstance.get("/partner", {
//           params: {
//             partnerType: "PAYMENT",
//             showAll: true,
//             search: "",
//             limit: 10,
//           },
//         }),
//       ]);

//       return {
//         courses: courses.data,
//         payments: payments.data,
//       };
//     } catch (error) {
//       return rejectWithValue(
//         error.response?.data || error.message || "Failed to fetch partners"
//       );
//     }
//   }
// );

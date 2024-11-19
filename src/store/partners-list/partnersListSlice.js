import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  educationPartners: [],
  supportPartners: [],
  loading: false,
  error: null,
};
export const fetchEducationPartners = createAsyncThunk(
  "partner/fetchEducationPartners",
  async () => {
    const response = await axios.get(
      "https://api-staging.cakap.com/v3/selfpaced/partner?partnerType=COURSE&showAll=true&search=&limit=10"
    );
    return response.data.data.partner;
  }
);

export const fetchSupportPartners = createAsyncThunk(
  "partner/fetchSupportPartners",
  async () => {
    const response = await axios.get(
      "https://api-staging.cakap.com/v3/selfpaced/partner?partnerType=PAYMENT&showAll=true&search=&limit=10"
    );

    return response.data.data.partner;
  }
);

const partnersSlice = createSlice({
  name: "partner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEducationPartners.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEducationPartners.fulfilled, (state, action) => {
        state.educationPartners = action.payload;
        state.loading = false;
      })
      .addCase(fetchEducationPartners.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchSupportPartners.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSupportPartners.fulfilled, (state, action) => {
        state.supportPartners = action.payload;
        state.loading = false;
      })
      .addCase(fetchSupportPartners.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default partnersSlice.reducer;

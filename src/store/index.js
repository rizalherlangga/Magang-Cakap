const { configureStore } = require("@reduxjs/toolkit");
import partnersSlice from "./partners-list/partnersListSlice";

const store = configureStore({
  reducer: {
    partners: partnersSlice,
  },
});

export default store;

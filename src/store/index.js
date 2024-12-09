const { configureStore } = require("@reduxjs/toolkit");

import coursesListSLice from "./courses/coursesListSLice";
import categoriesSlice from "./courses/categoriesSlice";
import partnerslistSlice from "./partners-list/partnersListSlice";

const store = configureStore({
  reducer: {
    courses: coursesListSLice,
    categories: categoriesSlice,
    partnersList: partnerslistSlice,
  },
});

export default store;

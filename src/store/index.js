const { configureStore } = require("@reduxjs/toolkit");

import coursesListSLice from "./courses/coursesListSLice";
import categoriesSlice from "./courses/categoriesSlice";
const store = configureStore({
  reducer: {
    courses: coursesListSLice,
    categories: categoriesSlice,
  },
});

export default store;

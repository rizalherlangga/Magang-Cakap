const { configureStore } = require("@reduxjs/toolkit");
import coursesListSLice from "./courses/coursesListSLice";
const store = configureStore({
  reducer: {
    courses: coursesListSLice,
  },
});

export default store;

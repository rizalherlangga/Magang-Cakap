const { configureStore } = require("@reduxjs/toolkit");

import coursesListSLice from "./courses/coursesListSLice";
import categoriesSlice from "./courses/categoriesSlice";
import partnerslistSlice from "./partners-list/partnersListSlice";
import faqSlice from "./faq/faqSlice";

const store = configureStore({
  reducer: {
    courses: coursesListSLice,
    categories: categoriesSlice,
    partnersList: partnerslistSlice,
    faqList: faqSlice,
  },
});

export default store;

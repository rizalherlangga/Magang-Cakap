"use client";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  fetchCategoriesThunk,
  setCategories,
  setSelectedCategory,
} from "@/store/courses/categoriesSlice";
import {
  fetchCoursesThunk,
  incrementPage,
  resetCourses,
  setCourses,
  setFilter,
  setOrderBy,
} from "@/store/courses/coursesListSLice";
import FilterBar from "../fragments/filter-bar";
import CourseCard from "../fragments/course-card";
import Loader from "../fragments/loader";

const CourseListsTemplate = ({ initialCategories, initialCourses }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    list: courses,
    page,
    hasMore,
    loading,
    orderBy,
    filter,
  } = useSelector((state) => state.courses);

  // console.log(courses);
  const { category } = useSelector((state) => state.categories);

  const filteredCourses = courses.filter((course) => {
    if (filter.prakerjaFilter) {
      return course.isSupportPrakerja;
    }
    return true;
  });

  const handleFilterChange = (sCategory) => {
    dispatch(resetCourses());
    dispatch(setSelectedCategory(sCategory));
    dispatch(
      fetchCoursesThunk({
        page: 1,
        limit: 10,
        categoriesId: sCategory,
      })
    );
  };
  const handleOrderChange = (orderBy) => {
    dispatch(resetCourses());
    dispatch(setOrderBy(orderBy));
    dispatch(
      fetchCoursesThunk({
        page: 1,
        limit: 10,
        categoriesId: category,
        courseOrderBy: orderBy,
      })
    );
  };
  const handleFilterPrakerjaChange = (isChecked) => {
    dispatch(setFilter({ prakerjaFilter: isChecked }));
  };
  const handleCourseClick = (id) => {
    router.push(`/courses/${id}`);
  };

  useEffect(() => {
    dispatch(setCategories(initialCategories));
    dispatch(setCourses(initialCourses));
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      const isNearBottom =
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100;
      if (isNearBottom && !loading && hasMore) {
        dispatch(incrementPage());
        dispatch(setCourses(initialCourses));
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore, loading, page, dispatch]);

  return (
    <>
      <FilterBar
        categories={initialCategories}
        selectedCategory={category}
        onFilterChange={handleFilterChange}
        onOrderChange={handleOrderChange}
        orderBy={orderBy}
        onFilterPrakerja={filter.prakerjaFilter}
        onFilterPrakerjaChange={handleFilterPrakerjaChange}
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-10 ">
        {filteredCourses.map((course, index) => (
          <CourseCard
            key={`${course.courseId}-${index}`}
            course={course}
            onClickChange={handleCourseClick}
          />
        ))}
      </div>
      {loading && <Loader />}
    </>
  );
};
export default CourseListsTemplate;

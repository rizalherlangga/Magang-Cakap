"use client";

import CourseListsTemplate from "@/components/template/course-list-template";
import { fetchCategoriesThunk } from "@/store/courses/categoriesSlice";
import { fetchCoursesThunk } from "@/store/courses/coursesListSLice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CoursesPage() {
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

  const handleCourseClick = (id) => {
    router.push(`/courses/${id}`);
  };

  useEffect(() => {
    dispatch(fetchCategoriesThunk());
    dispatch(fetchCoursesThunk({ page: 1, limit: 10 }));
  }, [dispatch]);

  console.log(courses);

  return (
    <>
      <CourseListsTemplate
        courses={courses}
        filter={filter}
        handleCourseClick={handleCourseClick}
      />
    </>
  );
}

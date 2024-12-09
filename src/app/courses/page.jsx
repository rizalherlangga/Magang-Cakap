import CourseListsTemplate from "@/components/template/course-list-template";
import { fetchCategories, fetchCourses } from "@/lib/api";

export default async function CoursesPage() {
  const categoriesData = await fetchCategories();
  const coursesData = await fetchCourses({ page: 1, limit: 10 });

  console.log(coursesData.data);
  // console.log(categoriesData.data);
  return (
    <CourseListsTemplate
      initialCategories={categoriesData.data}
      initialCourses={coursesData.data}
    />
  );
}

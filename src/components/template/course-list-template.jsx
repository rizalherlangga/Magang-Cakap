import CourseCard from "../fragments/course-card";

const CourseListsTemplate = ({ courses, filter, handleCourseClick }) => {
  const filteredCourses = courses.filter((course) => {
    if (filter.prakerjaFilter) {
      return course.isSupportPrakerja;
    }
    return true;
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10 border-t border-t-slate-500">
      {filteredCourses.map((course, index) => (
        <CourseCard
          key={`${course.courseId}-${index}`}
          course={course}
          onClickChange={handleCourseClick}
        />
      ))}
    </div>
  );
};
export default CourseListsTemplate;

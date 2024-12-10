import AboutCourse from "../fragments/detail-course/about-course";
import PriceCourse from "../fragments/detail-course/price-course";

const AboutCourseTemplate = () => {
  return (
    <section className="flex">
      <AboutCourse />
      <PriceCourse />
    </section>
  );
};

export default AboutCourseTemplate;

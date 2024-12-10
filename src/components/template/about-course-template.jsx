import AboutCourse from "../fragment/detail-course/about-course";
import PriceCourse from "../fragment/detail-course/price-course";

const AboutCourseTemplate = () => {
  return (
    <section className="flex">
      <AboutCourse />
      <PriceCourse />
    </section>
  );
};

export default AboutCourseTemplate;

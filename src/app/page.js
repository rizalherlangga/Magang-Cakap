import CourseTemplate from "@/components/template/course-template";
import FaqTemplate from "@/components/template/faq-template";
import HeroDealTemplate from "@/components/template/hero-deal-template";
import { fetchBanners, fetchCourses, fetchHighlightedCourses } from "@/lib/api";

async function HomePage() {
  const banners = await fetchBanners();
  const courseHighlight = await fetchHighlightedCourses();
  const bestSellerCourses = await fetchCourses({
    page: 1,
    limit: 20,
    courseOrderBy: "BEST_SELLER",
  });

  return (
    <>
      <HeroDealTemplate banners={banners} />
      <CourseTemplate
        title={"Kursus Apa Yang Ingin Kamu Pelajari?"}
        description={"Belajar tanpa batas waktu & bersertifikat!"}
        courses={courseHighlight.data}
      />
      <CourseTemplate
        title={"Kursus Terlaris"}
        description={""}
        courses={bestSellerCourses.data.course}
      />
      <FaqTemplate />
    </>
  );
}

export default HomePage;

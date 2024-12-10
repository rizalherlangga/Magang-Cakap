import CarouselCourse from "@/components/template/carousel-course";
import HeroDealTemplate from "@/components/template/hero-deal-template";
import { fetchBanners, fetchHighlightedCourses } from "@/lib/api";

async function HomePage() {
  const banners = await fetchBanners();
  const courseHighlight = await fetchHighlightedCourses();
  return (
    <>
      <HeroDealTemplate banners={banners} />
      <CarouselCourse tittle={"Kursus Terlaris"} courses={courseHighlight} />
    </>
  );
}

export default HomePage;

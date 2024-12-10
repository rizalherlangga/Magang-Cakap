import BannerPage from "@/components/fragments/banner-page";
import AboutCourseTemplate from "@/components/template/about-course-template";
import CarouselCourse from "@/components/template/carousel-course";
import { fetchHighlightedCourses } from "@/lib/api";

export default async function DetailList() {
  const courseHighlight = await fetchHighlightedCourses();

  return (
    <div className="text-white">
      <BannerPage>
        <div className="w-1/2 flex justify-center">
          <img src="https://via.placeholder.com/300x200" alt="image" />
        </div>
        <div className="w-1/2 flex items-center">
          <div className="flex flex-col justify-between gap-8">
            <h1>Bisnis & Manajemen</h1>
            <h2>Menjadi Pengusaha UMKM</h2>
            <div className="border border-white rounded-md inline-block px-2">
              <p>ulasan/rating</p>
            </div>
          </div>
        </div>
      </BannerPage>
      <AboutCourseTemplate />
      <CarouselCourse courses={courseHighlight} tittle={"Kursus Terkait"} />
    </div>
  );
}

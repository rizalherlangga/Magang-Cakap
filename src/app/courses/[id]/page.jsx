import BannerPage from "@/components/fragments/banner-page";
import AboutCourseTemplate from "@/components/template/about-course-template";
import CarouselCourse from "@/components/template/carousel-course";
import { fetchDetail, fetchHighlightedCourses } from "@/lib/api";

export default async function DetailList() {
  const courseDetail = await fetchDetail(815, "WEB");
  const { courseName, categoriesName, rating, icon } = courseDetail.data;

  const courseHighlight = await fetchHighlightedCourses();

  return (
    <div className="text-white">
      <BannerPage>
        <div className="w-1/2 flex justify-center">
          <img src={icon.thumbnail} alt={courseName} />
        </div>
        <div className="w-1/2 flex items-center">
          <div className="flex flex-col justify-between gap-8">
            <h1>{categoriesName}</h1>
            <h2>{courseName}</h2>
            <div className="border border-white rounded-md inline-block px-2">
              <p>{`Rating: ${rating}`}</p>
            </div>
          </div>
        </div>
      </BannerPage>
      <AboutCourseTemplate />
      <CarouselCourse courses={courseHighlight} tittle={"Kursus Terkait"} />
    </div>
  );
}

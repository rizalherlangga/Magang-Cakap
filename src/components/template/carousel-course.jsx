"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CourseCard from "../fragments/course-card";
import { useRouter } from "next/navigation";

function CarouselCourse({ tittle, courses }) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleBack = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? courses.data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === courses.data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleCourseClick = (id) => {
    router.push(`/courses/${id}`);
  };
  const cardsPerView = 4;
  return (
    <section className="overflow-hidden w-full my-6">
      <div className="mb-4">
        <span className="text-2xl font-medium text-primary">{tittle}</span>
        <div className="w-full flex gap-2 justify-end">
          <Button
            variant="outline"
            onClick={handleBack}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </Button>
          <Button
            variant="outline"
            onClick={handleNext}
            disabled={currentIndex + cardsPerView >= courses.data.length}
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </Button>
        </div>
      </div>
      <div
        className="w-full flex  transition-transform duration-500"
        style={{
          transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`,
        }}
      >
        <div className="flex gap-4  w-full mx-2 ">
          {courses.data.map((item, index) => (
            <div
              key={`${item.courseId}-${index}`}
              className="w-[calc(25%-1rem)] flex-shrink-0 "
            >
              <CourseCard course={item} onClickChange={handleCourseClick} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CarouselCourse;

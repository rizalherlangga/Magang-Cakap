"use client";

import { useState } from "react";

import CourseCard from "../fragments/course-card";
import { useRouter } from "next/navigation";
import SectionTemplate from "./section-template";
import Navigation from "../fragments/navigation";

function CarouselCourse({ title, description, courses }) {
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

  const handleSeeAllCLick = () => {
    router.push(`/courses`);
  };

  const cardsPerView = 4;
  return (
    <SectionTemplate title={title} description={description}>
      <Navigation
        handleBack={handleBack}
        handleNext={handleNext}
        handleSeeAllCLick={handleSeeAllCLick}
        coursesLength={courses.data.length}
        currentIndex={currentIndex}
      />
      <div
        className="w-full flex gap-4 transition-transform duration-500"
        style={{
          transform: `translateX(-${(currentIndex * 100) / cardsPerView}%)`,
        }}
      >
        {courses.data.map((item, index) => (
          <div
            key={`${item.courseId}-${index}`}
            className="w-[calc(25%-1rem)] flex-shrink-0"
          >
            <CourseCard course={item} />
          </div>
        ))}
      </div>
    </SectionTemplate>
  );
}

export default CarouselCourse;

"use client";

import BannerPage from "@/components/fragments/banner-page";
import ListDescription from "@/components/fragments/list-description";
import AboutCourseTemplate from "@/components/template/about-course-template";
import CourseCarousel from "@/components/template/card-carousel";
import cards from "@/dummydata/card";
import { useState } from "react";

export default function DetailList() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex + 4 < cards.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleCardAction = (card) => {
    console.log("Card clicked:", card);
  };

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
      <CourseCarousel
        title="Kursus Terkait"
        cards={cards}
        currentIndex={currentIndex}
        handleNext={handleNext}
        handleBack={handleBack}
        cardsPerView={4}
        cardAction={handleCardAction}
      />
    </div>
  );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const BannerCarousel = ({ banners }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden bg-[#013451] rounded-xl mb-10">
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {banners.map((banner, index) => (
          <Link
            href={banner.redirectUrl}
            key={index}
            className="relative flex-shrink-0 w-full h-[12rem] md:h-[20rem] lg:h-[25rem] "
          >
            <img
              src={banner.urlBanner}
              alt={banner.altTag}
              className="h-full w-[35rem] md:w-[45rem] lg:w-[70rem] mx-auto my-auto rounded-xl"
            />
          </Link>
        ))}
      </div>
      <Button
        onClick={goToPrevious}
        variant="outline"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full shadow-md hover:bg-gray-200"
      >
        <ChevronLeft className="w-6 h-6 text-primary" />
      </Button>
      <Button
        onClick={goToNext}
        variant="outline"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full shadow-md hover:bg-gray-200"
      >
        <ChevronRight className="w-6 h-6 text-primary " />
      </Button>
    </div>
  );
};

export default BannerCarousel;

"use client";

import BannerPage from "@/components/fragments/banner-page";
import ListDescription from "@/components/fragments/list-description";
import CourseCarousel from "@/components/template/card-carousel";
import cards from "@/dummydata/card";
import { useState } from "react";

function DetailList() {
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

  const cardsPerView = 4;

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
      <section className="flex">
        <div className="w-9/12 border border-white py-4 pr-20 text-black">
          <div>
            <div className="flex mb-6">
              <div>
                <img src="https://via.placeholder.com/50x50" alt="" />
              </div>
              <div>
                <h1>Institusi</h1>
                <h2>Cakap</h2>
              </div>
            </div>
            <div>
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Exercitationem, blanditiis vero? Autem quibusdam error eveniet
                modi voluptate ea, quos odit minima? Quis numquam eum modi earum
                illo suscipit vitae, odit delectus quia id, recusandae eius
                quod, laboriosam iusto perspiciatis culpa.
              </p>
            </div>
          </div>
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <ListDescription key={index} />
            ))}
        </div>
        <div className="bg-black w-3/12 border border-white p-4">
          <div className="flex justify-between">
            <p>10%</p>
            <p>Rp 100.000</p>
            <p>Rp 90.000</p>
          </div>
          <div>
            <button className="w-full border border-white rounded-md">
              BELI KURSUS
            </button>
            <button className="w-full border border-white rounded-md">
              TUKAR KODE PELAJAR
            </button>
          </div>
        </div>
      </section>
      <CourseCarousel
        cards={cards}
        currentIndex={currentIndex}
        handleNext={handleNext}
        handleBack={handleBack}
        cardsPerView={cardsPerView}
      />
    </div>
  );
}
export default DetailList;

"use client";

import SectionTemplate from "@/components/template/section-template";
import CardLogoLoader from "@/components/fragments/card-logo-loader";
import PartnerListItem from "@/components/fragments/partnerlist-item";

import { useDispatch, useSelector } from "react-redux";
import { fetchPartnerCourseThunk } from "@/store/partners-list/partnerListHomeSlice";
import { useEffect } from "react";
import Link from "next/link";

export default function PartnerListHomeTemplate() {
  const dispatch = useDispatch();
  const { courses, loading, error } = useSelector(
    (state) => state.partnersListHome
  );

  useEffect(() => {
    dispatch(fetchPartnerCourseThunk());
  }, []);

  console.log(courses);

  return (
    <SectionTemplate
      title={"Mitra Kursus"}
      description={
        "Mitra pendukung bekerja sama dengan Cakap untuk menyediakan berbagai benefit ketika kamu bertransaksi."
      }
    >
      <div className="w-full flex  justify-end mb-4">
        <Link href="/partners-list">
          <span className="text-primary font-bold px-2 cursor-pointer">
            Lihat Semua
          </span>
        </Link>
      </div>
      <div className="pb-10">
        {loading && <CardLogoLoader />}
        {error && <p>{error}</p>}
        <PartnerListItem items={courses} classname="justify-center" />
      </div>
    </SectionTemplate>
  );
}

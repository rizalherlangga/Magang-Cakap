"use client";

import { Button } from "../ui/button";
import BannerPage from "../fragments/banner-page";
import PartnerListItem from "../fragments/partnerlist-item";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchBothPartnersThunk,
  setSelectedCategory,
} from "@/store/partners-list/partnersListSlice";
import { useEffect } from "react";
import CardLogoLoader from "../fragments/card-logo-loader";

export default function PartnersListTemplate() {
  const dispatch = useDispatch();
  const { courses, payments, selectedCategory, loading, error } = useSelector(
    (state) => state.partnersList
  );

  useEffect(() => {
    dispatch(fetchBothPartnersThunk());
  }, [dispatch]);

  return (
    <div className="mb-20">
      <div className="pt-4">
        <BannerPage>
          <div className="h-44 relative w-full">
            <h1 className="text-start font-bold text-3xl absolute bottom-4 w-full">
              Mitra Upskill
            </h1>
          </div>
        </BannerPage>
      </div>

      <div>
        <Button
          variant="ghost"
          className={`${
            selectedCategory === "COURSE" ? "border-b-2 border-black" : ""
          }`}
          onClick={() => dispatch(setSelectedCategory("COURSE"))}
        >
          Mitra Pendidikan
        </Button>
        <Button
          variant="ghost"
          className={`${
            selectedCategory === "PAYMENT" ? "border-b-2 border-black" : ""
          }`}
          onClick={() => dispatch(setSelectedCategory("PAYMENT"))}
        >
          Mitra Pendukung
        </Button>
      </div>

      <div>
        {selectedCategory === "COURSE" && (
          <div className="pt-6 border-t">
            <h2 className="font-bold">Mitra Pendidikan</h2>
            <p>
              Mitra pendukung bekerja sama dengan Cakap untuk menyediakan
              berbagai benefit ketika kamu bertransaksi.
            </p>

            {loading && <CardLogoLoader />}
            <PartnerListItem
              items={courses}
              classname="justify-center md:justify-normal"
            />
          </div>
        )}

        {selectedCategory === "PAYMENT" && (
          <div className="pt-6 border-t">
            <h2 className="font-bold">Mitra Pendukung</h2>
            <p>
              Mitra pendukung bekerja sama dengan Cakap untuk menyediakan
              berbagai benefit ketika kamu bertransaksi.
            </p>

            {loading && <CardLogoLoader />}
            <PartnerListItem items={payments} />
          </div>
        )}
      </div>
    </div>
  );
}

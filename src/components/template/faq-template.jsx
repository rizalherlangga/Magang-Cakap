"use client";

import FaqList from "../fragments/faq-list";
import SectionTemplate from "./section-template";

import { useDispatch, useSelector } from "react-redux";
import { fetchFaqThunk } from "@/store/faq/faqSlice";
import { useEffect } from "react";

export default function FaqTemplate() {
  const dispatch = useDispatch();
  const { faq, loading, error } = useSelector((state) => state.faqList);

  useEffect(() => {
    dispatch(fetchFaqThunk());
  }, [dispatch]);

  return (
    <SectionTemplate
      title={"Yang Sering Ditanyakan"}
      description={"Ada kendala atau pertanyaan? Kami siap membantu!"}
    >
      <div className="w-full border p-4 mt-10 mb-5">
        {loading && <p className="text-primary">Loading...</p>}
        <FaqList faq={faq} />
      </div>
    </SectionTemplate>
  );
}

import React from "react";
import IconC from "../ui/icon";
import Link from "next/link";

const FooterMain = () => {
  return (
    <div className="flex flex-col gap-10 pt-8 lg:flex-row">
      <div className="w-full sm:col-span-2">
        <Link
          href="/"
          aria-label="Go home"
          title="Company"
          className="inline-flex items-center  text-xl font-bold tracking-wide uppercase pb-4"
        >
          <span>Cakap</span>
        </Link>
        <div className="w-full text-sm font-medium tracking-wider">
          <p className=" text-[0.7rem] font-medium  ">
            Platform Upskilling #1 di Indonesia dan Mendukung 3 Tujuan UNDP SDG
            Impact
          </p>
        </div>
      </div>

      <div className="w-full text-sm font-bold tracking-wider">
        <p className=" pb-4">Hubungi Kami</p>
        <div className="flex flex-col gap-2 text-[0.7rem] font-medium">
          <p>Jam Pelayanan: 08:00 - 21:00 (GMT+7)</p>
          <p>021-5091-1920</p>
          <div className="flex  gap-2 items-center ">
            <IconC src={"/icons/whatsapp.svg"} className={"w-4"} />
            <IconC src={"/icons/envelope-regular.svg"} className={"w-4"} />
          </div>
        </div>
        <div className="flex flex-col gap-2 text-[0.7rem] font-medium pt-4">
          <p>Punya pertanyaan mengenai program Prakerja Cakap?</p>
          <p>+62 823-2589-8644</p>
          <div className="flex  gap-2 items-center ">
            <IconC src={"/icons/whatsapp.svg"} className={"w-4"} />
            <IconC src={"/icons/envelope-regular.svg"} className={"w-4"} />
          </div>
        </div>
      </div>

      <div className="text-sm font-bold tracking-wider w-full">
        <p className="pb-4">Ikuti Kami</p>
        <div className="flex  gap-2 items-center mt-1 space-x-">
          <IconC src={"/icons/instagram.svg"} className={"w-4"} />
          <IconC src={"/icons/facebook.svg"} className={"w-4"} />
          <IconC src={"/icons/youtube.svg"} className={"w-4"} />
          <IconC src={"/icons/x-twitter.svg"} className={"w-4"} />
          <IconC src={"/icons/linkedin.svg"} className={"w-4"} />
          <IconC src={"/icons/tiktok.svg"} className={"w-4"} />
        </div>
      </div>
    </div>
  );
};

export default FooterMain;

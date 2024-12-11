import React from "react";
import IconC from "../ui/icon";

const FooterMain = () => {
  return (
    <div className="flex flex-col gap-10 row-gap-6 mb-8  lg:flex-row">
      <div className="w-full sm:col-span-2">
        <a
          href="/"
          aria-label="Go home"
          title="Company"
          className="inline-flex items-center"
        >
          <span className=" text-xl font-bold tracking-wide uppercase">
            Company
          </span>
        </a>
        <div className="mt-6 lg:max-w-sm">
          <p className="text-sm ">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </p>
        </div>
      </div>

      <div className="w-full text-sm font-bold tracking-wider">
        <p className=" font-bold tracking-wider">Contacts</p>
        <div className="text-xs">
          <p>Jam Pelayanan: 08:00 - 21:00 (GMT+7)</p>
        </div>
      </div>

      <div className="text-sm font-bold tracking-wider w-full">
        <p>Ikuti Kami</p>
        <div className="flex  gap-2 items-center mt-1 space-x-">
          <IconC src={"/icons/whatsapp.svg"} />
          <IconC src={"/icons/whatsapp.svg"} />
          <IconC src={"/icons/whatsapp.svg"} />
          <IconC src={"/icons/whatsapp.svg"} />
          <IconC src={"/icons/whatsapp.svg"} />
        </div>
      </div>
    </div>
  );
};

export default FooterMain;

import React from "react";
import IconC from "../ui/icon";

const FooterMiddle = () => {
  return (
    <div className="bg-cyan-600 rounded-2xl flex-col flex sm:flex-row justify-between gap-10 lg:flex-col p-6 my-8">
      <div className="w-full">
        <p className=" font-semibold text-sm tracking-wide pb-4">
          Telah Terdaftar Oleh
        </p>
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row text-[0.7rem] font-medium tracking-wider">
          <div className="w-full flex flex-col">
            <img
              className="w-28 border-none pb-2"
              src="/icons/kominfo.svg"
              alt="icon"
            />
            <p>PB-UMKU: 912020024242500040001</p>
            <p>PSE: 008628.01/DJAI.PSE/12/2022</p>
          </div>
          <div className="w-full flex flex-col">
            <img
              className="w-28 border-none pb-2"
              src="/icons/kemendikbud.svg"
              alt="icon"
            />
            <p>
              Nama: <br />
              LKP CAKAP (PT. CERDAS DIGITAL NUSANTARA)
            </p>
            <p>NPSN: K9996958</p>
          </div>
          <div className="w-full flex flex-col">
            <img
              className="w-28 border-none pb-2"
              src="/icons/kemenker.svg"
              alt="icon"
            />
            <p>Lisensi:</p>
            <p>2/G.1/31.73.02.1001.01.004.C.1.a.b/3/-1.851.332/e/2021</p>
          </div>
        </div>
      </div>

      <div className="text-sm font-medium tracking-wider justify-center flex flex-col items-center w-full">
        <div className="flex  items-center justify-center gap-2">
          <p className="text-xs">Mendukung</p>
          <div className="flex  gap-2 items-center mt-1 space-x-">
            <div>
              <img className="w-26" src="/icons/prakerja.svg" alt="whatsapp" />
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default FooterMiddle;

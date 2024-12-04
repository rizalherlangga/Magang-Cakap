import { Rocket } from "lucide-react";
import { Button } from "../ui/button";

const Voucher = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between gap-6 items-center w-full h-18 my-2 p-4 text-secondary font-semibold rounded-xl shadow-lg border-2 border-b-8 border-secondary">
      <div className="flex items-center gap-4">
        <Rocket className="w-9 h-9" />
        <span className="text-center">
          Dapatkan voucher eksklusif dan kursus terbaik sesuai minatmu.{" "}
          <strong className="font-semibold">Daftar sekarang!</strong>
        </span>
      </div>
      <Button variant="secondary" className="px-8">
        Daftar
      </Button>
    </section>
  );
};

export default Voucher;

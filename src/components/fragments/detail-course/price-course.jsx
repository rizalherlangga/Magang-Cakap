import { Button } from "@/components/ui/button";

const PriceCourse = () => {
  return (
    <div
      className="bg-black w-2/6 border border-white p-4 sticky my-4 rounded-md"
      style={{ top: "5rem", height: "fit-content" }}
    >
      <div className="flex justify-between">
        <p className="text-white">10%</p>
        <p className="text-white">Rp 100.000</p>
        <p className="text-white">Rp 90.000</p>
      </div>
      <div className="mt-4 space-y-2">
        <Button className="w-full border border-white rounded-md text-white bg-blue-500">
          BELI KURSUS
        </Button>
        <Button className="w-full border border-white rounded-md text-white bg-green-500">
          TUKAR KODE PELAJAR
        </Button>
      </div>
    </div>
  );
};

export default PriceCourse;

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

const Navigation = ({
  handleBack,
  handleNext,
  handleSeeAllCLick,
  coursesLength,
  currentIndex,
}) => {
  const cardsPerView = 4;
  return (
    <div className="w-full flex gap-2 justify-end items-center mb-4">
      <span
        className="text-primary font-bold px-2 cursor-pointer"
        onClick={handleSeeAllCLick}
      >
        Lihat Semua
      </span>
      <Button
        size="icon"
        variant="outline"
        onClick={handleBack}
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="w-4 h-4 text-primary" />
      </Button>
      <Button
        size="icon"
        variant="outline"
        onClick={handleNext}
        disabled={currentIndex + cardsPerView >= coursesLength}
      >
        <ChevronRight className="w-4 h-4 text-primary" />
      </Button>
    </div>
  );
};

export default Navigation;

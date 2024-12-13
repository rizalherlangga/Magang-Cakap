import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import CardFragment from "../fragments/card-fragment";

export default function CourseCarousel({
  title = "Card Title",
  cards = [],
  currentIndex,
  handleNext,
  handleBack,
  cardsPerView = 4,
  cardAction = () => {},
}) {
  return (
    <section className="text-black">
      <div className="flex justify-between items-center my-5">
        <p className="text-lg font-semibold">{title}</p>
        <div className="flex gap-2">
          <Button
            onClick={handleBack}
            className="p-2 bg-gray-300 rounded-md disabled:opacity-50 hover:bg-secondary"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </Button>
          <Button
            onClick={handleNext}
            className="p-2 bg-gray-300 rounded-md disabled:opacity-50 hover:bg-secondary"
            disabled={currentIndex + cardsPerView >= cards.length}
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </Button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex gap-4 transition-transform duration-300"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
          }}
        >
          {cards.map((card, index) => (
            <CardFragment
              className="w-1/4 flex-shrink-0"
              key={index}
              header={
                <img
                  src={card.image}
                  alt={`Card ${index}`}
                  className="w-full h-auto"
                />
              }
              content={<p>{card.description}</p>}
              footer={<p className="text-lg font-bold">{card.price}</p>}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function CourseCarousel({
  cards,
  currentIndex,
  handleNext,
  handleBack,
  cardsPerView,
}) {
  return (
    <section className="text-black">
      <div className="flex justify-between items-center my-5">
        <p className="text-lg">KURSUS TERKAIT</p>
        <div className="flex gap-2">
          <button
            onClick={handleBack}
            className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
            disabled={currentIndex === 0}
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
            disabled={currentIndex + cardsPerView >= cards.length}
          >
            Next
          </button>
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
            <Card className="w-1/4 flex-shrink-0" key={index}>
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{card.content}</p>
              </CardContent>
              <CardFooter>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                  Read More
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

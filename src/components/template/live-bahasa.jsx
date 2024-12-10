import cards from "@/dummydata/card";
import CardFragment from "../fragments/card-fragment";
import { Button } from "../ui/button";

const LiveBahasa = () => {
  return (
    <section>
      <div className="text-center">
        <h1 className="text-2xl">Kelas Live Bahasa Asing di Cakap Club</h1>
        <p>
          Belajar langsung bersama native speaker atau guru lokal profesional
          lengkap dengan bahasa pengantar
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-6 my-6">
        <div className="grid grid-cols-2 gap-4 md:w-1/2 w-full px-4">
          {cards.slice(0, 4).map((card, index) => (
            <CardFragment
              className="border rounded-lg shadow-md p-4 w-72"
              key={index}
              header={
                <img
                  src={card.image}
                  alt={`Card ${index}`}
                  className="w-full h-32 object-cover rounded-md"
                />
              }
              content={<p className="mt-2 text-sm">{card.description}</p>}
              footer={
                <Button className="mt-2 text-lg font-bold px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                  {card.price}
                </Button>
              }
            />
          ))}
        </div>
        <div className="flex justify-center items-center md:w-1/2 w-full px-4">
          <img
            src="https://s3.ap-southeast-1.amazonaws.com/resources.squline.com/club/banners/club-banner-id.png"
            alt="tes"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default LiveBahasa;

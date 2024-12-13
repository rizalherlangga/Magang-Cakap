import CardLogo from "./card-logo";
export default function PartnerListItem({ items, classname }) {
  return (
    <div className={`flex flex-wrap gap-6 pt-6 ${classname}`}>
      {items.map((item) => (
        <div key={item.partnerId}>
          <CardLogo
            imgName={item.partnerName}
            imgUrl={item.partnerLogo?.square}
          />
        </div>
      ))}
    </div>
  );
}

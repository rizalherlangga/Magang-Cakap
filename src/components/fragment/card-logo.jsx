import Tooltip from "../ui/tooltip";

export default function CardLogo({ imgUrl, imgName }) {
  return (
    <div>
      <div className=" relative flex justify-center group border rounded-md cursor-pointer">
        <img src={imgUrl} alt={imgName} className="w-24 h-24 p-4 " />
        <Tooltip>{imgName}</Tooltip>
      </div>
    </div>
  );
}

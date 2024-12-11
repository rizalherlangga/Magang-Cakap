import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const FooterBottom = () => {
  return (
    <div className="text-sm flex flex-col justify-between items-center gap-4 py-5 border-t lg:flex-row">
      <p className=" ">© Copyright 2024 Cakap | PT Cerdas Digital Nusantara</p>
      <Select defaultValue="indonesia">
        <SelectTrigger className="w-28">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="indonesia">Indonesia</SelectItem>
            <SelectItem value="banana">English</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default FooterBottom;

import { Globe } from "lucide-react";
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
    <div className="text-sm flex flex-col-reverse justify-between items-start gap-4 py-6 border-t lg:flex-row">
      <p className=" ">© Copyright 2024 Cakap | PT Cerdas Digital Nusantara</p>
      <Select defaultValue="indonesia">
        <SelectTrigger className="w-56 flex gap-1 justify-start md:justify-end ">
          <Globe />
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="indonesia">Bahasa Indonesia</SelectItem>
            <SelectItem value="banana">English</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default FooterBottom;

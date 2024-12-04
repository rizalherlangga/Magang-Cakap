import { Search } from "lucide-react";
import { Button } from "./button";
import { Input } from "./input";

export function InputContent() {
  return (
    <div className="flex h-9 w-full  justify-start items-center border border-secondary rounded-xl overflow-hidden relative">
      <Input
        type="text"
        placeholder="Cari Kursus"
        className="flex-grow px-3 py-2 rounded-l-xl focus:outline-none"
      />
      <Button
        variant="ghost"
        className="flex items-center justify-center   text-primary hover:cursor-pointer absolute right-0"
        aria-label="Search"
      >
        <Search className="w-5" />
      </Button>
    </div>
  );
}

"use client";

import { orderOptions } from "@/config";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
export default function FilterBar({
  categories,
  selectedCategory,
  onFilterChange,
  onOrderChange,
  orderBy,
  onFilterPrakerja,
  onFilterPrakerjaChange,
}) {
  const selectedCategoryForName = categories.find(
    (category) => category.categoriesId === selectedCategory
  );

  return (
    <div className="w-full flex flex-col justify-between items-start pt-4 ">
      <div className="w-full h-52 bg-secondary text-white flex flex-col gap-4  items-start py-6 px-4 rounded-xl">
        <span className="text-start font-bold text-3xl">
          {selectedCategory === ""
            ? "Semua Kategori"
            : selectedCategoryForName?.categoryName}
        </span>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <span className=" bg-transparent rounded-xl border text-sm p-2 font-medium">
              Ubah Kategori
            </span>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="start"
            side="bottom"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-h-60 max-w-full overflow-auto mt-2 rounded"
          >
            {categories.map((cat) => (
              <DropdownMenuItem
                key={cat.categoriesId}
                className={`w-full flex items-center justify-start gap-2 px-4 py-1 my-1 text-black border-b text-sm font-medium ${
                  selectedCategory === cat.categoriesId
                    ? "border-b-2 border-black"
                    : ""
                }`}
                onClick={() => onFilterChange(cat.categoriesId)}
              >
                <div className="relative">
                  <img className="w-6" src={cat.icon} alt={cat.categoryName} />
                </div>
                <span>{cat.categoryName}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="w-full flex flex-wrap justify-between gap-6 pt-4 md:border-b border-b-slate-500">
        <div className="max-md:w-full max-md:border-b border-b-slate-500">
          {orderOptions.map((option) => (
            <Button
              key={option.value}
              variant="ghost"
              className={`p-2 ${
                orderBy === option.value ? "border-b-2 border-black" : ""
              }`}
              onClick={() => onOrderChange(option.value)}
            >
              {option.label}
            </Button>
          ))}
        </div>

        <div className="text-base font-medium text-black content-center">
          <label>
            <input
              type="checkbox"
              checked={onFilterPrakerja}
              onChange={(e) => onFilterPrakerjaChange(e.target.checked)}
            />
            <span className="px-2 ">Kursus Prakerja</span>
          </label>
        </div>
      </div>
    </div>
  );
}

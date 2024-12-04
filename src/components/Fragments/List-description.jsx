"use client";
import React, { useState } from "react";

const getShortText = (text) => {
  if (!text) return "";
  return text.split(" ").slice(0, 25).join(" ") + "...";
};

const ListDescription = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorem vel iste illum veritatis soluta placeat natus maiores dolorum dolores et odit facilis nostrum eum deserunt illo accusantium sunt, quibusdam perspiciatis sequi non provident doloremque recusandae. Consectetur nulla repudiandae ducimus suscipit dolorem sed in inventore natus. Doloremque ut expedita perferendis.";

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-5/12 p-4 border border-black rounded-lg m-4 bg-slate-300">
      <div className="py-2 pr-2">
        <h1>TITLE</h1>
      </div>
      <div>
        <p>{isExpanded ? fullText : getShortText(fullText)}</p>
      </div>
      <div className="flex justify-end mt-auto">
        <button onClick={handleClick} className="text-blue-500">
          {isExpanded ? "Tutup" : "Baca Selengkapnya"}
        </button>
      </div>
    </div>
  );
};

export default ListDescription;

import React from "react";

const IconC = ({ src, className }) => {
  return (
    <div className="border py-1.5 px-2 rounded">
      <img className={className} src={src} alt="icon" />
    </div>
  );
};

export default IconC;

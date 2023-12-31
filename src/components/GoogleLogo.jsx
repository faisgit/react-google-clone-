import React from "react";
import { useLocation } from "react-router-dom";

export const GoogleLogo = () => {
  const location = useLocation();
  return (
    <div>
      <h1
        className={`${
          location.pathname === "/" ? "text-6xl sm:text-8xl" : " text-2xl"
        } mb-4 font-semibold`}
      >
        {" "}
        <span className="text-[#4285F4]">G</span>
        <span className="text-[#EA4335]">o</span>
        <span className="text-[#FBBC05]">o</span>
        <span className="text-[#4285F4]">g</span>
        <span className="text-[#34A853]">l</span>
        <span className="text-[#EA4335]">e</span>
      </h1>
    </div>
  );
};

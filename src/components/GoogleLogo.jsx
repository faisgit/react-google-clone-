import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../context/contextApi";

export const GoogleLogo = () => {
  const location = useLocation();
  const {themeMode} = useContext(UserContext)
  return (
    <div>
      <h1
        className={`${
          location.pathname === "/" ? "text-6xl sm:text-8xl" : " text-2xl"
        } mb-4 font-semibold`}
      >
        {" "}
        <span className={` ${ themeMode === 'light' && 'text-[#4285F4]'} ${themeMode === 'dark' && 'text-white'}`}>G</span>
        <span className={` ${ themeMode === 'light' && 'text-[#EA4335]'} ${themeMode === 'dark' && 'text-white'}`}>o</span>
        <span className={` ${ themeMode === 'light' && 'text-[#FBBC05]'} ${themeMode === 'dark' && 'text-white'}`}>o</span>
        <span className={` ${ themeMode === 'light' && 'text-[#4285F4]'} ${themeMode === 'dark' && 'text-white'}`}>g</span>
        <span className={` ${ themeMode === 'light' && 'text-[#34A853]'} ${themeMode === 'dark' && 'text-white'}`}>l</span>
        <span className={` ${ themeMode === 'light' && 'text-[#EA4335]'} ${themeMode === 'dark' && 'text-white'}`}>e</span>
      </h1>
    </div>
  );
};

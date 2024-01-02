import { DarkMode, LightMode } from "@mui/icons-material";
import React, { useContext } from "react";
import { UserContext } from "../context/contextApi";

export const ThemeBtn = () => {
  const { themeMode, lightTheme, darktheme } = useContext(UserContext);
  return (
    <div className=" bg-[#282A36] text-white fixed bottom-10  right-3 px-3 py-2 rounded-xl">

      {/* sun icon */}
      {themeMode === "dark" && (
        <button
          onClick={() => {
            if (themeMode === "dark") {
              lightTheme();
            }
          }}
        >
          <LightMode className="swap-on fill-current w-10 h-10 duration-700" />
        </button>
      )}

      {/* moon icon */}
      {themeMode === "light" && (
        <button
          onClick={() => {
            if (themeMode === "light") {
              darktheme();
            }
          }}
        >
          <DarkMode className="swap-off fill-current w-10 h-10 duration-700" />
        </button>
      )}
    </div>
  );
};

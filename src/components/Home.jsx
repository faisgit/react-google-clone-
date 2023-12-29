import React from "react";
import { HomeHeader } from "./HomeHeader";
import { SearchBox } from "./SearchBox";
import { Footer } from "./Footer";
import { GoogleLogo } from "./GoogleLogo";
export const Home = () => {
  return (
    <div>
      <HomeHeader />
      <div className="flex flex-col justify-center items-center">
        <div className="mb-7">
          <GoogleLogo />
        </div>
        <SearchBox />
      </div>
    </div>
  );
};

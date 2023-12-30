import React from "react";
import { SearchBox } from "./SearchBox";
import { GoogleLogo } from "./GoogleLogo";
import { Apps, ScienceTwoTone, Settings } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
export const SearchPageHeader = () => {
  const navigate  = useNavigate()
  return (
    <nav className=" flex flex-col gap-3 px-3  border-b-[1px] border-solid border-b-gray-300 sticky top-0 bg-white mb-4 ">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center pt-4  ">
        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-3">
          <div className="flex justify-between   items-center w-full md:w-auto ">
            <button className="block md:hidden">
              <ScienceTwoTone />
            </button>
            <button onClick={() => navigate('/')} >
            <GoogleLogo />
            </button>
            <div className=" block md:hidden avatar w-10 btn btn-ghost btn-circle py-0 ">
              <div className="w-10 rounded-full">
                <img src="https://i.pravatar.cc/300" />
              </div>
            </div>
          </div>
          <SearchBox />
        </div>
        <div className="md:flex items-center  hidden ">
          <button className=" hidden lg:block btn btn-ghost btn-circle">
            <Settings />
          </button>
          <button className="hidden lg:block btn btn-ghost btn-circle">
            {" "}
            <Apps />{" "}
          </button>
          <button className="avatar w-10 btn btn-ghost btn-circle py-0 ">
            <div className="w-24 rounded-full">
              <img src="https://i.pravatar.cc/300" />
            </div>
          </button>
        </div>
      </div>
      <div>
        <h3 className="font-bold border-b-4 border-solid border-b-blue-400  w-14 text-center ">All</h3>
      </div>
    </nav>
  );
};

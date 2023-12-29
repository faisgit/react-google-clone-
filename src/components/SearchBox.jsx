import { Mic, Search } from "@mui/icons-material";
import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../context/contextApi";
export const SearchBox = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { inputValue, setInputValue } = useContext(UserContext);
  return (
    <form
      className="flex  flex-col gap-4 "
      onSubmit={(e) => {
        e.preventDefault();
        navigate("/search");
        // props.FetchData()
      }}
    >
      <div className="flex justify-center items-center border  border-solid border-[#DFE1E5] px-3 rounded-full">
        <Search />
        <div className=" mx-3">
          <input
            type="text"
            className="sm:w-[30rem] w-[65vw] h-10 px-3 outline-none "
            required
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Mic />
        </div>
      </div>
      {location.pathname === "/search" ? null : (
        <div className="flex justify-center gap-3">
          <button className="btn btn-sm">Google Search</button>
          <button className="btn btn-sm">I'am feeling Lucky</button>
        </div>
      )}
    </form>
  );
};
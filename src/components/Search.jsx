import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/contextApi";
import { SearchPageHeader } from "./SearchPageHeader";
import SearchResult from "./SearchResult";
import useFetchData from "../custom-hook/FetchData";
export const Search = () => {
  const {value} =  useFetchData()
  const { inputValue,data } = useContext(UserContext);
  console.log(data)
  return (
    <div className="flex flex-col">
      <SearchPageHeader />
      <div className="flex flex-col gap-3 mx-10">
        {/* {data.map((e) => (
          <div key={Math.floor(Math.random)}> 
            <h1>{}</h1>
          </div>
        ))} */}

       {
        data.map(e => (
          <SearchResult result={e} />

        ))
       }

        {/* <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult /> */}
      </div>
      <h1>{value}</h1>
    </div>
  );
};

import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/contextApi";
import { SearchPageHeader } from "./SearchPageHeader";
import SearchResult from "./SearchResult";
export const Search = () => {
  const { inputValue } = useContext(UserContext);
  const term = inputValue;
  const API_KEY = "AIzaSyBjEMnxN3gJS0t1vNCws-5jAEnAlTTPzfw";
  const [data, setData] = useState([]);
  const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=1136cb66c567b4ae0&q=${term}`;
  // const {data} = useFetchData(term)

  function FetchData() {
    fetch(url)
      .then((response) => response.json())
      .then((datas) => setData(datas.items));
  }
  console.log(data);
  return (
    <div className="flex flex-col">
      <SearchPageHeader />
      <div className="flex flex-col gap-3 mx-10">
        {/* {data.map((e) => (
          <div key={Math.floor(Math.random)}> 
            <h1>{e.htmlTitle.replace(/<[^>]+>/g,'').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#039;/g, "'")}</h1>
          </div>
        ))} */}

        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
      </div>
    </div>
  );
};

import { useContext, useState } from "react";
import { UserContext } from "../context/contextApi";

function useFetchData(url) {
  const { data, setData } = useContext(UserContext);
  const GoogleSearchResult = () => {
    const FetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new console.error("Network Issue !");
        }
        const fetchedData = await response.json();

        setData(fetchedData.items);
        // console.log(data)
      } catch (error) {
        console.error();
      }
    };

    FetchData();
  };
  return { GoogleSearchResult, data };
}

export default useFetchData;

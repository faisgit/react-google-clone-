import { createContext } from "react";
import { useState } from "react";
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const API_KEY = import.meta.env.VITE_MY_API_KEY;
  const searchEngineId = import.meta.env.VITE_MY_SEARCH_ENGINE_ID
  const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${searchEngineId}&q=${inputValue}`;
  const [data, setData] = useState([]);
  const [themeMode, setThemeMode] = useState("light");
  const darktheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };
  return (
    <UserContext.Provider
      value={{
        inputValue,
        setInputValue,
        url,
        data,
        setData,
        themeMode,
        lightTheme,
        darktheme,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

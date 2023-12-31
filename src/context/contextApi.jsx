import { createContext } from "react";
import { useState } from "react";
export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
  const [inputValue,setInputValue] = useState('')
  const API_KEY = "AIzaSyBjEMnxN3gJS0t1vNCws-5jAEnAlTTPzfw";
  const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=1136cb66c567b4ae0&q=${inputValue}`;
  const [data,setData] = useState([])
    return (
      <UserContext.Provider  value={{inputValue,setInputValue,url,data,setData}} >
        {children}
      </UserContext.Provider>
    );
  };
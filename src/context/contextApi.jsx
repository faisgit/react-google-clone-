import { createContext } from "react";
import { useState } from "react";
export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
  const [inputValue,setInputValue] = useState('')
    return (
      <UserContext.Provider  value={{inputValue,setInputValue}} >
        {children}
      </UserContext.Provider>
    );
  };
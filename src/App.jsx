import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Search } from "./components/Search";
import { UserContext } from "./context/contextApi";
import { ThemeBtn } from "./components/ThemeBtn";

const App = () => {
  const { themeMode } = useContext(UserContext);
  useEffect(() => {
    const theme = document.querySelector("html");
    theme.setAttribute("data-theme", themeMode);
  }, [themeMode]);
  return (
    <Router>
      <Routes>
        <Route extact path="/" element={<Home />} />
        <Route extact path="/search" element={<Search />} />
      </Routes>
      <ThemeBtn />
    </Router>
  );
};

export default App;

import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { Home } from './components/Home';
import { Search } from './components/Search';
const App = () => {
  return (
   <Router>
      <Routes>
        <Route extact path='/' element={<Home />} />
        <Route extact path='/search' element={<Search />} />
      </Routes>
   </Router>
  )
}

export default App
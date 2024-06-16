import React from "react";
import Home from "./Home";
import Forms from "./Forms";
import { BrowserRouter, Routes , Route } from "react-router-dom";

const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home/>}
        />
        <Route path="/form" element={<Forms />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;

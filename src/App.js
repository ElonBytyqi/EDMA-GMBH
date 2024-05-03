import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import Loader from "./Pages/Loader";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import AboutUs from "./Pages/AboutUs";

const App = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    
    </BrowserRouter>
  );
};

export default App;

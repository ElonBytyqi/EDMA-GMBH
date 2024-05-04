import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import Loader from "./Pages/Loader";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import AboutUs from "./Pages/AboutUs";
import Products from "./Context/Products";

import { checkToken } from "./assets/functions";
import AuthService from "./AuthService";

const App = () => {
   const token = AuthService.getToken()
  const isAuthenticated = checkToken(token) // Verifikimi i tokenit

  return (
    <BrowserRouter>
      <Products>
        <Routes>
          <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
          <Route path="/loader" element={<Loader />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Products>
    </BrowserRouter>
  );
};

export default App;

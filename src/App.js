import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import Loader from "./Pages/Loader";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Products from "./Context/Products";

import { checkToken } from "./assets/functions";
import AuthService from "./AuthService";
import Architecture from "./Pages/Architecture";
import Energy from "./Pages/Energy";
import Water from "./Pages/Water";

import Consulting from "./Pages/Consulting";
import AnalycisAndConceptual from "./Pages/AnalycisAndConceptual";
import ProjectSupervision from "./Pages/ProjectSupervision";
import ProjectManagement from "./Pages/ProjectManagement";

import Construction from "./Pages/Construction";

const App = () => {
   const token = AuthService.getToken()
  const isAuthenticated = checkToken(token) // Verifikimi i tokenit

  

  return (
    <BrowserRouter>
      <Products>
        <Routes>
   {/* <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} /> */}
      
          <Route path="/" element={<HomePage />} />
          <Route path="/loader" element={<Loader />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/energy" element={<Energy />} />
          <Route path="/water" element={< Water/>} />
          <Route path="/consulting" element={< Consulting/>} />
          <Route path="/analycis-and-conceptual" element={< AnalycisAndConceptual/>} />
          <Route path="/project-supervision" element={< ProjectSupervision/>} />
          <Route path="/project-management" element={< ProjectManagement/>} />
          <Route path="/construction" element={< Construction/>} />
        </Routes>
      </Products>
    </BrowserRouter>
  );
};

export default App;

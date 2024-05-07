import React from "react";
import footer from "../assets/Logo1.png";
import { Link } from "react-router-dom";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-container h-[40vh] md:h-[30vh]  ">
      <div className="max-w-[1250px] mx-auto pt-6 flex justify-between  ">
     
        <div className="flex flex-col text-white  md:text-sm text-xs ">
          <img className="w-48 h-16" src={footer} alt="" />
         <p className="pt-2 ">Adresse : Täfernstrasse 2a 5405 Dättwil</p>
         <p className="pt-2  hover:underline">Phone : <Link to="tel:+1234567890"> 079 586 00 92</Link></p>
         <p className="pt-2  hover:underline">Phone : <Link to="tel:+1234567890">044 593 54 11</Link></p>
         <p className="pt-2  hover:underline">Email : <Link to="mailto:edma@gmx.ch">edma@gmx.ch</Link></p>
        </div>
 

         <div className="flex justify-evenly w-[69%]  ">
        <div className="text-white md:text-sm text-xs ">
          <h2 className="pb-8 text-base">LINK</h2>
          <p className="hover:underline  "><Link to="/">Home</Link></p>
          <p className="hover:underline pt-1" ><Link to="/about"> About</Link></p>
          <p className="hover:underline  pt-1"><Link to="/services">Services</Link></p>
          <p className="hover:underline  pt-1"><Link to="/projects"> Projects</Link></p>
         <p className="hover:underline  pt-1"><Link to="/contact"> Contact</Link></p>
        </div>
        <div className="text-white">
        <h2 className="pb-8 ">COPYRIGHT</h2>
        <p className="md:text-sm text-xs "> Copyright © <span>{currentYear}</span> | EDMA</p>
          
        
        </div>
         </div>
      </div>
    </footer>
  );
};

export default Footer;

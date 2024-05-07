import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import project1 from "../assets/project2.jpeg"
import project2 from "../assets/project3.jpeg"
import { Link } from "react-router-dom";

const Project2 = () => {
  return (
    <div>
      <NavBar />
      <div className="flex  mx-auto pt-24 justify-around">
        
        <div className=" flex flex-col  mb-24">
            <img className="w-[75%]" src={project1} alt="" />
            <img  className="w-[75%]  pt-8" src={project2} alt="" />
        </div>
        <div className="border-black border-2 h-[650px] w-[400px] ">
          <h1 className="p-8 text-3xl">SPOT-TEC IMMOBILIEN AG</h1>
          <p className="ml-16 text-sm border-y-[1px]  mb-4 border-blue-400 w-56 ease-in-out duration-300 hover:w-80"> Spot-tec Immobilien AG</p>
          <h3 className=" pb-8  ml-16 ">STANDORT:</h3>
          <p className=" text-sm border-b-[1px] mb-4 border-blue-400 w-56 ml-16 ease-in-out duration-300 hover:w-80"> 5610 Wohlen AG</p>
          <h3 className=" pb-8 ml-16">ARCHITEKTUR:</h3>
          <p className=" text-sm border-b-[1px] mb-4 border-blue-400 w-56 ml-16 ease-in-out duration-300 hover:w-80"> Iuliano Baumanagement GmbH:</p>
          <h3 className=" pb-8 ml-16">GU:</h3>
          <p className=" text-sm border-b-[1px] mb-4 border-blue-400 w-56 ml-16 ease-in-out duration-300 hover:w-80"> EDMA GmbH</p>
          <h3 className=" pb-8 ml-16">JAHR:</h3>
          <p className=" text-sm border-b-[1px] mb-4 border-blue-400 w-56 ml-16 ease-in-out duration-300 hover:w-80">2018</p>
           <div className="mt-16 border-t-2 border-slate-200 w-3/4 mx-auto flex justify-between ">
            <Link to="/project/project1">        <svg class="w-6 h-6 mt-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
</svg> </Link>
            
             <Link to="/project/project3">
             <svg class="w-6 h-6 mt-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
</svg>
             </Link>
   

           </div>
        </div>

      
      </div>
      <Footer/>
    </div>
  );
};

export default Project2;

import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import project1 from "../assets/projec1.jpeg";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.jpeg";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

const Projects = () => {
  useTitle("Project")
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  const toggleShowMoreProjects = () => {
    setShowMoreProjects(!showMoreProjects);
  };

  return (
    <div className="">
      <NavBar />
      <div className="p-28 max-w-[1200px] mx-auto">
        <h1 className="text-[32px]">PROJECTS</h1>
        <div className=" mb-10">
          <div className="flex  p-4 justify-evenly pt-2 cursor-pointer">
            <Link to="/project/project1">
            <img className="h-36 hover:scale-75 ease-in-out duration-300" src={project1} alt="" />

             </Link>
             <Link to="/project/project2">
            <img className="h-36 hover:scale-75 ease-in-out duration-300" src={project2} alt="" />

             </Link>

             <Link to="/project/project3">
             <img className="h-36 hover:scale-75 ease-in-out duration-300" src={project3} alt="" />

             </Link>
            
            {showMoreProjects && (
            <img className="h-36 hover:scale-75 ease-in-out duration-300" src={project2} alt="" />

                 )}
          </div>
          {showMoreProjects && (
              <div className="transition-all duration-500 flex p-4 justify-evenly pt-2">
                <img className="h-36 hover:scale-75 ease-in-out duration-300" src={project1} alt="" />
                <img className="h-36 hover:scale-75 ease-in-out duration-300" src={project2} alt="" />
                <img className="h-36 hover:scale-75 ease-in-out duration-300" src={project3} alt="" />
                <img className="h-36 hover:scale-75 ease-in-out duration-300" src={project2} alt="" />
              </div>
            
          )}
          <button
            className="bg-transparent border-[1px] hover:bg-[#003D6D] mt-4 hover:text-white text-sm border-black px-4 py-2 flex mx-auto"
            onClick={toggleShowMoreProjects}
          >
            {showMoreProjects ? "Show less" : "Load more"}
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Projects;

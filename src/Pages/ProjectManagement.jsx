import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import Component from "../Components/Services/Component";
import Footer from "../Components/Footer";
import service1 from "../assets/service4.png";
import service1icon from "../assets/service4icon.png";
import Loader from "./Loader";

const ProjectManagement = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {" "}
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <NavBar />
          <Component
            title="PROJECT MANAGEMENT"
            img={service1}
            imgIcon={service1icon}
            desc="Often our clients do not know where to start their work, or planning their works, then we offer our professional help in organizing the works and the process of organizing them in a timely manner. Organizing work helps our clients to clarify and properly plan work in real time, saving time, money and enhancing quality at work.
        Every project that is well managed and in compliance with certain regulations, and that results in good success, in all aspects of construction and operation is a success and achievement, not only for you as an investor but also for us.
        Every success is yours, and every achievement is an achievement for us as well."
          />
          <Footer />
        </div>
      )}{" "}
    </>
  );
};

export default ProjectManagement;

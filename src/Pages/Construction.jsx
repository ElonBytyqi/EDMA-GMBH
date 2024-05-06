import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import Component from "../Components/Services/Component";
import Footer from "../Components/Footer";
import service1 from "../assets/service5.png";
import service1icon from "../assets/service5icon.png";
import Loader from "./Loader";

const Construction = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return <>  {isLoading ? (<Loader/>):(
      <div>
        <NavBar/>
        <Component
         title="CONSTRUCTION"
         img={service1}
         imgIcon={service1icon}
         desc="
         The construction engineering team has extensive experience in the construction of buildings of different character such as hospital buildings, wastewater treatment buildings, buildings with different uses and many different building profiles. The team works on projects from their initial design conception to completion on site along with architectural teams. They also collaborate with other engineering consultants on projects where knowledge of local codes and third-party procedures can be helpful.
         In the construction of any new building, we make sure that the building meets all building standards and norms, while maintaining the building’s durability and increasing its profitability."
        />
        <Footer/>
    </div> 
  )}
          
          </>;
};

export default Construction;

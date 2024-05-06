import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar'
import Component from '../Components/Services/Component'
import Footer from '../Components/Footer'
import service3 from "../assets/service3.png"
import service3icon from "../assets/service3icon.png"
import Loader from './Loader'

const ProjectSupervision = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
  
      return () => clearTimeout(timer);
    }, []);
 
  return (
    <>
    {isLoading? (<Loader/>):(
          <div>
        <NavBar/>
        <Component
         title="PROJECT SUPERVISION"
         img={service3}
         imgIcon={service3icon}
         desc="Professional supervision is one of the basic requirements for any type of construction, of different characters and profiles. The role of the engineer in professional supervision is to save the investor and ensure that construction is done according to the rules and norms. At the time of engagement, the professional supervisor becomes the investor’s protective side, and has a duty to protect his interests. Every business, or residential, street, and everything in the field of construction, and beyond, needs a professional supervisor so that work and construction can comply with the project and applicable laws.
         Any work done requires professional supervision, so that the results of the final work do not disappoint you. Oversight eliminates errors that can have major consequences that can have a major impact on the progress of the project. All of these can be solved with the help of engineers and managers, who with their knowledge and experience help to eliminate problems and obstacles that may arise during project implementation."
        />
        <Footer/>
    </div>
    )} 
  
    </>
  )
}

export default ProjectSupervision
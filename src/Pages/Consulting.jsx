import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar'
import Component from '../Components/Services/Component'
import Footer from '../Components/Footer'
import service1 from "../assets/service1.png"
import service1icon from "../assets/service1icon.png"
import Loader from './Loader'

const Consulting = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
  
      return () => clearTimeout(timer);
    }, []);
  return ( 

    <>
   
      {isLoading ? (<Loader/>) : (
    <div>
         <NavBar/>
        <Component
         title="CONSULTING AND STUDIES"
         img={service1}
         imgIcon={service1icon}
         desc="Consulting with engineers is key to the success of any project and planning. Consulting with engineers from different fields of different profiles and situations helps to ease or clarify the problem to a certain extent and space. We offer professional advice from professionals in certain fields, helping our clients make better decisions about where they live or work, always striving to achieve a high level of professionalism.
Our company specializes in the field of hospital building design, sewage treatment, heating and irrigation systems and many different
 buildings, so consulting in these areas and beyond is not a problem for our professionals."
        />
        <Footer/>
    </div>
            
        )}
      </>
  )
}

export default Consulting
import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar'
import Component from '../Components/Services/Component'
import Footer from '../Components/Footer'
import service2 from "../assets/service22.png"
import service2icon from "../assets/service2Icon.png"
import Loader from './Loader'

const AnalycisAndConceptual = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
  
      return () => clearTimeout(timer);
    }, []);
  return ( 
  <>
        {isLoading?(<Loader/>):
        (  <div>
              <NavBar/>
        <Component
         title="ANALYSIS AND CONCEPTUAL DESING"
         img={service2}
         imgIcon={service2icon}
         imgHeight="250px"
         desc="Our priority is to design the best buildings, places and spaces for living, work and activities. We develop conceptual designs to the final details, based on customer requirements, referring to the construction conditions and criteria, in order to protect the continuity of the design concept and build quality. Good design, based on conception within the location, is the key to adequate and quality design.
         Uncertainty about various issues about the actual condition of the building, brings confusion in the economic market and vice versa. With the help of our professional, licensed professionals the actual condition of the building can be analyzed in terms of respecting the client, the user and the space in which it is located, without harming any party, in order to achieve the most accurate assessment of the condition of the building .
         The exterior of the building often determines the importance and function of the object. The exterior is of great importance in shaping the identity of the building and its function. The beautiful design, based on the developments and materials of the time, creates harmony of the building and adaptation within the space itself."
        />
        <Footer/>  </div>
        )}
      
  </>
  )
}

export default AnalycisAndConceptual
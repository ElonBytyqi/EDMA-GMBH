import React, { useState, useEffect } from 'react';
import HeimContent from '../Components/HeimContent';
import Specilization from '../Components/Specilization';
import Slideshow from '../Components/Slideshow';
import Clients from '../Components/Clients';
import Loader from './Loader';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';


const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
        <NavBar/>
          <HeimContent />
          <Specilization name="WHAT WE DO" title="Our specilization" p1="ARCHITECTURE & INFRASTRUCTURE" p2="HVAC ENGINEERING " p3="WWTP" desc1="We are keen to adapt 
                    our projects to the latest developments and using the high-end technology by always being focused in the clients requests, which we consider the key to success.</p>
            " desc2="Our range and technical expertise  ensures we offer a convenient solution for the mechanical services industry that is the best in our region." desc3="Project Plus has a host of innovative solutions on offer, not to mention a wealth of knowledge and regional experience on completing turnkey projects for Waste Water Treatment Plants." />
          <Slideshow />
          <Clients />
          <Footer/>
        </>
      )}
    </>
  );
};

export default HomePage;

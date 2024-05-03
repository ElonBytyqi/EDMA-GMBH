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
          <Specilization />
          <Slideshow />
          <Clients />
          <Footer/>
        </>
      )}
    </>
  );
};

export default HomePage;

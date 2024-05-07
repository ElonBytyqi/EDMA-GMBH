import React, { useState, useEffect } from 'react';
import Navbar from '../NavBar';
import Footer from '../Footer';
import { useTitle } from '../../hooks/useTitle';

const Component = ({ title, img, imgIcon, desc, imgHeight }) => {
  const [scale, setScale] = useState(1);
useTitle("Service");
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setScale(0.98);
    }, 1200); 
  

  
      
    return () => {
      clearTimeout(timer1);
   
     
    };
  }, []);

  return (
    <div className='max-w-[1200px] mx-auto pt-40'>
      <h1 className='text-[36px] mb-6 '>{title}</h1>
      <img className='max-w-full h-auto align-top' src={img} alt='' />
      <div className='flex mt-12 justify-between mb-36'>
        <img
          style={{ height: imgHeight, transform: `scale(${scale})` }}
          className='h-[280px] max-h-[300px] min-h-[300px] mt-4'
          src={imgIcon}
          alt=''
        />
        <p  style ={{ transform: `scale(${scale})`}}className='font-apple text-sm text-justify pl-32 tracking-normal leading-9 pt-10'>
          {' '}
          {desc}
        </p>
      </div>
     
    </div>
  );
};

export default Component;

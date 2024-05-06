import React from 'react';
import Header from '../Components/Header';
import ArchitectureCom from '../Components/ArchitectureCom';
import Footer from '../Components/Footer';



const Water = () => {
  return (
    <div >
      <Header />
      
      <ArchitectureCom 
      title="WATER & INFRASTRUCTURE"
      desc="Infrastructure is the fundamental facilities and systems serving a country, city, or other area, including the services and facilities necessary for its economy to function. Infrastructure is composed of public and private physical improvements such as roads, railways, bridges, tunnels, water supply, sewers, electrical grids, and telecommunications (including Internet connectivity and broadband speeds). In general, it has also been defined as “the physical components of interrelated systems providing commodities and services essential to enable, sustain, or enhance societal living conditions”.

      There are two general types of ways to view infrastructure, hard or soft. Hard infrastructure refers to the physical networks necessary for the functioning of a modern industry. This includes roads, bridges, railways, etc. Soft infrastructure refers to all the institutions that maintain the economic, health, social, and cultural standards of a country. This includes educational programs, official statistics, parks and recreational facilities, law enforcement agencies, and emergency services.
      
      Infrastructure is the term for the basic physical systems of a business or nation—transportation, communication, sewage, water, and electric systems are all examples of infrastructure. These systems tend to be high-cost investments and are vital to a country’s economic development and prosperity. Projects related to infrastructure improvements may be funded publicly, privately, or through public-private partnerships. In economic terms infrastructure often involves the production of public goods or production processes that support natural monopolies."
      
      button="View Projects"
      buttonWidth="180px" // Set custom width for the button
      />
  
     <Footer/>
  
      </div>
    
   
  );
};

export default Water;

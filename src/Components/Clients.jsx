// Clients.js
import React, { useState } from 'react';
import clientData from '../db.json'; // Import client data from db.json
import Modal from './Modal'; // Import the Modal component

const Clients = () => {
  const [selectedClient, setSelectedClient] = useState(null);

  const openModal = (client) => {
    setSelectedClient(client);
    console.log("Modal opened for:", client.name); // Add this line for debugging
  };

  const closeModal = () => {
    setSelectedClient(null);
  };

  return (
    <div className='md:mt-[15pc] mt-[5pc] max-w-[1250px] m-auto min-h-[80vh] mb-24 dark:text-white '>
      <h3 className='text-center mb-[9px] text-[12px] font-normal tracking-[.2em] text-[#AFAFAF]'>AWESOME PARTNER</h3>
      <h1 className='text-center text-[38px] pb-12'>Our Clients</h1>
      <div className='grid md:grid-cols-4 grid-cols-3 gap-4 dark:gap-8'>
        {clientData.clients.map(client => (
          <img
            key={client.id}
            className='filter grayscale-[100%] hover:filter-none cursor-pointer dark:bg-white dark:rounded-2xl '
            src={client.logo}
            alt={client.name}
            onClick={() => openModal(client)} // Attach onClick event here
          />
        ))}
      </div>
      {selectedClient && (
        <Modal client={selectedClient} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Clients;

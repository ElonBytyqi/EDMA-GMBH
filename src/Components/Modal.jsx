// Modal.js
import React from 'react';
import "./modal.css"

const Modal = ({ client, closeModal }) => {
  return (
    <div className="modal dark:text-black ">
      <div className="modal-content ">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2 className='pb-8 font-bold text-blue-800 '>{client.name}</h2>
        <img className='h-20 rounded-md' src={client.logo} alt={client.name} />
        <p className='pt-4 dark:text-black '>{client.description}</p>
      </div>
    </div>
  );
};

export default Modal;

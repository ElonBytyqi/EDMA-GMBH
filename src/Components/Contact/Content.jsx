import React, { useState } from "react";

const Content = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePhoneChange = (event) => {
      setPhone(event.target.value);
    };
  
    const handleMessageChange = (event) => {
      setMessage(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (name === '' || email === '' || phone === '' || message === '') {
        alert('Please fill in all fields.');
      } else {
        // Perform form submission logic
        console.log('Form submitted:', { name, email, phone, message });
        // Reset form inputs
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      }
    };
  
    


   
  return (
    <div className="max-w-[1200px] pt-[8pc] mx-auto">
      <div>
        <h3 className="text-4xl px-2">KONTAKTIERE UNS</h3>
        <p className="text-[#888] px-8 pt-8 font-normal text-[12px] mt-[20px] tracking-widest">
          LASSEN SIE UNS ZUSAMMENARBEITEN
        </p>
        <h2 className="text-[47px] px-8 pt-5 tracking-wider leading-[1.2]">
          Gemeinsam können wir Träume wahr werden lassen
        </h2>
      </div>
      <div>
        <iframe
          className="my-28  px-8"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5185.457679272899!2d8.292239!3d47.448516!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479013414f8a180b%3A0x91ffa2c7a6c3d396!2sT%C3%A4fernstrasse%202A%2C%205405%20Baden%2C%20Switzerland!5e1!3m2!1sen!2sus!4v1714936454739!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="px-8 flex justify-between mb-40  h-[25vh]">
        <div>
          <p>ADRESSE:</p>
          <p>Täfernstrasse 2a 5405 Dättwil</p>
          <p>TELEFONNUMMER:</p>
          <p>079 586 00 92</p>
          <p>044 593 54 11</p>
          <p>EMAIL:</p>
          <p>edma@gmx.ch</p>
        </div>

        <form onSubmit={handleSubmit} className="flex">
      <div className="flex flex-col justify-between mr-8">
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          className="bg-[#EEEEEE] border-none h-[49px] w-[329px]"
          placeholder="Name"
          style={{ color: '#888888', fontSize: '14px' }}
        />

        <input
          type="text"
          value={email}
          onChange={handleEmailChange}
          className="bg-[#EEEEEE] border-none h-[49px] w-[329px]"
          placeholder="E-Mail-Adresse"
          style={{ color: '#888888', fontSize: '14px' }}
        />

        <input
          type="text"
          value={phone}
          onChange={handlePhoneChange}
          className="bg-[#EEEEEE] border-none h-[49px] w-[329px]"
          placeholder="Telefon"
          style={{ color: '#888888', fontSize: '14px' }}
        />
      </div>

      <div className="flex flex-col h-72">
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handleMessageChange}
          className="bg-[#EEEEEE] border-none min-h-[184.4px] max-h-[184.4px] w-[329px]"
          placeholder="Nachricht*"
          style={{ color: '#888888', fontSize: '14px' }}
          required
        ></textarea>

        <button
          className="bg-[#003d6d] text-white leading-9 mt-8 h-11 w-36 text-sm font-extralight ease-in-out duration-300 hover:bg-[#33648A]"
          type="submit"
        >
          Nachricht senden
        </button>
      </div>
    </form>
      </div>
    </div>
  );
};

export default Content;

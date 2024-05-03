import React from 'react'

import client1 from "../assets/Client1.png"
import client2 from "../assets/Client2.png"
import client3 from "../assets/Client3.png"
import client4 from "../assets/Client4.png"

const Clients = () => {
  return (
    <div className='mt-[15pc] max-w-[1250px]  m-auto min-h-[80vh] mb-24'>
    <h3 className='text-center
    mb-[9px] text-[12px] font-normal tracking-[.2em] text-[#AFAFAF]'>AWESOME PARTNER</h3>

    <h1 className='text-center text-[38px] pb-12'>Our Clients</h1>

    <div className='grid grid-cols-4 gap-4'>
    <img className='filter grayscale-[100%] hover:filter-none' src={client1} alt="" />
    <img className='filter grayscale-[100%] hover:filter-none' src={client2} alt="" />
    <img className='filter grayscale-[100%] hover:filter-none' src={client3} alt="" />
    <img className='filter grayscale-[100%] hover:filter-none' src={client4} alt="" />
    <img className='filter grayscale-[100%] hover:filter-none' src={client1} alt="" />
    <img className='filter grayscale-[100%] hover:filter-none' src={client1} alt="" />
    <img className='filter grayscale-[100%] hover:filter-none' src={client2} alt="" />
    <img className='filter grayscale-[100%] hover:filter-none' src={client3} alt="" />
    <img className='filter grayscale-[100%] hover:filter-none' src={client4} alt="" />
    <img className='filter grayscale-[100%] hover:filter-none' src={client4} alt="" />
    <img className='filter grayscale-[100%] hover:filter-none' src={client4} alt="" />
</div>



  
</div>
  )
}

export default Clients
import React from 'react'

import client1 from "../assets/Client1.png"
import client2 from "../assets/Client2.png"
import client3 from "../assets/Client3.png"
import client4 from "../assets/Client4.png"
import client5 from "../assets/client5.png"
import client6 from "../assets/client6.png"
import client7 from "../assets/client7.png"
import client8 from "../assets/client8.png"
import client9 from "../assets/client9.png"
import client10 from "../assets/client10.png"
import client11 from "../assets/client11.png"
import client12 from "../assets/client12.png"
import client13 from "../assets/client13.png"
import client14 from "../assets/client14.png"

const Clients = () => {
  return (
    <div className='mt-[15pc] max-w-[1250px]  m-auto min-h-[80vh] mb-24'>
    <h3 className='text-center
    mb-[9px] text-[12px] font-normal tracking-[.2em] text-[#AFAFAF]'>AWESOME PARTNER</h3>

    <h1 className='text-center text-[38px] pb-12'>Our Clients</h1>

    <div className='grid grid-cols-4 gap-4 '>
    <img className='filter grayscale-[100%] hover:filter-none cursor-pointer' src={client1} alt="" />
    <img className='filter grayscale-[100%] hover:filter-none cursor-pointer' src={client2} alt="" />
    <img className='filter grayscale-[100%] hover:filter-none cursor-pointer' src={client3} alt="" />
    <img className='filter grayscale-[100%] hover:filter-none cursor-pointer' src={client4} alt="" />
    <img className='filter grayscale-[100%] hover:filter-none cursor-pointer' src={client5} alt="" />
    <img className='filter grayscale-[100%] hover:filter-none cursor-pointer' src={client6} alt="" />
    <img className='filter grayscale-[100%] hover:filter-none cursor-pointer' src={client7} alt="" />
    <img className='filter grayscale-[100%] hover:filter-none cursor-pointer' src={client8} alt="" />
    <img className='filter grayscale-[100%] hover:filter-none cursor-pointer' src={client9} alt="" />
    <img className='filter grayscale-[100%] hover:filter-none cursor-pointer' src={client10} alt="" />
    <img className='filter grayscale-[100%] hover:filter-none cursor-pointer' src={client11} alt="" />
    <img className='filter grayscale-[100%] hover:filter-none cursor-pointer' src={client12} alt="" />
    <img className='filter grayscale-[100%] hover:filter-none cursor-pointer' src={client13} alt="" />
 
</div>



  
</div>
  )
}

export default Clients
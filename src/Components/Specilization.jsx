import React from 'react'
import foto1 from "../assets/foto1.png"
import foto2 from "../assets/foto2.png"
import foto3 from "../assets/foto3.png"

const Specilization = () => {
  return (
    <div className='mt-[15pc] max-w-[1250px]  m-auto min-h-[80vh] mb-24'>
        <h3 className='text-center
        mb-[9px] text-[12px] font-normal tracking-[.2em] text-[#AFAFAF]'>WHAT WE DO</h3>

        <h1 className='text-center text-[38px] pb-12'>Our specilization</h1>

        <div className='flex w-full  justify-between items-center'>
            <div className='flex flex-col justify-center items-center w-[32%] h-350px '>
                <img className=' ease-in duration-300 hover:scale-110 mb-8 pb-8     ' src={foto1} alt="" />
                <h3 className='pb-4 text-base text-[#222] '>ARCHITECTURE & INFRASTRUCTURE</h3>
                <p  className='w-[340px]  text-justify font-apple text-base text-[#999]'>We are keen to adapt 
                    our projects to the latest developments and using the high-end technology by always being focused in the clients requests, which we consider the key to success.</p>
            </div>

            <div className='flex flex-col justify-center items-center w-[32%] h-auto '>
                <img className=' ease-in duration-300 mb-8 pb-8   hover:scale-110' src={foto2} alt="" />
                <h3 className='pb-4 text-base text-[#222] '>HVAC ENGINEERING</h3>
                <p className='w-[340px] mb-10  text-justify font-apple text-base  text-[#999] ' >Our range and technical expertise  ensures we offer a convenient solution for the mechanical services industry that is the best in our region.</p>
            </div>

            <div className='flex flex-col justify-center items-center w-[32%] h-350px '>
                <img className=' ease-in duration-300 hover:scale-110 mb-8 pb-8   ' src={foto3} alt="" />
                <h3 className='pb-4 text-base text-[#222] '>WWTP</h3>
                <p  className='w-[340px] mb-4  text-justify font-apple text-base text-[#999]'>Project Plus has a host of innovative solutions on offer, not to mention a wealth of knowledge and regional experience on completing turnkey projects for Waste Water Treatment Plants.</p>
            </div>
        </div>
    </div>
  )
}

export default Specilization
import React from 'react'
import { useTitle } from '../hooks/useTitle'

const ArchitectureCom = ({title, desc, button,buttonWidth}) => {
  useTitle("Busisness Sectors")
  return (
    <div className='pt-36 max-w-[1200px] mx-auto'>
        <h1 className='text-[36px] mb-2 leading-[1.2] font-sans font-normal'>{title}</h1>
        <p className='font-apple text-[14px] text-justify leading-9 mt-8 tracking-wide'>{desc}</p>
        
        <div>
            
        </div>
        <div  style={{ width: buttonWidth }} className='mb-36 flex items-center justify-around bg-[#0088CC] w-[215px] h-14 mt-6  pr-6  py-2 shadow pl-2 hover:shadow-none hover:scale-y-110'> {/* Shtoni klasën 'flex items-center' */}
  <button  className='whitespace-nowrap text-white  '>{button}</button>
  <svg class="w-6 h-6  text-white ml-2 font-extrabold cursor-pointer  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
  </svg>
</div>
</div>
  )
}

export default ArchitectureCom
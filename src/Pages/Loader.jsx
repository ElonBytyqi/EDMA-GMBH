import React, { useEffect, useState } from 'react';
import logo from "../assets/Logo1.png";

const Loader = () => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsActive(prevState => !prevState);
        }, 500); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='w-full h-screen flex justify-center items-center bg-[#1E1C1B]'>
            <div className="animate-pulse">
                <img
                    className={`transform transition duration-300 ${
                        isActive ? 'h-14' : 'h-12'
                    }`}
                    src={logo}
                    alt=""
                />
            </div>
        </div>
    );
}

export default Loader;

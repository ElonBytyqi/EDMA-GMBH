import React from "react";
import foto1 from "../assets/foto1.png";
import foto2 from "../assets/foto2.png";
import foto3 from "../assets/foto3.png";

const Specilization = ({ name, title, p1, p2, p3, desc1, desc2, desc3,desc3Style,desc1Style }) => {
  return (
    <div className="md:mt-[15pc] max-w-[1250px]  m-auto min-h-[80vh] mb-24  dark:text-white">
      <h3
        className="text-center dark:text-white
        mb-[9px] text-[12px] font-normal tracking-[.2em] text-[#AFAFAF]"
      >
        {name}
      </h3>

      <h1 className="text-center dark:text-white text-[38px] pb-12">{title}</h1>

      <div className="md:flex md:flex-row w-full flex-col justify-center items-start text-center   md:justify-between md:items-center">
        <div className="flex flex-col justify-center items-center w-[32%] h-350px ml-44 md:ml-0 pt-20 md:pt-4 ">
          <img
            className=" ease-in duration-300 hover:scale-110 mb-8 pb-8   dark:text-white   "
            src={foto1}
            alt=""
          />
          <h3 className="pb-4 text-base text-[#222] dark:text-white ">{p1}</h3>
          <p style={desc1Style} className="w-[380px]  text-justify font-apple text-base text-[#999]">
            {desc1}{" "}
          </p>{" "}
        </div>

        <div className="flex flex-col justify-center items-center w-[32%] h-auto ml-44 md:ml-0 pt-20 md:pt-4 ">
          <img
            className=" ease-in duration-300 mb-8 pb-8   hover:scale-110"
            src={foto2}
            alt=""
          />
          <h3 className="pb-4 text-base text-[#222] dark:text-white ">{p2}</h3>
          <p className="w-[380px] mb-10  text-justify font-apple text-base  text-[#999]  md:ml-0 p  ">
            {desc2}
          </p>
        </div>

        <div className="flex flex-col justify-center items-center w-[32%] h-350px ml-40 md:ml-0 pt-20 md:pt-4  ">
          <img
            className=" ease-in duration-300 hover:scale-110 mb-8 pb-8   "
            src={foto3}
            alt=""
          />
          <h3 className="pb-4 text-base text-[#222 dark:text-white] "> {p3}</h3>
          <p style={desc3Style} className="w-[380px] mb-4  text-justify font-apple text-base text-[#999]">
            {desc3}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Specilization;

import React from "react";
import foto1 from "../assets/foto1.png";
import foto2 from "../assets/foto2.png";
import foto3 from "../assets/foto3.png";

const Specilization = ({ name, title, p1, p2, p3, desc1, desc2, desc3,desc3Style,desc1Style }) => {
  return (
    <div className="mt-[15pc] max-w-[1250px]  m-auto min-h-[80vh] mb-24 ">
      <h3
        className="text-center
        mb-[9px] text-[12px] font-normal tracking-[.2em] text-[#AFAFAF]"
      >
        {name}
      </h3>

      <h1 className="text-center text-[38px] pb-12">{title}</h1>

      <div className="flex w-full  justify-between items-center">
        <div className="flex flex-col justify-center items-center w-[32%] h-350px ">
          <img
            className=" ease-in duration-300 hover:scale-110 mb-8 pb-8     "
            src={foto1}
            alt=""
          />
          <h3 className="pb-4 text-base text-[#222] ">{p1}</h3>
          <p style={desc1Style} className="w-[380px]  text-justify font-apple text-base text-[#999]">
            {desc1}{" "}
          </p>{" "}
        </div>

        <div className="flex flex-col justify-center items-center w-[32%] h-auto ">
          <img
            className=" ease-in duration-300 mb-8 pb-8   hover:scale-110"
            src={foto2}
            alt=""
          />
          <h3 className="pb-4 text-base text-[#222] ">{p2}</h3>
          <p className="w-[380px] mb-10  text-justify font-apple text-base  text-[#999] ">
            {desc2}
          </p>
        </div>

        <div className="flex flex-col justify-center items-center w-[32%] h-350px ">
          <img
            className=" ease-in duration-300 hover:scale-110 mb-8 pb-8   "
            src={foto3}
            alt=""
          />
          <h3 className="pb-4 text-base text-[#222] "> {p3}</h3>
          <p style={desc3Style} className="w-[380px] mb-4  text-justify font-apple text-base text-[#999]">
            {desc3}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Specilization;

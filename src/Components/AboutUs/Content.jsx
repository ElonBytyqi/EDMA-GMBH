import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo.png";

const Content = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      if (count1 < 13) {
        setCount1(count1 + 1);
      }
    }, 10);

    const interval2 = setInterval(() => {
      if (count2 < 200) {
        setCount2(count2 + 1);
      }
    }, 10);

    const interval3 = setInterval(() => {
      if (count3 < 400) {
        setCount3(count3 + 1);
      }
    }, 10);  
    
    const interval4 = setInterval(() => {
      if (count4 < 50) {
        setCount4(count4 + 1);
      }
    }, 10);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
    };
  }, [count1, count2, count3,count4]);
  return (
    <div className="max-w-[1200px] mx-auto pt-32 ">
      <div className="p-6">
        <h2 className="text-4xl text-[#222] mb-[2px] ">ÜBER UNS</h2>
        <p className="text-center text-3xl font-sans mb-16 mt-12">
          {" "}
          Wir entwickeln Projekte von der Konzeption bis zu den letzten Details
        </p>
        <img className="h-44  mx-auto mb-10" src={logo} alt="" />
      </div>

      <div className="flex w-full justify-between h-[50vh] mt-8">
        <div className="">
        <div className="flex  ">
    <div className=" bg-slate-50 w-28 h-28 relative flex justify-center items-center">
      <div className="text-center">
        <span className="text-3xl block">{count1} +</span>
        <h5 className="mt-2 text-sm whitespace-nowrap pl-36 text-[#9C9E9C]">LANGJÄHRIGEER FAHRUNG</h5>
      </div>
    </div>

    <div className="bg-slate-50 w-28 h-28 relative flex justify-center items-center ml-32  ">
      <div className="text-center">
        <span className="text-3xl block">{count2} +</span>
        <h5 className="mt-2 text-sm whitespace-nowrap ml-20 text-[#9C9E9C]">ZUFRIEDENE KUNDEN
</h5>
      </div>
    </div>
  </div>

  <div className="flex mt-4">
    <div className="bg-slate-50 w-28 h-28 relative flex justify-center items-center mt-12">
      <div className="text-center">
        <span className="text-3xl block">{count3} +</span>
        <h5 className="mt-2 text-sm whitespace-nowrap pl-[75px] text-[#9C9E9C]">FERTIGE PROJEKTE
</h5>
      </div>
    </div>

    <div className="bg-slate-50 w-28 h-28 relative flex justify-center items-center ml-32 mt-12">
      <div className="text-center">
        <span className="text-3xl block">{count4} +</span>
        <h5 className="mt-2 text-sm whitespace-nowrap pl-[45px] text-[#9C9E9C] ">DESIGNPREISE</h5>
      </div>
    </div>
  </div>

          
        </div>

        <div className="w-1/2 font-apple">
          <p className="font-apple text-justify leading-9">
            <span className="font-bold"> EDMA GmbH</span> wurde im Jahr 2010 von einem Expertenteam des
            Maschinenbaus gegründet und hat über einen Zeitraum von mehr als
            einem Jahrzehnt mehr als 400 Projekte mit unterschiedlichem
            Fachwissen im Bereich Bauingenieurwesen und Beratung abgeschlossen.
              
            </p>
            <p className="font-apple text-justify leading-9">
            Im Laufe der Entwicklung zahlreicher Bauprojekte sowie der Planung
            und Umsetzung schlüsselfertiger Projekte haben wir ein tiefes
            Verständnis dafür gewonnen, wie wir die Effizienz optimieren und
            maximieren und gleichzeitig die Auswirkungen auf die Umwelt
            minimieren können.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;

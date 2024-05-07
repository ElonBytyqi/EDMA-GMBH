import React from 'react';
import content from "../assets/contet.png";

const HeimContent = () => { // Accept language as a prop




  return (
    <div className='flex justify-center max-w-[1250px] m-auto min-h-[650px] pt-[10pc] dark:text-white'>
      <div className='w-[50%] heim'>
        <h3 className='md:text-[13px]text-[6px] text-[#999] font-normal mb-4 tracking-[0.2em]'>ÜBER UNS</h3>
        <p className='w-[85%] font-normal mb-8 text-[23px] md:text-[30px]'>EDMA ist ein Beratungs- und Bauingenieurunternehmen, das auf die Planung, Überwachung und den Bau öffentlicher und privater Projekte spezialisiert ist.</p> {/* Render the description */}
        <p className='md:text-lg text-[15px] tracking-wider leading-6 mb-24 bd:pb-0 md:leading-7 font-apple'> 
        Es wurde im Jahr 2010 von einem Team von Ingenieurexperten gegründet und hat über einen Zeitraum von mehr als einem Jahrzehnt mehr als 400 Projekte mit unterschiedlichem Fachwissen im Bereich Bauingenieurwesen und Beratung abgeschlossen. Wir sind bestrebt, unsere Projekte an die neuesten Entwicklungen anzupassen und die Spitzentechnologie zu nutzen, wobei wir uns stets auf die Wünsche des Kunden konzentrieren, die wir als Schlüssel zum Erfolg betrachten. Unser Ziel ist es, unsere Projekte mit hoher Qualität, Funktionalität, Ästhetik und Gebrauchstauglichkeit zu entwickeln, indem wir Ideen und Ratschläge dazu liefern, wie der Raum aussehen wird, in dem Sie leben, arbeiten oder entspannen </p>
      </div>
      <div className='edma w-50% pl-12'>
        <img className='w-[450px] h-[450px]' src={content} alt="" />
        <span className='top-[455px] right-[210px] absolute inline-block w-[230px] h-[230px] border-t-transparent border-l-transparent border-2'></span>
        <span className='top-[255px] right-[408px] absolute inline-block w-[230px] h-[230px] border-r-transparent border-b-transparent border-2'></span>
        <div>
          <p className='top-[270px] right-[288px] flex items-start absolute w-[230px] h-[230px] text-white text-center font-medium text-[210px] font-apple'> 15 </p>
          <p className='top-[580px] right-[338px] flex items-start absolute h-[230px] text-white font-medium text-[14px] font-apple tracking-widest'> YEARS OF EXPERIENCE </p>
        </div>
      </div>
    </div>
  );
}

export default HeimContent;

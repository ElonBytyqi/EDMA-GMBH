import React from 'react';
import Header from '../Components/Header';
import ArchitectureCom from '../Components/ArchitectureCom';
import Footer from '../Components/Footer';



const Architecture = () => {
  return (
    <div >
      <Header />
      
      <ArchitectureCom 
      title="DIE ARCHITEKTUR"
      desc="Unsere Priorität ist es, die besten Einrichtungen und Gebäude für Wohnen, Arbeiten und Freizeit zu entwerfen. Wir entwickeln Projekte vom Konzeptentwurf bis zu den endgültigen Details, basierend auf den Anforderungen des Kunden und unter Berücksichtigung der Baukriterien und -bedingungen, mit dem alleinigen Ziel, die Kontinuität des Konzeptentwurfs und des Gebäudes mit hoher Qualität zu gewährleisten. Gutes Design, das auf der Wahrnehmung vor Ort basiert, ist der Schlüssel zu adäquatem und qualitativ hochwertigem Design.

      In diesem Tätigkeitsfeld plant unser professionelles Team aus erfahrenen Architekten, Statikern, Bauingenieuren und Detailplanern oberirdische Bauwerke, die mit einem hohen technischen Standard ausgestattet sind. Solche Projekte werden von uns in allen Phasen umfassend betreut. Mit Schweizer Standards für Gesundheits-, Bildungs-, Sport-, Verwaltungs-, Hotel- und Industriegebäude."
      button="Projekte anzeigen"
      />
  
     <Footer/>
  
      </div>
    
   
  );
};

export default Architecture;

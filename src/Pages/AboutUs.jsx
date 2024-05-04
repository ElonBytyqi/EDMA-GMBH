import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import Content from "../Components/AboutUs/Content";
import Specilization from "../Components/Specilization";
import Footer from "../Components/Footer";
import Loader from "./Loader";

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <NavBar />
          <Content />
          <Specilization
            name="WAS WIR TUN"
            title="Ihre Spezialisierung"
            p1="UNSERE AUFGABE"
            p2="WER WIR SIND? "
            p3="UNSERE VISION"
            desc1="Unsere Hauptaufgabe besteht darin, unsere Projekte nachhaltiger, ästhetisch ansprechender und komfortabler für die Gemeinschaft zu machen. Außerdem versuchen wir, Einrichtungen zu entwerfen, die Lebensbedingungen, Arbeitsplätze und verschiedene Aktivitäten bieten, angemessen und wirtschaftlich sind und sich in die Umgebung einfügen."
            desc2="EDMA ist ein Designstudio, das sich auf Design, Konstruktion und Überwachung spezialisiert hat. Die Tätigkeit als Designstudio begann im Jahr 2010 und realisiert seit über einem Jahrzehnt viele Projekte mit unterschiedlichem Charakter im Bereich Bau und Design. Als Unternehmen sind wir bestrebt, unsere Projekte an die neuesten Entwicklungen im Bereich Architektur und Materialien der Zeit anzupassen, immer basierend auf den Kundenanforderungen, die für den Erfolg entscheidend sind. Wir bieten Ideen und Tipps, wie es dort aussehen könnte, wo Sie leben, arbeiten oder sich ausruhen. Unser Ziel ist es, unsere Projekte qualitativ hochwertig, funktional, ästhetisch und praktisch zu gestalten. Wir bieten Dienstleistungen für verschiedene Arten von Bau und Design an. Mit qualifiziertem Personal und Professionalität bei der Bereitstellung von Dienstleistungen im Bereich der Gestaltung individueller und kollektiver Wohnanlagen, Verwaltungseinrichtungen, Abwasseraufbereitungsanlagen, Straßen- und öffentliche Infrastrukturentwässerung, Kanalisation, Wasserversorgungs- und Entwässerungskanäle, Gastronomieeinrichtungen usw. Wir bieten Ihnen Qualität, Genauigkeit und Verantwortung für unsere Projekte. Jede Ihrer Anfragen ist eine Pflicht für uns, und jede Pflicht für uns ist eine Verpflichtung."
            desc3="Project Plus has a host of innovative solutions on offer, not to mention a wealth of knowledge and regional experience on completing turnkey projects for Waste Water Treatment Plants."
            desc3Style={{ paddingBottom: "575px" }} // Corrected the style prop syntax
            desc1Style={{ paddingBottom: "500px" }} // Corrected the style prop syntax
          />
          <Footer />
        </div>
      )}
    </>
  );
};

export default AboutUs;

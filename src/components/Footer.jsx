import React, { useState } from "react";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-zinc-500 text-black p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <h2 className="font-bold mb-2 leading-tight cursor-pointer md:cursor-default md:text-lg" onClick={() => toggleSection("service")}>
              Kundenservice-Hotline
            </h2>
            <button className="block md:hidden ml-2" onClick={() => toggleSection("service")}>
              {openSection === "service" ? "▲" : "▼"}
            </button>
          </div>
          <div className={`md:block ${openSection === "service" ? "block" : "hidden"}`}>
            <p className="leading-relaxed md:text-base">Für Unterstützung und Beratung wenden Sie sich bitte an:</p>
            <p className="leading-relaxed md:text-base">Mo-Do, 7 Uhr - 17 Uhr</p>
            <p className="leading-relaxed md:text-base">Fr, 7 Uhr - 13 Uhr</p>
            <p className="leading-relaxed md:text-base">Oder über unser Kontaktformular.</p>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center">
            <h2 className="font-bold mb-2 leading-tight cursor-pointer md:cursor-default md:text-lg" onClick={() => toggleSection("company")}>
              Dr. Wilfried Müller GmbH
            </h2>
            <button className="block md:hidden ml-2" onClick={() => toggleSection("company")}>
              {openSection === "company" ? "▲" : "▼"}
            </button>
          </div>
          <div className={`md:block ${openSection === "company" ? "block" : "hidden"}`}>
            <ul>
              <li className="my-1">
                <a href="#" className="hover:underline leading-relaxed text-black md:text-base">Kontakt</a>
              </li>
              <li className="my-1">
                <a href="#" className="hover:underline leading-relaxed text-black md:text-base">Allgemeine Geschäftsbedingungen</a>
              </li>
              <li className="my-1">
                <a href="#" className="hover:underline leading-relaxed text-black md:text-base">Datenschutzrichtlinie</a>
              </li>
              <li className="my-1">
                <a href="#" className="hover:underline leading-relaxed text-black md:text-base">Impressum</a>
              </li>
              <li className="my-1">
                <a href="#" className="hover:underline leading-relaxed text-black md:text-base">Lieferbedingungen</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center">
            <h2 className="font-bold mb-2 leading-tight cursor-pointer md:cursor-default md:text-lg" onClick={() => toggleSection("services")}>
              Service
            </h2>
            <button className="block md:hidden ml-2" onClick={() => toggleSection("services")}>
              {openSection === "services" ? "▲" : "▼"}
            </button>
          </div>
          <div className={`md:block ${openSection === "services" ? "block" : "hidden"}`}>
            <ul>
              <li className="my-1">
                <a href="#" className="hover:underline leading-relaxed text-black md:text-base">Über uns</a>
              </li>
              <li className="my-1">
                <a href="#" className="hover:underline leading-relaxed text-black md:text-base">Newsletter abonnieren</a>
              </li>
              <li className="my-1">
                <a href="#" className="hover:underline leading-relaxed text-black md:text-base">Garantie</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="mt-8 text-sm text-center leading-relaxed md:text-base">
        * Alle Preise zzgl. MwSt. zuzüglich{" "}
        <a href="#" className="hover:underline">
          Versandkosten
        </a>{" "}
        und eventueller Liefergebühren, sofern nicht anders angegeben.
      </p>
    </footer>
  );
};

export default Footer;

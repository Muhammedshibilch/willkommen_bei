import React, { useState } from "react";
import { Link } from "react-router-dom";
import Defibilortors from "../Shop/Defibilortors";

const SideNav = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <>
      <div className="flex flex-col items-start p-2">
        <div className="flex flex-col space-y-2">
          <Link to={"/shop"}>
            <button className="text-black font-bold text-xl">shop</button>
          </Link>
          <Link>
            <button className="text-black font-extralight text-sm">
              Suction pumps
            </button>
          </Link>
          <Link>
            <button className="text-black font-extralight text-sm">
              Autoclaves and sterilizers
            </button>
          </Link>
          <Link>
            <button className="text-black font-extralight text-sm">
              Blood pressure measurement
            </button>
          </Link>
          <Link to={"/shop/Defibrillators"}>
            <button className="text-black font-extralight text-sm">
              Defibrillators
            </button>
          </Link>
          <Link>
            <button className="text-black font-extralight text-sm"> ECG</button>
          </Link>
          <Link to={"/shop/Flexible-endoscopes"}>
            {" "}
            <button
              onClick={() => toggleDropdown("flexibleEndoscopes")}
              className="text-black font-extralight text-sm"
            >
              Flexible endoscopes
            </button>
          </Link>
          {openDropdown === "flexibleEndoscopes" && (
            <div className="ml-4 mt-2 space-y-2">
              <Link
                to={"/shop/Flexible-endoscopes"}
                className="block text-sky-500 font-extralight text-sm"
              >
                Bronchoscopes
              </Link>
              <Link
                to={"/shop/Flexible-endoscopes"}
                className="block text-sky-500 font-extralight text-sm"
              >
                Choledochoscopes
              </Link>
              <Link
                to={"/shop/Flexible-endoscopes"}
                className="block text-sky-500 font-extralight text-sm"
              >
                Cystoscopes
              </Link>
              <Link
                to={"/shop/Flexible-endoscopes"}
                className="block text-sky-500 font-extralight text-sm"
              >
                Duodenoscopes
              </Link>
              <Link
                to={"/shop/Flexible-endoscopes"}
                className="block text-sky-500 font-extralight text-sm"
              >
                Gastroscopes
              </Link>
              <Link
                to={"/shop/Flexible-endoscopes"}
                className="block text-sky-500 font-extralight text-sm"
              >
                Hysteroscopes
              </Link>
              <Link
                to={"/shop/Flexible-endoscopes"}
                className="block text-sky-500 font-extralight text-sm"
              >
                Coloscopes
              </Link>
            </div>
          )}
          <Link>
            {" "}
            <button
              onClick={() => toggleDropdown("endoscopyColdLightSources")}
              className="text-black font-extralight text-sm"
            >
              Endoscopy-cold light sources
            </button>
          </Link>
          {openDropdown === "endoscopyColdLightSources" && (
            <div className="ml-4 mt-2 space-y-2">
              <Link className="block text-sky-500 font-extralight text-sm">
                Olympus
              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
                Other manufacturer
              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
                Storz
              </Link>
            </div>
          )}
          <Link>
            <button
              onClick={() => toggleDropdown("endoscopyfittings")}
              className="text-black font-extralight text-sm"
            >
              Endoscopy-fittings
            </button>
          </Link>
          {openDropdown === "endoscopyfittings" && (
            <div className="ml-4 mt-2 space-y-2">
              <Link className="block text-sky-500 font-extralight text-sm">
                Endoscopy Towers
              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
                Video
              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
                more fittings
              </Link>
            </div>
          )}
          <Link>
            <button className="text-black font-extralight text-sm">
              Chassis and monitor carrier
            </button>
          </Link>
          <Link>
            <button className="text-black font-extralight text-sm">
              Repository
            </button>
          </Link>
          <Link>
            <button className="text-black font-extralight text-sm">
              Gynaecology
            </button>
          </Link>
          <Link to={"/shop/HF-Surgery"}>
            <button className="text-black font-extralight text-sm">
              HF surgery
            </button>
          </Link>
          <Link to={"/shop/Infusors-perfusors"}>
            <button className="text-black font-extralight text-sm">
              Infusors perfusors
            </button>
          </Link>
          <Link>
            <button className="text-black font-extralight text-sm">
              Incubators
            </button>
          </Link>
          <Link>
            <button className="text-black font-extralight text-sm">
              Laboratory equipment
            </button>
          </Link>
          <Link>
            <button
              onClick={() => toggleDropdown("medicalantiques")}
              className="text-black font-extralight text-sm"
            >
              Medical antiques
            </button>
          </Link>
          {openDropdown === "medicalantiques" && (
            <div className="ml-4 mt-2 space-y-2">
              <Link className="block text-sky-500 font-extralight text-sm">
                Lights
              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
                Anesthesia equipment
              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
                other
              </Link>
            </div>
          )}
          <Link>
            <button className="text-black font-extralight text-sm">
              Microscope
            </button>
          </Link>
          <Link>
            <button className="text-black font-extralight text-sm">
              Furniture
            </button>
          </Link>
          <Link>
            <button
              onClick={() => toggleDropdown("monitoring")}
              className="text-black font-extralight text-sm"
            >
              Monitoring
            </button>
          </Link>
          {openDropdown === "monitoring" && (
            <div className="ml-4 mt-2 space-y-2">
              <Link className="block text-sky-500 font-extralight text-sm">
                Datex
              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
                Draeger
              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
                Hellige/Marquette
              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
                Nellcor
              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
                Siemens
              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
                other
              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
                Accessories of monitors
              </Link>
            </div>
          )}
          <Link to={"/shop/Anesthesia-and-ventilation"}>
            <button
              onClick={() => toggleDropdown("ventilation")}
              className="text-black font-extralight text-sm"
            >
              Anaesthesia and ventilation
            </button>
          </Link>
          {openDropdown === "ventilation" && (
            <div className="ml-4 mt-2 space-y-2">
              <Link className="block text-sky-500 font-extralight text-sm">
                Ventilation equipment
              </Link>
              <Link className="block text-sky-500 font-extralight text-xs">
                Pressure reducers und central gas supply
              </Link>
              <Link className="block text-sky-500 font-extralight text-xs">
                Flowmeters
              </Link>
              <Link className="block text-sky-500 font-extralight text-xs">
                Gas provision and electricity supply
              </Link>
              <Link className="block text-sky-500 font-extralight text-xs">
                Equipment fittings
              </Link>
              <Link className="block text-sky-500 font-extralight text-xs">
                Compressors,concentrators
              </Link>
              <Link className="block text-sky-500 font-extralight text-xs">
                Breathing circuit and fittings
              </Link>
              <Link className="block text-sky-500 font-extralight text-xs">
                Anesthesia equipment
              </Link>
              <Link className="block text-sky-500 font-extralight text-xs">
                Oxygen bubblers
              </Link>
              <Link className="block text-sky-500 font-extralight text-xs">
                Vapors (anaesthetic vaporisers)
              </Link>
            </div>
          )}
          <Link>
            <button
              onClick={() => toggleDropdown("investigationlights")}
              className="text-black font-extralight text-sm"
            >
              OP and investigation lights
            </button>
          </Link>
          {openDropdown === "investigationlights" && (
            <div className="ml-4 mt-2 space-y-2">
              <Link className="block text-sky-500 font-extralight text-sm">
                Bulbs
              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
                OP lights
              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
                Transformers and UPS
              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
                Investigation lights
              </Link>
            </div>
          )}
          <Link to={'/shop/Operating-tables-and-patient-trolleys'}>
            <button
              onClick={() => toggleDropdown("patienttrolleys")}
              className="text-black font-extralight text-sm"
            >
              Operating tables and patient
            </button>
          </Link>
          {openDropdown === "patienttrolleys" && (
            <div className="ml-4 mt-2 space-y-2">
              <Link className="block text-sky-500 font-extralight text-sm">
                Operating tables
              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
                Accessories for operating tables
              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
                Patient trolleys
              </Link>
            </div>
          )}
          <Link>
            <button
              onClick={() => toggleDropdown("fluoroscopy")}
              className="text-black font-extralight text-sm"
            >
              X-ray fluoroscopy
            </button>
          </Link>
          {openDropdown === "fluoroscopy" && (
            <div className="ml-4 mt-2 space-y-2">
              <Link className="block text-sky-500 font-extralight text-sm">
                Mobile c-arms
              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
                Accessories of mobile c-arms
              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
                x-ray machines
              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
                Accessories of x-ray machines
              </Link>
            </div>
          )}
          <Link>
            <button className="text-black font-extralight text-sm">
              Other
            </button>
          </Link>
          <Link>
            <button
              onClick={() => toggleDropdown("ultrasound")}
              className="text-black font-extralight text-sm"
            >
              Ultrasound sound devices
            </button>
          </Link>
          {openDropdown === "ultrasound" && (
            <div className="ml-4 mt-2 space-y-2">
              <Link className="block text-sky-500 font-extralight text-sm">
                Ultrasound systems
              </Link>
              <Link className="block text-sky-500 font-extralight text-sm">
                Ultrasonic nebuilzers
              </Link>
            </div>
          )}
          <Link>
            <button className="text-black font-extralight text-sm">
              Investigation
            </button>
          </Link>
          <Link>
            <button className="text-black font-extralight text-sm">
              Video printer and recorder
            </button>
          </Link>
          <Link>
            <button className="text-black font-extralight text-sm">
              Dental treatment
            </button>
          </Link>
          <hr />
          <div className=" rounded-md w-64">
            
            <div className="relative">
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded leading-tight focus:outline-none focus:shadow-outline"
              >
                
                Price
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />{" "}
                  </svg>
                </span>
              </button>
              {isOpen && (
                <div className="mt-2 p-2 border rounded-md">
                  
                  <div className="flex flex-col mb-2">
                    
                    <label className="text-sm mb-1">Minimum</label>{" "}
                    <div className="flex items-center border rounded-md p-2">
                      
                      <input
                        type="number"
                        className="outline-none w-full"
                        placeholder="€"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    
                    <label className="text-sm mb-1">Maximum</label>{" "}
                    <div className="flex items-center border rounded-md p-2">
                      
                      <input
                        type="number"
                        className="outline-none w-full"
                        placeholder="€"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;

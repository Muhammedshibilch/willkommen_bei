import React, { useState } from 'react'
import SideNav from '../components/SideNav'
import Modal from "../components/Modal";




const Endoscopes = () => {
   const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Sorting");
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleChange = (event) => {
      setSelectedOption(event.target.value);
      setIsOpen(false); // Close the dropdown after selecting an option
    };
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  return (
    <>
    <div className='row'>
            <div className="col-lg-1"></div>

      <div className="col-lg-5"> <img className='mt-9' src="https://www.med-geraete.de/thumbnail/25/0e/3f/1659013956/Kategorie-Endoskopie_800x800.jpg?ts=1659013956" alt="" /></div>
      <div className="col-lg-5">
        <h5 className='text-black font-bold mt-5'>Flexible endoscopes</h5>
<p className="text-black">Endoscopes are used to investigate inside the body of organisms, but also to explore cavities in engineering. We mainly supply OLYMPUS endoscopes, and our range consists primarily of flexible endoscopes: bronchoscopes, choledochoscopes, cystoscopes, duodenoscopes, gastroscopes, hysteroscopes, colonoscopes, laryngoscopes, ureteroscopes and micro-endoscopes. We also offer accessories such as cold-light sources (halogen, xenon), video processors, pigtails, video cameras, instruments for endoscopic application, auxiliary equipment, monitors, endoscopy towers, pumps, etc.</p>
      <div className="col-lg-1"></div>
      </div>
    </div>
    <div className="row">
    <div className="col-lg-2"></div>

      <div className="col-lg-2 mt-4">
        <SideNav/>
      </div>
      <div className="col-lg-7 mt-4">
      <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-3 ms-10">
              <div className="relative inline-block w-64">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded leading-tight focus:outline-none focus:shadow-outline"
                >
                  {selectedOption}
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="absolute mt-2 w-full rounded-md shadow-lg bg-white z-10">
                    <ul className="py-1 text-gray-700">
                      <li>
                        <button
                          onClick={() => handleChange({ target: { value: "Sorting" } })}
                          className="block px-4 py-2 text-sm w-full text-left hover:bg-gray-100"
                        >
                          Sorting
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleChange({ target: { value: "Name A-Z" } })}
                          className="block px-4 py-2 text-sm w-full text-left hover:bg-gray-100"
                        >
                          Name A-Z
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleChange({ target: { value: "Name Z-A" } })}
                          className="block px-4 py-2 text-sm w-full text-left hover:bg-gray-100"
                        >
                          Name Z-A
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleChange({ target: { value: "Price ascending" } })}
                          className="block px-4 py-2 text-sm w-full text-left hover:bg-gray-100"
                        >
                          Price ascending
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleChange({ target: { value: "Price descending" } })}
                          className="block px-4 py-2 text-sm w-full text-left hover:bg-gray-100"
                        >
                          Price descending
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleChange({ target: { value: "Topseller" } })}
                          className="block px-4 py-2 text-sm w-full text-left hover:bg-gray-100"
                        >
                          Topseller
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src="https://www.med-geraete.de/thumbnail/5e/f3/5d/1698159528/1003200a_5ef35ddb545ae64008ae4c3699a90a20_400x400.jpeg?ts=1726041818"
                alt="DRÄGER 5704281 Wall bracket for Oxylog 2000plus"
              />
              <div className="p-4">
                <div className="text-sm text-gray-600">Product number: 1003200</div>
                <h2 className="text-lg font-bold text-gray-900 mt-2">
                OLYMPUS JF-V2 Video duodenoscope
                </h2>
                <br />
                <br />
                <br />
                <br />
                
                <p className="text-sm text-gray-600 mt-1">OLYMPUS JF-V2: Video duodenoscope Diameter: 11 mm Length: 123.5 cm Used -</p>
                <div className="text-xl font-bold text-gray-900 mt-2">€1,300.00*</div>
                <button
                  className="mt-4 w-full bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
                  onClick={openModal}
                >
                  Enquire Now
                </button>
              </div>
            </div>
            <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
              <img
                className="w-full h-48 "
                src="https://www.med-geraete.de/thumbnail/ec/01/cd/1698300252/1004207a_400x400.jpeg?ts=1726042319"
                alt="DRÄGER 5704281 Wall bracket for Oxylog 2000plus"
              />
              <div className="p-4">
                <div className="text-sm text-gray-600">Product number: 1004207</div>
                <h2 className="text-lg font-bold text-gray-900 mt-2">
                OLYMPUS CYF-5: Fibre cystoscope, Length 37 cm, Diameter 5.2 mm , 2
                </h2>
                <br />
                <br />
                <br />
                <br />
                
                <p className="text-sm text-gray-600 mt-1">OLYMPUS CYF-5: Fibre cystoscope, Length 37 cm,Diameter 5.2 mm , 3</p>
                <div className="text-xl font-bold text-gray-900 mt-2">€2,890.00*</div>
                <button
                  className="mt-4 w-full bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
                  onClick={openModal}
                >
                  Enquire Now
                </button>
              </div>
            </div>
            <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src="https://www.med-geraete.de/thumbnail/a1/c1/f1/1698159266/1002697a_400x400.jpeg?ts=1726041625"
                alt="DRÄGER 5704281 Wall bracket for Oxylog 2000plus"
              />
              <div className="p-4">
                <div className="text-sm text-gray-600">Product number: 1002697</div>
                <h2 className="text-lg font-bold text-gray-900 mt-2">
                OLYMPUS TJF-M20 Fibre Duodenoscope               </h2>
                <br />
                <br />
                <br />
                <br />
                
                <p className="text-sm text-gray-600 mt-1">OLYMPUS TJF-M20: Fibre Duodenoscope Diameter: 13mm Length: 124 cm Side</p>
                <div className="text-xl font-bold text-gray-900 mt-2">€980.00*</div>
                <button
                  className="mt-4 w-full bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
                  onClick={openModal}
                >
                  Enquire Now
                </button>
              </div>
            </div>
            <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src="https://www.med-geraete.de/thumbnail/d3/25/37/1698300228/1004174a_400x400.jpeg?ts=1726042300"
                alt="DRÄGER 5704281 Wall bracket for Oxylog 2000plus"
              />
              <div className="p-4">
                <div className="text-sm text-gray-600">Product number: 1004174</div>
                <h2 className="text-lg font-bold text-gray-900 mt-2">
                OLYMPUS CHF-P20 Paediatric fibre choledochoscope
                </h2>
                <br />
                <br />
                <br />
                <br />
                
                <p className="text-sm text-gray-600 mt-1">OLYMPUS CHF-P20: Paediatric fibre choledochoscope 2 fibre</p>
                <div className="text-xl font-bold text-gray-900 mt-2">€2,400.00*</div>
                <button
                  className="mt-4 w-full bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
                  onClick={openModal}
                >
                  Enquire Now
                </button>
              </div>
            </div>
            <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src="https://www.med-geraete.de/thumbnail/ae/08/41/1698159060/1002240a_ae084144099641add9e613c971eb566c_400x400.jpeg?ts=1726041468"
                alt="DRÄGER 5704281 Wall bracket for Oxylog 2000plus"
              />
              <div className="p-4">
                <div className="text-sm text-gray-600">Product number: 1001435</div>
                <h2 className="text-lg font-bold text-gray-900 mt-2">
                Olympus CF-1T20L             </h2>
                <br />
                <br />
                <br />
                <br />
                
                <p className="text-sm text-gray-600 mt-1">OLYMPUS CF-Q165I Video colonoscope L: 133 Diameter 12.9 mm Diameter of</p>
                <div className="text-xl font-bold text-gray-900 mt-2">€6,800.00*</div>
                <button
                  className="mt-4 w-full bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
                  onClick={openModal}
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
     
      {isModalOpen && <Modal closeModal={closeModal} />} 


    </>
  )
}

export default Endoscopes
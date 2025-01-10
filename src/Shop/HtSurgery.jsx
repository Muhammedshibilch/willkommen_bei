import React, { useState } from 'react'
import SideNav from '../components/SideNav'
import Modal from "../components/Modal";




const HtSurgery = () => {
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

      <div className="col-lg-5"> <img className='mt-9' src="https://www.med-geraete.de/media/96/da/53/1659014288/Kategorie-HF-Chirurgie.jpg?ts=1659014288" alt="" /></div>
      <div className="col-lg-5">
        <h5 className='text-black font-bold mt-5'>HF surgery</h5>
        <p className="text-black">We offer HF surgical equipment from the following manufacturers: ERBE, MARTIN; BERCHTOLD, OLYMPUS and VALLEYLAB. Our product range includes both monopolar and bipolar devices. We also offer devices for specific applications such as endoscopy. All devices come with a complete basic set of accessories. All the accessories can, of course, also be ordered separately.</p>
        <h5 className='text-black font-bold'>Information for Supplies and Services</h5>
        <p className="text-black">ALL HF SURGICAL UNITS ARE DELIVERED WITH ACCESSORIES (NEUTRAL PLATE CABLE FOR SINGLE NEUTRAL ELECTRODES, MONOPOLAR AND BIPOLAR ELECTRODE, 3 DIFFERENT INSERTS).</p>

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
                src="https://www.med-geraete.de/thumbnail/45/4c/38/1698301760/1005223_454c389603f1863878fd76d80fd8cfdb_400x400.jpeg?ts=1726126228"
                alt="DRÄGER 5704281 Wall bracket for Oxylog 2000plus"
              />
              <div className="p-4">
                <div className="text-sm text-gray-600">Product number: 1005223</div>
                <h2 className="text-lg font-bold text-gray-900 mt-2">
                ERBE Vio 300 S HF Surgical unit              </h2>
                <br />
                <br />
                <br />
                <br />
                
                <p className="text-sm text-gray-600 mt-1">ERBE Vio 300 S HF surgical unit. maximum power in CUT mode: 300 watts at 500</p>
                <div className="text-xl font-bold text-gray-900 mt-2">€5,500.00*</div>
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
                src="https://www.med-geraete.de/thumbnail/5f/fa/54/1698301170/1004905a_400x400.jpeg?ts=1726126126"
                alt="DRÄGER 5704281 Wall bracket for Oxylog 2000plus"
              />
              <div className="p-4">
                <div className="text-sm text-gray-600">Product number: 1004905</div>
                <h2 className="text-lg font-bold text-gray-900 mt-2">
                ERBE ERBEJET 2       </h2>
                <br />
                <br />
                <br />
                <br />
                
                <p className="text-sm text-gray-600 mt-1">ERBE ERBEJET 2, basic module for waterjet surgery (hydrosurgery). Particularly</p>
                <div className="text-xl font-bold text-gray-900 mt-2">€8,900.00*</div>
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

export default HtSurgery
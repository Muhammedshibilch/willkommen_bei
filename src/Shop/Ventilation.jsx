import React, { useState } from "react";
import SideNav from "../components/SideNav";
import Modal from "../components/Modal";

const Ventilation = () => {
  const [isOpen, setIsOpen] = useState(false);
   const [selectedOption, setSelectedOption] = useState("Sorting");
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [selectedProduct, setSelectedProduct] = useState({});
 
   const handleChange = (event) => {
     setSelectedOption(event.target.value);
     setIsOpen(false); // Close the dropdown after selecting an option
   };
 
   const openModal = (product) => {
     setSelectedProduct(product);
     setIsModalOpen(true);
   };
 
   const closeModal = () => {
     setIsModalOpen(false);
     setSelectedProduct({});
   };

  const products = [
    {
      modelName: "DRÄGER 5704281 Wall bracket for Oxylog 2000plus",
      imageUrl: "https://www.med-geraete.de/thumbnail/81/4a/0e/1698301731/1005211_400x400.jpeg?ts=1726126223",
      productNumber: "1005211",
      description: "DRÄGER 5704281 Wall bracket for Oxylog 2000plus Second-hand",
      price: "€245.00*"
    },
    {
      modelName: "DRÄGER Evita Infinity V500 Intensive care ventilator",
      imageUrl: "https://www.med-geraete.de/thumbnail/e0/a8/dd/1698301820/1005245_e0a8dd009c2ad43a4cff02da1bfbfdda_800x800.jpeg?ts=1726126240",
      productNumber: "1005245",
      description: "DRÄGER Evita Infinity V500 Intensive care ventilator for adults, children and",
      price: "€9,500.00*"
    },
    {
      modelName: "DRÄGER Secretion bottle package",
      imageUrl: "https://www.med-geraete.de/thumbnail/0f/34/8c/1698134808/1000867a_0f348c2b31573f6022a365b2ba9c37f9_400x400.jpeg?ts=1726040907",
      productNumber: "1000867",
      description: "DRÄGER secretion bottle package consisting of carrying frame, 2x",
      price: "€125.00*"
    }
  ]


  return (
    <>
      <div className="row">
  <div className="col-lg-1"></div>
  <div className="col-lg-5">
    <img
      className="mt-9"
      src="https://www.med-geraete.de/thumbnail/32/54/59/1659013956/Kategorie-Narkose-und-Beatmung_800x800.jpg?ts=1659013956"
      alt=""
    />
  </div>
  <div className="col-lg-5">
    <h5 className="text-black font-bold mt-5">Anästhesie und Beatmung</h5>
    <p className="text-black">
      Wir bieten Anästhesiegeräte für alle Bereiche an: Humanmedizin, Veterinärmedizin und Forschung...
    </p>
    <h5 className="text-black font-bold">Informationen zu Lieferungen und Dienstleistungen</h5>
    <p className="text-black">
      Alle Anästhesiegeräte für den Einsatz in der Veterinärmedizin bestehen aus einer Basiseinheit...
    </p>
  </div>
  <div className="col-lg-1"></div>
</div>

      <div className="row mt-3">
        <div className="col-lg-2"></div>
        <div className="col-lg-2 mt-4">
          <SideNav />
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
                onClick={() => handleChange({ target: { value: "Sortierung" } })}
                className="block px-4 py-2 text-sm w-full text-left hover:bg-gray-100"
              >
                Sortierung
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
                onClick={() => handleChange({ target: { value: "Preis aufsteigend" } })}
                className="block px-4 py-2 text-sm w-full text-left hover:bg-gray-100"
              >
                Preis aufsteigend
              </button>
            </li>
            <li>
              <button
                onClick={() => handleChange({ target: { value: "Preis absteigend" } })}
                className="block px-4 py-2 text-sm w-full text-left hover:bg-gray-100"
              >
                Preis absteigend
              </button>
            </li>
            <li>
              <button
                onClick={() => handleChange({ target: { value: "Bestseller" } })}
                className="block px-4 py-2 text-sm w-full text-left hover:bg-gray-100"
              >
                Bestseller
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  </div>
</div>

<div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {products.map((product, index) => (
    <div
      className="flex flex-col justify-between max-w-xs bg-white rounded-lg shadow-md overflow-hidden h-full"
      key={index}
    >
      {/* Image Section */}
      <img
        className="w-full h-48 object-cover"
        src={product.imageUrl}
        alt={product.modelName}
      />
      {/* Content Section */}
      <div className="p-4 flex-grow">
        <div className="text-sm text-gray-600">Produktnummer: {product.productNumber}</div>
        <h2 className="text-lg font-bold text-gray-900 mt-2">{product.modelName}</h2>
        <p className="text-sm text-gray-600 mt-1">{product.description}</p>
      </div>
      {/* Price and Button Section */}
      <div className="p-4">
        <div className="flex flex-col items-center">
          <div className="text-xl font-bold text-gray-900 mb-4">{product.price}</div>
          <button
            className="w-full bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
            onClick={() => openModal(product)}
          >
            Jetzt anfragen
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
 
 

  
</div>
</div>
      {isModalOpen && <Modal closeModal={closeModal} selectedProduct={selectedProduct}  />} 


    </>
  );
};

export default Ventilation;

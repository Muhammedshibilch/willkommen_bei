import React, { useState } from 'react';
import SideNav from '../components/SideNav';
import Modal from "../components/Modal";

const Defibilortors = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

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
      modelName: "PHYSIO CONTROL Lifepak 20 Defibrillator",
      imageUrl: "https://www.med-geraete.de/thumbnail/ee/a8/e6/1698159159/1002401a_400x400.jpeg?ts=1726041530",
      productNumber: "1002401",
      description: "PHYSIO CONTROL Lifepak 20 Leichter und kompakter Defibrillator mit biphasischem Wellenform.",
      price: "€2,890.00*"
    },
    {
      modelName: "PHILIPS Heartstart MRx Defibrillator",
      imageUrl: "https://www.med-geraete.de/thumbnail/17/g0/39/1698301231/1004941a_400x400.jpeg?ts=1726126136",
      productNumber: "1004941",
      description: "PHILIPS Heartstart MRx Tragbarer biphasischer Defibrillator inkl. Akku.",
      price: "€5,843.00*"
    }
  ];

  return (
    <>
      <div className='row'>
        <div className="col-lg-1"></div>
        <div className="col-lg-5">
          <img className='mt-9' src="https://www.med-geraete.de/thumbnail/c4/c4/e2/1659013956/Kategorie-Defibrillatoren_800x800.jpg?ts=1659013956" alt="" />
        </div>
        <div className="col-lg-5">
          <h5 className='text-black font-bold mt-5'>
            Defibrillatoren
          </h5>
          <p className="text-black">Defibrillatoren werden verwendet, um Herzrhythmusstörungen durch gezielte Stromstöße zu beheben (Defibrillation, AEDs, Notfallmedizin, Herzschrittmacher, Medizintechnik, Kardioverter, Kardioversion, Wiederbelebung). Hier finden Sie die folgenden Gerätekategorien: monophasische und biphasische Geräte, Geräte mit oder ohne zusätzliche Funktionen (EKG, SpO2, NIBP, DRUCK, CO2, Herzschrittmacher), mit und ohne Drucker, manuelle Geräte, halbautomatische und vollautomatische Geräte.</p>
        </div>
        <div className="col-lg-1"></div>
      </div>

      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-2 mt-4">
          <SideNav />
        </div>
        <div className="col-lg-7 mt-4">
  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {products.map((product, index) => (
      <div
        className="flex flex-col justify-between max-w-xs bg-white rounded-lg shadow-md overflow-hidden h-full"
        key={index}
      >
        <img
          className="w-full h-48 object-cover"
          src={product.imageUrl}
          alt={product.modelName}
        />
        <div className="p-4 flex-grow">
          <div className="text-sm text-gray-600">Product number: {product.productNumber}</div>
          <h2 className="text-lg font-bold text-gray-900 mt-2">{product.modelName}</h2>
          <p className="text-sm text-gray-600 mt-1">{product.description}</p>
        </div>
        <div className="p-4 flex flex-col items-center">
          <div className="text-xl font-bold text-gray-900 mb-4">{product.price}</div>
          <button
            className="w-full bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
            onClick={() => openModal(product)}
          >
            Jetzt anfragen
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

        </div>

      {isModalOpen && <Modal closeModal={closeModal} selectedProduct={selectedProduct} />}
    </>
  );
}

export default Defibilortors;

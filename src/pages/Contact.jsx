import React, { useState } from 'react';
import ContactModal from '../components/ContactModal'; // Adjust the path as necessary

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div>
        <img
          src="https://www.med-geraete.de/thumbnail/15/46/9f/1707294771/Contact_EN2_1920x1920.jpg?ts=1707294782"
          alt=""
        />

        <h1 className="mt-4 text-center font-bold text-3xl text-sky-600">Contact</h1>
        <br /><br />
        <h1 className="mt-4 text-center font-bold text-2xl text-sky-600">Service phone: +49-(0)8206 9624-0</h1>

        <div className="mt-8 mx-auto max-w-xl">
          <form className="bg-white p-8 shadow-md rounded">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 font-bold mb-2 text-sm">Salutation*</label>
                <select className="w-full border border-gray-300 rounded py-2 px-3">
                  <option>Mr.</option>
                  <option>Ms.</option>
                  <option>Mrs.</option>
                  <option>Dr.</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2 text-sm">First name*</label>
                <input type="text" className="w-full border border-gray-300 rounded py-2 px-3" />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2 text-sm">Last name*</label>
                <input type="text" className="w-full border border-gray-300 rounded py-2 px-3" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 font-bold mb-2 text-sm">Your email address*</label>
                <input type="email" className="w-full border border-gray-300 rounded py-2 px-3" />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2 text-sm">Phone*</label>
                <input type="tel" className="w-full border border-gray-300 rounded py-2 px-3" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2 text-sm">Subject*</label>
              <input type="text" className="w-full border border-gray-300 rounded py-2 px-3" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2 text-sm">Comment*</label>
              <textarea className="w-full border border-gray-300 rounded py-2 px-3" rows="4"></textarea>
            </div>
            <p className="text-xs text-gray-500">The fields marked with an asterisk (*) are mandatory.</p>
            <div className="mb-4"><br />
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" required />
                <span className="ml-2 text-xs text-gray-500">By selecting continue you confirm that you have read and agree to our <a className="underline text-blue-500" href="#" onClick={openModal}>data protection information</a>.</span>
              </label>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" type="submit">Submit</button>
          </form>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Contact;

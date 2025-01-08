import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-500 text-black p-8" style={{height:"400px"}}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="mb-4">
          <h2 className="font-bold mb-2 leading-tight">Customer service hotline</h2>
          <p className="leading-relaxed">For support and advice, please contact:</p>
          <p className="font-bold my-2 leading-relaxed">+49-(0)8206 9624-0</p>
          <p className="leading-relaxed">Mon-Thu, 7 am - 5 pm</p>
          <p className="leading-relaxed">Fri, 7 am - 1 pm</p>
          <p className="leading-relaxed">Or via our contact form.</p>
        </div>
        <div className="mb-4">
          <h2 className="font-bold mb-2 leading-tight">Dr. Wilfried Müller GmbH</h2>
          <ul>
            <li className="my-1"><a href="#" className="hover:underline leading-relaxed">Contact</a></li>
            <li className="my-1"><a href="#" className="hover:underline leading-relaxed">General Terms and Conditions</a></li>
            <li className="my-1"><a href="#" className="hover:underline leading-relaxed">Privacy policy</a></li>
            <li className="my-1"><a href="#" className="hover:underline leading-relaxed">Imprint</a></li>
            <li className="my-1"><a href="#" className="hover:underline leading-relaxed">Terms of delivery</a></li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="font-bold mb-2 leading-tight">Service</h2>
          <ul>
            <li className="my-1"><a href="#" className="hover:underline leading-relaxed">About us</a></li>
            <li className="my-1"><a href="#" className="hover:underline leading-relaxed">Subscribe to the newsletter</a></li>
            <li className="my-1"><a href="#" className="hover:underline leading-relaxed">Warranty</a></li>
          </ul>
        </div>
      </div>
      <p className="mt-8 text-sm text-center leading-relaxed">
        * All prices excl. VAT plus <a href="#" className="hover:underline">shipping costs</a> and possible delivery charges, if not stated otherwise.
      </p>
    </footer>
  );
};

export default Footer;

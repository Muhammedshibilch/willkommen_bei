import React from 'react';

const Warrenty = () => {
  return (
    <div className='flex flex-col items-center'>
      <img 
        src="https://www.med-geraete.de/thumbnail/d3/7e/9f/1708532568/03_Dr_Mueller_waranty_1920x1920_1920x1920.jpg?ts=1708532568" 
        alt="" 
      />
      <h2 className='text-sky-600 font-bold text-center mt-4'>
        1 year warranty on all used medical devices.
      </h2>
      <p>All endoscopes come with a 6-month warranty. As is generally the case, consumables and wear items, lamps and batteries are excluded from the warranty.</p>
    </div>
  );
}

export default Warrenty;

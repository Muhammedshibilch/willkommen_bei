import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";


const Shop = () => {
  return (
    <>
      <div className="row">
        <MDBCarousel showIndicators showControls fade>
          <MDBCarouselItem itemId={1}>
            <img
              src="https://www.med-geraete.de/media/9e/47/e9/1657887862/Dr-mueller-onlineshop-screen-2.jpg?ts=1715681249"
              className="d-block w-100 shadow-black"
              alt="..."
            />
            <MDBCarouselCaption>
              <h1
                style={{
                  marginTop: "-370px",
                  marginRight: "200px",
                  width: "100%",
                  color: "white",
                  textShadow: "2px 2px 4px black",
                }}
                className="text-6xl font-extrabold"
              >
                Buy used medical devices
              </h1>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem itemId={2}>
            <img
              src="https://www.med-geraete.de/media/b4/de/33/1657887862/Dr-mueller-onlineshop-screen-1.jpg?ts=1657887862"
              className="d-block w-100 shadow-black"
              alt="..."
            />
          </MDBCarouselItem>
        </MDBCarousel>

        <div className="bg-sky-700  text-center text-white" style={{height:"350px"}}>
          <h3 className="text-teal-300 font-bold mt-5">
            Online shop for used medical devices Dr. Wilfried Müller GmbH
          </h3>
          <div className="row mt-5">
            <div className="col-lg-1"></div>
            <div className="col-lg-5 text-left">
              <p className="font-light ">
                In the online shop of Dr. Wilfried Müller GmbH, you will find
                used medical devices for the entire spectrum of human and
                veterinary medicine. All our devices are visually and
                technically in very good condition and are sold with a 12-month
                warranty and a parts guarantee of 8 years.
              </p>
              <p className="font-light">Click on "Shop" in the menu at the top to view all device categories. </p>
              <p className="font-light">From suction pumps, infusers, and sterilisers to accessories for anaesthesia,</p>
            </div>
            {/* <div className="col-lg-1"></div> */}
            <div className="col-lg-5 text-left">
              <p className="font-light">
                You will find used medical technology from 29 different
                categories in our online shop, which we supply to private and
                public clinics, medical practices, universities, and research
                institutes in the fields of human and veterinary medicine.
              </p>
              <p className="font-light">
              Our experienced technicians will be happy to answer any questions you may have about our appliances – even after your purchase, of course.
              </p>
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-4"> 
  <img style={{ width: "100px" }} src="https://www.med-geraete.de/media/da/f5/08/1658916065/Logo_Bildmarke.svg?ts=1658916065" alt="" /> 
  <h2 className="mt-4 text-sky-600 font-bold">Our bestselling categories</h2> 
</div>
<div>
  <div className="row mt-5">
    <div className="col-lg-2"></div>
    <div className="col-lg-4">
      <h4 className="text-sky-600">Anesthesia and ventilation</h4>
      <p className="font-thin">We offer anaesthesia equipment for all areas: Human medicine, veterinary medicine, and research.</p>
  <Link><button className="bg-sky-800 text-white py-2 px-4  rounded"> To the devices </button>  </Link>    
        </div>
    <div className="col-lg-4">
      <img src="https://www.med-geraete.de/thumbnail/32/54/59/1659013956/Kategorie-Narkose-und-Beatmung_800x800.jpg?ts=1659013956" alt="" />
    </div>
    <div className="col-lg-2"></div>
  </div>

  <div className="row mt-5">
    <div className="col-lg-2"></div>
    <div className="col-lg-4">
      <img src="https://www.med-geraete.de/thumbnail/25/0e/3f/1659013956/Kategorie-Endoskopie_800x800.jpg?ts=1659013956" alt="" />
        </div>
    <div className="col-lg-4">
    <h4 className="text-sky-600">
    Endoscopy</h4>
      <p className="font-light">We mainly supply endoscopes from OLYMPUS, primarily offering flexible endoscopes</p>
  <Link><button className="bg-sky-800 text-white py-2 px-4  rounded"> To the devices </button>  </Link>      </div>
    <div className="col-lg-2"></div>
  </div>

  <div className="row mt-5">
    <div className="col-lg-2"></div>
    <div className="col-lg-4">
      <h4 className="text-sky-600">Operating tables</h4>
      <p className="font-thin">We offer high-quality, mobile operating tables from Maquet, Schmitz, and Trumpf</p>
  <Link><button className="bg-sky-800 text-white py-2 px-4  rounded"> To the devices </button>  </Link>    
        </div>
    <div className="col-lg-4">
      <img src="https://www.med-geraete.de/thumbnail/f7/9a/6d/1659013956/Kategorie-Op-Tische_800x800.jpg?ts=1659013956" alt="" />
    </div>
    <div className="col-lg-2"></div>
  </div>


  <div className="row mt-5">
    <div className="col-lg-2"></div>
    <div className="col-lg-4">
      <img src="https://www.med-geraete.de/media/96/da/53/1659014288/Kategorie-HF-Chirurgie.jpg?ts=1659014288" alt="" />
        </div>
    <div className="col-lg-4">
    <h4 className="text-sky-600">
    
HF surgery</h4>
      <p className="font-light">You will find both monopolar and bipolar medical devices in our range. We also offer devices for special applications such as endoscopy.</p>
  <Link><button className="bg-sky-800 text-white py-2 px-4  rounded"> To the devices </button>  </Link>      </div>
    <div className="col-lg-2"></div>
  </div>

  <div className="row mt-5">
    <div className="col-lg-2"></div>
    <div className="col-lg-4">
      <h4 className="text-sky-600">Defibrillators</h4>
      <p className="font-thin">Here you will find the following device categories: Monophasic and biphasic devices, devices with or without additional functions with and without printers, manual devices, semi-automatic, and fully automatic devices.</p>
  <Link><button className="bg-sky-800 text-white py-2 px-4  rounded"> To the devices </button>  </Link>    
        </div>
    <div className="col-lg-4">
      <img src="https://www.med-geraete.de/thumbnail/c4/c4/e2/1659013956/Kategorie-Defibrillatoren_800x800.jpg?ts=1659013956" alt="" />
    </div>
    <div className="col-lg-2"></div>
  </div>


  <div className="row mt-5 mb-5">
    <div className="col-lg-2"></div>
    <div className="col-lg-4">
      <img src="https://www.med-geraete.de/thumbnail/94/d9/51/1659013956/Kategorie-Infusoren-Perfusoren_800x800.jpg?ts=1659013956" alt="" />
        </div>
    <div className="col-lg-4">
    <h4 className="text-sky-600">
    

    Infusers Perfusors</h4>
      <p className="font-light">In our programme you will find perfusors and infusomats from the manufacturers BRAUN and Fresenius. Various device types and all accessories such as mounting clamps, infusion stands, and intensive care racks are available.</p>
  <Link><button className="bg-sky-800 text-white py-2 px-4  rounded"> To the devices </button>  </Link>      </div>
    <div className="col-lg-2"></div>
  </div>
</div>

      </div>
    </>
  );
};

export default Shop;

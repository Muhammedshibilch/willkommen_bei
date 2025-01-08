import React from 'react'
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption, MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <div>

<div className="row">
  
  <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src='https://www.med-geraete.de/media/89/f4/91/1678270893/01_Dr_Mueller_Startseite_Header1.jpg?ts=1715681230' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
        <h1 style={{marginTop:'-350px', marginRight:'500px', fontWeight:'700'}}>Buy used medical devices</h1>
        <Link to={'/shop'}><MDBBtn className='mt-3 w-25 btn-outline-success' style={{marginTop:'-350px', marginRight:'740px'}}>Shop now</MDBBtn></Link>
        <MDBBtn className='mt-3 w-25 btn-outline-success' style={{marginTop:'-350px', marginRight:'740px'}}>Service telephone</MDBBtn>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src='https://www.med-geraete.de/media/de/fc/66/1659080101/Header_Startseite_2.jpg?ts=1715681257' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
        <h1 className='text-dark' style={{marginTop:'-350px', marginRight:'500px', fontWeight:'700'}}>Buy used medical devices</h1>
<Link to={'shop'}>        <MDBBtn className='mt-3 w-25 btn-success' style={{marginTop:'-350px', marginRight:'740px'}}>Shop now</MDBBtn>
</Link>
        <MDBBtn className='mt-3 w-25 btn-success' style={{marginTop:'-350px', marginRight:'740px'}}>Service telephone</MDBBtn>
        </MDBCarouselCaption>
      </MDBCarouselItem>

    </MDBCarousel>
</div>

<div className="row">
  <div className="col-6">
    <h2 className='text-center m-3 p-5 text-primary' style={{fontWeight:'550'}}>Purchase and sale of used medical equipment, repairs and procurement of spare parts</h2>
  </div>
  <div className="col-6">
    <p className=' m-3 p-5' style={{textAlign:'justify'}}>25 years of quality and safety: Under the leadership of Managing Director Marcus Triebel, Dr. Wilfried Müller GmbH supplies used medical equipment to private companies and public organisations worldwide. We also offer repairs and the procurement of spare parts. With us, you get high quality and certified safety as well as outstanding, personalised service, even after the purchase. Our portfolio is rounded off by the purchase of used medical technology.</p>
  </div>
</div>


<div className="row p-5" style={{backgroundColor:'lightgrey'}}>
  <div className="col-4"><center>
    <img src="https://www.med-geraete.de/media/06/1b/b9/1708340975/icon-one-year.svg?ts=1708340975" className='mt-5' width={'100px'} alt="" />
    <h4 className='mt-2 text-primary' style={{fontWeight:'600'}}>1-year warranty</h4>
    </center></div>
  <div className="col-4">
    <center>
    <img src="https://www.med-geraete.de/media/68/78/5f/1658915255/Icon_Nachhaltig.svg?ts=1658915255" className='mt-5' width={'100px'} alt="" />
    <h4 className='mt-2 text-primary' style={{fontWeight:'600'}}>Sustainability</h4>
    </center>
  </div>
  <div className="col-4">
    <center>
<img src="https://www.med-geraete.de/media/4c/2f/a3/1708340975/icon-eight-years.svg?ts=1708340975" className='mt-5' width={'100px'} alt="" />
<h4 className='mt-2 text-primary' style={{fontWeight:'600'}}>8-year delivery guarantee <br /> for spare parts and <br /> accessories</h4>
    </center>
  </div>
</div>

<div className="row">
  <div className="col-2"></div>
  <div className="col-4 mt-5">
    <h3 className='text-primary'>Safe and sustainable treatment with used medical devices</h3>
    <h5 className='mb-3' style={{fontWeight:'500'}}>There are many good reasons in favour of buying a used medical device:</h5>
    <p>• Cost-effective alternative to expensive, fault-prone, and complicated devices</p>
    <p>• High-quality medical technology from renowned manufacturers at an unbeatable price-performance ratio for a used device</p>
    <p>• Robustness and simple operation for older devices</p>
    <p>• No familiarisation time: Replacement of tried and tested devices whose function and operation you and your staff are already familiar with</p>

    <p className='mt-3'>Used medical technology from Dr. Wilfried Müller GmbH is tested to the highest safety standards and refurbished by experienced specialists. Our appliances strike the right balance between cost, quality, safety, and ecological added value. This way you can treat your patients safely in the long term.</p>
  </div>
  <div className="col-4">
    <img className='mt-5' src="https://www.med-geraete.de/thumbnail/fe/c6/3b/1658755215/Nachhaltig_1920x1920.jpg" style={{height:"600px"}} alt="" />
   <Link to={'/sustainability'}> <MDBBtn className='mt-3'>Learn more</MDBBtn></Link>
  </div>
  <div className="col-2"></div>
</div>


<div className="row mt-5" id='homie'>
  <div className="col-2"></div>
  <div className="col-4">

    <h3 className='text-light mt-5' style={{fontWeight:"550"}}>Worldwide delivery and fast service</h3>
  </div>
  <div className="col-4">
    <p className='mt-5 text-light'>Dr. Wilfried Müller GmbH supplies private and public clinics, medical and veterinary practices, universities, research institutes, and aid organisations worldwide. We deliver all devices in our range with the shortest possible delivery times. For safe and fast shipping, we check the best delivery options for each purchase and also deliver to remote and hard-to-reach (crisis) areas.</p>
   <Link to={'/contact'}> <MDBBtn className='btn-light mt-3'>submit an enquiry</MDBBtn></Link>
  </div>
  <div className="col-2"></div>
</div>



<div className="row">
  <div className="col-2"></div>
  <div className="col-4">
    <h3 className='mt-5 text-primary' style={{fontWeight:'550'}}>Customisation of used medical devices and special solutions</h3>
  </div>
  <div className="col-4">
    <p className='mt-5'>We specialise in providing individual solutions that are tailored to the needs of our customers. Ranging from anaesthesia machines for mice and horses, specially converted operating tables, or lighting that works for longer periods without a power supply in crisis areas: Our experts will be happy to advise you on all the options available in order to meet your needs.</p>
    <p className='mt-3'> Do you have a special request that does not exist directly? With a high level of technical expertise, our technicians adapt medical devices to your individual requirements in compliance with legal regulations. We look forward to your enquiry!</p>
  <Link to={'/contact'}>  <MDBBtn className='mt-3 btn-primary'>customer service hotline</MDBBtn></Link>
  </div>
  <div className="col-2"></div>
</div>
 

<div className="row mt-5" style={{backgroundColor:'lightgray'}}>
  <div className="col-1"></div>
  <div className="col-10">
    <div className="row p-5">
    <div className="col-2"><center>
    <img src="https://www.med-geraete.de/media/87/d8/ba/1659000916/Icon_Kontakt.svg" width={'100px'} alt="" />
    <h6 className='mt-2 text-primary' style={{fontWeight:'600'}}>Customer service hotline</h6>
    </center></div>

  <div className="col-2"><center>
  <img src="https://www.med-geraete.de/media/c7/58/c7/1658915255/Icon_Lieferung.svg" width={'100px'} alt="" />
  <h6 className='mt-2 text-primary' style={{fontWeight:'600'}}>Short delivery time</h6>
    </center></div>

  <div className="col-2"><center>
  <img src="https://www.med-geraete.de/media/87/d8/ba/1659000916/Icon_Kontakt.svg" width={'100px'} alt="" />
  <h6 className='mt-2 text-primary' style={{fontWeight:'600'}}>Very easy to reach</h6>
  </center></div>

  <div className="col-2"><center>
  <img src="https://www.med-geraete.de/media/b6/91/79/1658915255/Icon_Guenstig.svg" width={'100px'} alt="" />
  <h6 className='mt-2 text-primary' style={{fontWeight:'600'}}>Cost-effective quality</h6>
  </center> </div>

  <div className="col-2"><center>
  <img src="https://www.med-geraete.de/media/8f/e0/54/1658915255/Icon_Werkzeug.svg" width={'100px'} alt="" />
  <h6 className='mt-2 text-primary' style={{fontWeight:'600'}}>Repair service also for third-party devices</h6>
  </center></div>

  <div className="col-2"><center>
  <img src="https://www.med-geraete.de/media/2e/48/2c/1658915255/Icon_Zahnrad.svg" width={'100px'} alt="" />
  <h6 className='mt-2 text-primary' style={{fontWeight:'600'}}>Customised to your requirements</h6>
  </center></div>
    </div>
  </div>
  <div className="col-1"></div>
</div>



<div className="row">
  <h3 className='text-primary text-center mt-5' style={{fontWeight:'550'}}>Dr. Wilfried Müller GmbH – Your partner for <br />
  dependable pre-owned medical technology</h3>
  <div className="col-2"></div>
  <div className="col-4 mt-5">
    <p>As an owner-managed company, we have been offering our customers high-quality used medical devices since 1998. Transparency and reliability are very important to us when working together. The 15-strong team at Dr. Wilfried Müller GmbH offers you excellent professional expertise.</p>
  </div>
  <div className="col-4 mt-5">
    <p>All of our employees not only have training but also many years of experience in their respective areas of expertise. Most of them also have professional experience in the medical field, such as fire brigade emergency doctors, veterinarians, or paramedics, and can therefore use their practical knowledge to assess medical equipment with comprehensive in-depth expertise.</p>
  </div>
  <div className="col-2"></div>
  <center><Link to={'/company'}><MDBBtn className='btn-primary mt-3'>learn more</MDBBtn></Link></center>
</div>


<div className="row">
  <div className="col-12 mt-5">
    <img src="https://www.med-geraete.de/thumbnail/8f/10/3d/1658145358/Start-Footer_1920x1920.jpg?ts=1658145373" alt="" />
  </div>
</div>


    </div>
  )
}

export default Home
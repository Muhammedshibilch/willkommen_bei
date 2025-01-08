import React from 'react'

const Company = () => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <img src="https://www.med-geraete.de/thumbnail/2f/67/80/1662733151/02_Dr_Mueller_Unternehmen_Header_3_1920x1920.jpg?ts=1662733151" alt="" />
        </div>
      </div>

      <div className="row">
        <h1 style={{textAlign:"center",fontSize:"xx-large",marginTop:"50px",marginBottom:"50px"}}>About Dr. Wilfried Müller GmbH</h1>
        <div className="col-2"></div>
        <div className="col-4 ms-5">As an owner-managed company based in Prittriching, Bavaria, Dr. Wilfried Müller GmbH has been trading in used medical devices for 25 years. Founded in 1998 by namesake and veterinarian Dr. Wilfried Müller, the company has been managed by Marcus Triebel since 2012.</div>
        <div className="col-4">As an owner-managed company based in Prittriching, Bavaria, Dr. Wilfried Müller GmbH has been trading in used medical devices for 25 years. Founded in 1998 by namesake and veterinarian Dr. Wilfried Müller, the company has been managed by Marcus Triebel since 2012.</div>
      </div>

      <div style={{marginTop:"60px"}} className="row">
        <center>
        <div className="col-1">
          <img src="https://www.med-geraete.de/media/da/f5/08/1658916065/Logo_Bildmarke.svg?ts=1658916065" alt="" />
        </div>
        <h1 style={{fontSize:"xx-large", marginTop:"15px"}}>What you can expect when working with us</h1>
        </center>
      </div>

      <div className="row mt-5">
      <div style={styles.container}>
         <div style={{ ...styles.section, ...styles.darkBlue }}>
           <h1 style={{ fontWeight: "500", textAlign: "start", fontSize: "x-large",color:"white"  }}>We live <br /> for sustainability:</h1>
            <p className='pt-3'>Not everything that is no longer needed has to be thrown away. There are often excellent opportunities for longer-term use in other countries with different requirements. Life cycle of medical devices.</p> </div> <div style={{ ...styles.section, ...styles.lightBeige }}>
               <h2 style={{ fontWeight: "500", textAlign: "start", fontSize: "x-large",color:"black"  }}>Transparency and <br /> reliability</h2>
                <p className='pt-3'>We are always open and honest with you. If we promise you something, you can rely on it 100%.</p>
             </div> 
             <div style={{ ...styles.section, ...styles.lightTeal }}>
               <h2 style={{ fontWeight: "500", textAlign: "start", fontSize: "x-large",color:"black"  }}>Good quality of all devices with a <br /> high level of safety:</h2>
                <p className='pt-3'>Our employees are excellently trained and apply their expertise meticulously to the reconditioning and maintenance of the devices. So you can be sure of outstanding quality and high safety. All legal calibration and testing requirements are, of course, met throughout.</p>
                 </div>
                  </div>
      </div>

      <div className="row mt-4">
        <center>
        <div style={{backgroundColor:"	#F5F5DC"}} className="col-8 p-5">
          <h1 style={{fontWeight:"500 ",textAlign:"start",fontSize:"x-large"}}>Price stability even in times of crisis or shortage:</h1>
          <p style={{textAlign:"start"}} className='pt-2'>Even if particular types of equipment such as ventilators become scarce, we keep prices stable and do not capitalise on the shortage. Because our primary concern is your satisfaction and that we contribute to providing good care.</p>
        </div>
        </center>
      </div>

      <div className="row d-flex justify-content-center mt-4"> 
        <div  className="col-4"> 
          <img style={{width:"100%",height:"400px"}} src="https://www.med-geraete.de/media/90/12/8e/1702043017/02_Dr_Mueller_Unternehmen_Wertschaetzung_2.jpg" alt="" className="img-fluid" /> 
          </div>
           <div style={{backgroundColor: "#006699", marginLeft:"-10px",height:"400px"}} className="col-4 p-5 align-items-center">
             <h1 style={{ fontWeight: "500", textAlign: "start", fontSize: "x-large",color:"white"  }}> Appreciative and friendly interaction: </h1><br />
             <p style={{color:"white"}}>We ourselves are very collegial and treat each other with respect and kindness. For us, every employee is equally important and makes a valuable contribution to the overall result. And of course we are as nice and courteous to our customers as we are with each other.</p>
           </div>
        </div>


      <div className="row d-flex justify-content-center mt-5">
        <div className="col-4">
          <div style={{backgroundColor:"	#F5F5DC", borderRadius:"10px", height:"370px"}} className='p-5' >
            <h1 style={{ fontWeight: "500", textAlign: "start", fontSize: "x-large"  }}>Flexibility for <br />
            customised solutions:</h1>
            <p className='pt-3'>We look for the solution you need - even for special requirements, manufacture special modifications and also deliver to remote areas.</p>
          </div>
          <div className='mt-4' style={{backgroundColor:"#e0f7fa",borderRadius:"10px"}}>
            <h1 className='p-5' style={{ fontWeight: "500", textAlign: "start", fontSize: "x-large"  }} >Repair service also <br />
            for third-party devices:</h1>
            <p className='ps-5 pb-5'>What many people don't know: We also repair third-party devices that we have not sold ourselves or from manufacturers that we do not stock – at a good price that is often lower than the manufacturer's.</p>
          </div>
        </div>
        <div className="col-4">
          <div style={{backgroundColor:"#006699", borderRadius:"10px"}} className="col ">
            <h1 style={{ fontWeight: "500", textAlign: "start", fontSize: "x-large",color:"white"  }} className='ps-5 pt-5'>Very easy to <br />
            reach:</h1>
            <p style={{color:"white"}} className='ps-5 pt-4 pb-5'>Because we know that things sometimes have to happen quickly, we are always ready to listen to you and are available every day from 7 a.m. to 5 p.m.</p>
            <img src="https://www.med-geraete.de/media/03/3c/a5/1702043017/02_Dr_Mueller_Unternehmen_Erreichbarkeit_2.jpg" alt="" />
          </div>
        </div>
      </div>


      <div className="row mt-5 d-flex justify-content-center" style={{backgroundColor:"rgb(117, 212, 198)"}}>
        <div className="col-4 p-5">
          <h1 style={{ fontWeight: "500", textAlign: "start", fontSize: "x-large",color:"rgb(23, 118, 155)"  }}>Our work <br />
          with the devices</h1>
          <p className='pt-4'>Because we value impeccable quality, before being sold all devices are checked technically and visually by our experienced medical technicians, refurbished, and then sold on to customers all over the world with a 12-month warranty and an eight-year delivery guarantee for spare parts. 
          It goes without saying that all appliances supplied come with operating instructions and the test certificates required in Germany (STK and MTK).</p>
        </div>
        <div className="col-4">
          <h1 style={{ fontWeight: "500", textAlign: "start", fontSize: "x-large",color:"rgb(23, 118, 155)"  }} className='pt-5'>
          Brand quality at a good <br />
          price - our range
          </h1>
          <p className='pt-4'>Our product range mainly includes anaesthesia equipment (DRÄGER), operating tables (MAQUET, SCHMITZ, TRUMPF and SCHAERER), examination, and operating lights (HANAULUX, MARTIN, BERCHTOLD), mobile C-shaped frames and X-ray equipment (SIEMENS, PHILIPS), flexible endoscopes (OLYMPUS), ECG, monitors (DRÄGER, SIEMENS, DATEX, GE), surgical microscopes (ZEISS, LEICA, WILD, KARL KAPS), suction pumps, autoclaves (MELAG), infusion pumps, and syringe pumps (BRAUN, FRESENIUS), electrosurgical equipment and more.</p>
        </div>
        <h1 className='pt-5' style={{fontWeight: "500", textAlign: "start", fontSize: "x-large",color:"rgb(23, 118, 155)", textAlign:"center"}}>Nationwide service through cooperation</h1>
        <div className="col-4 p-5">
          <p className='pt-4'>We also offer the supply of spare parts and accessories for all the appliances in our range. To ensure that you receive excellent service even after your purchase,</p>
        </div>
        <div className="col-4 p-5">
          <p className='pt-4'>we offer you a nationwide service for many types of equipment – such as anaesthesia and respiratory equipment – together with our cooperation partners.</p>
        </div>
        <center><button className='ps-3 pe-3 pt-1 pb-1 mb-5' style={{backgroundColor:"rgb(23, 118, 155)",borderRadius:"10px",color:"white"}}>OnlineShop</button></center>
      </div>
     



    </div>
  )
}

const styles = {
   container: {
     display: 'grid',
     gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr 1fr', 
      gap: '20px', 
      width: '70%', 
      margin: '0 auto',
       padding: '10px',
        boxSizing: 'border-box', 
        
      },
    section: {
         padding: '50px',
          color: '#fff',
          fontWeight:"large"
         },
     darkBlue: {
       backgroundColor: '#2c3e50',
       fontWeight:"large",
        gridColumn: '1 / 2', 
        gridRow: '1 / 3',
       }, 
       lightBeige: { 
        backgroundColor: '#f5f5dc',
         color: '#333',
       },
          lightTeal: { 
        backgroundColor: '#e0f7fa',
         color: '#333', }, };

export default Company
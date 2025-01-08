import React from 'react';
import dr1 from '../assets/dr1.png'
import dr2 from '../assets/dr2.png'
import dr3 from '../assets/dr3.png'
import dr4 from '../assets/dr4.png'
import dr5 from '../assets/dr5.png'

import plus from '../assets/plus.svg'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';



const Team = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);





  return (
    <>
      <div className="">
        <div className='img-fluid'>
          <img width={'100%'} src="https://www.med-geraete.de/thumbnail/ab/40/32/1657891643/Team_1920x1920.jpg?ts=1657891644" alt="" />
        </div>
        <div style={{ padding: '0 150px' }} className="bg-teal-300 h-52 flex justify-center items-center">
          <div className="w-1/2 text-justify mx-4 text-sm">
            <p>We, the team of Dr. Wilfried Müller GmbH, have been there for our national and international customers since 1998. We are happy to support you in helping people and animals. No challenge is too big for us – whether it's a</p>
          </div>
          <div className="w-1/2 text-justify mx-4 text-sm">
            <p>Whether it's shipping containers with used medical technology to faraway countries or procuring urgently needed spare parts: We are there for you.</p>
          </div>
        </div>
        <div style={{ padding: '0 150px' }} className="bg-sky-700 h-52 flex justify-center items-center">
          <div className="container py-5">
            <h1 className="text-teal-300 text-3xl font-bold">This is important to us at our work with used medical equipment</h1>
          </div>
          <div className="container py-5">
            <p className="text-white   ">To be there for our customers, to provide excellent service, to be fair, to deliver high-quality equipment, to make people happy, to pass on our good mood, to work accurately, to provide security, to find solutions, to offer a very good price-performance ratio, to make the world a better place, to help people and animals, to protect the environment, to show appreciation, (to help), to overcome challenges.</p>
          </div>
        </div>
        {/* dr1 */}
        <div className="d-flex justify-content-center align-items-center mt-5">
          <div>
            <h1 className='text-teal-300 text-3xl font-bold'>Marcus Triebel</h1>
            <p><span className='fw-bolder'>Position</span>:   Managing Director</p>
            <p><span className='fw-bolder'>How long have you been with the company?</span> Since 1997, Managing <br /> Director since 2012.</p>
            <p><span className='fw-bolder'>Year of birth</span>: 1974</p>
          </div>
          <div className="">
            <img width={'500px'} src={dr1} alt="" />
          </div>
        </div>
        {/* drop */}
        <div className="bg-stone-300  ">
          <div style={{ padding: '0 50px' }} className="container d-flex align-items-center text-justify">
            <p className='mx-5'>Thanks to his medical training and 25 years of experience in buying and selling used medical technology, Marcus Triebel has comprehensive, in-depth technical knowledge of all the devices on offer. It is particularly important to him to bring used medical technology even more into the focus of the healthcare industry as a valuable resource.</p>
            <button onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open} style={{ padding: '5px' }}>
              <img src={plus} alt="Plus Icon" style={{ width: '100%', height: '100%' }} />
            </button>
          </div>
          <Collapse in={open}>
            <div className='container pb-5' id="example-collapse-text ">
              <span className='fw-bolder'>  What do you like best about your job at Dr. Wilfried Müller GmbH?</span> The different requirements and multi-layered tasks that I deal with daily. They reflect the wide range of our customers, who come from both human and veterinary medicine. In order to offer our customers the best possible service, I look to empathise with our customers' concerns in very different ways, which gives me great pleasure. Another area that defines my work and that I really enjoy is the assessment and purchasing of technology.
              <br /><br />


              <span className='fw-bolder'>Why have you been with Dr. Wilfried Müller GmbH for such a long time?</span> I was working here back in my student days and decided very quickly to stay. The business area of Dr. Wilfried Müller GmbH is extremely interesting - and I have a penchant for technical products. I see a purpose in our work and I enjoy it because there is still so much to do.  <br /><br />


              <span className='fw-bolder'>What for you is the meaning behind your work?</span> I want to show that used medical equipment is a valuable resource. You don't always have to buy something new straight away. With our work, we help to protect the environment by not unnecessarily consuming raw materials for the production of new appliances. Used medical technology can often provide good and safe service for a long time at a good price. Many customers abroad are also dependent on cheaper devices, as are development aid organisations. In Nepal or Cameroon, for example, those responsible often have very little money at their disposal. To them high-quality, used medical equipment is very valuable. We can also use our knowledge to help organisations and sponsors regarding the ideal use of the devices, as there are often special requirements in developing countries, for example due to fluctuating power supplies.
              <br /><br />
              <span className='fw-bolder'>What are the 3 top features of your position?</span> A lot of design options, versatility, making a contribution to protecting the environment and conserving resources.
            </div>
          </Collapse>
        </div>


        {/* dr2 */}
        <div className="d-flex justify-content-center align-items-center mt-5">
          <div className="">
            <img width={'500px'} src={dr2} alt="" />
          </div>
          <div>
            <h1 className='text-teal-300 text-3xl font-bold'>Carolin Junger</h1>
            <p><span className='fw-bolder'>Position</span>: Sales Assistant Purchasing and Sales.</p>
            <p><span className='fw-bolder'>How long have you been with the company? </span> Since 2002 .</p>
            <p><span className='fw-bolder'>Education: </span> Industrial administrator.</p>
            <p><span className='fw-bolder'>Year of birth</span>: 1978</p>
          </div>

        </div>
        {/* drop */}
        <div className="bg-sky-700 text-white  ">
          <div style={{ padding: '0 50px' }} className="container d-flex align-items-center text-justify">
            <p className='mx-5 py-4'><span className='fw-bolder'>What do you like best about your job at Dr. Wilfried Müller GmbH?</span> It is very varied, I work independently with pleasant colleagues, and my opinion matters. I feel very valued here and have the feeling that I am an important part of the company. My work here is like my family, it fulfils me, and gives me satisfaction. My favourite thing is when customers don't know how to do something, e.g., ship something, and I am able to help them with that so that everyone is happy in the end.</p>
            <button onClick={() => setOpen2(!open2)}
              aria-controls="example-collapse-text"
              aria-expanded={open2} style={{ padding: '5px' }}>
              <img src={plus} alt="Plus Icon" style={{ width: '100%', height: '100%' }} />
            </button>
          </div>
          <Collapse in={open2}>
            <div className='container pb-5' id="example-collapse-text ">
              I'm also pleased that my coworkers here have all been with us for so long, there are hardly any changes because everyone is happy. We have a good workplace environment. And the sustainability that we practise and support here is something that I live by not only at work, but also in my private life, because I think it's a very important issue.
              <br /><br />


              <span className='fw-bolder'>What for you is the meaning behind your work?</span> It is important to me to provide our customers with the best possible service. I want to help them and really take care of them, because for me our customers are much more than just paying clients. They are people who want to help others and I want to support them in this. My job is to maintain supply chains and enable our customers to work well and comfortably.

              <br /><br />
              <span className='fw-bolder'> Your 3 favourite activities?</span> Providing service, customer contact, administration and employee management.
            </div>
          </Collapse>
        </div>






        {/* dr3 */}
        <div className="d-flex justify-content-center align-items-center mt-5">
          
          <div>
            <h1 className='text-teal-300 text-3xl font-bold'>Siegfried Weißenbach</h1>
            <p><span className='fw-bolder'>Anaesthesia technician, ventilation and anaesthesia field </span> </p>
            <p><span className='fw-bolder'>How long have you been with the company? since 2002 </span>  </p>
            <p><span className='fw-bolder'>Education: </span>   Electrician/information electronics technician, medical <br /> technician, distance learning industrial master craftsman in <br /> communications engineering</p>
            <p><span className='fw-bolder'>Year of birth</span>: 1967</p>
          </div>
          <div className="">
            <img width={'500px'} src={dr3} alt="" />
          </div>

        </div>
        {/* drop */}
        <div className="bg-sky-700 text-white  ">
          <div style={{ padding: '0 50px' }} className="container d-flex align-items-center text-justify">
            <p className='mx-5 py-4'><span className='fw-bolder'>What is your job as an anaesthesia technician at Dr. Wilfried Müller GmbH?</span>I repair respiratory and anaesthesia equipment for human and veterinary medicine and assemble them according to customer requirements. I check them precisely in accordance with the statutory safety (maintenance) regulations.</p>
            <button onClick={() => setOpen3(!open3)}
              aria-controls="example-collapse-text"
              aria-expanded={open3} style={{ padding: '5px' }}>
              <img src={plus} alt="Plus Icon" style={{ width: '100%', height: '100%' }} />
            </button>
          </div>
          <Collapse in={open3}>
            <div className='container pb-5' id="example-collapse-text ">
              My appliances go out in top condition, sometimes they undergo hours of testing. Because before anything leaves our premises, it has to function 100 percent safely. <br />



              I would let myself be treated at any time with the devices that I have tested myself. <br />
              As an expert in anaesthesia and respiratory equipment with 22 years of professional experience at Großhadern Clinic. I also provide telephone support for customers, as even well-trained technicians are often no longer familiar with older equipment. Enquiries come from all over the world. I also give instructions on devices that are used in developing countries. <br />
              What do you like best about your job at Dr. Wilfried Müller GmbH? The work is very varied, it's never the same and you always learn something new. The working atmosphere here is very good. I like going to work, we help each other and we know each other. <br />
              What is important to you in your work? It's important to me that it's fun and that I have a sense of achievement. If I can say: “Today I saved another high-quality device from the scrap heap”, then I'm satisfied. We are really doing something for the environment here. Even if a device is 50 years old, such as Zeiss microscopes, we strive to maintain it for a long time to come. Because we are well networked, we can even procure original parts that the manufacturers no longer offer. We then make a circular call among our numerous contacts to service technicians and dealers to find the spare part we are looking for, and we usually succeed. <br />
              What do you wish for the future of the medical technology/industry? It should not be too complicated, neither technically nor in terms of regulations. I would also like to see medical facilities and surgeries have multiple PC-supported devices because failures can occur at any time.

              <br /><br />
              <span className='fw-bolder'> Your 3 favourite activities?</span> Providing service, customer contact, administration and employee management.
            </div>
          </Collapse>
        </div>



        {/* dr4 */}
        <div className="d-flex justify-content-center align-items-center mt-5">
          <div className="">
            <img width={'500px'} src={dr4} alt="" />
          </div>
          <div>
            <h1 className='text-teal-300 text-3xl font-bold'>Raimund Hilz</h1>
            <p><span className='fw-bolder'>Position</span>: Workshop manager   </p>
            <p><span className='fw-bolder'>How long have you been with the company? since 2010 </span>  </p>
            <p><span className='fw-bolder'>Education: </span>  Electrician and precision mechanic.</p>
            <p><span className='fw-bolder'>Year of birth</span>: 1957</p>
          </div>

        </div>
        {/* drop */}
        <div className="bg-stone-300   ">
          <div style={{ padding: '0 50px' }} className="container d-flex align-items-center text-justify">
            <p className='mx-5 py-4'><span className='fw-bolder'>What is your job as an anaesthesia technician at Dr. Wilfried Müller GmbH?</span> That I can work freely and without constraints. We have a good atmosphere and good colleagues here, it's just fun and the work is extremely varied. You come into contact with so many things that you otherwise only know of from afar and never stop learning.</p>
            <button onClick={() => setOpen4(!open4)}
              aria-controls="example-collapse-text"
              aria-expanded={open4} style={{ padding: '5px' }}>
              <img src={plus} alt="Plus Icon" style={{ width: '100%', height: '100%' }} />
            </button>
          </div>
          <Collapse in={open4}>
            <div className='container pb-5' id="example-collapse-text ">
              Each of us has our own area of expertise and if a problem arises, I am asked to help. I take care of things when someone is stuck and maintain an overview. We go into a lot of detail here and I look again at things very closely. For example, we repair circuit boards that have not been available for years, which requires a high level of expertise. I also have an extensive stock of spare parts in my private life, because electronics is my hobby. <br />
              <br />
              <span className='fw-bolder'> What does a typical working day / your work look like? </span>My speciality here is high-frequency surgical equipment, surgical microscopes, and more difficult electronic repairs. This is a very specialised area, as it involves the repair of appliances that are somewhat older. Young people are no longer able to do this because some of them don't even know the components. You have to have grown up with the technology of the time to understand it. <br /> <br />
              <span className='fw-bolder'>What is important to you in your work?</span> What matters? That it is repaired properly and sensibly. I am not a friend of half measures. Either a repair is a sensible repair or I leave it alone. I make no compromises when it comes to quality and safety.
              <br /><br />
              <span className='fw-bolder'>What do you achieve with your work?</span> I'm not in favour of throwing away every broken appliance, but much more in favour of keeping them in good condition. For repairs that many companies or manufacturers no longer do, you need a very high level of knowledge across the board. Manufacturers often turn our customers away while we can still help them. <br /> <br />
             <span className='fw-bolder'> What are the 3 top features in your job?</span> Self-determination in my methods, personal responsibility, job satisfaction. It all fits together, I can combine my hobby with my job, do good and pass on my expertise.

             </div>
          </Collapse>
        </div>




        {/* dr5 */}
        <div className="d-flex justify-content-center align-items-center mt-5">
         
          <div>
            <h1 className='text-teal-300 text-3xl font-bold'>Manfred Gebele</h1>
            <p><span className='fw-bolder'>Medical technician </span>  </p>
            <p><span className='fw-bolder'>How long have you been with the company? since 2014 </span>  </p>
            <p><span className='fw-bolder'>Education: </span>   Electrical system installer / energy system electronics <br /> technician with further training as a medical technician</p>
            <p><span className='fw-bolder'>Year of birth</span>: 1968</p>
          </div>
          <div className="">
            <img width={'500px'} src={dr5} alt="" />
          </div>

        </div>
        {/* drop */}
        <div className="bg-sky-700 text-white  ">
          <div style={{ padding: '0 50px' }} className="container d-flex align-items-center text-justify">
            <p className='mx-5 py-4'><span className='fw-bolder'>What is your job as an anaesthesia technician at Dr. Wilfried Müller GmbH?</span>  I particularly like the great relationship with my colleagues and the fact that my work helps people.</p>
            <button onClick={() => setOpen5(!open5)}
              aria-controls="example-collapse-text"
              aria-expanded={open5} style={{ padding: '5px' }}>
              <img src={plus} alt="Plus Icon" style={{ width: '200px'  }} />
            </button>
          </div>
          <Collapse in={open5}>
            <div className='container pb-5' id="example-collapse-text ">
            This gives me a sense completeness and harmony. I've been in service my whole life. Customers often come to us who have been rejected by the seller or manufacturer and we then find a solution to their problem. <br />
              <br />
              <span className='fw-bolder'> What does a typical working day / your work look like? </span>I work on customer repairs, check and finish devices that have been sold – all types except ventilation and optics, e.g., I take care of infusion and syringe pumps, ECG monitors, anaesthetic gas monitors, defibrillators. Customers often call and say "my device is doing this or that, how can I fix it?" and then we go through it step by step together. If we know the device, we are happy to help, even if the enquiry comes from companies that are not yet customers of ours. <br /> <br />
              <span className='fw-bolder'>What is important to you in your work? What matters? </span>  It is important to adhere to the manufacturer's specifications, which is where accuracy comes in. You go through a checklist, according to which, for example, you have to check whether the housing is in order, take a close look at the cables and adjust the limit values. This is all done with the aid of a calibrated test case with a very small tolerance.
              <br /><br />
              Maintaining and refurbishing used medical technology is very sustainable: The appliance does not have to be disposed of and a new one does not have to be built using new resources. This helps the environment and customers benefit from more cheaper prices, because if a new appliance costs, say, 20,000 euros, a used one can cost 2,500 euros and also be more robustly built. Older mechanical devices are almost indestructible. German customers appreciate this reliability just as much as international customers.
             <span className='fw-bolder'> What do you achieve with your work?</span> I am fighting against the throwaway mentality. It is unacceptable that appliances today are designed in such a way that they are thrown away after five years when they could just as easily be used for many more decades. Older mechanical devices prove this: In contrast to more high-tech appliances, they are usually incredibly robust and durable.
              <br /><br />
             <span className='fw-bolder'> What do you wish for the future of the medical technology/industry?</span> A higher and more durable quality. Many appliances still work technically, but they have to be thrown away because the plastic is porous, for example. I recently had a real moment of shock with an appliance from 2016/2018 that literally crumbled apart. It used to be different. Back then, manufacturers were still proud to offer spare parts for 20 years – for their long-lasting appliances.
             </div>
          </Collapse>
        </div>





      </div>
    </>
  );
}

export default Team;

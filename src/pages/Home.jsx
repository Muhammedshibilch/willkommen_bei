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
        <h1 style={{marginTop:'-350px', marginRight:'500px', fontWeight:'700'}}>Gebrauchte medizinische <br /> Geräte kaufen</h1>
        <Link to={'/shop'}><MDBBtn className='mt-3 w-25 btn-outline-success' style={{marginTop:'-350px', marginRight:'740px'}}>Zum Onlineshop</MDBBtn></Link>
        <MDBBtn className='mt-3 w-25 btn-outline-success' style={{marginTop:'-350px', marginRight:'740px'}}>Servicetelefon</MDBBtn>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src='https://www.med-geraete.de/media/de/fc/66/1659080101/Header_Startseite_2.jpg?ts=1715681257' className='d-block w-100' alt='...' />
        <MDBCarouselCaption>
        <h1 className='text-dark' style={{marginTop:'-350px', marginRight:'500px', fontWeight:'700'}}>Gebrauchte medizinische <br /> Geräte kaufen</h1>
<Link to={'shop'}>        <MDBBtn className='mt-3 w-25 btn-success' style={{marginTop:'-350px', marginRight:'740px'}}>Zum Onlineshop</MDBBtn>
</Link>
        <MDBBtn className='mt-3 w-25 btn-success' style={{marginTop:'-350px', marginRight:'740px'}}>Servicetelefon </MDBBtn>
        </MDBCarouselCaption>
      </MDBCarouselItem>

    </MDBCarousel>
</div>

<div className="flex flex-wrap">
  <div className="w-full md:w-1/2">
    <h2 className="text-center m-3 p-5 text-primary font-semibold text-xl sm:text-2xl lg:text-3xl">
      An- und Verkauf gebrauchter medizinischer Geräte, Reparaturen und Ersatzteilbeschaffung
    </h2>
  </div>
  <div className="w-full md:w-1/2">
    <p className="m-3 p-5 text-justify text-base sm:text-lg lg:text-xl">
      25 Jahre Qualität und Sicherheit: Unter der Leitung von Geschäftsführer Marcus Triebel beliefert die Dr. Wilfried Müller GmbH weltweit private Unternehmen und öffentliche Träger mit gebrauchten medizinischen Geräten. Zusätzlich bieten wir Reparaturen und Ersatzteilbeschaffung an. Bei uns erhalten Sie hohe Qualität und zertifizierte Sicherheit sowie einen hervorragenden, individuellen Service auch nach dem Kauf. Der Ankauf gebrauchter Medizintechnik rundet unser Portfolio ab.
    </p>
  </div>
</div>



<div className="p-5" style={{backgroundColor:'lightgray'}}>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="flex flex-col items-center">
      <img
        src="https://www.med-geraete.de/media/9a/57/d7/1658923269/1-jahr.svg?ts=1658923269"
        className="mt-5"
        width="100"
        alt="Gewährleistung"
      />
      <h4 className="mt-2 text-primary font-semibold">Gewährleistung</h4>
    </div>

    <div className="flex flex-col items-center">
      <img
        src="https://www.med-geraete.de/media/68/78/5f/1658915255/Icon_Nachhaltig.svg?ts=1658915255"
        className="mt-5"
        width="100"
        alt="Nachhaltigkeit"
      />
      <h4 className="mt-2 text-primary font-semibold">Nachhaltigkeit</h4>
    </div>

    <div className="flex flex-col items-center justify-center mt-5 space-y-4">
  <img
    src="https://www.med-geraete.de/media/52/3e/12/1658923819/Icon_8Jahre.svg?ts=1658923819"
    className="w-24 h-24" // Adjust image size if needed
    alt="Liefergarantie"
  />
  <h4 className="text-primary font-semibold text-center">
    Liefergarantie für Ersatzteile und Zubehör
  </h4>
</div>

  </div>
</div>


<div class="container">
  <div class="row">
    <div class="col-12 col-md-2"></div>
    <div class="col-12 col-md-4 mt-5">
      <h3 class='text-primary'>Nachhaltig sicher behandeln mit gebrauchten medizinischen Geräten</h3>
      <h5 class='mb-3 font-extrabold' style={{fontWeight:'500'}}>Viele gute Gründe sprechen für den Kauf eines gebrauchten medizinischen Gerätes:</h5>
      <p>• kostengünstige Alternative zu teuren, störungsanfälligen und komplizierten Geräten</p>
      <p>• Hochwertige Medizintechnik renommierter Hersteller zum unschlagbaren Preis-Leistungs-Verhältnis eines Gebrauchtgerätes</p>
      <p>• Robustheit und einfache Bedienung bei älteren Geräten</p>
      <p>• Keine Einarbeitungszeiten: Wiederbeschaffung von bewährten Geräten, deren Funktionsweise und Bedienung Ihnen und Ihrem Personal bereits geläufig ist</p>
      <p class='mt-3 font-bold'>Gebrauchte Medizintechnik von der Dr. Wilfried Müller GmbH wird nach den höchsten Sicherheitsstandards geprüft und von erfahrenen Spezialisten aufgearbeitet. Die Faktoren Kosten, Qualität, Sicherheit und ökologischer Mehrwert stehen bei unseren Geräten im richtigen Verhältnis. So behandeln Sie Ihre Patienten nachhaltig sicher.</p>
    </div>
    <div class="col-12 col-md-4">
      <img class='mt-5  img-fluid ' height={'600px'} src='https://www.med-geraete.de/thumbnail/fe/c6/3b/1658755215/Nachhaltig_1920x1920.jpg' alt='' />
      <a href='/sustainability' class='btn btn-primary mt-3'>Mehr erfahren</a>
    </div>
    <div class="col-12 col-md-2"></div>
  </div>
</div>


<div class="container">
  <div class="row mt-5" id="homie">
    <div class="col-12 col-md-2"></div>
    <div class="col-12 col-md-4">
      <h3 class="text-light mt-5" style={{fontWeight:'550'}}>Weltweite Lieferung und schneller Service</h3>
    </div>
    <div class="col-12 col-md-4">
      <p class="mt-5 text-light">Die Dr. Wilfried Müller GmbH beliefert weltweit private und öffentliche Kliniken, Praxen von Human- und Tiermedizinern, Hochschulen, Forschungsinstitute und Hilfsorganisationen. Wir liefern alle Geräte aus unserem Sortiment mit möglichst kurzen Lieferzeiten aus. Für sicheren und schnellen Versand prüfen wir für jeden Kauf die besten Lieferoptionen und liefern auch in abgelegene und schwer erreichbare (Krisen-)gebiete.</p>
      <a href="/contact" class="btn btn-light mt-3">Anfrage stellen</a>
    </div>
    <div class="col-12 col-md-2"></div>
  </div>
</div>




<div className="container mx-auto">
  <div className="row mt-5" id="customization">
    <div className="col-12 col-md-2"></div>

    <div className="col-12 col-md-4">
      <h3 className="mt-5 text-primary" style={{ fontWeight: '550' }}>
        Individuelle Anpassung von gebrauchten medizinischen Geräten und Sonderlösungen
      </h3>
    </div>

    <div className="col-12 col-md-4">
      <div className="row">
        <div className="col-12">
          <p className="mt-5">
            Wir sind spezialisiert auf individuelle Lösungen, die auf die Bedürfnisse unserer Kunden angepasst werden. Ob Narkosegeräte für Mäuse und Pferde, speziell umgebaute OP-Liegen oder Beleuchtung, die in Krisengebieten auch länger ohne Stromversorgung funktioniert: Unsere Mitarbeiter beraten Sie gerne zu allen Möglichkeiten, um Ihren Bedarf zu decken.
          </p>
        </div>
        <div className="col-12">
          <p className="mt-3">
            Sie haben ein besonderes Anliegen, das es so direkt nicht gibt? Mit hoher fachlicher Expertise passen unsere Techniker medizinische Geräte individuell und unter Beachtung der gesetzlichen Vorschriften an Ihre Anforderungen an. Wir freuen uns auf Ihre Anfrage!
          </p>
        </div>
      </div>

      <Link to={'/contact'}>
        <MDBBtn className="mt-3 btn-primary w-100">Servicetelefon</MDBBtn>
      </Link>
    </div>

    <div className="col-12 col-md-2"></div>
  </div>
</div>

 

<div className="row mt-5" style={{ backgroundColor: 'lightgray' }}>
  <div className="col-12 col-md-1"></div>
  <div className="col-12 col-md-10">
    <div className="row p-5">
      <div className="col-6 col-sm-4 col-md-2">
        <center>
          <img
            src="https://www.med-geraete.de/media/87/d8/ba/1659000916/Icon_Kontakt.svg"
            width={'100px'}
            alt=""
          />
          <h6 className="mt-2 text-primary" style={{ fontWeight: '600' }}>
            Sehr gute Erreichbarkeit
          </h6>
        </center>
      </div>

      <div className="col-6 col-sm-4 col-md-2">
        <center>
          <img
            src="https://www.med-geraete.de/media/c7/58/c7/1658915255/Icon_Lieferung.svg"
            width={'100px'}
            alt=""
          />
          <h6 className="mt-2 text-primary" style={{ fontWeight: '600' }}>
            Kurze Lieferzeit
          </h6>
        </center>
      </div>

      <div className="col-6 col-sm-4 col-md-2">
        <center>
          <img
            src="https://www.med-geraete.de/media/87/d8/ba/1659000916/Icon_Kontakt.svg"
            width={'100px'}
            alt=""
          />
          <h6 className="mt-2 text-primary" style={{ fontWeight: '600' }}>
            Sehr leicht zu erreichen
          </h6>
        </center>
      </div>

      <div className="col-6 col-sm-4 col-md-2">
        <center>
          <img
            src="https://www.med-geraete.de/media/b6/91/79/1658915255/Icon_Guenstig.svg"
            width={'100px'}
            alt=""
          />
          <h6 className="mt-2 text-primary" style={{ fontWeight: '600' }}>
            Kostengünstige Qualität
          </h6>
        </center>
      </div>

      <div className="col-6 col-sm-4 col-md-2">
        <center>
          <img
            src="https://www.med-geraete.de/media/8f/e0/54/1658915255/Icon_Werkzeug.svg"
            width={'100px'}
            alt=""
          />
          <h6 className="mt-2 text-primary" style={{ fontWeight: '600' }}>
            Reparaturservice auch für Fremdgeräte
          </h6>
        </center>
      </div>

      <div className="col-6 col-sm-4 col-md-2">
        <center>
          <img
            src="https://www.med-geraete.de/media/2e/48/2c/1658915255/Icon_Zahnrad.svg"
            width={'100px'}
            alt=""
          />
          <h6 className="mt-2 text-primary" style={{ fontWeight: '600' }}>
            Individuelle Anpassung an Ihre Anforderungen
          </h6>
        </center>
      </div>
    </div>
  </div>
  <div className="col-12 col-md-1"></div>
</div>




<div className="row">
  <h3 className="text-primary text-center mt-5" style={{ fontWeight: '550' }}>
    Dr. Wilfried Müller GmbH – Ihr Partner für <br /> zuverlässige gebrauchte Medizintechnik
  </h3>

  {/* Centering columns on mobile and desktop */}
  <div className="col-12 col-md-2"></div>

  <div className="col-12 col-md-4 mt-5">
    <p>
      Als inhabergeführtes Unternehmen bieten wir unseren Kunden seit 1998 hochwertige gebrauchte medizinische
      Geräte an. Transparenz und Zuverlässigkeit sind uns bei der Zusammenarbeit sehr wichtig. Das 15-köpfige Team der
      Dr. Wilfried Müller GmbH bietet Ihnen hervorragende fachliche Kompetenz.
    </p>
  </div>

  <div className="col-12 col-md-4 mt-5">
    <p>
      All unsere Mitarbeiter haben nicht nur eine Ausbildung, sondern auch viele Jahre Erfahrung in ihren jeweiligen
      Fachgebieten. Die meisten haben zudem Berufserfahrung im medizinischen Sektor, zum Beispiel als Notärzte bei der
      Feuerwehr, Tierärzte oder Rettungssanitäter und können daher ihr praktisches Wissen nutzen, um medizinische
      Geräte mit umfassendem Fachwissen zu beurteilen.
    </p>
  </div>

  <div className="col-12 col-md-2"></div>

  {/* Centered button for all screen sizes */}
  <center>
    <Link to={'/company'}>
      <MDBBtn className="btn-primary mt-3">Mehr erfahren</MDBBtn>
    </Link>
  </center>
</div>




<div className="row mt-5">
  <div className="col-12">
    <img
      src="https://www.med-geraete.de/thumbnail/8f/10/3d/1658145358/Start-Footer_1920x1920.jpg?ts=1658145373"
      className="w-full" // Tailwind class for full width
      alt="Footer Image"
    />
  </div>
</div>



    </div>
  )
}

export default Home
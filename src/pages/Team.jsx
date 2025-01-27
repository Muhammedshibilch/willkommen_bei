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
      <div>
  <img 
    className="w-full object-cover" 
    src="https://www.med-geraete.de/thumbnail/ab/40/32/1657891643/Team_1920x1920.jpg?ts=1657891644" 
    alt="Team"
  />
</div>


<div className="bg-teal-300 h-auto flex flex-col md:flex-row justify-center items-center px-4 md:px-[150px] py-4">
  <div className="md:w-1/2 text-justify mx-4 text-sm">
    <p>
      Wir, das Team der Dr. Wilfried Müller GmbH, sind seit 1998 für unsere nationalen und internationalen Kunden da. Wir unterstützen Sie gerne dabei, Menschen und Tieren zu helfen. Keine Herausforderung ist uns zu groß – sei es
    </p>
  </div>
  <div className="md:w-1/2 text-justify mx-4 text-sm">
    <p>
      ob es darum geht, Container mit gebrauchter Medizintechnik in ferne Länder zu verschiffen oder dringend benötigte Ersatzteile zu beschaffen: Wir sind für Sie da.
    </p>
  </div>
</div>

<div className="bg-sky-700 h-auto flex flex-col md:flex-row justify-center items-center px-4 md:px-[150px] py-4">
  <div className="md:w-1/2 text-center md:text-left py-2">
    <h1 className="text-teal-300 text-2xl md:text-3xl font-bold">
      Das ist uns bei der Arbeit mit gebrauchten medizinischen Geräten wichtig
    </h1>
  </div>
  <div className="md:w-1/2 py-2">
    <p className="text-white font-extralight text-sm md:text-base">
      Für unsere Kunden da zu sein, exzellenten Service zu bieten, fair zu sein, hochwertige Geräte zu liefern, Menschen glücklich zu machen, unsere gute Laune weiterzugeben, präzise zu arbeiten, Sicherheit zu bieten, Lösungen zu finden, ein sehr gutes Preis-Leistungs-Verhältnis zu bieten, die Welt zu einem besseren Ort zu machen, Menschen und Tieren zu helfen, die Umwelt zu schützen, Wertschätzung zu zeigen, (zu helfen), Herausforderungen zu überwinden.
    </p>
  </div>
</div>



        {/* dr1 */}
        <div className="flex flex-col md:flex-row justify-center align-items-center mt-5 px-4">
  <div className="flex flex-col md:flex-row items-center md:items-start">
    <div className="text-center mt-12 md:text-left md:w-1/2 md:mr-5">
      <h1 className="text-teal-300 text-2xl md:text-3xl font-bold">Marcus Triebel</h1>
      <p><span className="font-bold ">Position:</span> Geschäftsführer</p>
      <p><span className="font-bold">Wie lange sind Sie schon im Unternehmen?</span> Seit 1997, Geschäftsführer seit 2012.</p>
      <p><span className="font-bold">Geburtsjahr:</span> 1974</p>
    </div>
    <div className="flex justify-center md:justify-start md:w-1/2">
      <img
        className="w-full max-w-xs md:max-w-sm lg:max-w-md"
        src={dr1}
        alt="Marcus Triebel"
      />
    </div>
  </div>
</div>

{/* Drop Section */}
<div className="bg-stone-300 px-4 md:px-8 py-6">
  <div className="container flex flex-col md:flex-row items-start text-justify">
    <p className="md:mx-5 mb-4 md:mb-0">
      Dank seiner medizinischen Ausbildung und 25-jährigen Erfahrung im Kauf und Verkauf gebrauchter Medizintechnik besitzt Marcus Triebel umfassendes, tiefgehendes technisches Wissen über alle angebotenen Geräte. Es ist ihm besonders wichtig, gebrauchte Medizintechnik noch mehr als wertvolle Ressource in den Fokus der Gesundheitsindustrie zu rücken.
    </p>
    <div className="flex justify-start mt-4">
      <button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        className="w-12 h-12 flex justify-center items-center bg-white rounded-full"
      >
        <img
          src={plus}
          alt="Plus Icon"
          className="w-6 h-6 md:w-8 md:h-8"
        />
      </button>
    </div>
  </div>
  <Collapse in={open}>
    <div className="container text-justify pt-4">
      <span className="font-bold">Was gefällt Ihnen an Ihrer Arbeit bei der Dr. Wilfried Müller GmbH am besten?</span>
      Die unterschiedlichen Anforderungen und vielschichtigen Aufgaben, mit denen ich mich täglich beschäftige. Sie spiegeln die breite Palette unserer Kunden wider, die sowohl aus der Human- als auch der Veterinärmedizin kommen. Um unseren Kunden den bestmöglichen Service zu bieten, versuche ich mich in die Anliegen unserer Kunden in sehr unterschiedlicher Weise hineinzuversetzen, was mir große Freude bereitet. Ein weiterer Bereich, der meine Arbeit prägt und mir viel Spaß macht, ist die Einschätzung und der Einkauf von Technik.
      <br /><br />

      <span className="font-bold">Warum sind Sie schon so lange bei der Dr. Wilfried Müller GmbH?</span>
      Bereits in meinen Studienzeiten habe ich hier gearbeitet und mich sehr schnell dazu entschieden, zu bleiben. Der Geschäftsbereich der Dr. Wilfried Müller GmbH ist äußerst interessant – und ich habe eine Vorliebe für technische Produkte. Ich sehe einen Sinn in unserer Arbeit und sie bereitet mir Freude, weil es noch viel zu tun gibt.
      <br /><br />

      <span className="font-bold">Was bedeutet Ihnen Ihre Arbeit?</span>
      Ich möchte zeigen, dass gebrauchte Medizintechnik eine wertvolle Ressource ist. Man muss nicht immer gleich etwas Neues kaufen. Mit unserer Arbeit tragen wir dazu bei, die Umwelt zu schützen, indem wir nicht unnötig Rohstoffe für die Herstellung neuer Geräte verbrauchen. Gebrauchte Medizintechnik kann oft langfristig gute und sichere Dienste zu einem guten Preis leisten. Viele Kunden im Ausland sind zudem auf günstigere Geräte angewiesen, ebenso Entwicklungsorganisationen. In Nepal oder Kamerun beispielsweise haben die Verantwortlichen oft nur sehr begrenzte finanzielle Mittel. Für sie sind hochwertige, gebrauchte Medizintechnik sehr wertvoll. Wir können unser Wissen auch dazu nutzen, Organisationen und Förderern beim optimalen Einsatz der Geräte zu helfen, da in Entwicklungsländern oft besondere Anforderungen bestehen, zum Beispiel aufgrund von schwankenden Stromversorgungen.
      <br /><br />

      <span className="font-bold">Was sind die 3 wichtigsten Eigenschaften Ihrer Position?</span>
      Viele Gestaltungsmöglichkeiten, Vielseitigkeit, Beitrag zum Schutz der Umwelt und zur Ressourcenschonung.
    </div>
  </Collapse>
</div>




        {/* dr2 */}
       <div className="flex flex-col md:flex-row justify-center items-center mt-5 px-4">
  <div className="flex justify-center md:justify-end md:w-1/2 mb-4 md:mb-0">
    <img
      className="w-full max-w-xs md:max-w-sm lg:max-w-md"
      src={dr2}
      alt="Carolin Junger"
    />
  </div>
  <div className="md:w-1/2 md:ml-5 text-center md:text-left flex flex-col">
    <h1 className="text-teal-300 text-2xl md:text-3xl font-bold mb-2">Carolin Junger</h1>
    <div className="flex flex-col">
      <p className="mb-1">
        <span className="font-bold">Position:</span> Vertriebsassistentin Einkauf und Verkauf.
      </p>
      <p className="mb-1">
        <span className="font-bold">Wie lange sind Sie schon im Unternehmen?</span> Seit 2002.
      </p>
      <p className="mb-1">
        <span className="font-bold">Ausbildung:</span> Industriekauffrau.
      </p>
      <p className="mb-1">
        <span className="font-bold">Geburtsjahr:</span> 1978
      </p>
    </div>
  </div>
</div>


{/* Drop Section */}
<div className="bg-sky-700 text-white px-4 md:px-8 py-6">
  <div className="container flex flex-col md:flex-row items-start text-justify">
    <p className="md:mr-5 mb-4 md:mb-0 py-4 flex-grow">
      <span className="font-bold">Was gefällt Ihnen an Ihrer Arbeit bei der Dr. Wilfried Müller GmbH am besten?</span> Es ist sehr abwechslungsreich, ich arbeite selbstständig mit angenehmen Kollegen und meine Meinung zählt. Ich fühle mich hier sehr wertgeschätzt und habe das Gefühl, ein wichtiger Teil des Unternehmens zu sein. Meine Arbeit hier ist wie meine Familie, sie erfüllt mich und gibt mir Zufriedenheit. Am liebsten helfe ich Kunden, wenn sie nicht wissen, wie sie etwas machen sollen, z.B. etwas verschicken, sodass am Ende alle glücklich sind.
    </p>
    {/* Plus Button inside the same container */}
    <div className="flex justify-start mt-4">
      <button
        onClick={() => setOpen2(!open2)}
        aria-controls="example-collapse-text"
        aria-expanded={open2}
        className="w-12 h-12 flex justify-center items-center bg-white rounded-full"
      >
        <img
          src={plus}
          alt="Plus Icon"
          className="w-6 h-6 md:w-8 md:h-8"
        />
      </button>
    </div>
  </div>

  <Collapse in={open2}>
    <div className="container pt-4 text-justify">
      Ich freue mich auch, dass meine Kollegen hier alle schon so lange bei uns sind, es gibt kaum Veränderungen, weil alle zufrieden sind. Wir haben ein gutes Arbeitsumfeld. Und die Nachhaltigkeit, die wir hier praktizieren und unterstützen, lebe ich nicht nur bei der Arbeit, sondern auch privat, weil ich sie für sehr wichtig halte.
      <br /><br />

      <span className="font-bold">Was bedeutet Ihnen Ihre Arbeit?</span> Es ist mir wichtig, unseren Kunden den bestmöglichen Service zu bieten. Ich möchte ihnen helfen und mich wirklich um sie kümmern, denn für mich sind unsere Kunden weit mehr als nur zahlende Klienten. Sie sind Menschen, die anderen helfen wollen, und ich möchte sie dabei unterstützen. Meine Aufgabe besteht darin, Lieferketten aufrechtzuerhalten und unseren Kunden ein gutes und komfortables Arbeiten zu ermöglichen.
      <br /><br />

      <span className="font-bold">Ihre 3 Lieblingstätigkeiten?</span> Service bieten, Kundenkontakt, Verwaltung und Mitarbeiterführung.
    </div>
  </Collapse>
</div>












        {/* dr3 */}
        <div className="d-flex flex-col md:flex-row justify-center align-items-center mt-5 px-4">
  {/* Text Section */}
  <div className="mb-4 md:mb-0 md:w-1/2 text-center md:text-left">
    <h1 className="text-teal-300 text-3xl font-bold mb-3">Siegfried Weißenbach</h1>
    <p><span className="fw-bolder">Anästhesietechniker, Bereich Beatmung und Anästhesie</span></p>
    <p><span className="fw-bolder">Wie lange sind Sie schon im Unternehmen?</span> Seit 2002</p>
    <p><span className="fw-bolder">Ausbildung:</span> Elektriker/Informationselektroniker, Medizintechniker, Fernstudium zum Industriemeister in der Kommunikationstechnik</p>
    <p><span className="fw-bolder">Geburtsjahr:</span> 1967</p>
  </div>

  {/* Image Section */}
  <div className="text-center md:text-right md:w-1/2">
    <img width={"500px"} src={dr3} alt="Siegfried Weißenbach" className="mx-auto md:mx-0" />
  </div>
</div>

{/* Drop Section */}
<div className="bg-sky-700 text-white">
  <div style={{ padding: "0 50px" }} className="container d-flex align-items-center text-justify">
    <p className="mx-5 py-4">
      <span className="fw-bolder">Was ist Ihre Aufgabe als Anästhesietechniker bei der Dr. Wilfried Müller GmbH?</span>
      Ich repariere Beatmungs- und Anästhesiegeräte für die Human- und Veterinärmedizin und baue sie nach Kundenwunsch zusammen. Ich prüfe sie genau nach den gesetzlichen Sicherheitsvorschriften (Wartung).
    </p>
    
    {/* Plus button container */}
    <div className="flex justify-start mt-4 w-full md:w-auto">
      <button
        onClick={() => setOpen3(!open3)}
        aria-controls="example-collapse-text"
        aria-expanded={open3}
        className="w-12 h-12 flex justify-center items-center bg-white rounded-full"
      >
        <img
          src={plus}
          alt="Plus Icon"
          className="w-6 h-6 md:w-8 md:h-8"
        />
      </button>
    </div>
  </div>

  {/* Collapse Section */}
  <Collapse in={open3}>
    <div className="container pb-5" id="example-collapse-text">
      Meine Geräte verlassen unser Werk in einwandfreiem Zustand, manchmal unterziehen sie sich stundenlangen Tests. Denn bevor irgendetwas unsere Räumlichkeiten verlässt, muss es zu 100 Prozent sicher funktionieren.
      <br />
      Ich würde mich jederzeit mit den Geräten behandeln lassen, die ich selbst getestet habe.
      <br />
      Als Experte für Anästhesie- und Beatmungsgeräte mit 22-jähriger Berufserfahrung an der Klinik Großhadern biete ich auch telefonischen Support für Kunden, da auch gut ausgebildeten Technikern oft der Umgang mit älteren Geräten nicht mehr geläufig ist. Anfragen kommen aus der ganzen Welt. Ich gebe auch Anweisungen zu Geräten, die in Entwicklungsländern eingesetzt werden.
      <br />
      Was gefällt Ihnen an Ihrer Arbeit bei der Dr. Wilfried Müller GmbH am besten? Die Arbeit ist sehr abwechslungsreich, sie ist nie gleich und man lernt immer etwas Neues dazu. Das Arbeitsklima hier ist sehr gut. Ich gehe gerne zur Arbeit, wir helfen uns gegenseitig und kennen uns untereinander.
      <br />
      Was ist Ihnen bei Ihrer Arbeit wichtig? Es ist mir wichtig, dass sie Spaß macht und ich ein Erfolgserlebnis habe. Wenn ich sagen kann: „Heute habe ich wieder ein hochwertiges Gerät vor dem Schrott gerettet“, dann bin ich zufrieden. Wir tun wirklich etwas für die Umwelt hier. Auch wenn ein Gerät 50 Jahre alt ist, wie z.B. Zeiss-Mikroskope, bemühen wir uns, es noch lange zu erhalten. Da wir gut vernetzt sind, können wir sogar Originalteile beschaffen, die die Hersteller nicht mehr anbieten. Wir machen dann einen Rundruf bei unseren zahlreichen Kontakten zu Servicetechnikern und Händlern, um das gesuchte Ersatzteil zu finden, und haben meist Erfolg.
      <br />
      Was wünschen Sie sich für die Zukunft der Medizintechnik/Branche? Sie sollte nicht zu kompliziert sein, weder technisch noch in Bezug auf Vorschriften. Ich wünsche mir auch, dass medizinische Einrichtungen und Praxen mehrfach PC-unterstützte Geräte haben, da Ausfälle jederzeit auftreten können.
      <br /><br />
      <span className="fw-bolder">Ihre 3 Lieblingstätigkeiten?</span> Service bieten, Kundenkontakt, Verwaltung und Mitarbeiterführung.
    </div>
  </Collapse>
</div>





        {/* dr4 */}
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center mt-5">
  {/* Image Section */}
  <div className="mb-4 mb-md-0">
    <img width={'100%'} max-width={'500px'} src={dr4} alt="" />
  </div>

  {/* Text Section */}
  <div className="ms-md-4 text-center text-md-start mt-4 mt-md-0">
    <h1 className="text-teal-300 text-3xl font-bold">Raimund Hilz</h1>
    <p><span className="fw-bolder">Position:</span> Werkstattleiter</p>
    <p><span className="fw-bolder">Wie lange sind Sie schon im Unternehmen?</span> Seit 2010</p>
    <p><span className="fw-bolder">Ausbildung:</span> Elektriker und Feinmechaniker.</p>
    <p><span className="fw-bolder">Geburtsjahr:</span> 1957</p>
  </div>
</div>

{/* Drop */}
<div className="bg-stone-300">
  <div style={{ padding: '0 50px' }} className="container d-flex align-items-center text-justify flex-wrap">
    <p className="mx-5 py-4 w-100">
      <span className="fw-bolder">Was ist Ihre Aufgabe als Anästhesietechniker bei der Dr. Wilfried Müller GmbH?</span>
      Dass ich frei und ohne Einschränkungen arbeiten kann. Wir haben hier eine gute Atmosphäre und gute Kollegen, es macht einfach Spaß und die Arbeit ist äußerst abwechslungsreich. Man kommt mit so vielen Dingen in Kontakt, die man sonst nur aus der Ferne kennt, und lernt nie aus.
    </p>

    {/* Plus Button at the end of the div, after the text */}
    <div className="flex ml-auto ">
      <button
        onClick={() => setOpen4(!open4)}
        aria-controls="example-collapse-text"
        aria-expanded={open4}
        className="w-12 h-12 flex justify-center items-center bg-white rounded-full mb-5"
      >
        <img
          src={plus}
          alt="Plus Icon"
          className="w-6 h-6 md:w-8 md:h-8"
        />
      </button>
    </div>
  </div>

  {/* Collapse Section */}
  <Collapse in={open4}>
    <div className="container pb-5" id="example-collapse-text">
      Jeder von uns hat sein eigenes Fachgebiet und wenn ein Problem auftaucht, werde ich um Hilfe gebeten. Ich kümmere mich um Dinge, wenn jemand nicht weiterkommt, und behalte den Überblick. Wir gehen hier sehr ins Detail und ich schaue mir die Dinge noch einmal ganz genau an. Beispielweise reparieren wir Platinen, die seit Jahren nicht mehr erhältlich sind, was ein hohes Maß an Fachwissen erfordert. Ich habe auch privat einen umfangreichen Ersatzteilbestand, weil Elektronik mein Hobby ist.
      <br /><br />
      <span className="fw-bolder">Wie sieht ein typischer Arbeitstag bei Ihnen aus?</span> Meine Spezialität hier sind hochfrequente chirurgische Geräte, Operationsmikroskope und schwierige elektronische Reparaturen. Dies ist ein sehr spezialisiertes Gebiet, da es die Reparatur etwas älterer Geräte betrifft. Junge Leute können das oft nicht mehr, weil sie die Komponenten gar nicht kennen. Man muss mit der Technologie der damaligen Zeit aufgewachsen sein, um sie zu verstehen.
      <br /><br />
      <span className="fw-bolder">Was ist Ihnen bei Ihrer Arbeit wichtig?</span> Was zählt? Dass es richtig und sinnvoll repariert wird. Ich bin kein Freund von halben Sachen. Entweder ist eine Reparatur sinnvoll, oder ich lasse es sein. Bei Qualität und Sicherheit mache ich keine Kompromisse.
      <br /><br />
      <span className="fw-bolder">Was erreichen Sie mit Ihrer Arbeit?</span> Ich bin kein Befürworter davon, jedes defekte Gerät wegzuwerfen, sondern eher dafür, sie in gutem Zustand zu halten. Für Reparaturen, die viele Firmen oder Hersteller nicht mehr durchführen, benötigt man ein sehr hohes, breit gefächertes Wissen. Hersteller lehnen unsere Kunden oft ab, während wir ihnen noch helfen können.
      <br /><br />
      <span className="fw-bolder">Was sind die 3 wichtigsten Eigenschaften Ihres Berufs?</span> Selbstbestimmung in meinen Methoden, Eigenverantwortung, Arbeitszufriedenheit. Es passt alles zusammen, ich kann mein Hobby mit meiner Arbeit verbinden, Gutes tun und mein Fachwissen weitergeben.
    </div>
  </Collapse>
</div>










        {/* dr5 */}
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center mt-5">
  {/* Image Section */}
  <div className="mb-4 mb-md-0">
    <img width={'100%'} max-width={'500px'} src={dr5} alt="Manfred Gebele" />
  </div>

  {/* Text Section */}
  <div className="ms-md-4 text-center text-md-start mt-4 mt-md-0">
    <h1 className="text-teal-300 text-3xl font-bold">Manfred Gebele</h1>
    <p><span className="fw-bolder">Position:</span> Medizintechniker</p>
    <p><span className="fw-bolder">Wie lange sind Sie schon im Unternehmen?</span> Seit 2014</p>
    <p><span className="fw-bolder">Ausbildung:</span> Elektroinstallateur für Systeme / <br /> Energieanlagenelektroniker mit Weiterbildung zum Medizintechniker</p>
    <p><span className="fw-bolder">Geburtsjahr:</span> 1968</p>
  </div>
</div>

{/* Drop Section */}
<div className="bg-sky-700 text-white">
  <div style={{ padding: '0 50px' }} className="container d-flex flex-column flex-md-row align-items-start text-justify">
    <p className="mx-5 py-4 flex-grow">
      <span className="fw-bolder">Was ist Ihre Aufgabe als Anästhesietechniker bei der Dr. Wilfried Müller GmbH?</span> 
      Mir gefällt besonders das großartige Verhältnis zu meinen Kollegen und die Tatsache, dass meine Arbeit Menschen hilft.
    </p>

    {/* Plus Button inside container */}
    <div className="mt-4 mt-md-0 d-flex justify-content-start justify-content-md-end w-100">
      <button 
        onClick={() => setOpen5(!open5)} 
        aria-controls="example-collapse-text" 
        aria-expanded={open5} 
        style={{ padding: '5px' }}
        className="w-12 h-12 flex justify-center items-center bg-white rounded-full mt-5"
      >
        <img src={plus} alt="Plus Icon" style={{ width: '30px', height: '30px' }} />
      </button>
    </div>
  </div>

  {/* Collapse Section */}
  <Collapse in={open5}>
    <div className="container pb-5" id="example-collapse-text">
      Das gibt mir ein Gefühl von Vollständigkeit und Harmonie. Ich bin mein ganzes Leben lang im Dienst. Kunden kommen oft zu uns, die vom Verkäufer oder Hersteller abgelehnt wurden, und wir finden dann eine Lösung für ihr Problem.
      <br />
      <br />
      <span className="fw-bolder">Wie sieht ein typischer Arbeitstag bei Ihnen aus?</span> 
      Ich arbeite an Kundenreparaturen, überprüfe und fertige Geräte, die verkauft wurden – alle Arten außer Beatmung und Optik, z. B. kümmere ich mich um Infusions- und Spritzenpumpen, EKG-Monitore, Anästhesiegas-Monitore, Defibrillatoren.
      Kunden rufen oft an und sagen "mein Gerät macht dies oder das, wie kann ich es reparieren?" und dann gehen wir es Schritt für Schritt gemeinsam durch.
      <br /><br />
      <span className="fw-bolder">Was ist Ihnen bei Ihrer Arbeit wichtig? Was zählt?</span> 
      Es ist wichtig, sich an die Vorgaben des Herstellers zu halten, dabei kommt es auf Genauigkeit an. Man geht eine Checkliste durch, nach der man beispielsweise prüfen muss, ob das Gehäuse in Ordnung ist, die Kabel genau betrachten und die Grenzwerte einstellen.
      <br /><br />
      Das Warten und Aufarbeiten von gebrauchter Medizintechnik ist sehr nachhaltig: Das Gerät muss nicht entsorgt werden und ein neues muss nicht mit neuen Ressourcen gebaut werden. Dies hilft der Umwelt und die Kunden profitieren von günstigeren Preisen, denn wenn ein neues Gerät beispielsweise 20.000 Euro kostet, kann ein gebrauchtes 2.500 Euro kosten und auch robuster gebaut sein.
      <br /><br />
      <span className="fw-bolder">Was ist das Ergebnis Ihrer Arbeit?</span> 
      Ich kämpfe gegen die Wegwerfmentalität an. Es ist inakzeptabel, dass Geräte heute so konzipiert sind, dass sie nach fünf Jahren weggeworfen werden, wenn sie genauso gut noch viele Jahrzehnte genutzt werden könnten.
      <br /><br />
      <span className="fw-bolder">Was wünschen Sie sich für die Zukunft der Medizintechnik/Branche?</span> 
      Eine höhere und langlebigere Qualität. Viele Geräte funktionieren technisch noch einwandfrei, müssen aber weggeworfen werden, weil das Kunststoff beispielsweise porös ist. Ich hatte kürzlich einen echten Schreckmoment mit einem Gerät aus den Jahren 2016/2018, das buchstäblich zerbröckelte. Früher war das anders. Damals waren die Hersteller noch stolz darauf, Ersatzteile für 20 Jahre anzubieten – für ihre langlebigen Geräte.
    </div>
  </Collapse>
</div>





      </div>
    </>
  );
}

export default Team;

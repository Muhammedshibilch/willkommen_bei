import React from 'react';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center" onClick={handleOverlayClick}>
      <div className="bg-white p-8 rounded shadow-lg max-w-5xl mx-auto max-h-full overflow-y-auto w-full">
        <h2 className="text-2xl font-bold mb-4 text-blue-400">Privacy Policy</h2>
        <hr />
        <div className="mb-4">
          <p>Dr Wilfried Müller GmbH takes the protection of your personal data very seriously.</p> <br />
          {/* Add more paragraphs here */}
          <p>We collect and use data strictly in accordance with the provisions of the General Data Protection Regulation and the new German Federal Data Protection Act. We are committed to the confidentiality of your personal data and therefore work within the legal limits. Your personal data is only collected to the extent necessary. Your data will only be forwarded to third parties at your specific request. In addition, data will be forwarded to third parties if required by law.</p><br />
          <p>We only collect personal data that we believe is necessary for order processing or to respond to your enquiry, to fulfil contractual obligations, to ensure the operation of the website, is of legitimate interest to us or for which you have given us your consent to process. The legal basis results from Art. 6 para. 1 a), b), f) GDPR.</p> <br />
          <p>If you give your consent, we collect data to the extent authorised by you. If you contact us via the contact options offered, your details will be stored so that they can be used to process and respond to your enquiry.</p><br />
          <p>If you leave a post or comment on this website, your IP address will be saved. This is for security reasons: if your text violates applicable law, it is necessary to trace your identity.</p><br />
          <p>It is normally possible to use our website without providing personal data. If such personal data is collected on our website, this is always done on a voluntary basis as far as possible. This data collected by us will not be passed on to third parties without your express consent.</p><br />
          <p>We would like to take this opportunity to point out once again that data transmission over the Internet, for example by e-mail, may be subject to security vulnerabilities. Complete protection of data against access by third parties cannot be guaranteed.</p><br />
          <p>We adhere to the principles of data avoidance and data minimisation. We therefore only store your personal data for as long as is necessary to fulfil the purposes stated here or for the various storage periods stipulated by law. Once the respective purpose no longer applies or these periods have expired, the corresponding data is routinely blocked or deleted in accordance with the statutory provisions.</p><br />
          <p className='font-bold'>xplanation of terms</p><br />
          <p>Website includes all individual web pages provided by us under the domain www.drwmuellergmbh.de.</p><br />
          <p>The GDPR is Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).</p><br />
          <p>According to Art. 4 (1) GDPR, personal data means any information relating to an identified or identifiable natural person; an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person.</p><br />
          <p>Processing within the meaning of Art. 4 (2) GDPR is any operation or set of operations which is performed on personal data or on sets of personal data, whether or not by automated means, such as collection, recording, organisation, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction.</p><br />
          <p>According to Art. 4(4) GDPR, profiling is any form of automated processing of personal data consisting of the use of personal data to evaluate personal aspects relating to a natural person, in particular to analyse or predict aspects concerning that natural person's performance at work, economic situation, health, personal preferences, interests, reliability, behaviour, location or movements.</p><br />
          <p className="font-bold">General data</p><br />
          <p>Our website collects a range of general data and information each time you or an automated system access it. This information and data is stored in server log files. This may include the following information:</p><br />
          <p>Browser system and versions used by the user</p><br />
          <p>the operating system used by the user</p><br />
          <p>the website from which the user accessed our website</p><br />
          <p>the sub-websites accessed by the user on our website</p><br />
          <p>Date and time of access to our respective website</p><br />
          <p>IP address</p><br />
          <p>Internet service provider via which the user accesses the web pages</p><br />
          <p>Data and information used for security purposes in the event of attacks on our IT system</p><br />
          <p>We do not draw any conclusions about the data subject from this data. The information is used solely for the operation of the website, its ongoing functionality and its optimisation. In the event of illegal activities, this information may be made available to the investigating authorities. Last but not least, this information enables us to ensure and improve data protection on an ongoing basis.</p><br />
          <p>The basis for data processing is Art. 6 para. 1 f) GDPR. The processing here serves our legitimate interest in the proper operation of our website.</p><br />
          <p className="font-bold">Cookies</p><br />
          <p>Our website sometimes uses cookies. These are small text files that are stored on your computer and saved by your browser. Cookies do not damage your computer and do not contain viruses. Cookies are used to make our website more user-friendly, effective and secure. Some cookies contain a so-called cookie ID. A cookie ID is a unique identifier of the respective cookie. The identifier consists of a string of characters that can be used to assign websites and servers to the specific Internet browser in which the cookie was stored. This enables the websites and servers visited to distinguish the individual browser of the data subject from other Internet browsers that contain other cookies. The respective browser can thus be recognised and identified via the unique cookie ID.</p>
<br />
<p>Most of the cookies we use are so-called "fashion cookies". They are automatically deleted at the end of your visit, while other cookies remain stored on your end device until you delete them. The cookies enable us to recognise your browser on your next visit.</p><br />
<p>Of course, you can also use our website without cookies being used. You can set your browser so that you are informed about the installation of cookies and only allow them in individual cases. You can also exclude the acceptance of cookies for certain cases or in general. It is also possible to select the automatic deletion of cookies when closing the browser.</p><br />
<p>The settings required for this in the Internet browser you are using can be found in the help function of your browser or in the documentation for the browser you are using.</p><br />
<p>We would like to point out that rejecting or displaying cookies may affect the functionality of our website.</p><br />
<p>The legal basis for the use of cookies results from Art. 6 para. 1 f) GDPR. We have a legitimate interest in the use of cookies in order to provide a technically error-free and optimised website.</p><br />
<p className="font-bold">Contact form</p><br />
<p>If you send us enquiries via the contact form, your details from the form, including the contact details you provide there, will be stored by us for the purpose of processing the enquiry and in the event of follow-up questions. The data includes your surname, first name and email address as well as the country from which you are writing to us. Optionally, you can also provide further information, such as your telephone number. We need this information in order to provide you with more specific information about your enquiry. The basis for processing this data is Art. 6(1)(b) GDPR. We do not pass on this data without your consent. During registration, the IP address assigned by the data subject's internet service provider and the date and time of registration are also stored. After your enquiry has been dealt with, we will delete your data unless you have given your consent for further use or commercial or tax laws prevent this.</p><br />
<p className="font-bold">Our newsletter</p><br />
<p>You have the option of opting in to receive a newsletter. The newsletter will provide you with information on interesting products and services. You can unsubscribe from the newsletter at any time. You will be informed of the corresponding link in each individual newsletter. The legal basis for the use of personal data results from Art. 6 para. 1 f) GDPR. You can unsubscribe from the newsletter at any time. When you unsubscribe, your data in connection with the newsletter will be deleted immediately. Our newsletter is sent via the company rapidmail GmbH, Augustinerplatz 2, 79098 Freiburg i.Br., Tel. 0800 - 444 6 777, Fax +49 761 582 00 66, Email support@rapidmail.de. Further information on data protection at CreateSend can be found at the following link:</p><br />
<p className='font-bold'>Google Analytics</p><br />

<p>Our website uses functions of the Google Analytics web analysis service. This is used on the basis of Art. 6 para. 1 sentence 1 lit f. GDPR. The provider is Google Inc. 1600 Amphitheatre Parkway Mountain View, CA 94043, USA. Cookies are also used as part of Google Analytics. These are text files that are stored on your computer and enable your use of the website to be analysed. The information generated by the cookie about your use of this website is usually transferred to a Google server in the USA and stored there. This includes the browser type/version, the operating system used, the previously visited page, the IP address and the time of the server request.</p><br />
<p>The processing of data in connection with Google Analytics is based on Art. 6 para. 1 f) GDPR. As the operator of our website, we have an interest in analysing user behaviour in order to optimise both our offering on our websites and our advertising. By using the internet, you are aware that such analyses are carried out. The data collected to carry out the analysis and optimisation is not of overriding value to the user.</p><br />
<p>However, if IP anonymisation is activated on this website, your IP address will first be truncated by Google within member states of the European Union or in other signatory states to the Agreement on the European Economic Area. Only in exceptional cases will the full IP address be transmitted to a Google server in the USA and truncated there. Google will use this information on our behalf to analyse your use of the website, to compile reports on website activity and to provide other services relating to website activity and internet usage to the website operator. The IP address transmitted by your browser as part of Google Analytics will not be merged with other Google data.</p><br />
<p>You may refuse the use of cookies by selecting the appropriate settings on your browser, however please note that if you do this you may not be able to use the full functionality of this website. You can also prevent Google from collecting the data generated by the cookie and relating to your use of the website (including your IP address) and from processing this data by Google by downloading and installing the browser add-on available at the following link:</p><br />
<p>In addition to the option to install the browser add-on, there is another alternative to prevent the collection of data by Google Analytics. This is particularly interesting for users of mobile devices. Please click on this link: Deactivate Google Analytics</p><br />
<p>This will install an opt-out cookie that prevents data from being checked on this website. The function remains in place until the cookie is deleted. If the cookie has been deleted, simply click on the link again. Further information on the terms of use and data protection can be found on the following pages.</p><br />
<p>http://google.com/analytics/terms/de.html

</p><br />
<p>http://www.google.de/intl/de/policies/</p><br />
<p>Finally, we would like to point out that the code "anonymizeIP" has been added to Google Analytics on our website in order to ensure anonymised collection of IP addresses (so-called IP masking).</p><br />
<p className="font-bold">You Tube</p>
<p>We use plugins from the YouTube site operated by Google. The operator of the pages is YouTube, LL C, 901 Cherry Ave. San Bruno, CA 94066, USA. When you visit one of our pages equipped with a YouTube plugin, a connection to the YouTube servers is established. The YouTube server is informed which of our pages you have visited. If you are logged into your YouTube account, you enable YouTube to assign your behaviour directly to your personal profile. You can prevent this by logging out of your YouTube account</p><br />
<p>Further information on the handling of user data can be found in YouTube's privacy policy at: href="http://www.google.de/intl/de/policies/privacy"</p><br />
<p className='font-bold'>Google Maps</p>
<br /><p>We use the map service Google Maps on our website. The provider is Google Inc, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.</p><br />
<p>In order to use the functions of Google Maps, it is necessary to save your IP address. This information is usually transmitted to a Google server in the USA and stored there. The provider of this site has no influence on this data transfer.</p><br />
<p>The basis for the use of Google Maps is Art. 6 para. 1 f GDPR.  As a company, we have an interest in ensuring that our location is easy to find.</p><br />
<p>Further information on the processing of data when using Google Maps can be found in Google's privacy policy at http://www.google.de/intl/de/policies/privacy/"></p><br />
<p className="font-bold">Your rights</p>
<p>You will receive information about the personal data we have stored about you at your request. The provision of information is free of charge for you.</p><br />
<p>Your right to information includes notification of the processing purposes, the categories of personal data and the recipients or categories of recipients. If possible, I will inform you of the planned storage period or the criteria for determining this period. This includes the right to receive a free copy of the data obtained in a structured, commonly used and machine-readable format, whereby the provision of the copy must not adversely affect the rights and freedoms of others. This includes your right to a direct transfer of the data (right to data portability) to another company, insofar as this is technically possible and legally permissible.</p><br />
<p>In addition, you have the right to request the rectification of your data. This includes the right to completion (completion of the data record itself; completion by means of a supplementary declaration) of incomplete personal data, taking into account the purposes of the processing. If a correction is necessary, we will inform all recipients of the correction at your request.</p><br />
<p>You also have the right to have your data deleted. The deletion will take place immediately upon your request. This does not apply to data that must be stored due to legal regulations or that is still required to process the order. Your data will be deleted when the purpose for which it was collected no longer applies or at the end of a statutory retention period. The right to erasure stipulates that we will ensure that the data is also erased by third parties at your request. For this purpose, the third party will be informed of your name (for the purpose of assignment) and the respective request for deletion of all links, copies and replication.</p><br />
<p>You also have the right to block your personal data stored by us. When blocking, the personal data stored by you is marked in order to restrict its further processing and use. If it is not possible to delete your data due to legal, statutory or contractual retention periods, we will also block your data and inform you of this. If you dispute the accuracy of your data, we will also block it until the accuracy has been finally clarified. If there is reason to assume that your interests worthy of protection will be impaired by the deletion, we will also block the data instead of deleting it.</p><br />
<p>There is also a right to restriction of processing. This applies if the accuracy of the data stored by us is in question.</p><br />
<p>You also have the right to object to the processing. You also have the right to lodge a complaint with the supervisory authority. In Bavaria, this is the Bavarian State Office for Data Protection Supervision, Promenade 27,9 1522 Ansbach, telephone 0981 531300, e-mail poststelle@lda.bayern.de. The federal data protection authority with further addresses can be found under this link: https://www.bfdi.bund.de/DE/Home/home_node.html</p><br />
<p>To exercise your rights, please contact us. Our contact details can be found at the end of this statement.</p><br />
<p>Changes to our data protection provisions</p><br />
<p>We reserve the right to amend this privacy policy from time to time to ensure that it always complies with current legal requirements or to implement changes to our services in the privacy policy. For example, when introducing new services. The new privacy policy will then apply to a new visit.</p><br />
<p>We are the controller within the meaning of the General Data Protection Regulation:</p><br />
<p>Dr. Wilfried Müller GmbH</p>
<p>Lechstraße 13 - 15</p>
<p>86931 Prittriching</p>
<p>+49 8206 / 96 240</p>
<p>+ 49 8206 / 96 24 29</p>
<p>info@med-geraete.de</p>
<p>www.drwmuellergmbh.de</p>


        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ContactModal;

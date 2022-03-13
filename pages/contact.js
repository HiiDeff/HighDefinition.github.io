import NavBar from '../components/navbar';
import Top from '../components/top';
import Header from '../components/header';
import Footer from '../components/footer';
import {useState} from 'react';
import Banner from '../components/banner';
import FadeInSection from '../components/fadeinsection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("SEND");
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify({
          name: name,
          email: email,
          subject: subject,
          honeypot: honeypot, // if any value received in this field, form submission will be ignored.
          message: message.replace(/\n/g, '<br>'),
          replyTo: '@', // this will set replyTo of email to email address entered in the form
          accessKey: 'd0789afa-b8bc-44c9-bc78-6063378682ba' // get your access key from https://www.staticforms.xyz
        }),
        headers: { 'Content-Type': 'application/json' }
      }).then(res => res.json()).then(req => {
        if (req.success) {
          setError("Email successfully sent!");
        } else {
          setError("Faced error: retry again now or later.");
        }
      });
    } catch (e) {
      setError("Faced error: retry again now or later.");
    }
  };

  return (
    <>
      <Header title="Contact" page="Contact" description="Want to reach us? Contact us using the form below" />
      
      <div className="Contact">
        <div className="contactbox">
          <h1 style={{padding: 0, margin: 0, marginBottom: 5}}>CONTACT US</h1>
          <br />
          <div className="twogrid">
            <div className="col" style={{alignContent: 'center', justifyContent: 'center', display: 'flex'}}>
              <table className="contactTable">
                <br />
                <tr>
                  <td><FontAwesomeIcon icon={faEnvelope} width="25" height="25" className="icon" style={{color: 'white', marginRight: 5}}/></td>
                  <td><div className="tablesection">
                    <p>Email</p>
                    <a href="mailto:ftc18225@gmail.com">ftc18225@gmail.com</a>
                  </div></td>
                </tr>

                <br /><br />

                <tr>
                  <td><FontAwesomeIcon icon={faInstagram} width="25" height="25" className="icon" style={{color: 'white', marginRight: 5}}/></td>
                  <td><div className="tablesection">
                    <p>Instagram</p>
                    <a href="https://www.instagram.com/ftc18225/">@ftc18225</a>
                  </div></td>
                </tr>

                <br /><br />

                <tr>
                  <td><FontAwesomeIcon icon={faYoutube} width="25" height="25" className="icon" style={{color: 'white', marginRight: 5}}/></td>
                  <td><div className="tablesection">
                    <p>Youtube</p>
                    <a href="https://www.youtube.com/channel/UC8ZLjVy_9Y56cfqpqarRoQg">Channel</a>
                  </div></td>
                </tr>

                <br /><br />

                <tr>
                  <td><FontAwesomeIcon icon={faLocationArrow} width="25" height="25" className="icon" style={{color: 'white', marginRight: 5}}/></td>
                  <td><div className="tablesection">
                    <p>Location</p>
                    <a href="">Bellevue, Washington</a>
                  </div></td>
                </tr>
              </table>
            </div>

            <div className="col" style={{alignContent: 'center', justifyContent: 'center', display: 'flex'}}>
              <form className="contact-form" action='https://api.staticforms.xyz/submit' method='POST' onSubmit={handleSubmit}>
                <label htmlFor="firstname">NAME:</label><br />
                <input type="text" id="name" name="name" value={name} onChange={(e) => {setName(e.target.value)}} placeholder="Type Name Here..." required/>

                <br/>
                <br/>

                <label htmlFor="email">EMAIL:</label><br/>
                <input type="email" id="email" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="Email..." required/>

                <br/>
                <br/>

                <label htmlFor="subject">SUBJECT:</label><br/>
                <input type="text" id="subject" name="subject" value={subject} onChange={(e) => {setSubject(e.target.value)}} placeholder="Subject..." required/>

                <br/>
                <br/>

                <label htmlFor="message">MESSAGE:</label><br/>
                <textarea name="message" id="user-message" value={message} onChange={(e) => {setMessage(e.target.value)}} placeholder="Enter your message..." required />

                <br/>
                <br/>

                <input type="text" name="honeypot" onChange={(e) => {setHoneypot(e.target.value)}} style={{display: "none"}} />

                <div className="flex"><button type="submit" className="submit flex"><FontAwesomeIcon icon={faEnvelope} width="18" height="18" className="icon" style={{color: 'white', marginRight: 5}}/>{error}</button></div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};
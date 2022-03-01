import NavBar from '../components/navbar';
import Top from '../components/top';
import Header from '../components/header';
import Footer from '../components/footer';
import {useState} from 'react';
import Banner from '../components/banner';

export default function Contact() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
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
      <Header title="Contact" page="Contact" description="Want to reach us? Contact us below!" />
      
      <div className="Contact">
        <div className="middle">
          <div className="contact-form-box">
            <div className="contact-title">
              <h1 style={{padding: 0, margin: 0, marginBottom: 5}}>CONTACT US</h1>
              <p style={{padding: 0, margin: 0, fontWeight: 300}}>Email: <a href="mailto:ftc18225@gmail.com">ftc18225@gmail.com</a></p>
              <p style={{padding: 0, margin: 0, fontWeight: 300}}>Instagram: <a href="https://www.instagram.com/ftc18225/">@ftc18225</a></p>
              <p style={{padding: 0, margin: 0, fontWeight: 300}}>Twitch: <a href="https://www.twitch.tv/hdefinition">@hdefinition</a></p>
            </div>

            <form className="contact-form" action='https://api.staticforms.xyz/submit' method='POST' onSubmit={handleSubmit}>
              <label htmlFor="firstname">Name: </label><br />
              <input type="text" id="name" name="name" value={name} onChange={(e) => {setName(e.target.value)}} placeholder="Type Name Here..." required/>

              <br/>
              <br/>

              <label htmlFor="email">Email: </label><br/>
              <input type="email" id="email" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="Email..." required/>

              <br/>
              <br/>

              <label htmlFor="subject">Subject: </label><br/>
              <input type="text" id="subject" name="subject" value={subject} onChange={(e) => {setSubject(e.target.value)}} placeholder="Subject..." required/>

              <br/>
              <br/>

              <label htmlFor="message">Message: </label><br/>
              <textarea name="message" id="user-message" rows="10" value={message} onChange={(e) => {setMessage(e.target.value)}} placeholder="Enter your message..." required />

              <br/>
              <br/>

              <input type="text" name="honeypot" onChange={(e) => {setHoneypot(e.target.value)}} style={{display: "none"}} />

              <br/>
              <br/>

              <button type="submit" className="submit">Send</button>

              <p id="successMessage" style={{color: 'rgb(255, 255, 255)'}}>{error}</p>
            </form>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};
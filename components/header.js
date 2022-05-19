import React, { useEffect, useState } from 'react';
import Top from './top';
import NavBar from './navbar';
import Banner from './banner';

export default function Header({title, description, page}) {
  const [image, setImage] = useState("");

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    updateDimensions();
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    if (window.innerWidth >= 768) {setImage('/images/TeamPicture.png');}
    else { setImage('/images/phonebackground.png'); }
  }

  return (
    <>
      <Top name={page} />
      <div className="coolHeader" style={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top right',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        height: page == "Home" ? "100vh" : "60vh"
      }}>
        <NavBar name={page} />
        <div className="sidepanel" style={{
          height: page == "Home" ? "70vh" : "25vh"
        }}>
          <div style={{
            fontFamily: 'Roboto',
            fontWeight: 400,
            color: 'white'
          }} className="floating">
            <h1 style={{marginBottom: 5}}>{title}</h1>
            <p style={{margin: 0, padding: 0, fontSize: 25}}>{description}</p>
            <p style={{margin: 0, padding: 0}}><i>FTC Team 18225</i></p>
          </div>
        </div>
      </div>
    </>
  );
};
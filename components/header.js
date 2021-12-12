import React, { useEffect, useState } from 'react';

export default function Header({title, description}) {
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
      <div className="Header" style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL + image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover'
      }}>
        <div className="headerborder">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div id="overlay"></div>
      </div>
    </>
  );
};
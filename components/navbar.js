import Link from 'next/link';
import Image from 'next/image';
import logo from '/public/logo.png';
import React, { useEffect, useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NavBar({name}) {
  const [open, setOpen] = useState('none');
  const [width, setWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    updateDimensions();
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    setWidth(window.innerWidth);

    if (window.innerWidth >= 768) {setOpen('flex')};
    try {document.getElementById(name + "").classList.add("this-page");}
    catch(e) {}
  }

  function onClickToggle() {
    if (open == 'flex') {setOpen('none');}
    else {setOpen('flex');}
  }

  return (
    <div className="Tabs">
      <ul className="tabs">
          <li className="logo"><Link href="/"><a><img src={logo.src} width="45px" height="45px" /></a></Link></li>
          
          <li style={{display: open}} className="tab"><Link href='/' as={ process.env.PUBLIC_URL + '/'}><a id="Home" className="tab-label">Home</a></Link></li>
          <li style={{display: open}} className="tab"><Link href='/about' as={ process.env.PUBLIC_URL + '/about'}><a id="About" className="tab-label">About</a></Link></li>
          <li style={{display: open}} className="tab"><Link href='/events' as={ process.env.PUBLIC_URL + '/events'}><a id="Events" className="tab-label">Events</a></Link></li>
          <li style={{display: open}} className="tab"><Link href='/accomplishments' as={ process.env.PUBLIC_URL + '/accomplishments'}><a id="Accomplishments" className="tab-label">Accomplishments</a></Link></li>
          <li style={{display: open}} className="tab"><Link href='/seasons' as={ process.env.PUBLIC_URL + '/seasons'}><a id="Seasons" className="tab-label">Seasons</a></Link></li>
          <li style={{display: open}} className="tab"><Link href='/resources' as={ process.env.PUBLIC_URL + '/resources'}><a id="Resources" className="tab-label">Resources</a></Link></li>
          <li style={{display: open}} className="tab"><Link href='/contact' as={ process.env.PUBLIC_URL + '/contact'}><a id="Contact" className="tab-label">Contact</a></Link></li>

          <li onClick={onClickToggle} className="toggle" style={{padding: 5, paddingBottom: 10, marginRight: 10}}><span className="bars"><FontAwesomeIcon icon={faBars} width="26" height="26" style={{color: 'white'}} /></span></li>
      </ul>
    </div>
  );
}
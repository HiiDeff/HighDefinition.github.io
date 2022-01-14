import NavBar from '../components/navbar';
import Top from '../components/top';
import Header from '../components/header';
import Footer from '../components/footer';
import Title from '../components/title';
import Link from 'next/link';
import Banner from '../components/banner';

export default function Resources() {
  return (
    <>
      <Top name="Resources" />
      <NavBar name="Resources" />
      <Banner />
      <Header title="Resources" description="Here are some resources for FLL and FTC Teams!" />
      
      <div className="Resources">
        <div className="section">
          <Title name="Resources" />
          <div className="resource-grid grid">
            <div className="grid-item">
              <h4>Introduction to FTC Programming</h4>
              <p>This is a beginner's guide to FTC Programming from tele-op, servors, motors, sensors, and more. You will learn how to operate the control hub along with the station phones, and how to connect these to your Java code. Additionally, you will learn version code and its importance in FTC.</p>

              <a href="https://everstem.org/ftc18225/ftc-programming-guide-beginner.htm" className="button">Read Now</a>
            </div>
            <div className="grid-item">
              <h4>Introduction to FTC Robot Hardware</h4>
              <p>This is a beginner's guide to FTC Robot Hardware from building a basic chassis, attaching arm mechanisms, using Onshape as a CAD software, and more. This guide will teach you the skills necessary to create a sample robot with instructions at the end of the guide.</p>

              <a href="https://everstem.org/ftc18225/ftc-robot-guide-beginner.htm" className="button">Read Now</a>
            </div>

            <div className="grid-item">
              <h4>FTC Freight Frenzy - Points Condensed Version</h4>
              <img src={require(`/public/images/ftcfreightfrenzypointsystem.png`).default.src} width="90%" />
            </div>

            <div className="grid-item">
              <h4>FTC Freight Frenzy - Pre-Match Scouting Sheet </h4>
              <img src={require(`/public/images/prematchscouting.png`).default.src} width="80%" />
              <br />
              <br />

              <Link href="/documents/FTCPreMatchScouting.pdf" target="_blank" download id="ftcprematchdownloadbutton"><a className="button">Download Now</a></Link>
            </div>

            <div className="grid-item">
              <h4>FLL Programming Tutorials</h4>
              <p>This is a Youtube playlist for FLL teams struggling with FLL programming. This series includes videos on how to follow a straight line smoothly, lifting an arm while moving, follow a line with a sharp curve, and more! Check them out!</p>

              <a href="https://www.youtube.com/playlist?list=PLUHAVG5dAdrM8x77VdUg-EOhq5HwJ2RLn" className="button">Watch Now</a>
            </div>

            <div className="grid-item">
              <h4>FTC Scout</h4>
              <p>FTC Scout is a resource for FTC teams to use to scout throughout the season. This incorporates pre-match and during-match scouting while allowing you to view the capabilities of other teams on the platform. Check it out now!</p>

              <a href="https://ftcscout.herokuapp.com/" className="button">Scout Now</a>
            </div>
          </div>

        <div className="section" style={{backgroundColor: '#aaaaa'}}>
          <Title name="Store" />
          <div className="resource-grid grid">
            <div className="grid-item">
              <h4>BL-300-2M Slide (with 2 pulley modules) - From BWTLink LLC</h4>
              <img src={require(`/public/images/DrawerSlides.png`).default.src} width="60%" />
              <br />
              <br />

              <a href="https://www.bwtlink.com/ProductItem.aspx?PID=2" className="button">Buy Now</a>
            </div>
          </div>
        </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};
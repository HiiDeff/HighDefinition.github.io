import NavBar from '../components/navbar';
import Top from '../components/top';
import Header from '../components/header';
import Footer from '../components/footer';
import Title from '../components/title';
import Link from 'next/link';
import Banner from '../components/banner';
import FadeInSection from '../components/fadeinsection';

export default function Resources() {
  return (
    <>
      <Header title="Resources" description="Here are some resources for FLL and FTC Teams!" page="Resources" />
      
      <div className="Resources">
        <FadeInSection><div className="section">
          <Title name="Resources" />
          <div className="resource-grid grid">
            <div className="grid-item">
              <h4>FIRST FTC Programming Guide for Beginners</h4>
              <p>This is a beginner's guide to FTC Programming that explains servors, motors, sensors, and more. Learn how to operate the control hub along with the station phones and use version control to maximize efficiency in FTC.</p>

              <a href="https://ftc18225.everstem.org/guides/ftc-programming-guide" className="button" id="ftcprogrammingguide">Read Now</a>
            </div>
            <div className="grid-item">
              <h4>FIRST FTC Mechanical Guide for Beginners</h4>
              <p>This is a beginner's guide to FTC Hardware that explains building a basic chassis, attaching arm mechanisms, using Onshape as a CAD software, and more. Learn the skills necessary to build an example competitive robot by the end.</p>

              <a href="https://ftc18225.everstem.org/guides/ftc-robot-guide" className="button" id="ftcrobotguide">Read Now</a>
            </div>

            <div className="grid-item">
              <h4>FLL Programming Tutorials</h4>
              <p>Learn how to follow a straight line smoothly, lift an arm while moving, follow a line with a sharp curve, and more by watching these short, informative videos.</p>

              <a href="https://www.youtube.com/playlist?list=PLUHAVG5dAdrM8x77VdUg-EOhq5HwJ2RLn" className="button" id="fllprogrammingtutorial">Watch Now</a>
            </div>

            <div className="grid-item">
              <h4>FTC Scout</h4>
              <p>FTC Scout is a resource for FTC teams to use to scout throughout the season. This incorporates pre-match and during-match scouting with the additional functions of viewing other teams scoring capabilities.</p>

              <a href="https://ftcscout.herokuapp.com/" className="button" id="ftcscout">Scout Now</a>
            </div>

            <div className="grid-item">
              <h4>FTC Shipping Element Detector</h4>
              <p>Detect any Team Shipping Element for the FTC 2021-2022 Freight Frenzy season. This is a one-of-a-kind solution for autonomous that is easy to implement.</p>

              <a href="https://github.com/HiiDeff/ShippingElementDetector" className="button" id="ftcshippingelementdetector">View Now</a>
            </div>

            <div className="grid-item">
              <h4>Connecting with Professionals Series</h4>
              <p>Learn from industry professionals in the STEM field about their career and ask your questions in our interactive live streamed talks. Get engaged in growing fields of interest to prepare for future careers.</p>

              <a href="https://www.youtube.com/c/EverstemEducation" className="button" id="connectingwprofessionals">Watch Now</a>
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

              <Link href="/documents/FTCPreMatchScouting.pdf" target="_blank" download id="ftcprematchdownloadbutton"><a className="button" id="ftcprematchscouting">Download Now</a></Link>
            </div>
          </div>
        </div></FadeInSection>

        <FadeInSection><div className="section" style={{backgroundColor: '#aaaaa'}}>
          <Title name="Store" />
          <div className="resource-grid grid">
            <div className="grid-item">
              <h4>BL-300-2M Slide (with 2 pulley modules) - From BWTLink</h4>
              <img src={require(`/public/images/DrawerSlides.png`).default.src} width="60%" />
              <br />
              <br />

              <a href="https://www.bwtlink.com/ProductItem.aspx?PID=2" className="button" id="bwtlinkslides">Buy Now</a>
            </div>

            <div className="grid-item">
              <h4>M4-6-5.5 Slide Stack Screw - From BWTLink</h4>
              <img src={require(`/public/images/screws.jpg`).default.src} width="54%" />
              <br />
              <br />

              <a href="https://www.bwtlink.com/ProductItem.aspx?PID=4" className="button" id='bwtlinkscrews'>Buy Now</a>
            </div>
          </div>
        </div></FadeInSection>
      </div>
      
      <Footer />
    </>
  );
};
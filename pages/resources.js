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
      <Header title="Resources" description="Here are some resources for FIRST Teams!" page="Resources" />
      
      <div className="Resources">
        <FadeInSection><div className="section">
          <Title name="Resources" />
          <p style={{fontSize: 20}}><b>FTC</b></p>
          <div className="resource-grid grid">
            <div className="grid-item">
              <h4>FIRST FTC Programming Guide for Beginners</h4>
              <img src={require(`/public/images/resources/ftcprogrammingguide.jpg`).default.src} width="80%" />
              <br />
              <br />
              <a href="https://ftc18225.everstem.org/guides/ftc-programming-guide" className="button" id="ftcprogrammingguide">Read Now</a>
            </div>
            <div className="grid-item">
              <h4>FIRST FTC Mechanical Guide for Beginners</h4>
              <img src={require(`/public/images/resources/ftcrobotguide.jpg`).default.src} width="80%" />
              <br />
              <br />
              <a href="https://ftc18225.everstem.org/guides/ftc-robot-guide" className="button" id="ftcrobotguide">Read Now</a>
            </div>
            <div className="grid-item">
              <h4>Onshape: How to Design a Part</h4>
              <img src={require(`/public/images/resources/Workshop1.png`).default.src} width="80%" />
              <br />
              <br />
              <a href="https://www.youtube.com/watch?v=EjxB3MKf9iI" className="button" id="designAPart">Watch Now</a>
            </div>
            <div className="grid-item">
              <h4>Onshape: Integrating Parts into Assemblies</h4>
              <img src={require(`/public/images/resources/Workshop2.png`).default.src} width="80%" />
              <br />
              <br />
              <a href="https://www.youtube.com/watch?v=Fg8-kblLP8o" className="button" id="assemblies">Watch Now</a>
            </div>
            <div className="grid-item">
              <h4>Onshape + Fusion: Rendering Parts</h4>
              <img src={require(`/public/images/resources/Workshop3.png`).default.src} width="80%" />
              <br />
              <br />
              <a href="https://www.youtube.com/watch?v=ybXjqJI4S9M" className="button" id="renderingParts">Watch Now</a>
            </div>
            <div className="grid-item">
              <h4>FTC Scout</h4>
              <img src={require(`/public/images/resources/ftcscout.jpg`).default.src} width="80%" />
              <br />
              <br />
              <a href="https://ftcscout.herokuapp.com/" className="button" id="ftcscout">Scout Now</a>
            </div>
            <div className="grid-item">
              <h4>FTC Shipping Element Detector</h4>
              <img src={require(`/public/images/resources/shippingelement.jpg`).default.src} width="80%" />
              <br />
              <br />
              <a href="https://github.com/HiiDeff/ShippingElementDetector" className="button" id="ftcshippingelementdetector">View Now</a>
            </div>
            <div className="grid-item">
              <h4>2021 WA State Presentation Slide Deck</h4>
              <img src={require(`/public/images/resources/statepresentation.jpg`).default.src} width="80%" />
              <br />
              <br />
              <a href="https://docs.google.com/presentation/d/19nc1n9Y2hGBtBj8X745zmOSd-1T8clUsO8TVXPYMakU/edit#slide=id.gd13b2b9e2e_8_6" className="button" id="statepres2021">View Now</a>
            </div>
            <div className="grid-item">
              <h4>2021 WA State Engineering Portfolio</h4>
              <img src={require(`/public/images/resources/ep.jpg`).default.src} width="80%" />
              <br />
              <br />
              <a href="https://drive.google.com/file/d/1RocDP6b87MZtnrJV8-5Id32_aBtGlHm3/view?usp=sharing" className="button" id="statepres2021">View Now</a>
            </div>
          </div>
          <p style={{fontSize: 20}}><b>Other</b></p>
          <div className="resource-grid grid">
            <div className="grid-item">
              <h4>FLL Programming Tutorials</h4>
              <img src={require(`/public/images/resources/ev3programmingline.jpg`).default.src} width="80%" />
              <br />
              <br />
              <a href="https://www.youtube.com/playlist?list=PLUHAVG5dAdrM8x77VdUg-EOhq5HwJ2RLn" className="button" id="fllprogrammingtutorial">Watch Now</a>
            </div>

            <div className="grid-item">
              <h4>FIRST FLL Ultimate Guide</h4>
              <img src={require(`/public/images/resources/fllguide.png`).default.src} width="80%" />
              <br />
              <br />
              <a href="https://ftc18225.everstem.org/guides/fll-ultimate-guide" className="button" id="fllultimateguide">Read Now</a>
            </div>

            <div className="grid-item">
              <h4>Connecting with Professionals Series</h4>
              <img src={require(`/public/images/resources/cwp.jpg`).default.src} width="80%" />
              <br />
              <br />
              <a href="https://www.youtube.com/c/EverstemEducation" className="button" id="connectingwprofessionals">Watch Now</a>
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
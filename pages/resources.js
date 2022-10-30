import NavBar from "../components/navbar";
import Top from "../components/top";
import Header from "../components/header";
import Footer from "../components/footer";
import Title from "../components/title";
import Image from "next/image";
import FadeInSection from "../components/fadeinsection";

const loader = ({ src, width, quality }) => {
  return `https://ftc18225.everstem.org/${src}?w=${width}&q=${quality || 85}`;
};

export default function Resources() {
  return (
    <>
      <Header
        title="Resources"
        description="Here are some resources for FIRST Teams!"
        page="Resources"
      />

      <div className="Resources">
        <FadeInSection>
          <div className="section">
            <Title name="Resources" />
            <p style={{ fontSize: 20 }}>
              <b>FTC</b>
            </p>
            <div className="resource-grid grid">
              <div className="grid-item">
                <h4>Programming Guide for Beginners</h4>
                <div
                  style={{
                    position: "relative",
                    margin: "auto",
                    width: "80%",
                    height: 150,
                  }}
                >
                  <Image
                    loader={loader}
                    src="/images/resources/ftcprogrammingguide.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <a
                  href="https://ftc18225.everstem.org/guides/ftc-programming-guide"
                  className="button"
                  id="ftcprogrammingguide"
                >
                  Read Now
                </a>
              </div>
              <div className="grid-item">
                <h4>Mechanical Guide for Beginners</h4>
                <div
                  style={{
                    position: "relative",
                    margin: "auto",
                    width: "80%",
                    height: 150,
                  }}
                >
                  <Image
                    loader={loader}
                    src="/images/resources/ftcrobotguide.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <a
                  href="https://ftc18225.everstem.org/guides/ftc-robot-guide"
                  className="button"
                  id="ftcrobotguide"
                >
                  Read Now
                </a>
              </div>
              <div className="grid-item">
                <h4>CAD: How to Design a Part</h4>
                <div
                  style={{
                    position: "relative",
                    margin: "auto",
                    width: "80%",
                    height: 150,
                  }}
                >
                  <Image
                    loader={loader}
                    src="/images/resources/Workshop1.png"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <a
                  href="https://www.youtube.com/watch?v=EjxB3MKf9iI"
                  className="button"
                  id="designAPart"
                >
                  Watch Now
                </a>
              </div>
              <div className="grid-item">
                <h4>CAD: Integrating Parts into Assemblies</h4>
                <div
                  style={{
                    position: "relative",
                    margin: "auto",
                    width: "80%",
                    height: 150,
                  }}
                >
                  <Image
                    loader={loader}
                    src="/images/resources/Workshop2.png"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <a
                  href="https://www.youtube.com/watch?v=Fg8-kblLP8o"
                  className="button"
                  id="assemblies"
                >
                  Watch Now
                </a>
              </div>
              <div className="grid-item">
                <h4>Onshape + Fusion: Rendering Parts</h4>
                <div
                  style={{
                    position: "relative",
                    margin: "auto",
                    width: "80%",
                    height: 150,
                  }}
                >
                  <Image
                    loader={loader}
                    src="/images/resources/Workshop3.png"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <a
                  href="https://www.youtube.com/watch?v=ybXjqJI4S9M"
                  className="button"
                  id="renderingParts"
                >
                  Watch Now
                </a>
              </div>
              <div className="grid-item">
                <h4>FTC Scout</h4>
                <div
                  style={{
                    position: "relative",
                    margin: "auto",
                    width: "80%",
                    height: 150,
                  }}
                >
                  <Image
                    loader={loader}
                    src="/images/resources/ftcscout.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <a
                  href="https://ftcscout.herokuapp.com/"
                  className="button"
                  id="ftcscout"
                >
                  Scout Now
                </a>
              </div>
              <div className="grid-item">
                <h4>FTC Shipping Element Detector</h4>
                <div
                  style={{
                    position: "relative",
                    margin: "auto",
                    width: "80%",
                    height: 150,
                  }}
                >
                  <Image
                    loader={loader}
                    src="/images/resources/shippingelement.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <a
                  href="https://github.com/HiiDeff/ShippingElementDetector"
                  className="button"
                  id="ftcshippingelementdetector"
                >
                  View Now
                </a>
              </div>
              <div className="grid-item">
                <h4>2021 WA State Presentation Slide Deck</h4>
                <div
                  style={{
                    position: "relative",
                    margin: "auto",
                    width: "80%",
                    height: 150,
                  }}
                >
                  <Image
                    loader={loader}
                    src="/images/resources/statepresentation.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <a
                  href="https://docs.google.com/presentation/d/19nc1n9Y2hGBtBj8X745zmOSd-1T8clUsO8TVXPYMakU/edit#slide=id.gd13b2b9e2e_8_6"
                  className="button"
                  id="statepres2021"
                >
                  View Now
                </a>
              </div>
              <div className="grid-item">
                <h4>Introduction to FTC Playlist</h4>
                <div
                  style={{
                    position: "relative",
                    margin: "auto",
                    width: "80%",
                    height: 150,
                  }}
                >
                  <Image
                    loader={loader}
                    src="/images/resources/build.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <a
                  href="https://www.youtube.com/playlist?list=PLQD2HEVsKM40Z0YShgfN8nUfw7niadZKQ"
                  className="button"
                  id="introToFTCBuildPlaylist"
                >
                  Watch Now
                </a>
              </div>
              <div className="grid-item">
                <h4>2021 WA State Engineering Portfolio</h4>
                <div
                  style={{
                    position: "relative",
                    margin: "auto",
                    width: "80%",
                    height: 150,
                  }}
                >
                  <Image
                    loader={loader}
                    src="/images/resources/ep.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <a
                  href="https://drive.google.com/file/d/1RocDP6b87MZtnrJV8-5Id32_aBtGlHm3/view?usp=sharing"
                  className="button"
                  id="statepres2021"
                >
                  View Now
                </a>
              </div>
            </div>
            <p style={{ fontSize: 20 }}>
              <b>Other</b>
            </p>
            <div className="resource-grid grid">
              <div className="grid-item">
                <h4>FLL Programming Tutorials</h4>
                <div
                  style={{
                    position: "relative",
                    margin: "auto",
                    width: "80%",
                    height: 150,
                  }}
                >
                  <Image
                    loader={loader}
                    src="/images/resources/ev3programmingline.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <a
                  href="https://www.youtube.com/playlist?list=PLUHAVG5dAdrM8x77VdUg-EOhq5HwJ2RLn"
                  className="button"
                  id="fllprogrammingtutorial"
                >
                  Watch Now
                </a>
              </div>

              <div className="grid-item">
                <h4>FIRST FLL Ultimate Guide</h4>
                <div
                  style={{
                    position: "relative",
                    margin: "auto",
                    width: "80%",
                    height: 150,
                  }}
                >
                  <Image
                    loader={loader}
                    src="/images/resources/fllguide.png"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <a
                  href="https://ftc18225.everstem.org/guides/fll-ultimate-guide"
                  className="button"
                  id="fllultimateguide"
                >
                  Read Now
                </a>
              </div>

              <div className="grid-item">
                <h4>Connecting with Professionals Series</h4>
                <div
                  style={{
                    position: "relative",
                    margin: "auto",
                    width: "80%",
                    height: 150,
                  }}
                >
                  <Image
                    loader={loader}
                    src="/images/resources/cwp.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <a
                  href="https://www.youtube.com/c/EverstemEducation"
                  className="button"
                  id="connectingwprofessionals"
                >
                  Watch Now
                </a>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="section" style={{ backgroundColor: "#aaaaa" }}>
            <Title name="Store" />
            <div className="resource-grid grid">
              <div className="grid-item">
                <h4>High Definition Merch!</h4>
                <div
                  style={{
                    position: "relative",
                    margin: "auto",
                    width: "80%",
                    height: 150,
                  }}
                >
                  <Image
                    loader={loader}
                    src="/images/resources/merch.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <a
                  href="https://www.customink.com/fundraising/promoting-stem-worldwide"
                  className="button"
                  id="highdefmerch"
                >
                  Buy Now
                </a>
              </div>

              <div className="grid-item">
                <h4>BL-300B-2M 12" Anodized Black Slide</h4>
                <div
                  style={{
                    position: "relative",
                    margin: "auto",
                    width: "80%",
                    height: 150,
                  }}
                >
                  <Image
                    loader={loader}
                    src="/images/resources/bwt1.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <a
                  href="https://www.bwtlink.com/ProductItem.aspx?PID=5"
                  className="button"
                  id="bwtlinkslides"
                >
                  Buy Now
                </a>
              </div>

              <div className="grid-item">
                <h4>BL-400A-2M 16" Advanced Slide</h4>
                <div
                  style={{
                    position: "relative",
                    margin: "auto",
                    width: "80%",
                    height: 150,
                  }}
                >
                  <Image
                    loader={loader}
                    src="/images/resources/bwt2.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <a
                  href="https://www.bwtlink.com/ProductItem.aspx?PID=6"
                  className="button"
                  id="bwtlinkslides"
                >
                  Buy Now
                </a>
              </div>
              <div className="grid-item">
                <h4>BL-300-2M 12" Slide</h4>
                <div
                  style={{
                    position: "relative",
                    margin: "auto",
                    width: "80%",
                    height: 150,
                  }}
                >
                  <Image
                    loader={loader}
                    src="/images/resources/bwt3.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <a
                  href="https://www.bwtlink.com/ProductItem.aspx?PID=2"
                  className="button"
                  id="bwtlinkslides"
                >
                  Buy Now
                </a>
              </div>
              <div className="grid-item">
                <h4>BL-300-2M 12" Slide</h4>
                <div
                  style={{
                    position: "relative",
                    margin: "auto",
                    width: "80%",
                    height: 150,
                  }}
                >
                  <Image
                    loader={loader}
                    src="/images/resources/bwt3.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <a
                  href="https://www.bwtlink.com/ProductItem.aspx?PID=2"
                  className="button"
                  id="bwtlinkslides"
                >
                  Buy Now
                </a>
              </div>
              <div className="grid-item">
                <h4>BL-PM-01 Slide Pulley Module</h4>
                <div
                  style={{
                    position: "relative",
                    margin: "auto",
                    width: "80%",
                    height: 150,
                  }}
                >
                  <Image
                    loader={loader}
                    src="/images/resources/bwt4.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <a
                  href="https://www.bwtlink.com/ProductItem.aspx?PID=3"
                  className="button"
                  id="bwtlinkslides"
                >
                  Buy Now
                </a>
              </div>
              <div className="grid-item">
                <h4>M4-6-5.5 Slide Stack Screw</h4>
                <div
                  style={{
                    position: "relative",
                    margin: "auto",
                    width: "80%",
                    height: 150,
                  }}
                >
                  <Image
                    loader={loader}
                    src="/images/resources/bwt5.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <a
                  href="https://www.bwtlink.com/ProductItem.aspx?PID=4"
                  className="button"
                  id="bwtlinkslides"
                >
                  Buy Now
                </a>
              </div>
              <div className="grid-item">
                <h4>BL-TS10 T-Type Screw</h4>
                <div
                  style={{
                    position: "relative",
                    margin: "auto",
                    width: "80%",
                    height: 150,
                  }}
                >
                  <Image
                    loader={loader}
                    src="/images/resources/bwt6.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <a
                  href="https://www.bwtlink.com/ProductItem.aspx?PID=7"
                  className="button"
                  id="bwtlinkslides"
                >
                  Buy Now
                </a>
              </div>
              <div className="grid-item">
                <h4>BL-CM32 Clamping Mount</h4>
                <div
                  style={{
                    position: "relative",
                    margin: "auto",
                    width: "80%",
                    height: 150,
                  }}
                >
                  <Image
                    loader={loader}
                    src="/images/resources/bwt7.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <a
                  href="https://www.bwtlink.com/ProductItem.aspx?PID=9"
                  className="button"
                  id="bwtlinkslides"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>

      <Footer />
    </>
  );
}

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
                <h4>Introduction to Computer Vision</h4>
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
                    src="/images/resources/computervision.png"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <a
                  href="https://www.youtube.com/watch?v=IwvFhflCf7s"
                  className="button"
                  id="introTocomputervision"
                >
                  Watch Now
                </a>
              </div>
              <div className="grid-item">
                <h4>Alumni Success Stories</h4>
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
                    src="/images/resources/alumni.png"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <a
                  href="https://www.youtube.com/watch?v=cgm7AjknTso"
                  className="button"
                  id="introTocomputervision"
                >
                  Watch Now
                </a>
              </div>
              <div className="grid-item">
                <h4>Introduction to Onshape</h4>
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
                    src="/images/resources/onshape.png"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <a
                  href="https://www.youtube.com/watch?v=UUPNkN4GC7E"
                  className="button"
                  id="introTocomputervision"
                >
                  Watch Now
                </a>
              </div>
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
                <h4>How to Transition from FLL to FTC</h4>
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
                    src="/images/resources/transition.png"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <a
                  href="https://ftc18225.everstem.org/guides/transition-fll-ftc"
                  className="button"
                  id="ftcprogrammingguide"
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
                  href="https://www.youtube.com/@highdefinition6017/streams"
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
                <h4>BL-400B-2M 16" Anodized Black Slide</h4>
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
                  href="https://www.bwtlink.com/ProductItem.aspx?PID=13"
                  className="button"
                  id="bwtlinkslides"
                >
                  Buy Now
                </a>
              </div>
              <div className="grid-item">
                <h4>BL-PM-01B Anodized Black Slide Pulley Module</h4>
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
                  href="https://www.bwtlink.com/ProductItem.aspx?PID=11"
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
                <h4>M4-10-5.5 10mm Slide Mounting Screw</h4>
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
                  href="https://www.bwtlink.com/ProductItem.aspx?PID=12"
                  className="button"
                  id="bwtlinkslides"
                >
                  Buy Now
                </a>
              </div>
              <div className="grid-item">
                <h4>M4-13-5.5 13mm Slide Mounting Screw</h4>
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
                  href="https://www.bwtlink.com/ProductItem.aspx?PID=14"
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
                    src="/images/resources/bwt8.jpg"
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
                    src="/images/resources/bwt9.jpg"
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
              <div className="grid-item">
                <h4>BL-HG01 Slide Hole Guide</h4>
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
                    src="/images/resources/bwt10.jpg"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <a
                  href="https://www.bwtlink.com/ProductItem.aspx?PID=8"
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

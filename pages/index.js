import Header from "../components/header";
import Footer from "../components/footer";
import Title from "../components/title";
import FadeInSection from "../components/fadeinsection";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import React from "react";
import Gallery from "react-photo-gallery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPeopleCarry,
  faHandHoldingUsd,
} from "@fortawesome/free-solid-svg-icons";
React.useLayoutEffect = React.useEffect;

export default function Index() {
  var photos = [
    { src: "/images/sponsors/adobe.png", width: 100, height: 100 },
    { src: "/images/sponsors/aiwaysion.jpg", width: 100, height: 100 },
    { src: "/images/sponsors/avidian.jpg", width: 100, height: 100 },
    { src: "/images/sponsors/baesystems.jpg", width: 100, height: 100 },
    { src: "/images/sponsors/boeing.png", width: 100, height: 100 },
    { src: "/images/sponsors/bwtlink2.jpg", width: 100, height: 100 },
    { src: "/images/sponsors/chineseinstitute.jpg", width: 100, height: 100 },
    { src: "/images/sponsors/electroimpact.jpg", width: 100, height: 100 },
    { src: "/images/sponsors/everstem.jpg", width: 100, height: 100 },
    { src: "/images/sponsors/eyecloud.png", width: 100, height: 100 },
    { src: "/images/sponsors/firstwa.jpg", width: 100, height: 100 },
    { src: "/images/sponsors/google.png", width: 100, height: 100 },
    { src: "/images/sponsors/microsoft.png", width: 100, height: 100 },
    { src: "/images/sponsors/pactrans.png", width: 100, height: 100 },
    { src: "/images/sponsors/protech.png", width: 100, height: 100 },
    {
      src: "/images/sponsors/seattlechineseradio.png",
      width: 100,
      height: 100,
    },
    { src: "/images/sponsors/sendcutsend.png", width: 100, height: 100 },
    { src: "/images/sponsors/svtseattlevoctech.jpg", width: 100, height: 100 },
  ];

  function columns(containerWidth) {
    let columns = 9;
    if (containerWidth <= 900) columns = 6;
    if (containerWidth <= 600) columns = 4;
    return columns;
  }

  return (
    <>
      <Header
        title="HIGH DEFINITION"
        description="Reaching High. Defining Futures."
        page="Home"
      />

      <div className="Index">
        <div className="section">
          <div
            className="typewriter"
            style={{
              textAlign: "center",
              fontFamily: "Mali",
              fontSize: 50,
              flexDirection: "row",
              paddingTop: 40,
              paddingBottom: 40,
            }}
          >
            Hello!
            <br /> We are FTC 18225 striving to
            <Typewriter
              options={{ loop: true }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("inspire")
                  .pauseFor(1000)
                  .deleteChars(7)
                  .typeString("motivate")
                  .pauseFor(1000)
                  .deleteChars(8)
                  .typeString("impact")
                  .pauseFor(1000)
                  .deleteChars(6)
                  .typeString("connect")
                  .pauseFor(1000)
                  .start();
              }}
            />
          </div>

          <FadeInSection>
            <div
              className="row"
              style={{
                margin: 10,
                padding: 10,
                backgroundColor: "#333",
                borderRadius: 10,
              }}
            >
              <div
                className="column"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={require(`/public/images/TeamPicture.png`).default.src}
                  width="70%"
                />
              </div>
              <div
                className="column aboutUsCol"
                style={{ fontWeight: 300, padding: 20 }}
              >
                <Title name="About Us" />
                <p style={{ fontSize: 16 }}>
                  We are FIRST Tech Challenge (FTC) Team 18225 High Definition,
                  a 4th year veteran robotics team from Bellevue, Washington
                  composed of 12 enthusiastic students grades 8-12.
                </p>

                <p style={{ fontSize: 16 }}>
                  <b>Our mission</b> is to promote STEM and FIRST within our
                  community to inspire the next generation of innovators to
                  solve challenges of the future! We spread mechanical,
                  programming, business, and other practices within the
                  community to ensure their success.
                </p>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Link href="/about" as={process.env.PUBLIC_URL + "/about"}>
                    <a className="purplebutton">Learn More</a>
                  </Link>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>

        <FadeInSection>
          <div className="section">
            <div className="flex impact">
              <div className="grid" style={{ width: "80%" }}>
                <div className="col" style={{ textAlign: "center" }}>
                  <FontAwesomeIcon
                    icon={faUser}
                    width="75"
                    height="75"
                    className="icon"
                  />
                  <h2>Impacted 6000+ People</h2>
                </div>

                <div className="col" style={{ textAlign: "center" }}>
                  <FontAwesomeIcon
                    icon={faPeopleCarry}
                    width="75"
                    height="75"
                    className="icon"
                  />
                  <h2>Mentored 30+ Teams</h2>
                </div>

                <div className="col" style={{ textAlign: "center" }}>
                  <FontAwesomeIcon
                    icon={faHandHoldingUsd}
                    width="75"
                    height="75"
                    className="icon"
                  />
                  <h2>Awarded $3000 in Grants</h2>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="section">
            <Title name="About FIRST" />
            <p style={{ fontWeight: 300, marginTop: 0 }}>
              <a
                href="https://www.firstinspires.org/"
                style={{ color: "white" }}
              >
                FIRST Inspires
              </a>{" "}
              is a non-profit that <b>inspires</b> the next generation of STEM
              innovators by challenging them in hands-on-learning through
              robotics competitions. Through these programs, students not only
              learn how to build and program a robot, but how to be a leader,
              work in a team, be confident in themselves, and more.
            </p>

            <p>FIRST consists of 3 programs:</p>

            <div className="firstrow">
              <div className="col" style={{ padding: 10 }}>
                <a href="https://www.firstinspires.org/robotics/fll">
                  <h3>FIRST LEGO LEAGUE</h3>
                  <p style={{ fontWeight: 300 }}>
                    Students ages 4-16 compete in friendly competition where
                    they are encouraged to explore real world challenges by
                    developing a solution and build/program a LEGO robot to
                    complete missions on a field.
                  </p>
                  <img
                    src="https://www.firstinspires.org/sites/all/themes/first/assets/images/2020/fll/event-experience.jpg"
                    width="300px"
                  />
                </a>
              </div>
              <div className="col" style={{ padding: 10 }}>
                <a href="https://www.firstinspires.org/robotics/ftc">
                  <h3>FIRST TECH CHALLENGE</h3>
                  <p style={{ fontWeight: 300 }}>
                    Students ages 12-18 learn to design and build robots using
                    electronics programmed with Android and Java-based
                    programming. Teams compete in an alliance format against
                    other teams and in the process, learn to think like
                    engineers.
                  </p>
                  <img
                    src="https://www.firstinspires.org/sites/all/themes/first/assets/images/2020/ftc/event-experience.jpg"
                    width="300px"
                  />
                </a>
              </div>
              <div className="col" style={{ padding: 10 }}>
                <a href="https://www.firstinspires.org/robotics/frc">
                  <h3>FIRST ROBOTICS COMPETITION</h3>
                  <p style={{ fontWeight: 300 }}>
                    Teams of high school students are challenged to design
                    industrial-size robots to compete in difficult field
                    missions in an alliance format. They also maintain a team
                    brand, meet their goals, and promote STEM respect in the
                    community.
                  </p>
                  <img
                    src="https://www.firstinspires.org/sites/all/themes/first/assets/images/2020/frc/event-experience.jpg"
                    width="300px"
                  />
                </a>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="section">
            <Title name="Sponsors" />
            <p>
              Thank you to our sponsors for supporting our team and helping us
              learn.
            </p>
            <Gallery photos={photos} columns={columns} direction="column" />
          </div>
        </FadeInSection>
      </div>

      <Footer />
    </>
  );
}

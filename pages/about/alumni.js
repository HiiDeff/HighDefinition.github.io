import NavBar from "../../components/navbar";
import Top from "../../components/top";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Title from "../../components/title";
import Banner from "../../components/banner";
import Gallery from "react-photo-gallery";
import FadeInSection from "../../components/fadeinsection";
import Image from "next/image";
import React, { useEffect, useState } from "react";
React.useLayoutEffect = React.useEffect;

const loader = ({ src, width, quality }) => {
  return `https://ftc18225.everstem.org/${src}?w=${width}&q=${quality || 85}`;
};

export default function About() {
  const WIDTH = 230;
  const HEIGHT = 300;
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const list = [
      "1sNRWEPOWdg9jDdQSIZH4dCpYz8COtyTk",
      "1xqLQrnZCuv0fzW7otox1u5ugy1hLlg1I",
      "1tRaoht8GATTZO1akzYcpQpcETH0H4LlW",
      "15_SrTBgYBCaNJIOHhO58qwG_mfGRD5Rc",
    ];

    const sample = [];

    list.forEach((item) => {
      sample.push({
        src: "https://drive.google.com/uc?export=view&id=" + item,
        height: 300,
        width: 300,
      });
    });

    setPhotos(sample);
  }, []);

  return (
    <>
      <Header title="About: Alumni" page="About" description="Meet the Team!" />

      <div className="About">
        <div
          className="typewriter"
          style={{
            textAlign: "center",
            fontFamily: "Mali",
            fontSize: 30,
            flexDirection: "row",
            paddingTop: 20,
            paddingBottom: 20,
          }}
        >
          Our mission is to promote STEM and FIRST within our community to help
          establish the next generation of innovators!
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: 20,
          }}
        >
          <a
            className="purplebutton"
            href="/about"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "15px",
            }}
          >
            2023-2024
          </a>

          <a
            className="purplebutton"
            href="/about/power-play"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "15px",
            }}
          >
            2022-2023
          </a>

          <a
            className="purplebutton"
            href="/about/freight-frenzy"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "15px",
            }}
          >
            2021-2022
          </a>

          <a
            className="purplebutton"
            href="/about/ultimate-goal"
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "15px",
              justifyContent: "center",
            }}
          >
            2020-2021
          </a>

          <a
            className="purplebutton"
            href="/about/alumni"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Alumni
          </a>
        </div>

        <FadeInSection>
          <div className="section">
            <Title name="Alumni" />
            <div className="person-grid grid">
              <div className="grid-item">
                <div
                  style={{
                    position: "relative",
                    margin: "auto",
                    width: WIDTH,
                    height: HEIGHT,
                  }}
                >
                  <Image
                    loader={loader}
                    src="/images/teammembers/emma.jpg"
                    className="member"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3>Emma Shi</h3>
                <p className="description">2020-2022</p>
                <p style={{ fontWeight: 300 }}>
                  I'm Emma, and I have 9 years of experience in FIRST (6th year
                  in FTC), and enjoyed learning the disciplines of FIRST. As a
                  co-captain, I led business and outreach aspects of our team,
                  including mentoring our younger team members. Outside of
                  robotics, I like to read, bake, listen to musicals, ski, and
                  play games!
                </p>
              </div>

              <div className="grid-item">
                <div
                  style={{
                    position: "relative",
                    margin: "auto",
                    width: WIDTH,
                    height: HEIGHT,
                  }}
                >
                  <Image
                    loader={loader}
                    src="/images/teammembers/erik.jpg"
                    className="member"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3>Erik Ma</h3>
                <p className="description">2020-2022</p>
                <p style={{ fontWeight: 300 }}>
                  I'm Erik, and I have 3 years of experience in FIRST, and I
                  have a big passion for engineering. As co-captain, I managed
                  the overall architectural design of our robot (mechanical,
                  programming, and CAD), led the drive team, and mentored
                  students in robotics. In my free time, I love spending time
                  with friends, hosting events, and playing ultimate frisbee!
                </p>
              </div>

              <div className="grid-item">
                <div
                  style={{
                    position: "relative",
                    margin: "auto",
                    width: WIDTH,
                    height: HEIGHT,
                  }}
                >
                  <Image
                    loader={loader}
                    src="/images/teammembers/katrina.jpg"
                    className="member"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3>Katrina Li</h3>
                <p className="description">2020-2022</p>
                <p style={{ fontWeight: 300 }}>
                  I'm Katrina, and I focused on business and outreach. I am
                  really interested in how engineering can be used to solve
                  current challenges in ethical ways. In my free time I enjoy
                  baking, hiking, and watching documentaries.
                </p>
              </div>

              <div className="grid-item">
                <div
                  style={{
                    position: "relative",
                    margin: "auto",
                    width: WIDTH,
                    height: HEIGHT,
                  }}
                >
                  <Image
                    loader={loader}
                    src="/images/teammembers/lucas.jpg"
                    className="member"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3>Lucas Wu</h3>
                <p className="description">2020-2022</p>
                <p style={{ fontWeight: 300 }}>
                  I'm Lucas, and I have 3 years of experience in FTC, focusing
                  mainly on documentation and hardware aspects of the robot.
                  Outside of FIRST and robotics, I spend time studying math and
                  chemistry, and enjoy reading novels and playing the piano in
                  my free time.
                </p>
              </div>

              <div className="grid-item">
                <div
                  style={{
                    position: "relative",
                    margin: "auto",
                    width: WIDTH,
                    height: HEIGHT,
                  }}
                >
                  <Image
                    loader={loader}
                    src="/images/teammembers/rishabh.jpg"
                    className="member"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3>Rishabh Venkatesan</h3>
                <p className="description">2020-2022</p>
                <p style={{ fontWeight: 300 }}>
                  I'm Rishabh, and I have 5 years of FIRST experience in both
                  FTC and FRC. As a programmer, I have learned many techniques
                  and solutions to common issues over my journey in FIRST! In my
                  free time, I sketch cars, learn about new technologies, and
                  play basketball for fun.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>

      <Footer />
    </>
  );
}

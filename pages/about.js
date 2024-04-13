import NavBar from "../components/navbar";
import Top from "../components/top";
import Header from "../components/header";
import Footer from "../components/footer";
import Title from "../components/title";
import Banner from "../components/banner";
import Gallery from "react-photo-gallery";
import FadeInSection from "../components/fadeinsection";
import Image from "next/image";
import React, { useEffect, useState } from "react";
React.useLayoutEffect = React.useEffect;

const loader = ({ src, width, quality }) => {
  return `https://ftc18225.everstem.org/${src}?w=${width}&q=${quality || 85}`;
};

export default function About() {
  const WIDTH = 230;
  const HEIGHT = 300;

  return (
    <>
      <Header title="About" page="About" description="Meet the Team!" />

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
        <br />

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

        <br />
        <FadeInSection>
          <div className="section">
            <Title name="Coaches" />
            <div
              className="flex"
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <div
                className="person-grid grid"
                id="coach-grid"
                style={{ width: "75%" }}
              >
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
                      src="/images/coaches/jason.png"
                      className="member"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <h3>Coach Jason</h3>
                  <br />
                  <p style={{ fontWeight: 300 }}>
                    I'm Coach Jason, a civil engineer and mechanical design
                    mentor. I helped form and develop the team by providing
                    strategic guidance. I work closely with our mechanical team
                    with training and purchasing robot parts, and helping our
                    team handle administrative tasks.
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
                      src="/images/coaches/liangshou.jpg"
                      className="member"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <h3>Coach Liangshou</h3>
                  <br />
                  <p style={{ fontWeight: 300 }}>
                    I'm Liangshou Wu, and I work for Google. I have been a
                    mentor/coach for FLL and FTC for 4 years. I enjoy working
                    with students in various FIRST programs. Specifically in FTC
                    18225, I have been focusing on coaching programming and
                    mentoring other FTC teams.
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
                      src="/images/coaches/yinhai.jpg"
                      className="member"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <h3>Coach Yinhai</h3>
                  <br />
                  <p style={{ fontWeight: 300 }}>
                    I'm Dr. Yinhai Wang, a professor in transportation
                    engineering and the founding director of the STAR Lab at the
                    University of Washington (UW). I work directly with the team
                    to come up with new ideas and ways to move the team into a
                    great direction in mechanical and outreach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="section">
            <Title name="Mentors" />
            <div
              className="flex"
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <div
                className="person-grid grid"
                id="coach-grid"
                style={{ width: "75%" }}
              >
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
                      src="/images/mentors/lani.jpg"
                      className="member"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <h3>Lani Cao</h3>
                </div>

                <div className="grid-item">
                  <Image
                    loader={loader}
                    src="/images/mentors/patrick.jpg"
                    height={HEIGHT}
                    width={WIDTH}
                    className="member"
                  />
                  <h3>Patrick Tien</h3>
                </div>

                <div className="grid-item">
                  <Image
                    loader={loader}
                    src="/images/mentors/shikha.jpg"
                    height={HEIGHT}
                    width={WIDTH}
                    className="member"
                  />
                  <h3>Shikha Jain</h3>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="section">
            <Title name="The Team" />
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
                    src="/images/teammembers/albert.jpg"
                    className="member"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <h3>Albert Lu</h3>
                <br />
                <p style={{ fontWeight: 300 }}>
                  I’m Albert, an 8th grader at Tyee Middle School. This is my
                  fourth year in FIRST (2 in FLL and 2 in FTC). In my free time,
                  I enjoy playing the clarinet and existing. A fun fact about me
                  is that I dislike caramel in any form.
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
                    src="/images/teammembers/allen.jpg"
                    className="member"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <h3>Allen Wu</h3>
                <p className="description">Co-Captain</p>
                <p style={{ fontWeight: 300 }}>
                  I'm Allen, a 10th grader at Newport High School. This is my
                  fifth year in FIRST (2 in FLL and 3 in FTC). In my free time,
                  I enjoy competitive programming, playing tennis, and hanging
                  out with my friends.
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
                    src="/images/teammembers/andrew.jpg"
                    className="member"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <h3>Andrew Pai</h3>
                <br />
                <p style={{ fontWeight: 300 }}>
                  I'm Andrew, an 11th grader at Newport High School. This is my third year in FIRST (3 in FTC, 1 in FRC). In my free time, I enjoy playing chess or basketball with my friends.
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
                    src="/images/teammembers/alex.jpg"
                    className="member"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <h3>Alexander Bonev</h3>
                <br />
                <p style={{ fontWeight: 300 }}>
                  I'm Alex, a freshman at Newport High School. This is my second year in FIRST (2 in FTC). In my free time, I enjoy skiing, hiking, and car spotting. A fun fact about me is that my dream car is a 2005 Subaru Impreza WRX STI.
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
                    src="/images/teammembers/andy.jpg"
                    className="member"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <h3>Andy Tien</h3>
                <p className="description">Mech Lead</p>
                <p style={{ fontWeight: 300 }}>
                  I’m Andy, a 10th grader at Newport High School. This is my
                  fourth year in FIRST (2 in FLL and 2 in FTC). In my free time,
                  I enjoy playing violin and soccer. A fun fact about me is that
                  I like dinosaurs.
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
                    src="/images/teammembers/calvin.jpg"
                    className="member"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <h3>Calvin Zhang</h3>
                <br />
                <p style={{ fontWeight: 300 }}>
                  I'm Calvin, an 8th grader at Odle Middle School. This is my
                  first year of FIRST. In my free time, I enjoy playing piano
                  and game development. A fun fact about me is that I like
                  cheese.
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
                    src="/images/teammembers/cynthia.jpg"
                    className="member"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <h3>Cynthia Lu</h3>
                <br />
                <p style={{ fontWeight: 300 }}>
                  I'm Cynthia, a sophomore at Newport High School. This is my third year in FIRST (1 in FLL and 2 in FTC). In my free time, I enjoy rifle shooting, watching kdramas, and baking. A fun fact about me is that I was born on the day of the Beijing Olympics!
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
                    src="/images/teammembers/eesha.jpg"
                    className="member"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <h3>Eesha Jain</h3>
                <p className="description">Co-Captain</p>
                <p style={{ fontWeight: 300 }}>
                  I'm Eesha, a 11th grader at Interlake High School. This is my
                  7th year in FIRST (2 in FLL and 5 in FTC). In my free time, I
                  enjoy listening to music and spending time with friends. A fun fact about me
                  is that I enjoy eating mint chocolate chip ice cream.
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
                    src="/images/teammembers/ethan.jpg"
                    className="member"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <h3>Ethan Lee</h3>
                <br />
                <p style={{ fontWeight: 300 }}>
                  I'm Ethan, a freshman at Interlake High School. This is my first year in FIRST. I like playing piano, flute, and tennis in my free time. I also enjoy listening to music and reading. A fun fact about me is that I love foxes.
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
                    src="/images/teammembers/eugene.jpg"
                    className="member"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <h3>Eugene Li</h3>
                <br />
                <p style={{ fontWeight: 300 }}>
                  I’m Eugene, a 10th grader at Newport High School. This is my
                  fourth year in FIRST (1 in FLL and 3 in FTC). In my free time,
                  I enjoy playing piano and working on rocketry. A fun fact
                  about me is that I don’t like dinosaurs.
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
                    src="/images/teammembers/jeffrey.jpg"
                    className="member"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <h3>Jeffrey Luo</h3>
                <br />
                <p style={{ fontWeight: 300 }}>
                  I'm Jeffrey, a 9th grader at International School. This is my
                  first year in FIRST. In my free time, I enjoy watching
                  football, playing other sports, spending time with friends,
                  and playing chess.{" "}
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
                    src="/images/teammembers/julia.jpg"
                    className="member"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <h3>Julia Wang</h3>
                <p className="description">Co-Captain</p>
                <p style={{ fontWeight: 300 }}>
                  I’m Julia, a senior at The Bush School. This is my fifth year in FIRST (1 in FLL and 4 in FTC). In my free time, I enjoy painting, playing games with friends, or singing. A fun fact about me is that western pond turtles are my favorite animals!
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
                    src="/images/teammembers/rohit.jpg"
                    className="member"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <br />
                <h3>Rohit Venkatesan</h3>
                <br />
                <p style={{ fontWeight: 300 }}>
                  I'm Rohit, an 9th grader at Eastlake High School. This is my
                  third year in FIRST (1 in FLL and 2 in FTC). In my free time,
                  I enjoy reading, playing board games, and playing the piano
                  and several precussion instruments.
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

import NavBar from "../../components/navbar";
import Top from "../../components/top";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Title from "../../components/title";
import Banner from "../../components/banner";
import FadeInSection from "../../components/fadeinsection";
import Gallery from "react-photo-gallery";
import React, { useEffect, useState } from "react";
React.useLayoutEffect = React.useEffect;

export default function About() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const list = [
      "19qxmeBZqmIU4DqapqZ-asCH0ZI0PmXjl",
      "1kiPlmSqABh5b2tgAabVo63gGRBy-880M",
      "10N0QTdJ1niOvFId6FJhAre1gFXqg2Klp",
      "1AczoxNcVOqfEgtFM2NIGlSxyPfuP1WXf",
      "16iBRlSuusuQWWdc7n4zN_4EjrA_qp3j1",
      "1YuDu00SGYjAseZcK8xndL71J6Vvdljdn",
      "19YApSunLS6OIn4wC9_qdzggmMAJZ6yMz",
      "1TYXiRAL0BbwZXlTpLPBLdMoiA4Su9YOZ",
      "1wNG5X3qdwPMo32vqp7EdiW7yGvuMb87P",
      "1o3TPM9Jbg0MYlQyf7FUq9VEGXAUSjfLN",
      "1_gf1M7m4ni9oMsbZSBrKknJm0c3UKBEl",
      "1kEg5G1yAOezO3Smg8onx7d9Mn-A6eRQu",
      "1WL8YXLPc2lEKiCXbfmBeniBDz087Gpxe",
      "1dcduMy020F2y8SCZ24fLl-DVxZqul0Sf",
      "16AO0Oqap6MoZS_jZWV2KfoniDk8qgCnB",
      "1cwC2bHPXyzIVvmpOTfGwjciGLWL9aRC-",
      "1Hf9Y5vssA4KLeP1k4mGZA9JqNJE0m-cr",
      "1fn4PqBO2hwd4jVn1DEN4EeXXdhaX1LzW",
      "1VfCbue92A9EDRuAi7Jkh-7cmgomYQX7P",
      "1KQt53ADSeLs1TooP2kZLTsrVIEL17ILC",
      "17Em4HE3xsWYtiMjLhPUNAzJk5BErficy",
      "1wKvty2CRzpUnNKwWKQnNpmAdQNc2y0L_",
      "1R56XOd2xthCgBYBMBDUvQXOb-pyBsoK5",
      "1asJoPEA63zG4syGieA2G1dZGxEmPVX8Y",
      "1hgf2l6-rEuval20el9X0iOR0uqe5th2m",
      "1YEomn1oFOPakWkBEHC8SM-f1Yh-qdeuj",
      "17XcLOfWgnui08mz0IOdD7EWmNjho-YQ3",
      "1ShacQP5pHH49TrD9liC3Jw_wHcwshqdl",
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
      <Header
        title="About: 2021-2022"
        page="About"
        description="Meet the Team!"
      />

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
            <Title name="Coaches" />
            <div className="person-grid grid">
              <div className="grid-item">
                <img
                  src={require(`/public/images/coaches/jason.png`).default.src}
                  height="300px"
                  className="member"
                />
                <h3>Coach Jason</h3>
                <br />
                <p style={{ fontWeight: 300 }}>
                  I'm Coach Jason, a civil engineer and Mechanical Design
                  Mentor. I helped form and develop the team by providing
                  strategic guidance. I work closely with our mechanical team
                  with training and purchasing robot parts, 3D printing parts,
                  and helping our team handle logistic and administrative tasks.
                </p>
              </div>

              <div className="grid-item">
                <img
                  src={
                    require(`/public/images/coaches/liangshou.jpg`).default.src
                  }
                  height="300px"
                  className="member"
                />
                <h3>Coach Liangshou</h3>
                <br />
                <p style={{ fontWeight: 300 }}>
                  I'm Liangshou Wu, and I work for Google. I have been a
                  mentor/coach for FLL and FTC for 4 years. I enjoy working with
                  students in various FIRST programs. Specifically in FTC 18225,
                  I have been focusing on coaching programming and mentoring
                  other FTC teams.
                </p>
              </div>

              <div className="grid-item">
                <img
                  src={require(`/public/images/coaches/lynne.jpg`).default.src}
                  height="300px"
                  className="member"
                />
                <h3>Coach Lynne</h3>
                <br />
                <p style={{ fontWeight: 300 }}>
                  I'm Lynne Dong, and I work for Microsoft. I have been coaching
                  and mentoring FLL and FTC teams for the past 9 years. It's my
                  pleasure to work with so many talented students in FIRST by
                  teaching them technical/business skills and connecting them
                  with professionals in the tech industry.
                </p>
              </div>

              <div className="grid-item">
                <img
                  src={require(`/public/images/coaches/mark.jpg`).default.src}
                  height="300px"
                  className="member"
                />
                <h3>Coach Mark</h3>
                <br />
                <p style={{ fontWeight: 300 }}>
                  I'm Mark Ma, and I work for the King County DJA. I have been
                  an FTC mentor/coach for 3 years. Supporting STEM is one of my
                  biggest passions, and in FIRST, I focus on coaching the
                  mechanical/CAD team. I strive to push students to think
                  creatively while learning important skills such as problem
                  analysis and resolution.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="section">
            <Title name="Mentors" />
            <div className="person-grid grid">
              <div className="grid-item">
                <img
                  src={require(`/public/images/mentors/jacky.jpg`).default.src}
                  height="300px"
                  className="member"
                />
                <h3>Jacky Pai</h3>
              </div>

              <div className="grid-item">
                <img
                  src={require(`/public/images/mentors/mihir.jpg`).default.src}
                  height="300px"
                  className="member"
                />
                <h3>Mihir Jain</h3>
              </div>

              <div className="grid-item">
                <img
                  src={
                    require(`/public/images/mentors/patrick.jpg`).default.src
                  }
                  height="300px"
                  className="member"
                />
                <h3>Patrick Tien</h3>
              </div>

              <div className="grid-item">
                <img
                  src={require(`/public/images/mentors/xiaoxi.jpg`).default.src}
                  height="300px"
                  className="member"
                />
                <h3>Xiaoxi Wang</h3>
              </div>

              <div className="grid-item">
                <img
                  src={require(`/public/images/mentors/yinhai.jpg`).default.src}
                  height="300px"
                  className="member"
                />
                <h3>Yinhai Wang</h3>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="section">
            <Title name="The Team" />
            <div className="person-grid grid">
              <div className="grid-item">
                <img
                  src={
                    require(`/public/images/teammembers/albert.jpg`).default.src
                  }
                  height="300px"
                  className="member"
                />
                <h3>Albert Lu</h3>
                <p className="description">CAD / Programming</p>
                <br />
                <br />
                <p style={{ fontWeight: 300 }}>
                  I'm Albert, a 7th grader at Tyee Middle School. This is my 3rd
                  year in FIRST (2nd in FLL, 1st in FTC). I like to read, play
                  the clarinet, and programming in my free time. I also have a
                  science YouTube channel which I update weekly.
                </p>
              </div>

              <div className="grid-item">
                <img
                  src={
                    require(`/public/images/teammembers/allen.jpg`).default.src
                  }
                  height="300px"
                  className="member"
                />
                <h3>Allen Wu</h3>
                <p className="description">Programming Lead</p>
                <br />
                <br />
                <p style={{ fontWeight: 300 }}>
                  I'm Allen, a freshman at Newport High School. This is my 2nd
                  year of FTC, following 2 years of FLL. Outside of robotics,
                  I'm extremely passionate about competitive programming and
                  piano. I also enjoy playing basketball, tennis, volleyball,
                  and hang out with friends!
                </p>
              </div>

              <div className="grid-item">
                <img
                  src={
                    require(`/public/images/teammembers/andrew.jpg`).default.src
                  }
                  height="300px"
                  className="member"
                />
                <h3>Andrew Pai</h3>
                <p className="description">Safety Captain</p>
                <p className="description">Drive / Mechanical</p>
                <br />
                <p style={{ fontWeight: 300 }}>
                  I'm Andrew, a 9th grader at Newport High School. This is my
                  1st year in both FTC and FRC. In my free time, I play various
                  sports like tennis or basketball, hang out with friends, read
                  books from the Mistborn series and the Grishaverse, play video
                  games, and binge anime.
                </p>
              </div>

              <div className="grid-item">
                <img
                  src={
                    require(`/public/images/teammembers/andy.jpg`).default.src
                  }
                  height="300px"
                  className="member"
                />
                <h3>Andy Tien</h3>
                <p className="description">CAD Co-Lead</p>
                <p className="description">Programming</p>
                <br />
                <p style={{ fontWeight: 300 }}>
                  I'm Andy, a freshman at Newport High School. This is my 1st
                  year of FTC, following 2 years of FLL. When I'm not dabbling
                  in competitive and robotics mechanical engineering and
                  programming, I enjoy playing soccer and violin.
                </p>
              </div>

              <div className="grid-item">
                <img
                  src={
                    require(`/public/images/teammembers/eesha.jpg`).default.src
                  }
                  height="300px"
                  className="member"
                />
                <h3>Eesha Jain</h3>
                <p className="description">CAD Co-Lead</p>
                <p className="description">Web Developer / Outreach</p>
                <br />
                <p style={{ fontWeight: 300 }}>
                  I'm Eesha, a 9th grader at Interlake High School. This is my
                  5th year in FIRST (2 in FLL and 3 in FTC). In my free time, I
                  enjoy web and app development, writing, listening to music,
                  and hanging out with my friends.
                </p>
              </div>

              <div className="grid-item">
                <img
                  src={
                    require(`/public/images/teammembers/emma.jpg`).default.src
                  }
                  height="300px"
                  className="member"
                />
                <h3>Emma Shi</h3>
                <p className="description">Co-Captain</p>
                <p className="description">
                  Business / Outreach / Engineering Notebook
                </p>
                <br />
                <p style={{ fontWeight: 300 }}>
                  I'm Emma, a senior at Tesla STEM High School! This is my 9th
                  year in FIRST (6th year in FTC), and enjoyed learning the
                  disciplines of FIRST. As co-captain, I lead business and
                  outreach aspects of our team, including mentoring our younger
                  team members. Outside of robotics, I like to read, bake,
                  listen to musicals, ski, and play games!
                </p>
              </div>

              <div className="grid-item">
                <img
                  src={
                    require(`/public/images/teammembers/erik.jpg`).default.src
                  }
                  height="300px"
                  className="member"
                />
                <h3>Erik Ma</h3>
                <p className="description">Co-Captain</p>
                <p className="description">
                  CAD / Mechanical / Programming / Drive
                </p>
                <br />
                <p style={{ fontWeight: 300 }}>
                  I'm Erik, a senior at Interlake High School. This is my 3rd
                  year within FIRST (FTC/FRC), and I have a big passion for
                  engineering. As co-captain, I manage the overall architectural
                  design of our robot (mechanical, programming, and CAD), lead
                  the drive team, and mentor students in robotics. In my free
                  time, I love spending time with friends, hosting events, and
                  playing ultimate frisbee!
                </p>
              </div>

              <div className="grid-item">
                <img
                  src={
                    require(`/public/images/teammembers/eugene.jpg`).default.src
                  }
                  height="300px"
                  className="member"
                />
                <h3>Eugene Li</h3>
                <p className="description">Programming</p>
                <br />
                <br />
                <p style={{ fontWeight: 300 }}>
                  I'm Eugene, a freshman at Newport High School. This is my 2nd
                  year of FTC following 1 year of FLL. Some fun facts about me
                  are I have a passion for music, my favorite series is the Lord
                  of the Rings trilogy, vanilla is my favorite icecream flavor,
                  and I hate the sound of Velcro.
                </p>
              </div>

              <div className="grid-item">
                <img
                  src={
                    require(`/public/images/teammembers/julia.jpg`).default.src
                  }
                  height="300px"
                  className="member"
                />
                <h3>Julia Wang</h3>
                <p className="description">Public Relations Lead</p>
                <p className="description">Business / Outreach</p>
                <br />
                <p style={{ fontWeight: 300 }}>
                  I'm Julia, a sophomore at The Bush School. This is my 2nd year
                  of FTC following 1 year of FLL. Some of my favorite things
                  include golf, Pixar, astrology, Valorant, strawberry icecream,
                  and the Land of Stories book series.
                </p>
              </div>

              <div className="grid-item">
                <img
                  src={
                    require(`/public/images/teammembers/katrina.jpg`).default
                      .src
                  }
                  height="300px"
                  className="member"
                />
                <h3>Katrina Li</h3>
                <p className="description">Business / Outreach</p>
                <br />
                <br />
                <p style={{ fontWeight: 300 }}>
                  I'm Katrina, a senior at Newport High School. This is my 2nd
                  year as a member of High Definition focusing on business and
                  outreach. I am really interested in how engineering can be
                  used to solve current challenges in ethical ways. In my free
                  time I enjoy baking, hiking, and watching documentaries.
                </p>
              </div>

              <div className="grid-item">
                <img
                  src={
                    require(`/public/images/teammembers/lucas.jpg`).default.src
                  }
                  height="300px"
                  className="member"
                />
                <h3>Lucas Wu</h3>
                <p className="description">Engineering Notebook Lead</p>
                <p className="description">Business / Outreach</p>
                <br />
                <p style={{ fontWeight: 300 }}>
                  I'm Lucas, a senior at Interlake High School. This is my 3rd
                  year in FTC, focusing mainly on documentation and hardware
                  aspects of the robot. Outside of FIRST and robotics, I spend
                  time studying math and chemistry, and enjoy reading novels and
                  playing the piano in my free time.
                </p>
              </div>

              <div className="grid-item">
                <img
                  src={
                    require(`/public/images/teammembers/rishabh.jpg`).default
                      .src
                  }
                  height="300px"
                  className="member"
                />
                <h3>Rishabh Venkatesan</h3>
                <p className="description">Programming</p>
                <br />
                <br />
                <p style={{ fontWeight: 300 }}>
                  I'm Rishabh, a senior at Tesla STEM High School. This is my
                  5th in both FTC and FRC. As a programmer, I have learned many
                  techniques and solutions to common issues over my journey in
                  FIRST! In my free time, I sketch cars, learn about new
                  technologies, and play basketball for fun.
                </p>
              </div>

              <div className="grid-item">
                <img
                  src={
                    require(`/public/images/teammembers/rohit.jpg`).default.src
                  }
                  height="300px"
                  className="member"
                />
                <h3>Rohit Venkatesan</h3>
                <p className="description">CAD / Mechanical</p>
                <br />
                <br />
                <p style={{ fontWeight: 300 }}>
                  I'm Rohit, an 8th grader at Evergreen Middle School. This is
                  my 1st year of FTC following 1 year of FLL and 2 years of VEX
                  (IQ). My current hobbies include reading, playing board games,
                  and playing the piano and several percussion instruments.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="section">
            <Title name="Team Highlights" />
            <div className="teamhighlights grid">
              <div
                className="col"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL +
                    "/images/worldrobotrevealthumbnail.jpg"
                  })`,
                  backgroundPosition: "top center",
                  backgroundAttachment: "fixed",
                  backgroundSize: "contain",
                }}
              >
                <a href="https://www.youtube.com/watch?v=Bo4R6sHHHWY">
                  <h3>FTC 18225 World Robot Reveal</h3>
                </a>
              </div>
              <div
                className="col"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/VISIONARY.jpg"
                  })`,
                  backgroundPosition: "top center",
                  backgroundAttachment: "fixed",
                  backgroundSize: "contain",
                }}
              >
                <a href="https://www.youtube.com/watch?v=VaWNdEoWUtE">
                  <h3>World Championship Robot Reveal Trailer</h3>
                </a>
              </div>
              <div
                className="col"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/controlthumbnail.jpg"
                  })`,
                  backgroundPosition: "top center",
                  backgroundAttachment: "fixed",
                  backgroundSize: "contain",
                }}
              >
                <a href="https://www.youtube.com/watch?v=UlNMlCkZbEQ">
                  <h3>Washington State Control Award Video</h3>
                </a>
              </div>
              <div
                className="col"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/robotskeleton.jpg"
                  })`,
                  backgroundPosition: "top center",
                  backgroundAttachment: "fixed",
                  backgroundSize: "contain",
                }}
              >
                <a href="https://tinyurl.com/FTC18225StateRobot">
                  <h3>Washington State Freight Frenzy Robot CAD</h3>
                </a>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="section">
            <Title name="Photo Gallery" />
            <Gallery photos={photos} />
          </div>
        </FadeInSection>
      </div>

      <Footer />
    </>
  );
}

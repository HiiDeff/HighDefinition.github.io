import Header from "../components/header";
import Footer from "../components/footer";
import Title from "../components/title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faCalendarAlt,
  faHotdog,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import FadeInSection from "../components/fadeinsection";
import Collapse from "../components/collapse";
import Gallery from "react-photo-gallery";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Events() {
  const [width, setWidth] = useState(0);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    updateDimensions();
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
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  return (
    <>
      <Header
        title="Events"
        page="Events"
        description="Join us at our various events!"
      />

      <div className="Events">
        <FadeInSection>
          <div className="section">
            <Title name="Upcoming or Current Events" />
            <div className="flex">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=9l8bq35qskdac9jls6a0bf04gc%40group.calendar.google.com&ctz=America%2FLos_Angeles&showCalendars=0&showTabs=0&showPrint=0&color=%23000000"
                style={{ borderWidth: 0 }}
                width="800"
                height="600"
                frameBorder="0"
                scrolling="no"
              ></iframe>
            </div>

            <br />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "left",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
                className="upcomingEvents"
              >
                {/*<span style={{display: 'flex', alignItems: 'center', marginBottom: 10}}><FontAwesomeIcon icon={faTrophy} width="20" height="20" className="icon"/> &nbsp; &nbsp; <a href=""><b>World Championship</b>: April 20 - 24</a></span>*/}
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="section">
            <Title name="Noteable Past Events" />
            <div id="outreaches">
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
                  href="https://www.youtube.com/c/EverstemEducation"
                  target="_blank"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faYoutube}
                    style={{ height: 25, marginRight: 3 }}
                  />
                  Watch Our CWP Events
                </a>
              </div>

              <div className="eventsection">STEM Advocacy</div>
              <div className="eventsection">CADTable</div>
              <div className="eventsection">
                Washington Tech Invitationals (Co-Hosted with Saints Robotics)
              </div>
              <div className="eventsection">Robotics Reactor Meetup</div>
              <div className="eventsection">FTC Programming Bootcamp</div>
              <div className="eventsection">FIRST Demonstration</div>
              <div className="eventsection">Chipotle Fundraiser</div>
              <div className="eventsection">Python Workshop</div>
              <div className="eventsection">
                <Collapse title="Connecting with Professionals">
                  <br />
                  {width < 800 ? (
                    <>
                      <ul style={{ fontWeight: 300 }}>
                        <li>Self Taught Airplane Building and Pilot</li>
                        <li>Wearable Technology Workshop</li>
                        <li>Intelligent Transportation Systems</li>
                        <li>Careers at iRobot</li>
                        <li>Careers in the Gaming Industry</li>
                        <li>Startup Life Cycle and Business Funding</li>
                        <li>Robotics Industry in Japan</li>
                        <li>The Art of Business and Inventing</li>
                        <li>Mixed Reality & Robotics</li>
                        <li>Robotics in Medicine</li>
                        <li>Business and Entrepreneurship in Robotics</li>
                        <li>Gravitational Waves in Astronomy</li>
                        <li>AI Applications in Transportation Engineering</li>
                        <li>Connected Automated Vehicles</li>
                        <li>
                          Leveraging Scale Designs for Connected Automated
                          Vehicles Research
                        </li>
                        <li>Artificial Intelligence and Robotics</li>
                        <li>Science & Education: Indoors and Out</li>
                        <li>
                          IP Protection in Robotics and Smart Transportation
                        </li>
                        <li>Business at Everyday Robots</li>
                        <li>Natural Hazards Reconnaissance</li>
                      </ul>
                    </>
                  ) : (
                    <table id="professionals">
                      <tr id="firstrow">
                        <th>EVENT</th>
                        <th>PROFESSIONALS</th>
                      </tr>

                      <tr style={{ fontWeight: 300 }}>
                        <td>Self Taught Airplane Building and Pilot</td>
                        <td>Walter Haag</td>
                      </tr>

                      <tr style={{ fontWeight: 300 }}>
                        <td>Wearable Technology Workshop</td>
                        <td>Kitty Yeung</td>
                      </tr>

                      <tr style={{ fontWeight: 300 }}>
                        <td>
                          Computer Vision for Intelligent Transportation Systems
                        </td>
                        <td>Ruimin Ke</td>
                      </tr>

                      <tr style={{ fontWeight: 300 }}>
                        <td>Careers at iRobot</td>
                        <td>iRobot</td>
                      </tr>

                      <tr style={{ fontWeight: 300 }}>
                        <td>Careers in the Gaming Industry</td>
                        <td>Robert Neckorcuk & Kirk Williford</td>
                      </tr>

                      <tr style={{ fontWeight: 300 }}>
                        <td>Startup Life Cycle and Business Funding</td>
                        <td>Howie Xu</td>
                      </tr>

                      <tr style={{ fontWeight: 300 }}>
                        <td>Robotics Industry in Japan</td>
                        <td>Shiyu Xia</td>
                      </tr>

                      <tr style={{ fontWeight: 300 }}>
                        <td>The Art of Business and Inventing</td>
                        <td>Ryfka Schafer</td>
                      </tr>

                      <tr style={{ fontWeight: 300 }}>
                        <td>Mixed Reality & Robotics</td>
                        <td>Jeff Delmerico</td>
                      </tr>

                      <tr style={{ fontWeight: 300 }}>
                        <td>Robotics in Medicine</td>
                        <td>Chumyan Wu</td>
                      </tr>

                      <tr style={{ fontWeight: 300 }}>
                        <td>Business and Entrepreneurship in Robotics</td>
                        <td>Fab Qian, Meera Rajagopalan, & Hannah Liu</td>
                      </tr>

                      <tr style={{ fontWeight: 300 }}>
                        <td>Gravitational Waves in Astronomy</td>
                        <td>Gwynne Crowder</td>
                      </tr>

                      <tr style={{ fontWeight: 300 }}>
                        <td>AI Applications in Transportation Engineering</td>
                        <td>Yinhai Wang</td>
                      </tr>

                      <tr style={{ fontWeight: 300 }}>
                        <td>Connected Automated Vehicles</td>
                        <td>Xiaopeng (Shaw) Li</td>
                      </tr>

                      <tr style={{ fontWeight: 300 }}>
                        <td>
                          Leveraging Scale Designs for Connected Automated
                          Vehicles Research
                        </td>
                        <td>Osama Osman</td>
                      </tr>

                      <tr style={{ fontWeight: 300 }}>
                        <td>Artificial Intelligence and Robotics</td>
                        <td>Anne Kao</td>
                      </tr>

                      <tr style={{ fontWeight: 300 }}>
                        <td>Science & Education: Indoors and Out</td>
                        <td>Laura LeBlanc</td>
                      </tr>

                      <tr style={{ fontWeight: 300 }}>
                        <td>
                          IP Protection in Robotics and Smart Transportation
                        </td>
                        <td>Shaobin Zhu</td>
                      </tr>

                      <tr style={{ fontWeight: 300 }}>
                        <td>Business at Everyday Robots</td>
                        <td>Jasmine Lawrence</td>
                      </tr>

                      <tr style={{ fontWeight: 300 }}>
                        <td>Natural Hazards Reconnaissance</td>
                        <td>Jeffrey W. Berman</td>
                      </tr>
                    </table>
                  )}
                </Collapse>
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

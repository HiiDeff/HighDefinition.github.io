import Header from "../components/header";
import Footer from "../components/footer";
import Title from "../components/title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faCalendarAlt, faHotdog } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import FadeInSection from "../components/fadeinsection";
import Collapse from "../components/collapse";
import Gallery from "react-photo-gallery";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Events() {
  const [width, setWidth] = useState(0);
  const [photos, setPhotos] = useState([]);
  const [countdown, setCountdown] = useState(0); // Timer state

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    updateDimensions();
    const list = [
      "19qxmeBZqmIU4DqapqZ-asCH0ZI0PmXjl",
      "1kiPlmSqABh5b2tgAabVo63gGRBy-880M",
      "10N0QTdJ1niOvFId6FJhAre1gFXqg2Klp",
      // Remaining images...
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

    // Set the countdown time (in milliseconds)
    const eventDate = new Date("2024-04-20"); // Example date (change as needed)
    const now = new Date();
    const timeUntilEvent = eventDate - now;
    setCountdown(timeUntilEvent);

    // Update countdown every second
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1000);
    }, 1000);

    // Cleanup function to clear the interval when component unmounts
    return () => {
      clearInterval(timer);
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  // Convert milliseconds to days, hours, minutes, and seconds
  const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

  return (
    <>
      <Header
        title="Events"
        page="Events"
        
        description={<>Join us for our first ever Hackathon!<br />Starting April 6th at Digipen!</>}

        
      />

      <div className="Events">
        <FadeInSection>
          <div className="section">
            
            
            
            <div>
              {countdown > 0 ? (
                <div>
                  
                  
                  <p style={{
                    fontSize: 72,
                    marginTop:-10,
                    marginBottom: 40,
                    marginLeft: 40,
                    marginRight: 40,
                  }}>
                    {36} days {hours} hours {minutes} minutes {seconds} seconds until event!</p>
                </div>
              ) : (
                <p>The event has already started!</p>
              )}
            </div>

            <Title name="Description"/>
            <Title name="Date and Location"/>

            <a
              className="purplebutton"
              href="https://www.youtube.com/@highdefinition6017/streams"
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
              Sign Up Here
            </a>
            

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
               
              >
                {/*<span style={{display: 'flex', alignItems: 'center', marginBottom: 10}}><FontAwesomeIcon icon={faTrophy} width="20" height="20" className="icon"/> &nbsp; &nbsp; <a href=""><b>World Championship</b>: April 20 - 24</a></span>*/}
              </div>
            </div>
          </div>
        </FadeInSection>

      </div>

      <Footer />
    </>
  );
}

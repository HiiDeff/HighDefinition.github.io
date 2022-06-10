import Header from '../components/header';
import Footer from '../components/footer';
import Title from '../components/title';
import FadeInSection from '../components/fadeinsection';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import React from 'react';
import Gallery from 'react-photo-gallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPeopleCarry, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
React.useLayoutEffect = React.useEffect;

export default function Index() {
  var photos = [
    { src: '/images/sponsors/boeing.png', width: 100, height: 100 },
    { src: '/images/sponsors/bwtlink2.jpg', width: 100, height: 100 },
    { src: '/images/sponsors/chineseinstitute.jpg', width: 100, height: 100 },
    { src: '/images/sponsors/chipotle.png', width: 100, height: 100 },
    { src: '/images/sponsors/everstem.jpg', width: 100, height: 100 },
    { src: '/images/sponsors/firstwa.jpg', width: 100, height: 100 },
    { src: '/images/sponsors/fredmeyer.png', width: 100, height: 100 },
    { src: '/images/sponsors/google.png', width: 100, height: 100 },
    { src: '/images/sponsors/hasbro.png', width: 100, height: 100 },
    { src: '/images/sponsors/homedepot.png', width: 100, height: 100 },
    { src: '/images/sponsors/kohls.png', width: 100, height: 100 },
    { src: '/images/sponsors/microsoft.png', width: 100, height: 100 },
    { src: '/images/sponsors/mose.jpg', width: 100, height: 100 },
    { src: '/images/sponsors/sendcutsend.png', width: 100, height: 100 },
    { src: '/images/sponsors/target.jpg', width: 100, height: 100 },
    { src: '/images/sponsors/tmobile.jpg', width: 100, height: 100 },
    { src: '/images/sponsors/trader-joes.png', width: 100, height: 100 },
  ];

  function columns(containerWidth) {
    let columns = 9;
    if (containerWidth <= 900) columns = 6;
    if (containerWidth <= 600) columns = 4;
    return columns;
  }

  return (
    <>
      <Header title="HIGH DEFINITION" description="Reaching High. Defining Futures." page="Home" />
      
      <div className="Index">
        <div className="section">
          <div className="typewriter" style={{textAlign: 'center', fontFamily: 'Mali', fontSize: 50, flexDirection: 'row', paddingTop: 40, paddingBottom: 40}}>Hello!<br /> We are FTC 18225 striving to
            <Typewriter
              options={{loop: true}}
              onInit={(typewriter) => {
                typewriter
                  .typeString('inspire')
                  .pauseFor(1000)
                  .deleteChars(7)
                  .typeString('motivate')
                  .pauseFor(1000)
                  .deleteChars(8)
                  .typeString('impact')
                  .pauseFor(1000)
                  .deleteChars(6)
                  .typeString('connect')
                  .pauseFor(1000)
                  .start();
              }}
            /> 
          </div>

          <FadeInSection>
            <div className="row" style={{margin: 10, padding: 10, backgroundColor: '#333', borderRadius: 10}}>
              <div className="column" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img src={require(`/public/images/TeamPicture.png`).default.src} width="80%" />
              </div>
              <div className="column" style={{fontWeight: 300}}>
                <Title name="About Us" />
                <p>We are FIRST Tech Challenge (FTC) Team 18225 High Definition, a 3rd year veteran robotics team from Bellevue, Washington composed of 12 enthusiastic students grades 7-12.</p>
                
                <p><b>Our mission</b> is to promote STEM and FIRST within our community to inspire the next generation of innovators to solve challenges of the future! We spread mechanical, programming, business, and other practices within the community to ensure their success.</p>

                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><Link href='/about' as={ process.env.PUBLIC_URL + '/about'}><a className="purplebutton">More about us</a></Link></div>
              </div>
            </div>
          </FadeInSection>
        </div>

        <FadeInSection><div className="section">
          <div className="flex impact"><div className="grid" style={{width: '80%'}}>
            <div className="col" style={{textAlign: 'center'}}>
              <FontAwesomeIcon icon={faUser} width="75" height="75" className="icon"/>
              <h2>Impacted 6000+ People</h2>
            </div>

            <div className="col" style={{textAlign: 'center'}}>
              <FontAwesomeIcon icon={faPeopleCarry} width="75" height="75" className="icon"/>
              <h2>Mentored 30+ Teams</h2>
            </div>

            <div className="col" style={{textAlign: 'center'}}>
              <FontAwesomeIcon icon={faHandHoldingUsd} width="75" height="75" className="icon"/>
              <h2>Awarded $1000 in Grants</h2>
            </div>
          </div></div>
        </div></FadeInSection>

        <FadeInSection><div className="section">
          <Title name="Team Highlights" />
          <div className="teamhighlights grid">
            <div className="col" style={{
              backgroundImage: `url(${process.env.PUBLIC_URL+'/images/worldrobotrevealthumbnail.jpg'})`,
              backgroundPosition: 'top center',
              backgroundAttachment: 'fixed',
              backgroundSize: 'contain'
            }}>
              <a href="https://www.youtube.com/watch?v=Bo4R6sHHHWY">
                <h3>FTC 18225 World Robot Reveal</h3>
              </a>
            </div>
            <div className="col" style={{
              backgroundImage: `url(${process.env.PUBLIC_URL+'/images/VISIONARY.jpg'})`,
              backgroundPosition: 'top center',
              backgroundAttachment: 'fixed',
              backgroundSize: 'contain'
            }}>
              <a href="https://www.youtube.com/watch?v=VaWNdEoWUtE">
                <h3>World Championship Robot Reveal Trailer</h3>
              </a>
            </div>
            <div className="col" style={{
              backgroundImage: `url(${process.env.PUBLIC_URL+'/images/controlthumbnail.jpg'})`,
              backgroundPosition: 'top center',
              backgroundAttachment: 'fixed',
              backgroundSize: 'contain'
            }}>
              <a href="https://www.youtube.com/watch?v=UlNMlCkZbEQ">
                <h3>Washington State Control Award Video</h3>
              </a>
            </div>
            <div className="col" style={{
              backgroundImage: `url(${process.env.PUBLIC_URL+'/images/robotskeleton.jpg'})`,
              backgroundPosition: 'top center',
              backgroundAttachment: 'fixed',
              backgroundSize: 'contain'
            }}>
              <a href="https://tinyurl.com/FTC18225StateRobot">
                <h3>Washington State Freight Frenzy Robot CAD</h3>
              </a>
            </div>
          </div>
        </div></FadeInSection>

        <FadeInSection><div className="section">
          <Title name="About FIRST" />
          <p style={{fontWeight: 300, marginTop: 0}}><a href="https://www.firstinspires.org/" style={{color: 'white'}}>FIRST Inspires</a> is a non-profit that strives to inspire the next generation of STEM innovators by challenging them in hands-on-learning through robotics competitions. Through these programs, students not only learn how to build and program a robot, but how to be a leader, work in a team, be confident in themselves, and more.</p>

          <p>FIRST consists of 3 programs:</p>

          <div className="firstrow">
            <div className="col">
              <a href="https://www.firstinspires.org/robotics/fll">
                <h3>FIRST LEGO LEAGUE</h3>
                <p>Students ages 4-16 compete in friendly competition where they are encouraged to explore real world challenges by developing a solution and build/program a LEGO robot to complete missions on a field.</p>
                <img src="https://www.firstinspires.org/sites/all/themes/first/assets/images/2020/fll/event-experience.jpg" width="300px" />
              </a>
            </div>
            <div className="col">
              <a href="https://www.firstinspires.org/robotics/ftc">
                <h3>FIRST TECH CHALLENGE</h3>
                <p>Students ages 12-18 learn to design and build robots using electronics programmed by Android technology and Java-based programming. Teams compete in an alliance format against other teams and in the process, learn to think like engineers.</p>
                <img src="https://www.firstinspires.org/sites/all/themes/first/assets/images/2020/ftc/event-experience.jpg" width="300px" />
              </a>
            </div>
            <div className="col">
              <a href="https://www.firstinspires.org/robotics/frc">
                <h3>FIRST ROBOTICS COMPETITION</h3>
                <p>Teams of high school students are challenged to design industrial-size robots to compete in difficult field missions in an alliance format. Through this process, they maintain a team brand, meet their goals, and promote STEM respect in the community.</p>
                <img src="https://www.firstinspires.org/sites/all/themes/first/assets/images/2020/frc/event-experience.jpg" width="300px" />
              </a>
            </div>
          </div>
        </div></FadeInSection>

        <FadeInSection><div className="section">
          <Title name="Sponsors" />
          <p>Thank you to our sponsors for supporting our team and helping us learn.</p>
          <Gallery photos={photos} columns={columns} direction="column" />
        </div></FadeInSection>
      </div>
      
      <Footer />
    </>
  );
};
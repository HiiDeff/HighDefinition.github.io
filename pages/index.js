import Header from '../components/header';
import Footer from '../components/footer';
import Title from '../components/title';
import FadeInSection from '../components/fadeinsection';
import UpcomingEvents from '../components/upcomingevents';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import React from 'react';

export default function Index() {
  const photos1 = ['IMG_4087.jpg', 'IMG_4089.jpg', 'IMG_4090.jpg', 'IMG_4091.jpg', 'IMG_4889.jpg', 'img1.jpg', 'img7.jpg', 'img8.jpg', 'img12.jpg'];
  const photos2 = ['IMG_4094.jpg', 'IMG_4801.jpg', 'IMG_4803.jpg', 'IMG_5863.jpg', 'IMG_5867.jpg', 'img2.jpg', 'IMG_4888.jpg', 'img10.jpg', 'meeting.jpg'];
  const photos3 = ['IMG_4885.jpg', 'IMG_4886.jpg', 'IMG_4887.jpg', 'img3.jpg', 'img6.jpg', 'img9.jpg', 'outreach1.jpg', 'img20.jpg'];
  const photos4 = ['IMG_4804.jpg', 'IMG_4881.jpg', 'IMG_4883.jpg', 'IMG_4884.jpg', 'IMG_6818.jpg', 'img5.jpg', 'img4.jpg', 'img11.jpg', 'outreach2.jpg'];

  return (
    <>
      <Header title="HIGH DEFINITION" description="FTC Team 18225" page="Home" />
      
      <div className="Index">
        <div className="section">
          <div className="typewriter" style={{textAlign: 'center', fontFamily: 'Mali', fontSize: 50, flexDirection: 'row', paddingTop: 40, paddingBottom: 40}}>Hello! We are FTC 18225. We strive to 
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
                <Title name="Who Are We?" />
                <p>We are First Tech Challenge (FTC) Team 18225 High Definition, a 2nd year veteran robotics team from Bellevue, Washington composed of 14 enthusiastic and motivated students from the 7th-12th grades. <b>Our mission</b> is to promote STEM and FIRST within our community to help establish the next generation of innovators! This includes all aspects, including CAD, mechanical, programming, business, and connecting students with experts to inspire and ensure their success.</p>

                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><Link href='/about' as={ process.env.PUBLIC_URL + '/about'}><a className="purplebutton">Learn more here</a></Link></div>
              </div>
            </div>
          </FadeInSection>
        </div>

        <FadeInSection><div className="section">
          <Title name="About FIRST" />
          <p style={{fontWeight: 300, marginTop: 0}}>"FIRST® inspires young people to be science and technology leaders and innovators by engaging them in exciting mentor-based programs that build science, engineering, and technology skills, that inspire innovation, and that foster well-rounded life capabilities including self-confidence, communication, and leadership" (<a href="https://www.firstinspires.org/" style={{color: 'white'}}>FIRST Inspires</a>).</p>

          <p>FIRST consists of 3 programs:</p>

          <div className="firstrow">
            <div className="col">
              <a href="https://www.firstinspires.org/robotics/fll">
                <h3>FIRST Lego League</h3>
                <p>"FIRST LEGO League guides youth through STEM learning and exploration at an early age. From Discover, to Explore and then to Challenge, students will understand the basics of STEM and apply their skills in an exciting competition while gaining productive learning habits, confidence, and teamwork skills along the way" (FIRST Lego League).</p>
                <img src="https://www.firstinspires.org/sites/all/themes/first/assets/images/2020/fll/event-experience.jpg" width="300px" />
              </a>
            </div>
            <div className="col">
              <a href="https://www.firstinspires.org/robotics/ftc">
                <h3>FIRST Tech Challenge</h3>
                <p>"FIRST Tech Challenge students learn to think like engineers. Teams design, build, and code robots to compete in an alliance format against other teams. Robots are built from a reusable platform, powered by Android technology, and can be coded using a variety of levels of Java-based programming" (FIRST Tech Challenge).</p>
                <img src="https://www.firstinspires.org/sites/all/themes/first/assets/images/2020/ftc/event-experience.jpg" width="300px" />
              </a>
            </div>
            <div className="col">
              <a href="https://www.firstinspires.org/robotics/frc">
                <h3>FIRST Robotics Competition</h3>
                <p>"Teams of high school students are challenged to build industrial-size robots to play a difficult field game in alliance with other teams, while also fundraising to meet their goals, designing a team 'brand,' and advancing respect and appreciation for STEM within the local community" (FIRST Robotics Challenge).</p>
                <img src="https://www.firstinspires.org/sites/all/themes/first/assets/images/2020/frc/event-experience.jpg" width="300px" />
              </a>
            </div>
          </div>
        </div></FadeInSection>

        <UpcomingEvents />

        <FadeInSection><div className="section">
          <Title name="Photo Gallery" />
          <div className="photogallery">
            <div className="picrow"> { photos1.map((val) => { return <img key={val} src={require(`/public/images/pics/${val}`).default.src} /> }) } </div>
            <div className="picrow"> { photos2.map((val) => { return <img key={val} src={require(`/public/images/pics/${val}`).default.src} /> }) } </div>
            <div className="picrow"> { photos3.map((val) => { return <img key={val} src={require(`/public/images/pics/${val}`).default.src} /> }) } </div>
            <div className="picrow"> { photos4.map((val) => { return <img key={val} src={require(`/public/images/pics/${val}`).default.src} /> }) } </div>
          </div>
        </div></FadeInSection>
      </div>
      
      <Footer />
    </>
  );
};
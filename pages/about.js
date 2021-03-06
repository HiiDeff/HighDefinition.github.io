import NavBar from '../components/navbar';
import Top from '../components/top';
import Header from '../components/header';
import Footer from '../components/footer';
import Title from '../components/title';
import Banner from '../components/banner';
import FadeInSection from '../components/fadeinsection';
import Image from 'next/image';
import React, {useEffect, useState} from 'react';
React.useLayoutEffect = React.useEffect;

const loader = ({ src, width, quality }) => {
  return `https://ftc18225.everstem.org/${src}?w=${width}&q=${quality || 85}`
}

export default function About() {
  const WIDTH = 230;
  const HEIGHT = 300;

  return (
    <>
      <Header title="About" page="About" description="Meet the Team!" />
      
      <div className="About">
        <div className="typewriter" style={{textAlign: 'center', fontFamily: 'Mali', fontSize: 30, flexDirection: 'row', paddingTop: 20, paddingBottom: 20}}>Our mission is to promote STEM and FIRST within our community to help establish the next generation of innovators!</div>

        <FadeInSection><div className="section">
          <Title name="Coaches" />
          <div className="flex" style={{alignItems: 'center', justifyContent: 'center'}}><div className="person-grid grid" id="coach-grid" style={{width: '75%'}}>
            <div className="grid-item">
              <Image loader={loader} src="/images/coaches/jason.png" height={HEIGHT} width={WIDTH} className="member" />
              <h3>Coach Jason</h3>
              <br />
              <p style={{fontWeight: 300}}>I'm Coach Jason, a civil engineer and mechanical design mentor. I helped form and develop the team by providing strategic guidance. I work closely with our mechanical team with training and purchasing robot parts, and helping our team handle administrative tasks.</p>
            </div>

            <div className="grid-item">
              <Image loader={loader} src="/images/coaches/liangshou.jpg" height={HEIGHT} width={WIDTH} className="member" />
              <h3>Coach Liangshou</h3>
              <br />
              <p style={{fontWeight: 300}}>I'm Liangshou Wu, and I work for Google. I have been a mentor/coach for FLL and FTC for 4 years. I enjoy working with students in various FIRST programs. Specifically in FTC 18225, I have been focusing on coaching programming and mentoring other FTC teams.</p>
            </div>

            <div className="grid-item">
              <Image loader={loader} src="/images/coaches/yinhai.jpg" height={HEIGHT} width={WIDTH} className="member" />
              <h3>Yinhai Wang</h3>
              <br />
              <p style={{fontWeight: 300}}>I'm Dr. Yinhai Wang, a professor in transportation engineering and the founding director of the STAR Lab at the University of Washington (UW). I work directly with the team to come up with new ideas and ways to move the team into a great direction in mechanical and outreach.</p>
            </div>
          </div></div>
        </div></FadeInSection>

        <FadeInSection><div className="section">
          <Title name="Mentors" />
          <div className="person-grid grid">
            <div className="grid-item">
              <Image loader={loader} src="/images/mentors/lani.jpg" height={HEIGHT} width={WIDTH} className="member" />
              <h3>Lani Cao</h3>
            </div>

            <div className="grid-item">
              <Image loader={loader} src="/images/mentors/lynne.jpg" height={HEIGHT} width={WIDTH} className="member" />
              <h3>Lynne Dong</h3>
            </div>

            <div className="grid-item">
             <Image loader={loader} src="/images/mentors/mark.jpg" height={HEIGHT} width={WIDTH} className="member" />
              <h3>Mark Ma</h3>
            </div>

            <div className="grid-item">
              <Image loader={loader} src="/images/mentors/mihir.jpg" height={HEIGHT} width={WIDTH} className="member" />
              <h3>Mihir Jain</h3>
            </div>

            <div className="grid-item">
              <Image loader={loader} src="/images/mentors/patrick.jpg" height={HEIGHT} width={WIDTH} className="member" />
              <h3>Patrick Tien</h3>
            </div>

            <div className="grid-item">
             <Image loader={loader} src="/images/mentors/xiaoxi.jpg" height={HEIGHT} width={WIDTH} className="member" />
              <h3>Xiaoxi Wang</h3>
            </div>            
          </div>
        </div></FadeInSection>

        <FadeInSection><div className="section">
          <Title name="The Team" />
          <div className="person-grid grid">
            <div className="grid-item">
              <Image loader={loader} src="/images/teammembers/albert.jpg" height={HEIGHT} width={WIDTH} className="member" />
              <h3>Albert Lu</h3>
              <p className="description">CAD</p>
              <br />
              <br />
              <p style={{fontWeight: 300}}>I'm Albert, a 7th grader at Tyee Middle School. This is my 3rd year in FIRST (2nd in FLL, 1st in FTC). I like to read, play the clarinet, and programming in my free time. I also have a science YouTube channel which I update weekly.</p>
            </div>

            <div className="grid-item">
              <Image loader={loader} src="/images/teammembers/allen.jpg" height={HEIGHT} width={WIDTH} className="member" />
              <h3>Allen Wu</h3>
              <p className="description">Co-Captain</p>
              <br />
              <br />
              <p style={{fontWeight: 300}}>I'm Allen, a freshman at Newport High School. This is my 2nd year of FTC, following 2 years of FLL. Outside of robotics, I'm extremely passionate about competitive programming and piano. I also enjoy playing basketball, tennis, volleyball, and hang out with friends!</p>
            </div>

            <div className="grid-item">
              <Image loader={loader} src="/images/teammembers/andrew.jpg" height={HEIGHT} width={WIDTH} className="member" />
              <h3>Andrew Pai</h3>
              <p className="description">Safety Captain</p>
              <p className="description">Drive / Mechanical</p>
              <br />
              <p style={{fontWeight: 300}}>I'm Andrew, a 9th grader at Newport High School. This is my 1st year in both FTC and FRC. In my free time, I play various sports like tennis or basketball, hang out with friends, read books from the Mistborn series and the Grishaverse, play video games, and binge anime.</p>
            </div>

            <div className="grid-item">
              <Image loader={loader} src="/images/teammembers/andy.jpg" height={HEIGHT} width={WIDTH} className="member" />
              <h3>Andy Tien</h3>
              <p className="description">CAD / Mech Lead</p>
              <p className="description"></p>
              <br />
              <p style={{fontWeight: 300}}>I'm Andy, a freshman at Newport High School. This is my 1st year of FTC, following 2 years of FLL. When I'm not dabbling in competitive and robotics mechanical engineering and programming, I enjoy playing soccer and violin.</p>
            </div>

            <div className="grid-item">
              <Image loader={loader} src="/images/teammembers/eesha.jpg" height={HEIGHT} width={WIDTH} className="member" />
              <h3>Eesha Jain</h3>
              <p className="description">Co-Captain</p>
              <br />
              <p style={{fontWeight: 300}}>I'm Eesha, a 9th grader at Interlake High School. This is my 5th year in FIRST (2 in FLL and 3 in FTC). In my free time, I enjoy web and app development, writing, listening to music, and hanging out with my friends.</p>
            </div>

            <div className="grid-item">
              <Image loader={loader} src="/images/teammembers/eugene.jpg" height={HEIGHT} width={WIDTH} className="member" />
              <h3>Eugene Li</h3>
              <p className="description">Outreach</p>
              <br />
              <br />
              <p style={{fontWeight: 300}}>I'm Eugene, a freshman at Newport High School. This is my 2nd year of FTC following 1 year of FLL. Some fun facts about me are I have a passion for music, my favorite series is the Lord of the Rings trilogy, vanilla is my favorite icecream flavor, and I hate the sound of Velcro.</p>
            </div>

            <div className="grid-item">
              <Image loader={loader} src="/images/teammembers/julia.jpg" height={HEIGHT} width={WIDTH} className="member" />
              <h3>Julia Wang</h3>
              <p className="description">Co-Captain</p>
              <br />
              <p style={{fontWeight: 300}}>I'm Julia, a sophomore at The Bush School. This is my 2nd year of FTC following 1 year of FLL. Some of my favorite things include golf, Pixar, astrology, Valorant, strawberry icecream, and the Land of Stories book series.</p>
            </div>

            <div className="grid-item">
              <Image loader={loader} src="/images/teammembers/rohit.jpg" height={HEIGHT} width={WIDTH} className="member" />
              <h3>Rohit Venkatesan</h3>
              <p className="description">CAD / Mechanical</p>
              <br />
              <br />
              <p style={{fontWeight: 300}}>I'm Rohit, an 8th grader at Evergreen Middle School. This is my 1st year of FTC following 1 year of FLL and 2 years of VEX (IQ). My current hobbies include reading, playing board games, and playing the piano and several percussion instruments.</p>
            </div>
          </div>
        </div></FadeInSection>

        <FadeInSection><div className="section">
          <Title name="Alumni" />
          <div className="person-grid grid">
            <div className="grid-item">
              <Image loader={loader} src="/images/alumni/emma.jpg" height={HEIGHT} width={WIDTH} className="member" />
              <h3>Emma Shi</h3>
              <p className="description">Team Co-Founder</p>
              <br />
              <p style={{fontWeight: 300}}>I'm Emma, and I have 9 years of experience in FIRST (6th year in FTC), and enjoyed learning the disciplines of FIRST. As a co-captain, I led business and outreach aspects of our team, including mentoring our younger team members. Outside of robotics, I like to read, bake, listen to musicals, ski, and play games!</p>
            </div>

            <div className="grid-item">
              <Image loader={loader} src="/images/alumni/erik.jpg" height={HEIGHT} width={WIDTH} className="member" />
              <h3>Erik Ma</h3>
              <p className="description">Team Co-Founder</p>
              <br />
              <p style={{fontWeight: 300}}>I'm Erik, and I have 3 years of experience in FIRST, and I have a big passion for engineering. As co-captain, I managed the overall architectural design of our robot (mechanical, programming, and CAD), led the drive team, and mentored students in robotics. In my free time, I love spending time with friends, hosting events, and playing ultimate frisbee!</p>
            </div>

            <div className="grid-item">
              <Image loader={loader} src="/images/alumni/katrina.jpg" height={HEIGHT} width={WIDTH} className="member" />
              <h3>Katrina Li</h3>
              <p className="description"></p>
              <br />
              <br />
              <p style={{fontWeight: 300}}>I'm Katrina, and I focused on business and outreach. I am really interested in how engineering can be used to solve current challenges in ethical ways. In my free time I enjoy baking, hiking, and watching documentaries.</p>
            </div>

            <div className="grid-item">
              <Image loader={loader} src="/images/alumni/lucas.jpg" height={HEIGHT} width={WIDTH} className="member" />
              <h3>Lucas Wu</h3>
              <p className="description"></p>
              <br /><br />
              <p style={{fontWeight: 300}}>I'm Lucas, and I have 3 years of experience in FTC, focusing mainly on documentation and hardware aspects of the robot. Outside of FIRST and robotics, I spend time studying math and chemistry, and enjoy reading novels and playing the piano in my free time.</p>
            </div>

            <div className="grid-item">
              <Image loader={loader} src="/images/alumni/rishabh.jpg" height={HEIGHT} width={WIDTH} className="member" />
              <h3>Rishabh Venkatesan</h3>
              <p className="description"></p>
              <br />
              <br />
              <p style={{fontWeight: 300}}>I'm Rishabh, and I have 5 years of FIRST experience in both FTC and FRC. As a programmer, I have learned many techniques and solutions to common issues over my journey in FIRST! In my free time, I sketch cars, learn about new technologies, and play basketball for fun.</p>
            </div>
          </div>
        </div></FadeInSection>
      </div>
      
      <Footer />
    </>
  );
};
import NavBar from '../components/navbar';
import Top from '../components/top';
import Header from '../components/header';
import Footer from '../components/footer';
import Title from '../components/title';
import Banner from '../components/banner';

export default function About() {
  return (
    <>
      <Header title="About" page="About" description="Learn about High Definition" />
      
      <div className="About">
        <div className="section">
          <Title name="Sponsors" />
          <p>Thank you for supporting our team and helping us learn.</p>
          <div className="person-grid grid">
            <div className="grid-item">
              <img src={require(`/public/images/sponsors/boeing.png`).default.src} height="200px" className="member" />
              <h3>Boeing</h3>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/sponsors/bwtlink2.jpg`).default.src} height="200px" className="member" />
              <h3>BWT Link</h3>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/sponsors/chineseinstitute.jpg`).default.src} height="200px" className="member" />
              <h3>Chinese Institute of Engineers</h3>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/sponsors/chipotle.png`).default.src} height="200px" className="member" />
              <h3>Chipotle</h3>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/sponsors/everstem.jpg`).default.src} height="200px" className="member" />
              <h3>Everstem Education</h3>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/sponsors/firstwa.jpg`).default.src} height="200px" className="member" />
              <h3>FIRST Washington</h3>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/sponsors/google.png`).default.src} height="200px" className="member" />
              <h3>Google</h3>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/sponsors/microsoft.png`).default.src} height="200px" className="member" />
              <h3>Microsoft</h3>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/sponsors/mose.jpg`).default.src} height="200px" className="member" />
              <h3>MOSE</h3>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/sponsors/sendcutsend.png`).default.src} height="200px" className="member" />
              <h3>SendCutSend</h3>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/sponsors/tmobile.jpg`).default.src} height="200px" className="member" />
              <h3>T-Mobile</h3>
            </div>
          </div>
        </div>

        <div className="section">
          <Title name="Coaches" />
          <div className="person-grid grid">
           <div className="grid-item">
              <img src={require(`/public/images/coaches/liangshou.jpg`).default.src} height="300px" className="member" />
              <h3>Coach Liangshou</h3>
              <br />
              <p style={{fontWeight: 300}}>Hello! My name is Liangshou Wu. I work for Google. I have been a mentor/coach for both FLL/FTC for 4 years. I enjoyed working with students in various First programs. For the past two years, I mainly focus on the programming aspect for FTC18225. I also provide mentorship for another rookie FTC team.</p>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/coaches/lynne.jpg`).default.src} height="300px" className="member" />
              <h3>Coach Lynne</h3>
              <br />
              <p style={{fontWeight: 300}}>I’m Coach Lynne from Microsoft. I have been coaching and mentoring FLL and FTC teams for the past nine years. It’s my pleasure to help and work with so many talented students in FIRST, teach them technical skills, business skills, and connect them with professionals in the tech industry.</p>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/coaches/mark.jpg`).default.src} height="300px" className="member" />
              <h3>Coach Mark</h3>
              <br />
              <p style={{fontWeight: 300}}>Hi there, my name is Mark! I work for King County DJA and have been a FTC mentor/coach for 3 years. Supporting STEM is one of my biggest passions, and in FIRST I focus on coaching the mechanical and CAD side of things. I strive to push students to think creatively while learning important knowledge/skills such as problem analysis and resolution.</p>
            </div>
          </div>
        </div>

        <div className="section">
          <Title name="Mentors" />
          <div className="person-grid grid">
            <div className="grid-item">
              <img src={require(`/public/images/mentors/jacky.jpg`).default.src} height="300px" className="member" />
              <h3>Jacky Pai</h3>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/mentors/mihir.jpg`).default.src} height="300px" className="member" />
              <h3>Mihir Jain</h3>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/mentors/xiaoxi.jpg`).default.src} height="300px" className="member" />
              <h3>Xiaoxi Wang</h3>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/mentors/yinhai.jpg`).default.src} height="300px" className="member" />
              <h3>Yinhai Wang</h3>
            </div>
          </div>
        </div>

        <div className="section">
          <Title name="About the Team" />
          <div className="person-grid grid">
            <div className="grid-item">
              <img src={require(`/public/images/teammembers/albert.jpg`).default.src} height="300px" className="member" />
              <h3>Albert Lu</h3>
              <p className="description">CAD / Programming</p>
              <br />
              <br />
              <p style={{fontWeight: 300}}>My name is Albert Lu, and I'm a 7th grader at Tyee Middle School. This is my 3rd year in FIRST (2 in FLL, first year in FTC). I like to read, play the clarinet and code in my free time. I also have a science YouTube channel in which I post weekly.</p>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/teammembers/allen.jpg`).default.src} height="300px" className="member" />
              <h3>Allen Wu</h3>
              <p className="description">Programming Lead</p>
              <br />
              <br />
              <p style={{fontWeight: 300}}>Hi, my name's Allen Wu, a freshman at Newport High School. This is my second year of FTC, following two years of FLL. Outside of robotics, I'm extremely passionate about competitive programming and piano. I also enjoy playing basketball, tennis, volleyball, and hang out with friends. Occasionally, I also dabble in a bit of general programming for fun!</p>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/teammembers/andrew.jpg`).default.src} height="300px" className="member" />
              <h3>Andrew Pai</h3>
              <p className="description">Safety Captain</p>
              <p className="description">Drive / Mechanical</p>
              <br />
              <p style={{fontWeight: 300}}>My name's Andrew Pai, and I'm a 9th grader at Newport High School. It’s my first year in both FTC and FRC. In my free time, I enjoy playing various sports like tennis or basketball and love to hang out with friends. I also like to read, and like the Mistborn series as well as any books from the Grishaverse. Some random other stuff that I do in my free time would be play video games and binge anime when I have little homework.</p>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/teammembers/andy.jpg`).default.src} height="300px" className="member" />
              <h3>Andy Tien</h3>
              <p className="description">CAD Co-Lead</p>
              <p className="description">Programming</p>
              <br />
              <p style={{fontWeight: 300}}>Hi! My name is Andy Tien, and I'm a freshman at newport highschool. I have 2 years of experience fll. I play soccer and violin outside of my academics. I also dabble in mechanical engineering as well as programming, both in competitions and in robotics.</p>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/teammembers/eesha.jpg`).default.src} height="300px" className="member" />
              <h3>Eesha Jain</h3>
              <p className="description">CAD Co-Lead</p>
              <p className="description">Drive / Business / Outreach</p>
              <br />
              <p style={{fontWeight: 300}}>Hello! My name is Eesha, and I'm a 9th grader at Interlake High School. This is my 5th year in FIRST (2 in FLL and 3 in FTC), and I like to develop websites and write in my free time. I enjoy hanging out with friends and chilling with my brother. I am always open to help people out so feel free to contact me whenever!</p>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/teammembers/emma.jpg`).default.src} height="300px" className="member" />
              <h3>Emma Shi</h3>
              <p className="description">Co-Captain</p>
              <p className="description">Business / Outreach / Engineering Notebook</p>
              <br />
              <p style={{fontWeight: 300}}>Hi, my name is Emma! This is my 9th year in FIRST and 6th year in FTC. In these last several years, I've had the opportunity to gain experience in all the disciplines in FIRST. This year, as co-captain, I'm in charge of the business and outreach aspect of our team, as well as mentoring and teaching the younger students. Outside of robotics, I like to read, bake, listen to musicals, ski, and play all sorts of games!</p>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/teammembers/erik.jpg`).default.src} height="300px" className="member" />
              <h3>Erik Ma</h3>
              <p className="description">Co-Captain</p>
              <p className="description">CAD / Mechanical / Programming / Drive</p>
              <br />
              <p style={{fontWeight: 300}}>Hey there! My name is Erik and I am a senior at Interlake High School. This is my 3rd year within FIRST (FTC/FRC) and I have a big passion for engineering. This year as co-captain, I manage the overall architectural design of our robot (mechanical, programming, and CAD), lead the drive team, and mentor students/teams in robotics. In my free time, I love spending time with friends, hosting events, and playing ultimate frisbee!</p>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/teammembers/eugene.jpg`).default.src} height="300px" className="member" />
              <h3>Eugene Li</h3>
              <p className="description">Programming</p>
              <br />
              <br />
              <p style={{fontWeight: 300}}>My name is Eugene Li and I'm currently a freshman at Newport High School. I love swimming and playing piano, although I also just have a passion for music overall. My favorite book is the Lord of the Rings trilogy, and vanilla is my favorite ice cream flavor. I have done 1 year of FLL and 1 year of FTC. A random fact about me is that I hate the sound of Velcro.</p>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/teammembers/julia.jpg`).default.src} height="300px" className="member" />
              <h3>Julia Wang</h3>
              <p className="description">Public Relations Lead</p>
              <p className="description">Business / Outreach</p>
              <br />
              <p style={{fontWeight: 300}}>My name is Julia Wang and I'm currently a sophomore at The Bush School. I love golf and Pixar. In my free time, I like to learn about astrology and play Valorant. My favorite book series is The Land of Stories, and strawberry is my favorite ice cream flavor. I have done 1 year of FLL and 1 year of FTC.</p>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/teammembers/katrina.jpg`).default.src} height="300px" className="member" />
              <h3>Katrina Li</h3>
              <p className="description">Business / Outreach</p>
              <br />
              <br />
              <p style={{fontWeight: 300}}>Hi! My name is Katrina, and I am a second-year member of High Definition, focusing on business and outreach. I’m really interested in how engineering can be used to solve current challenges in ethical ways. In my free time I enjoy baking, hiking, and watching documentaries.</p>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/teammembers/lucas.jpg`).default.src} height="300px" className="member" />
              <h3>Lucas Wu</h3>
              <p className="description">Engineering Notebook Lead</p>
              <p className="description">Business / Outreach</p>
              <br />
              <p style={{fontWeight: 300}}>Hi, my name is Lucas, and I have had an avid interest in STEM for a long time. This is my third year in FTC, focusing mainly on documentation and hardware aspects of the robot. Outside of FIRST and robotics, I spend time studying math and chemistry, and enjoy reading novels and playing the piano in my free time. I'm always interested in learning more and would love to chat about anything and everything!</p>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/teammembers/rishabh.jpg`).default.src} height="300px" className="member" />
              <h3>Rishabh Venkatesan</h3>
              <p className="description">Programming</p>
              <br />
              <br />
              <p style={{fontWeight: 300}}>Hello! My name is Rishabh Venkatesan, and I am a Senior at Tesla STEM High School. I have been in FIRST Robotics for 5 years in both FTC and FRC. As a Programmer, I have learned many techniques and solutions to common issues over my journey in FIRST and am glad to participate in-person this year! In my free time, I sketch cars, learn about new technologies, and play basketball (not professional).</p>
            </div>

            <div className="grid-item">
              <img src={require(`/public/images/teammembers/rohit.jpg`).default.src} height="300px" className="member" />
              <h3>Rohit Venkatesan</h3>
              <p className="description">CAD / Mechanical</p>
              <br />
              <br />
              <p style={{fontWeight: 300}}>Hi, I'm Rohit Venkatesan, an 8th grader, currently going to evergreen middle school. I have 1 past year of experience with FIRST(FLL) and two years of experience with VEX(IQ). My current hobbies include reading, playing board games, and playing various instruments including piano, and several other percussion instruments.</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};
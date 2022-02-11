import NavBar from '../components/navbar';
import Top from '../components/top';
import Header from '../components/header';
import Footer from '../components/footer';
import Title from '../components/title';
import Banner from '../components/banner';
import Link from 'next/link';

export default function Accomplishments() {
  return (
    <>
      <Top name="Accomplishments" />
      <NavBar name="Accomplishments" />
      <Banner />
      <Header title="Accomplishments" description="High Definitions have made tremendous contributions. Check them out!" />
      
      <div className="Accomplishments">
        <div className="section">
          <Title name="Impact" />
          <p>Since our rookie season, our team has impacted <b>2000</b> people by mentoring <b>30+</b> FIRST teams, starting <b>5</b> FIRST teams, and awarding <b>$1000</b> in grants to rookie teams.</p>

          <br />

          <p>Our most impactful outreaches include the following:</p>
          <p className="light"><a href="https://advocacy.everstem.org/" target="_blank" style={{textDecoration: 'none'}}>STEM Advocacy</a></p>
          <p className="light">Washington Tech Invitationals</p>
          <p className="light"><Link href="/resources"><p style={{textDecoration: 'none', cursor: 'pointer'}}>FIRST Team Resources</p></Link></p>
          <p className="light"><a href="https://www.youtube.com/c/EverstemEducation" target="_blank"  style={{textDecoration: 'none'}}>Connecting with Professionals Series</a></p>
        </div>

        <div className="section">
          <Title name="Awards" />
          <h4>Global Awards</h4>
          <div className="award-grid grid">
            <div className="grid-item">Finalist for Innovation Challenge 2021</div>
            <div className="grid-item">Dean's List Winner 2021 - Emma Shi</div>
          </div>
          <h4>State Awards</h4>
          <div className="award-grid grid">
            <div className="grid-item">Inspire Award Winner 2022</div>
            <div className="grid-item">Think Award 3rd Place 2022</div>

            <div className="grid-item">Inspire Award Winner 2021</div>
            <div className="grid-item">Top-Ranked Team 2021</div>
            <div className="grid-item">Connect Award 3rd Place 2021</div>
            <div className="grid-item">Think Award 3rd Place 2021</div>
          </div>
          <h4>Interleague Awards</h4>
          <div className="award-grid grid">
            <div className="grid-item">Inspire Award Winner 2022</div>
            <div className="grid-item">Finalist Alliance Captain 2022</div>
            <div className="grid-item">Design Award Finalist 2022</div>
            <div className="grid-item">Control Award Finalist 2022</div>
            <div className="grid-item">Motivate Award Finalist 2022</div>
            <div className="grid-item">Think Award Finalist 2022</div>

            <div className="grid-item">Inspire Award Finalist 2021</div>
            <div className="grid-item">Top-Ranked Team 2021</div>
            <div className="grid-item">Collins Aerospace Innovate Award 2021</div>
            <div className="grid-item">Connect Award 3rd Place 2021</div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};
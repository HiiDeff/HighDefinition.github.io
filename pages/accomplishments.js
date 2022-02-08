import NavBar from '../components/navbar';
import Top from '../components/top';
import Header from '../components/header';
import Footer from '../components/footer';
import Title from '../components/title';
import Banner from '../components/banner';

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
          <p>Our team has impacted <b>1000</b> people through <b>157</b> hours of outreach.</p>
          <p>We have mentored <b>20+</b> FIRST teams</p>

          <br />

          <p>Our most impactful outreaches include the following:</p>
          <p className="light">Connecting with Professionals Series</p>
          <p className="light">Hacktable CAD Workshop</p>
          <p className="light">Virtual FTC Scrimmage</p>
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
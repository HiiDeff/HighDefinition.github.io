import NavBar from '../components/navbar';
import Top from '../components/top';
import Header from '../components/header';
import Footer from '../components/footer';
import Title from '../components/title';
import Banner from '../components/banner';
import FadeInSection from '../components/fadeinsection';

export default function Seasons() {
  return (
    <>
      <Header title="Seasons" description="Our accomplishments by season" page="Seasons" />
      
      <div className="Seasons">
        <FadeInSection><div className="section">
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 5}}><a className="purplebutton" href="https://www.youtube.com/channel/UC8ZLjVy_9Y56cfqpqarRoQg" target="_blank">Our Youtube Channel</a></div>

          <FadeInSection><div className="section">
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
          </div></FadeInSection>

          <Title name="Freight Frenzy: 2021 - 2022" />
          <div className="seasongrid grid">
            <div className="grid-item">
              <h4>League 1 Robot</h4>
              <img src={require(`/public/images/seasons/freightfrenzy/league1robot.png`).default.src} width="80%" />
              <br /><br />
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><a className="purplebutton" href="https://www.youtube.com/watch?v=g0no5tn-IBg" target="_blank">League 1 Robot Video</a></div>
            </div>

            <div className="grid-item">
              <h4>League 2 Robot</h4>
              <img src={require(`/public/images/seasons/freightfrenzy/league2robot.png`).default.src} width="80%" />
            </div>

            <div className="grid-item">
              <h4>Interleague</h4>
              <img src={require(`/public/images/seasons/freightfrenzy/interleague.png`).default.src} width="80%" />
            </div>

            <div className="grid-item">
              <h4>States</h4>
              <img src={require(`/public/images/seasons/freightfrenzy/states.jpg`).default.src} width="80%" />
              <br /><br />
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><a className="purplebutton" href="https://www.youtube.com/watch?v=UlNMlCkZbEQ" target="_blank">WA State Control Award Video</a></div>
            </div>
          </div>
        </div></FadeInSection>

        <FadeInSection><div className="section">
          <Title name="Ultimate Goal: 2020 - 2021" />
          <div className="seasongrid grid">
            <div className="grid-item">
              <h4>League 1 Robot</h4>
              <img src={require(`/public/images/seasons/ultimategoal/league1.jpg`).default.src} width="80%" />
            </div>

            <div className="grid-item">
              <h4>League 2 Robot</h4>
              <img src={require(`/public/images/seasons/ultimategoal/league2.jpg`).default.src} width="70%" />
            </div>

            <div className="grid-item">
              <h4>Interleague / State</h4>
              <img src={require(`/public/images/seasons/ultimategoal/interleagues.jpg`).default.src} width="80%" />
            </div>
          </div>
        </div></FadeInSection>
      </div>
      
      <Footer />
    </>
  );
};
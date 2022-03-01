import NavBar from '../components/navbar';
import Top from '../components/top';
import Header from '../components/header';
import Footer from '../components/footer';
import Title from '../components/title';
import Banner from '../components/banner';

export default function Seasons() {
  return (
    <>
      <Header title="Seasons" description="Check out High Definition work from different seasons." page="Seasons" />
      
      <div className="Seasons">
        <div className="section">
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><a className="purplebutton" href="https://www.youtube.com/channel/UC8ZLjVy_9Y56cfqpqarRoQg" target="_blank">Watch Our Team Videos</a></div>

          <Title name="Freight Frenzy: 2021 - 2022" />
          <div className="grid">
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
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><a className="purplebutton" href="https://www.youtube.com/watch?v=UlNMlCkZbEQ" target="_blank">Control Award Submission Video</a></div>
            </div>
          </div>
        </div>

        <div className="section">
          <Title name="Ultimate Goal: 2020 - 2021" />
          <div className="grid">
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
        </div>
      </div>
      
      <Footer />
    </>
  );
};
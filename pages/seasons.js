import NavBar from '../components/navbar';
import Top from '../components/top';
import Header from '../components/header';
import Footer from '../components/footer';
import Title from '../components/title';

export default function Seasons() {
  return (
    <>
      <Top name="Seasons" />
      <NavBar name="Seasons" />
      <Header title="Seasons" description="Check out High Definition work from different seasons." />
      
      <div className="Seasons">
        <div className="section">
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><a className="purplebutton" href="https://www.youtube.com/channel/UC8ZLjVy_9Y56cfqpqarRoQg" target="_blank">Watch Our Team Videos</a></div>

          <Title name="Freight Frenzy: 2021 - 2022" />
          <div className="grid">
            <div className="grid-item">
              <h4>League 1 Robot</h4>
              <img src={require(`/public/images/seasons/freightfrenzy/league1robot.png`).default.src} width="80%" />
            </div>

            <div className="grid-item">
              <h4>League 2 Robot</h4>
              <p>Coming soon...</p>
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
import Header from '../components/header';
import Footer from '../components/footer';
import Title from '../components/title';
import FadeInSection from '../components/fadeinsection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBook, faLink, faAward, faPen, faGamepad, faRobot, faMobile, faHandshake, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import Collapse from '../components/collapse';

export default function Seasons() {
  return (
    <>
      <Header title="Seasons" description="Our accomplishments by season!" page="Seasons" />
      
      <div className="Seasons">
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20}}><a className="purplebutton" href="https://www.youtube.com/channel/UC8ZLjVy_9Y56cfqpqarRoQg" target="_blank">Our Youtube Channel</a></div>

        <div className="section">
          <Title name="Freight Frenzy: 2021 - 2022" />
          <FadeInSection><Collapse title="AWARDS"><div>
            <h4>World Awards</h4>
            <div className="award-grid grid">
              <div className="grid-item"><FontAwesomeIcon icon={faAward} width="15" height="15" className="icon"/>Jemison Division Finalist Alliance</div>
              <div className="grid-item"><FontAwesomeIcon icon={faLink} width="15" height="15" className="icon"/>Connect Award Finalist</div>
            </div>

            <h4>State Awards</h4>
            <div className="award-grid grid">
              <div className="grid-item blue"><FontAwesomeIcon icon={faStar} width="15" height="15" className="icon"/>Inspire Award Winner</div>
              <div className="grid-item blue"><FontAwesomeIcon icon={faBook} width="15" height="15" className="icon"/>Think Award 3rd Place</div>
            </div>
            <h4>Interleague Awards</h4>
            <div className="award-grid grid">
              <div className="grid-item green"><FontAwesomeIcon icon={faStar} width="15" height="15" className="icon"/>Inspire Award Winner</div>
              <div className="grid-item green"><FontAwesomeIcon icon={faAward} width="15" height="15" className="icon"/>Finalist Alliance Captain</div>
              <div className="grid-item green"><FontAwesomeIcon icon={faPen} width="15" height="15" className="icon"/>Design Award Finalist</div>
              <div className="grid-item green"><FontAwesomeIcon icon={faGamepad} width="15" height="15" className="icon"/>Control Award Finalist</div>
              <div className="grid-item green"><FontAwesomeIcon icon={faHandshake} width="15" height="15" className="icon"/>Motivate Award Finalist</div>
              <div className="grid-item green"><FontAwesomeIcon icon={faBook} width="15" height="15" className="icon"/>Think Award Finalist</div>
            </div>
          </div></Collapse></FadeInSection>
          <Collapse title="ROBOT CAD IMAGES"><FadeInSection><div className="seasongrid grid">
            <div className="grid-item">
              <Collapse title="League 1">
                <img src={require(`/public/images/seasons/freightfrenzy/league1robot.png`).default.src} width="80%" />
                <br /><br />
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><a className="purplebutton" href="https://www.youtube.com/watch?v=g0no5tn-IBg" target="_blank">League 1 Robot Video</a></div>
              </Collapse>
            </div>

            <div className="grid-item">
              <Collapse title="League 2">
                <img src={require(`/public/images/seasons/freightfrenzy/league2robot.png`).default.src} width="80%" />
              </Collapse>
            </div>

            <div className="grid-item">
              <Collapse title="Interleague">
                <img src={require(`/public/images/seasons/freightfrenzy/interleague.png`).default.src} width="80%" />
              </Collapse>              
            </div>

            <div className="grid-item">
              <Collapse title="States">
                <img src={require(`/public/images/seasons/freightfrenzy/states.jpg`).default.src} width="80%" />
                <br /><br />
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><a className="purplebutton" href="https://www.youtube.com/watch?v=UlNMlCkZbEQ" target="_blank">WA State Control Award Video</a></div>
              </Collapse>              
            </div>

            <div className="grid-item">
              <Collapse title="World">
                <img src={require(`/public/images/seasons/freightfrenzy/worlds.jpg`).default.src} width="80%" />
                <br /><br />
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><a className="purplebutton" href="https://www.youtube.com/watch?v=Bo4R6sHHHWY&t" target="_blank">World Reveal Video</a></div>
              </Collapse>              
            </div>
          </div></FadeInSection></Collapse>
        </div>

        <div className="section">
          <Title name="Ultimate Goal: 2020 - 2021" />
          <FadeInSection><Collapse title="AWARDS"><div>
            <h4>World Awards</h4>
            <div className="award-grid grid">
              <div className="grid-item"><FontAwesomeIcon icon={faMobile} width="15" height="15" className="icon"/>Innovation Challenge Finalist</div>
              <div className="grid-item"><FontAwesomeIcon icon={faUserAstronaut} width="15" height="15" className="icon"/>Dean's List Winner - Emma Shi</div>
            </div>
            <h4>State Awards</h4>
            <div className="award-grid grid">
              <div className="grid-item blue"><FontAwesomeIcon icon={faStar} width="15" height="15" className="icon"/>Inspire Award Winner</div>
              <div className="grid-item blue"><FontAwesomeIcon icon={faAward} width="15" height="15" className="icon"/>Top-Ranked Team</div>
              <div className="grid-item blue"><FontAwesomeIcon icon={faLink} width="15" height="15" className="icon"/>Connect Award 3rd Place</div>
              <div className="grid-item blue"><FontAwesomeIcon icon={faBook} width="15" height="15" className="icon"/>Think Award 3rd Place</div>
            </div>
            <h4>Interleague Awards</h4>
            <div className="award-grid grid">
              <div className="grid-item green"><FontAwesomeIcon icon={faStar} width="15" height="15" className="icon"/>Inspire Award Finalist</div>
              <div className="grid-item green"><FontAwesomeIcon icon={faAward} width="15" height="15" className="icon"/>Top-Ranked Team</div>
              <div className="grid-item green"><FontAwesomeIcon icon={faRobot} width="15" height="15" className="icon"/>Innovate Award</div>
              <div className="grid-item green"><FontAwesomeIcon icon={faLink} width="15" height="15" className="icon"/>Connect Award 3rd Place</div>
            </div>
          </div></Collapse></FadeInSection>
          <Collapse title="ROBOT CAD IMAGES"><FadeInSection><div className="seasongrid grid">
            <div className="grid-item">
              <Collapse title="League 1">
                <img src={require(`/public/images/seasons/ultimategoal/league1.jpg`).default.src} width="80%" />
              </Collapse>
            </div>

            <div className="grid-item">
              <Collapse title="League 2">
                <img src={require(`/public/images/seasons/ultimategoal/league2.jpg`).default.src} width="70%" />
              </Collapse>
            </div>

            <div className="grid-item">
              <Collapse title="Interleague / State">
                <img src={require(`/public/images/seasons/ultimategoal/interleagues.jpg`).default.src} width="80%" />
                <br /><br />
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><a className="purplebutton" href="https://www.youtube.com/watch?v=vkxp2Lw1z80" target="_blank">WA State Control Award Video</a></div>
              </Collapse>              
            </div>
          </div></FadeInSection></Collapse>
        </div>
      </div>
      
      <Footer />
    </>
  );
};
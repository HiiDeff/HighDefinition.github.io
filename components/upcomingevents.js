import Title from './title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faCalendarAlt, faHotdog } from '@fortawesome/free-solid-svg-icons';

export default function UpcomingEvents() {
  return (
    <>
      <div className="section">
        <Title name="Upcoming or Current Events" />
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
          <span style={{display: 'flex', alignItems: 'center'}}><FontAwesomeIcon icon={faCalendarAlt} width="20" height="20" className="icon"/> &nbsp; &nbsp; <p style={{fontWeight: 300}}><b>CIP - Artificial Intelligence & Robotics</b></p><ul style={{textAlign: 'left', fontWeight: 300}}>
            <li>Speaker: Anne Kao</li>
            <li>Date: January 8th, 2021</li>
            <li>Livestream: <a href="https://www.youtube.com/watch?v=5I507SCeXuw">https://www.youtube.com/watch?v=5I507SCeXuw</a></li>
          </ul></span>

          <span style={{display: 'flex', alignItems: 'center'}}><FontAwesomeIcon icon={faCalendarAlt} width="20" height="20" className="icon"/> &nbsp; &nbsp; <p style={{fontWeight: 300}}><b>STEM Advocacy - Lobby Training Day</b></p><ul style={{textAlign: 'left', fontWeight: 300}}>
            <li>Date: January 17th, 2021</li>
            <li>Sign Up: <a href="https://us02web.zoom.us/webinar/register/WN_zvOSipM-TA6bHwuBeKTVFQ">https://us02web.zoom.us/webinar/register/WN_zvOSipM-TA6bHwuBeKTVFQ</a></li>
            <li>More Information about the effort at <a href="https://advocacy.everstem.org/">https://advocacy.everstem.org/</a></li>
          </ul></span>

          <span style={{display: 'flex', alignItems: 'center'}}><FontAwesomeIcon icon={faTrophy} width="20" height="20" className="icon"/> &nbsp; &nbsp; <p style={{fontWeight: 300}}><b>Interleague</b>: January 15-16</p></span>
        </div>
      </div>
    </>
  );
};
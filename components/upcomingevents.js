import Title from './title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faCalendarAlt, faHotdog } from '@fortawesome/free-solid-svg-icons';

export default function UpcomingEvents() {
  return (
    <>
      <div className="section">
        <Title name="Upcoming or Current Events" />
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
          <span style={{display: 'flex', alignItems: 'center'}}><FontAwesomeIcon icon={faCalendarAlt} width="20" height="20" className="icon"/> &nbsp; &nbsp; <p style={{fontWeight: 300}}><b>STEM Advocacy - Lobby Training Day</b></p><ul style={{textAlign: 'left', fontWeight: 300}}>
            <li>Date: January 17th, 2022</li>
            <li>Sign Up: <a href="https://us02web.zoom.us/webinar/register/WN_zvOSipM-TA6bHwuBeKTVFQ">https://us02web.zoom.us/webinar/register/WN_zvOSipM-TA6bHwuBeKTVFQ</a></li>
            <li>More Information about the effort at <a href="https://advocacy.everstem.org/">https://advocacy.everstem.org/</a></li>
          </ul></span>

          <span style={{display: 'flex', alignItems: 'center'}}><FontAwesomeIcon icon={faCalendarAlt} width="20" height="20" className="icon"/> &nbsp; &nbsp; <p style={{fontWeight: 300}}><b>Washington Tech Invitationals</b></p><ul style={{textAlign: 'left', fontWeight: 300}}>
            <li>Date: January 30th, 2022</li>
            <li>Sign Up: <a href="https://www.eventbrite.com/e/washington-tech-invitational-tickets-234675168747">https://www.eventbrite.com/e/washington-tech-invitational-tickets-234675168747</a></li>
          </ul></span>

          <span style={{display: 'flex', alignItems: 'center'}}><FontAwesomeIcon icon={faTrophy} width="20" height="20" className="icon"/> &nbsp; &nbsp; <p style={{fontWeight: 300}}><b>Interleague</b>: January 15-16</p></span>
        </div>
      </div>
    </>
  );
};
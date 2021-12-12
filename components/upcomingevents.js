import Title from './title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faCalendarAlt, faHotdog } from '@fortawesome/free-solid-svg-icons';

export default function UpcomingEvents() {
    return (
      <>
        <div className="section">
          <Title name="Upcoming or Current Events" />
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <span style={{display: 'flex', alignItems: 'center'}}><FontAwesomeIcon icon={faTrophy} width="20" height="20" className="icon"/> &nbsp; &nbsp; <p style={{fontWeight: 300}}><b>League 2</b>: December 10-12</p></span>
            <span style={{display: 'flex', alignItems: 'center'}}><FontAwesomeIcon icon={faTrophy} width="20" height="20" className="icon"/> &nbsp; &nbsp; <p style={{fontWeight: 300}}><b>Interleague</b>: January 15-16</p></span>
          </div>
        </div>
      </>
    );
  };
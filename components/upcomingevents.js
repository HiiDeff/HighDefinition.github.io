import Title from './title';
import FadeInSection from './fadeinsection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faCalendarAlt, faHotdog } from '@fortawesome/free-solid-svg-icons';

export default function UpcomingEvents() {
  return (
    <>
      <FadeInSection><div className="section">
        <Title name="Upcoming or Current Events" />
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><div style={{display: 'flex', alignItems: 'left', justifyContent: 'center', flexDirection: 'column'}}>
          <span style={{display: 'flex', alignItems: 'center'}}><FontAwesomeIcon icon={faCalendarAlt} width="20" height="20" className="icon"/> &nbsp; &nbsp; <p style={{fontWeight: 300}}><b>CADTable Workshop - Building Parts</b>: March 21st</p></span>
          <span style={{display: 'flex', alignItems: 'center'}}><FontAwesomeIcon icon={faCalendarAlt} width="20" height="20" className="icon"/> &nbsp; &nbsp; <p style={{fontWeight: 300}}><b>CADTable Workshop - Integrating Parts into Assemblies</b>: March 23rd</p></span>
          <span style={{display: 'flex', alignItems: 'center'}}><FontAwesomeIcon icon={faCalendarAlt} width="20" height="20" className="icon"/> &nbsp; &nbsp; <p style={{fontWeight: 300}}><b>Washington STEM Advocacy Information Night</b>: March 24th</p></span>
          <span style={{display: 'flex', alignItems: 'center'}}><FontAwesomeIcon icon={faCalendarAlt} width="20" height="20" className="icon"/> &nbsp; &nbsp; <p style={{fontWeight: 300}}><b>CADTable Workshop - Rendering CAD</b>: March 25th</p></span>
          <span style={{display: 'flex', alignItems: 'center'}}><FontAwesomeIcon icon={faCalendarAlt} width="20" height="20" className="icon"/> &nbsp; &nbsp; <p style={{fontWeight: 300}}><b>Robotics Reactor Meetup</b>: March 26th</p></span>
          <span style={{display: 'flex', alignItems: 'center'}}><FontAwesomeIcon icon={faCalendarAlt} width="20" height="20" className="icon"/> &nbsp; &nbsp; <p style={{fontWeight: 300}}><b>CADTable</b>: March 27th - April 3rd</p></span>
          <span style={{display: 'flex', alignItems: 'center'}}><FontAwesomeIcon icon={faCalendarAlt} width="20" height="20" className="icon"/> &nbsp; &nbsp; <p style={{fontWeight: 300}}><b>FIRST Demonstration</b>: April 2nd</p></span>
          <span style={{display: 'flex', alignItems: 'center'}}><FontAwesomeIcon icon={faTrophy} width="20" height="20" className="icon"/> &nbsp; &nbsp; <p style={{fontWeight: 300}}><b>World Championship</b>: April 20 - 24</p></span>
        </div></div>
      </div></FadeInSection>
    </>
  );
};
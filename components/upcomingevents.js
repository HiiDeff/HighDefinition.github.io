import Title from './title';
import FadeInSection from './fadeinsection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faCalendarAlt, faHotdog } from '@fortawesome/free-solid-svg-icons';

export default function UpcomingEvents() {
  return (
    <>
      <FadeInSection><div className="section">
        <Title name="Upcoming or Current Events" />
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><div style={{display: 'flex', alignItems: 'left', justifyContent: 'center', flexDirection: 'column'}} className="upcomingEvents">
          <span style={{display: 'flex', alignItems: 'center', marginTop: 20, marginBottom: 10}}><FontAwesomeIcon icon={faCalendarAlt} width="20" height="20" className="icon"/> &nbsp; &nbsp; <a><b>CWP - Jasmine Lawrence</b>: March 20th</a></span>
          <span style={{display: 'flex', alignItems: 'center', marginBottom: 10}}><FontAwesomeIcon icon={faCalendarAlt} width="20" height="20" className="icon"/> &nbsp; &nbsp; <a href="https://cadtable.everstem.org/"><b>CADTable Workshop - Building Parts</b>: March 21st</a></span>
          <span style={{display: 'flex', alignItems: 'center', marginBottom: 10}}><FontAwesomeIcon icon={faCalendarAlt} width="20" height="20" className="icon"/> &nbsp; &nbsp; <a href="https://cadtable.everstem.org/" style={{fontWeight: 300, color: 'white', textDecoration: 'none'}}><b>CADTable Workshop - Integrating Parts into Assemblies</b>: March 23rd from 4:30 - 6:00 PM PT</a></span>
          <span style={{display: 'flex', alignItems: 'center', marginBottom: 10}}><FontAwesomeIcon icon={faCalendarAlt} width="20" height="20" className="icon"/> &nbsp; &nbsp; <a href="https://tinyurl.com/WASTEMAdvoInfoNight"><b>Washington STEM Advocacy Information Night</b>: March 24th at 8:00 PM PT</a></span>
          <span style={{display: 'flex', alignItems: 'center', marginBottom: 10}}><FontAwesomeIcon icon={faCalendarAlt} width="20" height="20" className="icon"/> &nbsp; &nbsp; <a href=""><b>CADTable Workshop - Rendering CAD</b>: March 25th</a></span>
          <span style={{display: 'flex', alignItems: 'center', marginBottom: 10}}><FontAwesomeIcon icon={faCalendarAlt} width="20" height="20" className="icon"/> &nbsp; &nbsp; <a href="https://forms.gle/cFiHH6WdNuqKWSNTA"><b>Robotics Reactor Meetup</b>: March 26th</a></span>
          <span style={{display: 'flex', alignItems: 'center', marginBottom: 10}}><FontAwesomeIcon icon={faCalendarAlt} width="20" height="20" className="icon"/> &nbsp; &nbsp; <a href="https://cadtable.everstem.org/"><b>CADTable</b>: March 27th - April 3rd</a></span>
          <span style={{display: 'flex', alignItems: 'center', marginBottom: 10}}><FontAwesomeIcon icon={faCalendarAlt} width="20" height="20" className="icon"/> &nbsp; &nbsp; <a href=""><b>FIRST Demonstration</b>: April 2nd</a></span>
          <span style={{display: 'flex', alignItems: 'center', marginBottom: 10}}><FontAwesomeIcon icon={faTrophy} width="20" height="20" className="icon"/> &nbsp; &nbsp; <a href=""><b>World Championship</b>: April 20 - 24</a></span>
        </div></div>
      </div></FadeInSection>
    </>
  );
};
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
          <span style={{display: 'flex', alignItems: 'center', marginTop: 20, marginBottom: 10}}><FontAwesomeIcon icon={faCalendarAlt} width="20" height="20" className="icon"/> &nbsp; &nbsp; <a><b>CWP - Jasmine Lawrence</b>: March 20</a></span>
          <span style={{display: 'flex', alignItems: 'center', marginBottom: 10}}><FontAwesomeIcon icon={faCalendarAlt} width="20" height="20" className="icon"/> &nbsp; &nbsp; <a href="https://docs.google.com/forms/d/e/1FAIpQLSctj81LdQ9ZQ4CTDV6YVbkwtS5gI2X_wvGNc1SeRSs2nQiprQ/viewform"><b>CAD Workshop - Building Parts</b>: March 22 at 7 PM PT</a></span>
          <span style={{display: 'flex', alignItems: 'center', marginBottom: 10}}><FontAwesomeIcon icon={faCalendarAlt} width="20" height="20" className="icon"/> &nbsp; &nbsp; <a href="https://docs.google.com/forms/d/e/1FAIpQLSctj81LdQ9ZQ4CTDV6YVbkwtS5gI2X_wvGNc1SeRSs2nQiprQ/viewform" style={{fontWeight: 300, color: 'white', textDecoration: 'none'}}><b>CAD Workshop - Assemblies</b>: March 23 at 4:30 PM PT</a></span>
          <span style={{display: 'flex', alignItems: 'center', marginBottom: 10}}><FontAwesomeIcon icon={faCalendarAlt} width="20" height="20" className="icon"/> &nbsp; &nbsp; <a href="https://tinyurl.com/WASTEMAdvoInfoNight"><b>WA STEM Advo Info Night</b>: March 24 at 8:00 PM PT</a></span>
          <span style={{display: 'flex', alignItems: 'center', marginBottom: 10}}><FontAwesomeIcon icon={faCalendarAlt} width="20" height="20" className="icon"/> &nbsp; &nbsp; <a href="https://forms.gle/cFiHH6WdNuqKWSNTA"><b>Robotics Reactor Meetup</b>: March 26</a></span>
          <span style={{display: 'flex', alignItems: 'center', marginBottom: 10}}><FontAwesomeIcon icon={faCalendarAlt} width="20" height="20" className="icon"/> &nbsp; &nbsp; <a href="https://cadtable.everstem.org/"><b>CADTable</b>: March 27th - April 3</a></span>
          <span style={{display: 'flex', alignItems: 'center', marginBottom: 10}}><FontAwesomeIcon icon={faCalendarAlt} width="20" height="20" className="icon"/> &nbsp; &nbsp; <a href="https://docs.google.com/forms/d/e/1FAIpQLSctj81LdQ9ZQ4CTDV6YVbkwtS5gI2X_wvGNc1SeRSs2nQiprQ/viewform"><b>CAD Workshop - Rendering CAD</b>: March 28 at 5 PM PT</a></span>
          <span style={{display: 'flex', alignItems: 'center', marginBottom: 10}}><FontAwesomeIcon icon={faCalendarAlt} width="20" height="20" className="icon"/> &nbsp; &nbsp; <a href=""><b>FIRST Demonstration</b>: April 2</a></span>
          <span style={{display: 'flex', alignItems: 'center', marginBottom: 10}}><FontAwesomeIcon icon={faTrophy} width="20" height="20" className="icon"/> &nbsp; &nbsp; <a href=""><b>World Championship</b>: April 20 - 24</a></span>
        </div></div>
      </div></FadeInSection>
    </>
  );
};
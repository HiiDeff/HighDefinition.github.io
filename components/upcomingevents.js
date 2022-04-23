import Title from './title';
import FadeInSection from './fadeinsection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faCalendarAlt, faHotdog } from '@fortawesome/free-solid-svg-icons';

export default function UpcomingEvents() {
  return (
    <>
      <FadeInSection><div className="section">
        <Title name="Upcoming or Current Events" />
        <div className="flex"><iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23D81B60&ctz=America%2FLos_Angeles&showCalendars=0&showTabs=0&showPrint=0&showTitle=0&src=ZnJwNm5jZmxiNzV1ZW5qYnBrMTdvYW5xajRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23000000" style={{borderWidth: 0}} width="800" height="600" frameborder="0" scrolling="no"></iframe></div>

        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><div style={{display: 'flex', alignItems: 'left', justifyContent: 'center', flexDirection: 'column'}} className="upcomingEvents">
          <span style={{display: 'flex', alignItems: 'center', marginBottom: 10}}><FontAwesomeIcon icon={faTrophy} width="20" height="20" className="icon"/> &nbsp; &nbsp; <a href=""><b>World Championship</b>: April 20 - 24</a></span>
        </div></div>
      </div></FadeInSection>
    </>
  );
};
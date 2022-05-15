import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBook, faLink, faAward, faPen, faGamepad, faRobot, faMobile, faHandshake, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

export default function Award({icon, award, classn}) {
  return (
    <div className={`grid-item ${classn}`}><a href="https://ftc-events.firstinspires.org/team/18225" style={{color: 'white', textDecoration: 'none'}}><FontAwesomeIcon icon={icon} width="15" height="15" className="icon"/>{award}</a></div>
  );
};
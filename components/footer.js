import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faLink } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="footerPt2">
          <h4>
            Contact us at{" "}
            <a href="mailto:ftc18225@gmail.com" style={{ color: "white" }}>
              ftc18225@gmail.com
            </a>
          </h4>
          <div className="flex" style={{ marginTop: 5 }}>
            <a
              href="https://www.youtube.com/channel/UC8ZLjVy_9Y56cfqpqarRoQg"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                style={{ height: 25, marginRight: 10, color: "white" }}
              />
            </a>
            <a
              href="https://ftc-events.firstinspires.org/team/18225"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faAward}
                style={{ height: 25, marginRight: 10, color: "white" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/high-definition-045289247/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ height: 25, marginRight: 10, color: "white" }}
              />
            </a>
            <a
              href="https://www.instagram.com/ftc18225/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ height: 25, marginRight: 10, color: "white" }}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

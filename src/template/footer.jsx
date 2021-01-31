import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons/";
export default function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
      <div className="footer-links">
          <div>
            <span style={{marginLeft: '1rem'}}>Github</span>
            <div id='footer-link'>
              <a id='footer-icon' href="https://github.com/ordep2v">
                <FontAwesomeIcon icon={faGithub} size='5x'/>
              </a>
            </div>
          </div>
          <div>
            Linkedin
            <div id='footer-link'>
              <a href="https://www.linkedin.com/in/pedro-cunha-73b3041b0/">
                <FontAwesomeIcon  icon={faLinkedin} size='5x'/>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-text">
          <div>
            Aplicação desenvolvida como resposta ao desafio da VilaApps.
          </div>
          <div>Pedro Cunha, 2021.</div>
        </div>
       
      </div>
    </footer>
  );
}

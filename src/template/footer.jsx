import React from "react";
export default function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer-text">
        <div>Aplicação desenvolvida como resposta ao desafio da VilaApps.</div>
        <div>Pedro Cunha, 2021. &copy;</div>
      </div>
      <div className='footer-links'>
          <div>GitHub</div>
          <div>LinkedIn</div>
      </div>
    </footer>
  );
}

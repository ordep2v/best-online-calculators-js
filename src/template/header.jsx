import React from 'react'
export default function Header(props) {
  return (
    <>
      <header className="header row">
        <div className="logo-header">
          <img alt='logo best online calculators' src="./pccalculators.png"></img>
        </div>
        <div className="buttons-header">
          <div className="button-header">
            <a href="/">Calculadoras romanas</a>
          </div>
          <div className="button-header">
              <a href="/bhaskara-calculators">Fórmula de Bhaskara</a>
          </div>
        </div>
      </header>
    </>
  );
}

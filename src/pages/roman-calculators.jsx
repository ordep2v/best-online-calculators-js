import React from 'react'
import Header from "../template/header";
import Content from "../template/content";
import Footer from "../template/footer";

import RomanCalculator from "../components/roman-calculator/calculator";
import InputCalculator from "../components/input-calculator/input-calculator";

export default function RomanCalculators(props) {
  return (
    <>
      <div className="grid-container">
      <Header />
      <Content>
        <div className="calculator-wrapper">
          <div>
            <h3>PC Roman Button Calculator</h3>
            <RomanCalculator />{" "}
          </div>
          <div>
            <h3>PC Mixed Input Calc</h3>
            <InputCalculator />
          </div>
        </div>
      </Content>
      <Footer />
        </div>
    </>
  );
}

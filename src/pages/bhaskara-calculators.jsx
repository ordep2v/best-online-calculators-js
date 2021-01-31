import React from "react";
import Header from "../template/header";
import Content from "../template/content";
import Footer from "../template/footer";

import Bhaskara from "../components/bhaskara/bhaskara";

export default function BhaskaraCalculators(props) {
  return (
    <>
      <div className="grid-container">
      <Header />
        <Content>
          <div className="calculator-wrapper">
            <div>
              <h3>PC Bhaskara Magic Board</h3>
              <Bhaskara />
            </div>
          </div>
        </Content>
      <Footer />
      </div>
    </>
  );
}

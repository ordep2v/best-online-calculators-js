import "./app.css";
import Header from "./template/header";

import RomanCalculator from "./components/roman-calculator/calculator";
import Content from "./template/content";
import Footer from "./template/footer";
import InputCalculator from "./components/roman-calculator/input-calculator";
import Bhaskara from "./components/bhaskara/bhaskara";
function App() {
  return (
    <div className="grid-container">
      <Header />
      <Content>
        <div className="calculator-wrapper">
          <div>
            <RomanCalculator />{" "}
          </div>
          <div>
            <InputCalculator />
          </div>
          <div>
            <Bhaskara />
          </div>
        </div>
      </Content>
      <Footer />
    </div>
  );
}

export default App;

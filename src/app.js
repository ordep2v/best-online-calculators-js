import "./app.css";
import Header from "./template/header";

import RomanCalculator from "./components/roman-calculator/calculator";
import Content from "./template/content";
import Footer from "./template/footer";
function App() {
  return (
    <div className='grid-container'>
      <Header />
      <Content>
        <div className='calculator-wrapper'>
          <RomanCalculator />{" "}
        </div>
      </Content>
      <Footer />
    </div>
  );
}

export default App;

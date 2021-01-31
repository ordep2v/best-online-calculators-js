import "./app.css";
import { BrowserRouter, Route } from "react-router-dom";
import RomanCalculators from "./pages/roman-calculators";
import BhaskaraCalculators from "./pages/bhaskara-calculators";
function App() {
  return (
    <BrowserRouter>
      
        <Route path="/" exact component={RomanCalculators}></Route>

        <Route path="/bhaskara-calculators" exact component={BhaskaraCalculators}></Route>

    </BrowserRouter>
  );
}

export default App;

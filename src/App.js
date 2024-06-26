import Searchbox from "./component/todo-app/index";
import Weather from "./component/weather-app";
import SearchAutoComplete from "./component/search-auto-complete-qrcode";
import Calci from "./component/calculator";
import { Link, Route, Routes } from "react-router-dom";
import DigitalClock from "./component/digital-clock";

function App() {
  const styling = {
    margin: "10px 10px 10px 10px",
  }

  var links = ["/todo-list", "/weather-app", "/qr-code-generator", "/calculator", "/digital-clock"];
  var titles = ["Todo App", "Weather App", "QR Code Generator","Calculator", "Digital Clock"];
  var components = [<Searchbox />, <Weather />, <SearchAutoComplete />, <Calci />, <DigitalClock/>];

  return (
    <div className="App">
      <nav >
        {links.map((link, index) => <Link to={link} style={styling}>{titles[index]}</Link>)}
      </nav>
      <Routes>        
        {components.map((component, index) => <Route path={links[index]} element={component} />)}
      </Routes>
    </div>
  );
}

export default App;

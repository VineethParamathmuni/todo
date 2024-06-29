import Searchbox from "./component/todo-app/index";
import Weather from "./component/weather-app";
import SearchAutoComplete from "./component/search-auto-complete-qrcode";
import Calci from "./component/calculator";
import { Link, Route, Routes } from "react-router-dom";
import DigitalClock from "./component/digital-clock";
import GoogleAuth from "./component/google-oauth";
import DataSort from "./component/data-sort";

function App() {
  const styling = {
    margin: "10px 10px 10px 10px",    
  }

  var links = ["/todo-list", "/weather-app", "/qr-code-generator", "/calculator", "/digital-clock", "/google-auth", "/data-sort"];
  var titles = ["Todo App", "Weather App", "QR Code Generator","Calculator", "Digital Clock", "Google Authentication Page", "Data Sort"];
  var components = [<Searchbox />, <Weather />, <SearchAutoComplete />, <Calci />, <DigitalClock/>, <GoogleAuth/>, <DataSort/>];

  return (
    <div className="App">
      <nav >
        {links.map((link, index) => <Link key={index} to={link} style={styling}>{titles[index]}</Link>)}
      </nav>
      <Routes>        
        {components.map((component, index) => <Route key={index} path={links[index]} element={component} />)}
      </Routes>
    </div>
  );
}

export default App;

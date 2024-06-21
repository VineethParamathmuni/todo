import Searchbox from "./component/todo-app/index";
import Weather from "./component/weather-app";
import SearchAutoComplete from "./component/search-auto-complete-qrcode";
import Calci from "./component/calculator";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  const styling = {
    margin: "10px 10px 10px 10px",
  }

  return (
    <div className="App">
      <nav >
        <Link to="/todo-list" style={styling}>Todo list</Link>
        <Link to="/weather-app" style={styling}>Weather App</Link>
        <Link to="/qr-code-generator" style={styling}>QR code</Link>
        <Link to="/calculator" style={styling}>Calculator</Link>
      </nav>
      <Routes>
        <Route path="/todo-list" element={<Searchbox />} />
        <Route path="/weather-app" element={<Weather />} />
        <Route path="/qr-code-generator" element={<SearchAutoComplete />} />
        <Route path="/calculator" element={<Calci />} />
      </Routes>
    </div>
  );
}

export default App;

import Searchbox from './component/todo-app/index';
import Weather from './component/weather-app';
import SearchAutoComplete from './component/search-auto-complete-qrcode';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to="/todo-list">Todo list</Link>
      <Link to="/weather-app">Weather App</Link>
      <Link to="/qr-code-generator">QR code</Link>
      <Routes>
        <Route path="/todo-list" element={<Searchbox/>}/>
        <Route path="/weather-app" element={<Weather/>}/>
        <Route path="/qr-code-generator" element={<SearchAutoComplete/>}/>
      </Routes>
    </div>
  );
}

export default App;

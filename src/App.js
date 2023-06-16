import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import LoginError from './components/LoginError';
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/loginerror" element={<LoginError />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

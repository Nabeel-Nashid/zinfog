import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import LoginError from './components/LoginError';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/loginerror" element={<LoginError />} />
          <Route path="/footer" element={<Footer />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

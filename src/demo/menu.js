import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Career from "./career";

function Menu() {
  return (
    <div>
        <h1>React App</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </Router>  
    </div>
  );
}

export default Menu;
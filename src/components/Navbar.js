import Hamburger from "../components/Hamburger";
import Home from "../pages/Home";
import About from "../pages/About";
import Staff from "../pages/Staff";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Navigation(){
return(

  <BrowserRouter>
    <nav>
      <h1>Bilfirma AB</h1>
      <Hamburger/>
    </nav>

    <div class="hamburger-menu">
      <ul>
        <li><Link to="/" onClick={() => closeMenu()}>Hem</Link></li>
        <li><Link to="/about" onClick={() => closeMenu()}>Om oss</Link></li>
        <li><Link to="/staff" onClick={() => closeMenu()}>Staff</Link></li>
      </ul>
    </div>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/staff" element={<Staff />} />
    </Routes>
  </BrowserRouter>
  )
};

function closeMenu() {
  const ham_menu = document.querySelector(".hamburger");
  const mob_menu = document.querySelector(".hamburger-menu");

  if (ham_menu && mob_menu) {
    ham_menu.classList.remove("is-active");
    mob_menu.classList.remove("is-active");
  }
}

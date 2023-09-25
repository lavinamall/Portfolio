import { useState } from "react";
import "./app.scss";
import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Works from "./components/works/Works"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"
import Menu from "./components/menu/Menu"
import Socials from "./components/socials/Socials"

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Contact />
        <Socials />
      </div>
    </div>
  );
}

export default App;

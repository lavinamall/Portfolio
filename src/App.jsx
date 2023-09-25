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
  const details = {
    name: "Lavina Mall",
    mobile: "+91 9769883785",
    email: "lavinasinbox@gmail.com",
    instagram: "ms.lavina_",
    facebook: "lavina.mall",
  };

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} email={details.email} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro name={details.name} />
        <Portfolio />
        <Works />
        <Contact />
        <Socials />
      </div>
    </div>
  );
}

export default App;

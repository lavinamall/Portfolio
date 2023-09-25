import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {

  const handleClick = () => {
    setMenuOpen(false);
  }

  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={handleClick}>
          <a href="#intro">Home</a>
        </li>

        <li onClick={handleClick}>
          <a href="#portfolio">Portfolio</a>
        </li>

        <li onClick={handleClick}>
          <a href="#works">Works</a>
        </li>

        <li onClick={handleClick}>
          <a href="#contact">Contact</a>
        </li>

        <li onClick={handleClick}>
          <a href="#socials">Socials</a>
        </li>

        <li onClick={handleClick}>
          <a href="assets/resume/resume.pdf" target="_blank">Resume</a>
        </li>
      </ul>
    </div>
  );
}

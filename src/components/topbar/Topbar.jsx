import "./topbar.scss";

export default function Topbar({ menuOpen, setMenuOpen, email }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            {/* html codes for < /> */}
            &#5176; &#47; &#5171;
          </a>

          <div className="itemContainer">
            <span>
              <i className="fa fa-envelope"></i>
              {email}
            </span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

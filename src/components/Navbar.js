import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* left this comment on purpose */}
          <ul className="nav-links" id="nav-links">
            {pageLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.href} className="nav-link">
                    {"link.text"}
                    home{" "}
                  </a>
                </li>
              );
            })}
            <li>
              <a href="#about" className="nav-link">
                {" "}
                about{" "}
              </a>
            </li>
            <li>
              <a href="#services" className="nav-link">
                {" "}
                services{" "}
              </a>
            </li>
            <li>
              <a href="#tours" className="nav-link">
                {" "}
                tours
              </a>
            </li>
          </ul>
          <ul className="nav-icons">
            {socialLinks.map((link) => {
              const { id, href, icon } = link;
              return (
                <li key={id}>
                  <a href="{href}" target="_blank" className="nav-icon">
                    <i className={icon}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      <div>
        <nav className="navbar">
          <div className="nav-center">
            <div className="nav-header">
              <img
                src="./images/logo.svg"
                className="nav-logo"
                alt="backroads"
              />
              <button type="button" className="nav-toggle" id="nav-toggle">
                <i className="fas fa-bars"></i>
              </button>
            </div>
            {/* left this comment on purpose */}
            <ul className="nav-links" id="nav-links">
              <li>
                <a href="#home" className="nav-link">
                  {" "}
                  home{" "}
                </a>
              </li>

              <li>
                <a href="#about" className="nav-link">
                  {" "}
                  about{" "}
                </a>
              </li>

              <li>
                <a href="#services" className="nav-link">
                  {" "}
                  services{" "}
                </a>
              </li>

              <li>
                <a href="#tours" className="nav-link">
                  {" "}
                  tours
                </a>
              </li>
            </ul>
            <ul className="nav-icons">
              <li>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  className="nav-icon"
                >
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  className="nav-icon"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  className="nav-icon"
                >
                  <i className="fab fa-squarespace"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      ; export default
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src="./images/logo.svg" className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* left this comment on purpose */}
          <ul className="nav-links" id="nav-links">
            <li>
              <a href="#home" className="nav-link">
                {" "}
                home{" "}
              </a>
            </li>

            <li>
              <a href="#about" className="nav-link">
                {" "}
                about{" "}
              </a>
            </li>

            <li>
              <a href="#services" className="nav-link">
                {" "}
                services{" "}
              </a>
            </li>

            <li>
              <a href="#tours" className="nav-link">
                {" "}
                tours
              </a>
            </li>
          </ul>
          <ul className="nav-icons">
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                className="nav-icon"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                className="nav-icon"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                className="nav-icon"
              >
                <i className="fab fa-squarespace"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;

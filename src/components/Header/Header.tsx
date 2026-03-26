import "@/components/Header/Header.css";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "assets/logo.png";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => setNavOpen((s) => !s);

  useEffect(() => {
    document.body.classList.toggle("nav-open", navOpen);

    return () => {
      document.body.classList.remove("nav-open");
    };
  }, [navOpen]);

  return (
    <header className="navbar-section glass-shell">
      <Link to="/" className="navbar-title" aria-label="Vietinnotech trang chủ">
        <div className="navbar-brand">
          <img src={logo} alt="Logo Vietinnotech" className="navbar-logo" />
          <div>
            <div className="navbar-company-name">VIETINNOTECH</div>
            <div className="navbar-company-tag">CÔNG TY CỔ PHẦN VIETINNOTECH</div>
          </div>
        </div>
      </Link>

      <nav className="navbar-nav" aria-label="Điều hướng chính">
        <ul className="navbar-items">
          <li>
            <NavLink to="/" end className={({ isActive }) => `navbar-links${isActive ? " is-active" : ""}`}>
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/san-pham/phong-hoc-omo"
              className={({ isActive }) => `navbar-links${isActive ? " is-active" : ""}`}
            >
              Giải pháp OMO
            </NavLink>
          </li>
          <li>
            <NavLink to="/phan-mem-omo" className={({ isActive }) => `navbar-links${isActive ? " is-active" : ""}`}>
              Phần mềm OMO
            </NavLink>
          </li>
          <li>
            <NavLink to="/lien-he" className={({ isActive }) => `navbar-links${isActive ? " is-active" : ""}`}>
              Liên hệ
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="navbar-cta">
        <Link to="/lien-he" className="navbar-btn">
          Nhận tư vấn
        </Link>
      </div>

      <button
        type="button"
        onClick={toggleNav}
        className="mobile-nav"
        aria-label={navOpen ? "Đóng menu" : "Mở menu"}
        aria-expanded={navOpen}
        aria-controls="mobile-navigation"
      >
        <FontAwesomeIcon icon={navOpen ? faXmark : faBars} className="hamb-icon" />
      </button>

      <div id="mobile-navigation" className={navOpen ? "mobile-navbar open-nav glass-shell-strong" : "mobile-navbar"}>
        <div className="mobile-navbar-top">
          <Link to="/" className="navbar-title" onClick={toggleNav}>
            <div className="navbar-brand">
              <img src={logo} alt="Logo Vietinnotech" className="navbar-logo" />
              <div>
                <div className="navbar-company-name">VIETINNOTECH</div>
                <div className="navbar-company-tag">CÔNG TY CỔ PHẦN VIETINNOTECH</div>
              </div>
            </div>
          </Link>

          <button type="button" onClick={toggleNav} className="mobile-navbar-close" aria-label="Đóng menu">
            <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
          </button>
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <NavLink onClick={toggleNav} to="/" end className={({ isActive }) => (isActive ? "is-active" : "")}>
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={toggleNav}
              to="/san-pham/phong-hoc-omo"
              className={({ isActive }) => (isActive ? "is-active" : "")}
            >
              Giải pháp OMO
            </NavLink>
          </li>
          <li>
            <NavLink onClick={toggleNav} to="/phan-mem-omo" className={({ isActive }) => (isActive ? "is-active" : "")}>
              Phần mềm OMO
            </NavLink>
          </li>
          <li>
            <NavLink onClick={toggleNav} to="/lien-he" className={({ isActive }) => (isActive ? "is-active" : "")}>
              Liên hệ
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

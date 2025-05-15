import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header({ loggedIn, username, onLogout }) {
  const location = useLocation();

  // Function to check if a link should be marked as active
  const isLinkActive = (linkPath) => {
    return location.pathname === linkPath ? "active" : "";
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top nav-blur">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Solution Provider
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {loggedIn ? (
              <>
                <li className={`nav-item ${isLinkActive("/")}`}>
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className={`nav-item ${isLinkActive("/services")}`}>
                  <Link to="/services" className="nav-link">
                    Services
                  </Link>
                </li>
                <li className={`nav-item ${isLinkActive("/pricing")}`}>
                  <Link to="/pricing" className="nav-link">
                    Pricing
                  </Link>
                </li>
                <li className={`nav-item ${isLinkActive("/about")}`}>
                  <Link to="/about" className="nav-link">
                    About Us
                  </Link>
                </li>
                <li className={`nav-item ${isLinkActive("/contact")}`}>
                  <Link to="/contact" className="nav-link">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-link nav-link" onClick={onLogout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className={`nav-item ${isLinkActive("/")}`}>
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className={`nav-item ${isLinkActive("/services")}`}>
                  <Link to="/services" className="nav-link">
                    Services
                  </Link>
                </li>
                <li className={`nav-item ${isLinkActive("/pricing")}`}>
                  <Link to="/pricing" className="nav-link">
                    Pricing
                  </Link>
                </li>
                <li className={`nav-item ${isLinkActive("/about")}`}>
                  <Link to="/about" className="nav-link">
                    About Us
                  </Link>
                </li>
                <li className={`nav-item ${isLinkActive("/contact")}`}>
                  <Link to="/contact" className="nav-link">
                    Contact Us
                  </Link>
                </li>
                <li className={`nav-item ${isLinkActive("/login")}`}>
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
                <li className={`nav-item ${isLinkActive("/signup")}`}>
                  <Link to="/register" className="nav-link">
                    Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

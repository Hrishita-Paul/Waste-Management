import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          Waste Management Website
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                User Page
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/management">
                Management Page
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

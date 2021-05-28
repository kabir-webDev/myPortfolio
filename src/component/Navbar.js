import React from "react";
import { Link } from "react-router-dom";
import "./css/style.css";
import "./css/utilities.css";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="container flex">
          <h1 className="logo">Ibnat Iqbal</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Me</Link>
              </li>
              <li>
                <Link to="/skills">Skills</Link>
              </li>
              <li>
                <Link to="/project">Project</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

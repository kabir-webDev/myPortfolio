import React from "react";
import "./css/style.css";
import "./css/utilities.css";

function Footer() {
  return (
    <div>
      {/* Footer  */}
      <footer className="footer bg-dark">
        <div className="boom">
          <div>
            <p>Copyright &copy; Ibnat Iqbal</p>
          </div>
          <div>
            <h3 style={{ color: "#F5D95A" }}>
              Lets make the world easier with coding
            </h3>
          </div>
          <div className="social">
            <a href="#">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

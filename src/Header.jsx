//import { useState } from "react";
import ebirdLogo from "./assets/eBird.jpg";
import "./bs.css";

function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <img
                className="profile-image img-fluid float-start rounded-circle"
                src="assets/images/profile.png"
                alt="profile image"
              />
              <div className="profile-content">
                <h1 className="name">Elliott Davis</h1>
                <h2 className="desc">Full-Stack Developer</h2>
                <ul className="social list-inline">
                  <li className="list-inline-item">
                    <a href="https://www.linkedin.com/in/elliottcdavis/">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://github.com/crestonesoftware">
                      <i className="fab fa-github-alt"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!--//profile--> */}
            </div>
            {/*<!--//col--> */}
            <div className="col-12 col-md-auto">
              <div className="dark-mode-switch d-flex">
                <div className="form-check form-switch mx-auto mx-md-0">
                  <input
                    type="checkbox"
                    className="form-check-input me-2"
                    id="darkSwitch"
                  />
                  <label className="custom-control-label" for="darkSwitch">
                    Dark Mode
                  </label>
                </div>
              </div>{" "}
              {/* <!--//dark-mode-switch--> */}
              <a
                className="btn btn-cta-primary"
                href="https://themes.3rdwavemedia.com/"
                target="_blank"
              >
                <i className="fas fa-paper-plane"></i> Contact Me
              </a>
            </div>{" "}
            {/*<!--//col--> */}
          </div>{" "}
          {/*<!--//row-->          */}
        </div>
        {/* <!--//container--> */}
      </header>
      {/* <!--//header--> */}
    </>
  );
}

export default Header;

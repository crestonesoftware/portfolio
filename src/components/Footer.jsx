import React from "react";

function Footer() {
  return (
    <>
      <section id="contact" className="body-section">
        {/* <!-- label area --> */}
        <div className="main-section-label-area">
          <h2>Contact Me</h2>
        </div>
        {/* <!-- separator line --> */}
        <div className="separator-bar"></div>

        <div className="main-section-content-area">
          <nav>
            <ul>
              <li>
                <a href="tel:5555555555">&nbsp;555-555-5555&nbsp;</a>
                <div className="underline-bar"></div>
              </li>
              <li>
                <a href="mailto:elliott@website.com">
                  &nbsp;elliott@website.com&nbsp;
                </a>
                <div className="underline-bar"></div>
              </li>
              <li>
                <a href="https://github.com/crestonesoftware">
                  &nbsp;&nbsp;GitHub&nbsp;&nbsp;
                </a>
                <div className="underline-bar"></div>
              </li>
              <li>
                <a href="https://ebird.org/profile/MzE1OTc0Mw/MX-NAY-005">
                  &nbsp;&nbsp;eBird&nbsp;&nbsp;
                </a>
                <div className="underline-bar"></div>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}

export default Footer;

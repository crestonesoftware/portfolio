import React from "react";

export default function Contact() {
  return (
    <div>
      <aside className="info aside section">
        <div className="section-inner shadow-sm rounded">
          <h2 className="heading sr-only">Basic Information</h2>
          <div className="content">
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-map-marker-alt"></i>&nbsp;
                <a href="https://maps.app.goo.gl/fnLrbLtZywfGQkax9" target="_">
                  <span className="sr-only">Location:</span>
                  Chacala, Nayarit, México
                </a>{" "}
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span className="sr-only">Email: </span>&nbsp;
                <a href="mailto:elliott.davis@crestonetech.com">
                  elliott.davis@crestonetech.com
                </a>
              </li>
              <li>
                <i className="fas fa-link"></i>
                <span className="sr-only">Website:</span>&nbsp;
                <a href="https://www.crestonetech.com" target="_blank">
                  https://www.crestonetech.com
                </a>
              </li>
            </ul>
          </div>{" "}
          {/* <!--//content-->   */}
        </div>{" "}
        {/* <!--//section-inner-->                  */}
      </aside>
    </div>
  );
}

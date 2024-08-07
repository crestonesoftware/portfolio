import React from "react";

function AboutMe() {
  return (
    <>
      <section id="about-me" className="body-section">
        {/* <!-- label area --> */}
        <div className="main-section-label-area">
          {/* <!-- label about me --> */}
          <h2>About Me</h2>
        </div>
        {/* <!-- separator line --> */}
        <div className="separator-bar"></div>
        {/* <!-- description area --> */}
        <div className="main-section-content-area">
          {/* <!-- paragraph about me --> */}
          <p className="about-me-description">
            Helvetica ipsum dolor sit amet consectetur adipisicing elit.
            Eligendi amet aperiam sapiente. Sit amet consectetur adipisicing
            elit. Eligendi amet aperiam sapiente, pariatur laudantium
            consequuntur assumenda quo quas voluptatibus cupiditate aliquam qui
            adipisci fugit magni? Ea maxime illum omnis eaque paleo scenester.
          </p>
          <p className="about-me-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            amet aperiam sapiente, sit amet consectetur adipisicing elit.
            Eligendi amet aperiam sapiente,Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eligendi amet aperiam sapiente,
            pariatur laudantium consequuntur assumenda quo quas voluptatibus
            cupiditate aliquam qui adipisci fugit magni? Ea maxime illum omnis
            eaque. Truffles American Apparel next level pug ugh.
          </p>
        </div>
      </section>
    </>
  );
}

export default AboutMe;

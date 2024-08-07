import React from "react";

function HeroBanner() {
  return (
    <>
      <section className="hero">
        <img
          src="./assets/images/turtle-horizontal.jpg"
          alt="log that looks like a turtle head"
        />
        {/* <!-- hero image subtitle --> */}
        <div className="hero-subtitle">
          <h2>Full-Stack Padawan</h2>
        </div>
      </section>

      {/* <Header /> */}
    </>
  );
}

export default HeroBanner;

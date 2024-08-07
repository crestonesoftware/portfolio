import React from "react";
import ProjectCard from "./ProjectCard";

function Work() {
  return (
    <>
      <section id="work">
        {/* <!-- projects row --> */}

        <div id="projects-orig" className="body-section">
          <div className="main-section-label-area">
            <h2>Work</h2>
          </div>
          {/* <!-- separator line --> */}
          <div className="separator-bar">a</div>

          <div id="projects" className="projects">
            <ProjectCard
              src={"../assets/images/greentrail.jpg"}
              altText={"website showing ocean in background"}
            />
            <ProjectCard
              src={"../assets/images/readme-generator.jpg"}
              altText={"screenshot of a README file"}
            />
            <ProjectCard
              src={"../assets/images/note-taker.jpg"}
              altText={"screenshot of a note-taking app"}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;

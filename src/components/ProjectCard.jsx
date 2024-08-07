import React from "react";

function ProjectCard(props) {
  return (
    <>
      <div className="project-card">
        <img className="project-image" src={props.src} alt={props.altText} />
      </div>
    </>
  );
}

export default ProjectCard;

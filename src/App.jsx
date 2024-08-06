import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Nav from "./components/Nav";
import Header from "./Header";
import Contact from "./components/Contact";
import Languages from "./components/Languages";
import Skills from "./components/Skills";
import "./App.css";
import "./bs.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container sections-wrapper py-5">
        <div className="row">
          <div className="primary col-lg-8 col-12">
            <h2>Nav</h2>
            <h2>Picture, icons and some links</h2>
            <h2>About Me</h2>
            <h2>Latest Project</h2>
          </div>
          <div className="secondary col-lg-4 col-12">
            <Languages />
            <h2>Skills</h2>
            <h2>Github Activity</h2>
            <Contact />
            <h2>Languages</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";

import Nav from "./components/Nav";
import Header from "./Header";
import Contact from "./components/Contact";
import Languages from "./components/Languages";
import Skills from "./components/Skills";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container theMain">
        <div className="row">
          <div className="col">
            <div className="xs">XS</div>
            <div className="sm">SM</div>
            <div className="md">MED</div>
            <div className="lg">LG</div>
            <div className="xl">XL</div>
            <div className="xxl">XXL</div>
          </div>
        </div>
      </div>
      <header>
        <div className="name-in-header">
          {/* <!-- name --> */}
          <h1>Fergus Roy</h1>
        </div>

        {/* <!-- nav bar --> */}
        <nav>
          <ul>
            <li>
              <a href="#about-me">&nbsp;&nbsp;About Me&nbsp;&nbsp;</a>
              <div className="underline-bar"></div>
            </li>
            <li>
              <a href="#work">&nbsp;&nbsp;Work&nbsp;&nbsp;</a>
              <div className="underline-bar"></div>
            </li>
            <li>
              <a href="mailto:e@mail.com">&nbsp;&nbsp;Contact Me&nbsp;&nbsp;</a>
              <div className="underline-bar"></div>
            </li>
            <li>
              <a href="">&nbsp;&nbsp;Resume&nbsp;&nbsp;</a>
              <div className="underline-bar"></div>
            </li>
          </ul>
        </nav>
      </header>
      <Header />
    </>
  );
}

export default App;

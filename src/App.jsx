import { useState } from "react";

// import Nav from "./components/Nav";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import AboutMe from "./components/AboutMe";
// import Contact from "./components/Contact";
// import Languages from "./components/Languages";
// import Skills from "./components/Skills";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <HeroBanner />
      <main>
        <AboutMe />
      </main>
    </>
  );
}

export default App;

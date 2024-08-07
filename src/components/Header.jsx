import "./header.css";

function Header() {
  return (
    <>
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
      {/* <Header /> */}
    </>
  );
}

export default Header;

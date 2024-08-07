import "./header.css";

function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col headerLeft">Header Left Col</div>

            <div className="col headerRight">Header Right Col</div>
          </div>{" "}
          {/*<!--//row-->          */}
        </div>
        {/* <!--//container--> */}
      </header>
      {/* <!--//header--> */}
    </>
  );
}

export default Header;

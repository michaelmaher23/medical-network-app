import React  from "react";
import "../pages/Sidebar.css";
import ALL from "./ALL/ALL";
 import { Link } from "react-router-dom";
 
function Sidebar() {
  function openNav() {
    document.getElementById("mySidebar").style.width = "180px";
    document.getElementById("main").style.marginLeft = "180px";
    document.getElementById("main").style.marginRight = "-180px";
    document.getElementById("backdropDiv").classList.add("openbackdropDiv");
  }

  function closeNav() {
    document.getElementById("mySidebar").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
    document.getElementById("main").style.marginRight = "0px";
    document.getElementById("backdropDiv").classList.remove("openbackdropDiv");
  }

  return (
    <div style={{ overflowX: "hidden" }}>
      <div id="mySidebar" className="sidebar">
        <div id="backdropDiv" className="backdropDiv"></div>
        <Link className="a" to="/">
          Main
        </Link>
        <Link className="a" to="/researchfield">
          {" "}
          Heart Care{" "}
        </Link>{" "}
        <Link className="a" to="/article">
          Contribute
        </Link>
        <Link className="a" to="/ ">
          {" "}
          ABOUT{" "}
        </Link>
      </div>

      <div id="main">
        <ALL onClick2={closeNav} onClick={openNav} />
      </div>
    </div>
  );
}

export default Sidebar;

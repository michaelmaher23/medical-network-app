import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.svg";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Header/Header.css";
import Sidebar from "../../Sidebar";
import { useMediaQuery } from "react-responsive";
function Header({ onClick, onClick2 }) {
  const [truee, setTruee] = useState(true);

  useEffect(() => {
    const g = (e) => {
      if (truee) onClick2();
      else onClick();
    };
    g();
  }, [!truee]);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 100) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };
  const issmall = useMediaQuery({ query: "(min-width: 1000px)" });

  useEffect(() => {
    setTruee(true);
  }, [issmall]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      {" "}
      <div
        style={{ backgroundColor: show ? "rgba(12, 33, 19, 0.096)" : "white" }}
        className="NAVBAR"
      ><Link to="/" style={{textDecoration:'none'}}>
        <div className="LOGO">
          
          <img alt='' className="IMG" src={logo} />
        </div></Link>
 
        <div className="INPTCONTAINER">
       <Link to="/MedProducts" style={{textDecoration:'none'}}>
          <input className="INPT" placeholder="Products..." />
      </Link>
          <span className="ICN">
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </div>

        <div
          style={{ zIndex: "9999999" }}
          onClick={() => setTruee(!truee)}
          className={`   button ${truee ? "" : "btna"}`}
        >
          {" "}
          <div></div>
          <div></div>
          <div></div>{" "}
        </div>

        <div className="LNKS">
          <Link
            to="/Field/Heart"
            style={{ color: show ? "white" : "#8f6420" }}
            className="menu"
          >
            Heart Care
          </Link>
          <Link
            to="/Field/Mental_Health"
            style={{ color: show ? "white" : "#8f6420" }}
            className="menu"
          >
            Mental Health
          </Link>
        </div>
        <div className="AUTH">
          <Link to="/account/register" className="LINK">
            <button className="auth">SIGN UP</button>
          </Link>
          <Link to="/account/login" className="LINK">
            <button className="auth">SIGN IN</button>
          </Link>
        </div>
      </div>{" "}
    </>
  );
}

export default Header;

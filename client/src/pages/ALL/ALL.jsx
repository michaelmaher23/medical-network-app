import React, { useEffect } from "react";
import Header from "./Header/Header";
import Framemain from "../../images/Framemain.png";
import "../ALL/ALL.css";
import Antd from "./Carousol/Antd";
import { Carasoularticle } from "./Carasoularticle";
import Footer from "./Footer";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
function ALL({ onClick, onClick2 }) {
  const issmall = useMediaQuery({ query: "(min-width: 1000px)" });

  useEffect(() => {
    onClick2();
  }, [issmall]);
  return (
    <div style={{ overflowX: "hidden" }}>
      <Header onClick={onClick} onClick2={onClick2} />

      <img
        style={{
          width: "100%",
          position: "absolute",
          marginTop: "-8rem",
          display: "block",
          zIndex: "-6",
        }}
        className="imagepage"
        src={Framemain}
      />
      <div className="headermain">
        <h2 className="biggest">
          The way to greater knowledge take your steps into purity.
        </h2>
        <h4 className="smallest">
          {" "}
          Much and more Accurate medical date ,read more, discover more and be
          one from who share valuable knowledge.
        </h4>
        <div
          className="BTNFLX"
          style={{
            display: "flex",
            marginTop: "2rem",
            justifyContent: "flex-start",
          }}
        >
          <Link to="/MedLandingPage" style={{textDecoration:'none'}}>
          <button className="btnheader">Who we are?</button></Link>
          <Link to="/MedProducts" style={{textDecoration:'none'}}>
          <button className="btnheader">Products</button></Link>
        </div>
      </div>
      <div
        style={{
          marginTop: "1.06rem",
          paddingTop: "1rem",
        }}
      >
        <h5
          style={{ marginLeft: "2rem", color: "#545454", fontSize: "1.5rem" }}
        >
          Trending Now
        </h5>
        <div style={{ marginTop: "1rem" }}>
          <Antd />
        </div>
        <Carasoularticle />
      </div>
      <Footer />
    </div>
  );
}

export default ALL;

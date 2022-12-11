import gsap from "gsap";
import React, { useEffect } from "react";
import children from "../images/children.png";
import styled from "styled-components";
function AnimaGasp() {
  useEffect(() => {
    var tl = gsap.timeline({
      repeat: 100,
      repeatDelay: 5,
    });
    tl.fromTo(
      "#logo2",
      { opacity: 0.8, scale: 1 },
      { duration: 5, opacity: 1, scale: 1.1 }
    );
  }, []);
  return (
    <div
      style={{
        marginTop: "2rem",
        position: "relative",
        padding: 0,
        height: "6rem",
      }}
    >
      <Image id="logo2" src={children} />
    </div>
  );
}

export default AnimaGasp;

const Image = styled.img`
  width: 50%;
  margin-left: 25%;
  @media (max-width: 700px) {
    width: 80%;
    margin-left: 10%;
  }
`;

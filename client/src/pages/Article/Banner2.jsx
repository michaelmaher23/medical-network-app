import React, { useEffect } from "react";
import styled from "styled-components";
import l from "../../images/l.png";
import gsap from "gsap";

function Banner2() {
  useEffect(() => {
    var tl = gsap.timeline({
      repeat: 100,
      repeatDelay: 18,
    });
    tl.fromTo("#r", {  }, { duration: 1 ,scale:1.2 });
  }, []);

  return (
    <Banner>
      <BannerLeft>
        <h2 className="banneer-title">
          LEARN MORE ABOUT OTHER PROGRAMS AND SERVICES PROVIDED BY ASSISTANCE TO
          THE ELDERLY, INC.
        </h2>
        <Button2
          background={"var(--main2)"}
          textcolor={"var(--main)"}
          width={"9rem"}
          height={"2.5rem"}
          margin={"auto"}
          style={{ marginTop: "4rem" }}
        >
          CLICK HERE{" "}
        </Button2>
      </BannerLeft>
      <BannerRight>
        <img alt=''  id="r" src={l} />
      </BannerRight>
    </Banner>
  );
}

export default Banner2;

const Banner = styled.div`
padding:2rem 0rem;
background-color:		#ffeee6

;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: auto;
  @media (max-width: 700px) {
    padding-top: 2rem;

    flex-direction: column;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
const BannerLeft = styled.div`
  text-align: center;
  padding-top: 2rem;
  flex: 50%;
  img {
    width: 80%;
    @media (max-width: 800px) {
      text-align: center;
      display: block;
      width: 80%;
      margin: auto;
      margin-bottom: 1rem;
    }
  }
  h2 {
    width: 80%;
    margin: auto;
    line-height: 2.5rem;
    font-weight: 800;
    letter-spacing: 1px;

    color: var(--main);
    font-size: 1.5rem;
    @media (max-width: 950px) {
      width: 90%;
    }
    @media (max-width: 800px) {
      text-align: center;
      margin: auto;
    }
  }
`;
const BannerRight = styled.div`
  flex: 50%;

  img {
    margin-top: 4rem;
    display: block;
    width: 40%;
    margin: auto;
  }
`;

const Button2 = styled.button`
 background-color: ${(props) => props.background};
 color: ${(props) => props.textcolor};
 width: ${(props) => props.width};
 height: ${(props) => props.height};
 margin:${(props) => props.margin};
 border: none;
 outline: none;
 
 border-radius: 5px;
 font-size:1rem;
 font-weight: 700;
 cursor: pointer;
 
 :hover {
   border: 2px solid var(--main);
   background-color: white;
   color: var(--main);
   transition: all 0.1s linear;
 }

 display: block;
 margin: auto;
margin-bottom:2rem;
 
 
 `;

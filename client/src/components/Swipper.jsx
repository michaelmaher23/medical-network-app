import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useMediaQuery } from "react-responsive";
import e from "../images/e.jpg";
import w from "../images/w.png";
import pic3 from "../images/pic3.png";
import Capture8 from "../images/Capture8.PNG";
import { Link } from "react-router-dom";
import pic6 from "../images/pic6.png";
import pic7 from "../images/pic7.png";
 
import { Autoplay, Pagination, Navigation } from "swiper";

export const Swipper = () => {
  const issmall = useMediaQuery({ query: "(max-width: 400px)" });
  const issmall2 = useMediaQuery({ query: "(max-width: 950px)" });

  return (
    <>
      {/*<Heading
        style={{
          backgroundColor: "var(--main2)",
          borderRadius: "25px",
          padding: ".6rem",
          width: "fit-content",
          margin: "auto",
          textAlign: "center",
          color: "var(--main)",

          fontWeight: "700",
        }}
      >
        Their Smile Matters
      </Heading>*/}
      <Swiper
        style={{
          width: "87%",
          margin: "auto",
          marginTop: "2rem",
        }}
        centeredSlides={true}
        centeredSlidesBounds={true}
        spaceBetween={4}
        slidesPerView={issmall ? 1 : issmall2 ? 2 : 5}
        autoplay={{
          delay: 2400,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          {({ isActive }) => (
            <Card
              style={{
                borderBottom: isActive ? "9px solid var(--main2)" : "",
                borderLeft: isActive ? "9px solid var(--main2)" : "",
              }}
            >
              <img alt=''  src={pic3} style={{ display: "block" }} />
            </Card>
          )}
        </SwiperSlide>

        <SwiperSlide>
          {({ isActive }) => (
            <Card
              style={{
                borderBottom: isActive ? "9px solid var(--main2)" : "",
                borderLeft: isActive ? "9px solid var(--main2)" : "",
              }}
            >
              <img alt=''  src={w} style={{ display: "block" }} />
            </Card>
          )}
        </SwiperSlide>

        <SwiperSlide>
          {({ isActive }) => (
            <Card
              style={{
                borderBottom: isActive ? "9px solid var(--main2)" : "",
                borderLeft: isActive ? "9px solid var(--main2)" : "",
              }}
            >
              <img alt=''  src={pic6} style={{ display: "block" }} />
            </Card>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <Card
              style={{
                borderBottom: isActive ? "9px solid var(--main2)" : "",
                borderLeft: isActive ? "9px solid var(--main2)" : "",
              }}
            >
           
                {" "}
                <img alt=''  src={pic7} style={{ display: "block" }} />
     
            </Card>
          )}
        </SwiperSlide>

        <SwiperSlide>
          {({ isActive }) => (
            <Card
              style={{
                borderBottom: isActive ? "9px solid var(--main2)" : "",
                borderLeft: isActive ? "9px solid var(--main2)" : "",
              }}
            >
        
                {" "}
                <img alt=''  src={e} style={{ display: "block" }} />
          
            </Card>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <Card
              style={{
                borderBottom: isActive ? "9px solid var(--main2)" : "",
                borderLeft: isActive ? "9px solid var(--main2)" : "",
              }}
            >
               
                {" "}
                <img alt=''  src={Capture8} style={{ display: "block" }} />
        
            </Card>
          )}
        </SwiperSlide>

      </Swiper>
    </>
  );
};

const Card = styled.div`
  z-index: 1 !important;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  img {
    height: 38vh;
    width: 100%;
    border-radius: 50%;
    border: 3px solid var(--main);
  }

  @media (max-width: 700px) {
  }
`;
export const Heading = styled.h4`
  font-size: var(--fonttitle);
  @media (max-width: 600px) {
    font-size: var(--fonttitlesmall);
  }
`;

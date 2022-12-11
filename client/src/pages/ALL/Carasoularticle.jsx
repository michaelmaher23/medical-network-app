import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/css";
import "../ALL/Carasoularticle.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useMediaQuery } from "react-responsive";
import swippertest from "../../images/swippertest.jpg";
import { Autoplay, Pagination, Navigation } from "swiper";
export const Carasoularticle = () => {
  const issmall = useMediaQuery({ query: "(max-width: 400px)" });
  const issmall2 = useMediaQuery({ query: "(max-width: 950px)" });
  return (
    <>
      <div
        style={{
          width: "100%",
          borderLeft: "1rem solid #8b5400",
          borderRight: "1rem solid #8b5400",
          paddingBottom: "1rem",
          backgroundColor: "#1e1f2107",
          paddingTop: "1rem",
        }}
      >
        <Heading
          style={{
            paddingLeft: "6%",
            width: "fit-content",

            color: "#8b5400",
            fontWeight: "700",
          }}
        >
          ARTICLES
        </Heading>
        <Swiper
          className="swipper"
          navigation={true}
          centeredSlides={true}
          centeredSlidesBounds={true}
          spaceBetween={9}
          slidesPerView={issmall ? 1.5 : issmall2 ? 3 : 5.5}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {[...Array(9)].map(() => {
            return (
              <>
                <SwiperSlide className="Slide">
                  {({ isActive }) => (
                    <Card>
                      <img alt=''  className="imageSwipper" src={swippertest} />
                      <p className="titleswipper">
                        The title medical project net data Articles
                      </p>
                    </Card>
                  )}
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

const Card = styled.div`
  z-index: 1 !important;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 15rem;
  overflow: hidden;
  @media (max-width: 700px) {
  }
`;
export const Heading = styled.h5``;

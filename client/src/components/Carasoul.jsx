import React, { useEffect, useState } from "react";
import "./Carasoul.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function Carasoul() {
  const [bigScreen,setBigscreen]=useState(true)
  useEffect(()=>{
    if(window.innerWidth<1000)
setBigscreen(false)
else
setBigscreen(true)
    window.onresize=()=>{if(window.innerWidth<1000)
setBigscreen(false)
else
setBigscreen(true)}
  })
  return (
    <div>
      <Swiper
        style={{ overflow:'hidden',padding :'2rem'}}
        className="swippercard"
        centeredSlides={true}
        centeredSlidesBounds={true}
        slidesPerView={bigScreen? 5:1}
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}          
        
        modules={[Autoplay,Pagination, Navigation]}
    
      >
       <SwiperSlide>
          <FontAwesomeIcon
            className="swiper-button-prev swiper-button-active y"
            icon={faSearch}
          />
          <Div>
            <IMAGE src="https://media.istockphoto.com/photos/happy-healthcare-practitioner-picture-id138205019?k=20&m=138205019&s=612x612&w=0&h=KpsSMVsplkOqTnAJmOye4y6DcciVYIBe5dYDgYXLVW4=" />
            <NAME>Prof . Amgad tawfiq</NAME>
            <WORK>Lungs and special cases Department.</WORK>
          </Div>
        </SwiperSlide>
        <SwiperSlide>
          <FontAwesomeIcon
            className="swiper-button-prev swiper-button-active y"
            icon={faSearch}
          />
          <Div>
            <IMAGE src="https://thumbs.dreamstime.com/b/attractive-lady-doctor-2098106.jpg" />
            <NAME>Dr . Nancy talat</NAME>
            <WORK>Heart and blood balance Related specialist.</WORK>
          </Div>
        </SwiperSlide>
        <SwiperSlide>
          <FontAwesomeIcon
            className="swiper-button-prev swiper-button-active y"
            icon={faSearch}
          />
          <Div>
            <IMAGE src="data:image/jpeg;base64,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" />
            <NAME>Dr . John tomas</NAME>
            <WORK>Severe Eyes vision cases expert.</WORK>
          </Div>
        </SwiperSlide>
        <SwiperSlide>
          <FontAwesomeIcon
            className="swiper-button-prev swiper-button-active y"
            icon={faSearch}
          />
          <Div>
            <IMAGE src="https://media.istockphoto.com/photos/happy-healthcare-practitioner-picture-id138205019?k=20&m=138205019&s=612x612&w=0&h=KpsSMVsplkOqTnAJmOye4y6DcciVYIBe5dYDgYXLVW4=" />
            <NAME>Prof . Amgad tawfiq</NAME>
            <WORK>Lungs and special cases Department.</WORK>
          </Div>
        </SwiperSlide>
        <SwiperSlide>
          <FontAwesomeIcon
            className="swiper-button-prev swiper-button-active y"
            icon={faSearch}
          />
          <Div>
            <IMAGE src="https://thumbs.dreamstime.com/b/attractive-lady-doctor-2098106.jpg" />
            <NAME>Dr . Nancy talat</NAME>
            <WORK>Heart and blood balance Related specialist.</WORK>
          </Div>
        </SwiperSlide>
        <SwiperSlide>
          <FontAwesomeIcon
            className="swiper-button-prev swiper-button-active y"
            icon={faSearch}
          />
          <Div>
            <IMAGE src="data:image/jpeg;base64,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" />
            <NAME>Dr . John tomas</NAME>
            <WORK>Severe Eyes vision cases expert.</WORK>
          </Div>
        </SwiperSlide>
        <SwiperSlide>
          <Div>
            <IMAGE src="https://thumbs.dreamstime.com/b/lady-doctor-3032327.jpg" />
            <NAME>Dr .Laila helmy</NAME>
            <WORK>Chidren weight related problems researcher.</WORK>
          </Div>
        </SwiperSlide>

        <SwiperSlide>
          <Div>
            <IMAGE src="https://thumbs.dreamstime.com/b/lady-doctor-3032327.jpg" />
            <NAME>Dr .Laila helmy</NAME>
            <WORK>Chidren weight related problems researcher.</WORK>
          </Div>
        </SwiperSlide>

        <SwiperSlide>
          <FontAwesomeIcon
            className="swiper-button-prev swiper-button-active y"
            icon={faSearch}
          />
          <Div>
            <IMAGE src="https://media.istockphoto.com/photos/happy-healthcare-practitioner-picture-id138205019?k=20&m=138205019&s=612x612&w=0&h=KpsSMVsplkOqTnAJmOye4y6DcciVYIBe5dYDgYXLVW4=" />
            <NAME>Prof . Amgad tawfiq</NAME>
            <WORK>Lungs and special cases Department.</WORK>
          </Div>
        </SwiperSlide>
        <SwiperSlide>
          <FontAwesomeIcon
            className="swiper-button-prev swiper-button-active y"
            icon={faSearch}
          />
          <Div>
            <IMAGE src="https://thumbs.dreamstime.com/b/attractive-lady-doctor-2098106.jpg" />
            <NAME>Dr . Nancy talat</NAME>
            <WORK>Heart and blood balance Related specialist.</WORK>
          </Div>
        </SwiperSlide>
        <SwiperSlide>
          <FontAwesomeIcon
            className="swiper-button-prev swiper-button-active y"
            icon={faSearch}
          />
          <Div>
            <IMAGE src="data:image/jpeg;base64,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" />
            <NAME>Dr . John tomas</NAME>
            <WORK>Severe Eyes vision cases expert.</WORK>
          </Div>
        </SwiperSlide>
        <SwiperSlide>
          <Div>
            <IMAGE src="https://thumbs.dreamstime.com/b/lady-doctor-3032327.jpg" />
            <NAME>Dr .Laila helmy</NAME>
            <WORK>Chidren weight related problems researcher.</WORK>
          </Div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carasoul;

const Div = styled.div`  box-shadow: 0px 14px 16px rgba(34, 35, 58, 0.5);
  margin-top: 3rem;
  height: fit-content;
  width: 97%;
  margin-left: 1.5%;
  display: flex;
  flex-direction: column;
  border-radius: 40px;
  padding-top: 3.6rem;
  padding-bottom: 1.6rem;
  background: rgb(255, 180, 0);
  background: radial-gradient(
    circle,
    rgba(255, 180, 0, 0.18194873880895768) 34%,
    rgba(9, 121, 22, 0.28443321085864715) 92%
  );
  > * {
    margin-bottom: 1rem;
  }
  img {
    display: block;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    left: calc(50% - 50px);
    border: 2px solid white;
  }
  @media screen and (max-width: 700px) {
    padding-top: 3.6rem;
    padding-bottom: 1.6rem;
  }
`;
const IMAGE = styled.img`
  top: 0rem;
  z-index: 999;
  position: absolute;
  object-position: 0% 0%;
  object-fit: cover;
`;
const NAME = styled.h6`
  color: #4b0909ad;
  width: 200px;
  font-weight: 900;
  margin-left: calc(50% - 100px);
 
  text-align: center;
  font-size: small;
`;
const WORK = styled.h6`
  color: #332d2d7b;
  width: 170px;
  text-align: center;
  margin: auto;
  margin-left: calc(50% - 85px);

  font-weight: 800;
  @media screen and (max-width: 700px) {
    font-size: 13px;
  }
`;

import React from 'react'
import ProductCard from "./ProductCard";
import original from './original.jpg'
 // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import pngegg from './pngegg.png'

import Charity1 from './Charity1.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Swippereffec.css"

 import {Autoplay, Navigation, EffectCoverflow, Pagination } from "swiper";


function Swippereffect() {
    const Hospitals=[
        {
            image:original,
            title:'معهد القلب دكتور /مجدي يعقوب',
            founder:'Dr/ Magdy Jacob'
        },
        {
            image:pngegg,
            title:'مستشفي سرطان الاطفال 57357',
            founder:'جمعية أصدقاء معهد الأورام'
        },
        {
            image:Charity1,
            title:'New Orleans Charity',
            founder:' Dr / Jean Louis'
        },
    

    ]
  return (
    <div>
         <Swiper
         style={{padding:'30px'}}
        effect={"coverflow"}
        grabCursor={true}
        navigation={true}

        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 10,
          stretch:100,
          depth:200,
          modifier: 3,
          slideShadows: false,
        }}
        autoplay={{
          delay: 2400,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}          
        modules={[Autoplay,Pagination, Navigation,EffectCoverflow]}
      >
        {Hospitals.map((i)=>{
          return (
            <>
 <SwiperSlide>
             <ProductCard title={i.title}  founder={i.founder} image={ i.image}/> 
          </SwiperSlide>

            </>
          )
        })}
          
      
   
      </Swiper>

    </div>
  )
}

export default Swippereffect
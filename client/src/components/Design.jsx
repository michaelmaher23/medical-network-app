import React, { useRef } from "react";
import D from "../images/D.svg";
import logofigma from "../images/logofigma.svg";
import "../components/Design.css";
import explore from "./explore.PNG";
import discover from "./discover.PNG";
import share from "./share.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Sections from "./Sections";
import MuiMasonary from "./MuiMasonary";
import VerticalTabs from "./VerticalTab";
import { Divider } from "../pages/Home";
import CountDown from "./CountDown";
import { useState } from "react";
import { useEffect } from "react";
import Flex from "./Flex";
import Title from "./Title";
import BannerGrid from "./BannerGrid";
import Swippereffect from "./Swippereffect";
import Footer from "./Footer";
import ReactPlayer from 'react-player'

function Design() {
  const [start, setStart] = useState(false);
  const ref = useRef();

  useEffect(()=>{ 
    window.scrollTo(0,0)
    window.history.scrollRestoration = 'manual'
  
  },[])
  


  function isInViewport() {




    const rect = ref.current.getBoundingClientRect()
      ? ref.current.getBoundingClientRect()
      : null;
    console.log(rect);
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  useEffect(() => {
    window.onscroll = () => {
      if (isInViewport()) {
        setStart(true);
      }
    };
  });
  return (
    <>
      <div className="maindiv ">
        <img alt="" className="imagecover   " src={D} />
        <div className="overlaydiv   "></div>
        <img
          alt=""
          style={{
            position: "relative",
            width: "13rem",
            marginLeft: "calc(50% - 5.7rem)",
          }}
          src={logofigma}
        />

        <h2 className="HEADERMAINTITLE">
          {" "}
          Discover Our Innovative Medical Promotion
        </h2>

        <form className="formstyle">
          <div class="input-group">
            <input
              className="inputstyle"
              type="text"
              id="search"
              placeholder="Search..."
              autocomplete="off"
            />
           
              <FontAwesomeIcon className="mylabel" style={{ fontSize: "1.2rem" }} icon={faSearch} />
           
          </div>

          <div class="suggestion-list hidden"></div>
        </form>

        <h5 className="headersmall">
          {" "}
          Find latest researches ,share medical articles, connect with other
          researchers from different countries.
        </h5>
        <div className="CARDS">
          <div class="cards">
            <article class="card">
              <a href="/">
                <figure class="card-thumb">
                  <img src={explore} alt="angular" />
                </figure>
                <div class="card-content">
                  <h2 class="card-title">Discover</h2>
                  <p class="card-excerpt">
                     Discover a community of researchers and experts go with you
                     to the next level.
                  </p>
                </div>
              </a>
            </article>
            <article class="card">
              <a href="/">
                <figure class="card-thumb">
                  <img alt="" src={discover} />
                </figure>
                <div class="card-content">
                  <h2 class="card-title">Explore</h2>
                  <p class="card-excerpt">
                     Explore new technologies, cures, and researches that make
                     your choices much easier.
                  </p>
                </div>
              </a>
            </article>
            <article class="card">
              <a href="/">
                <figure class="card-thumb">
                  <img alt="" src={share} />
                </figure>
                <div class="card-content">
                  <h2 class="card-title">Share</h2>
                  <p class="card-excerpt">
                    Share what you find useful to other doctors , that can make
                    a shift in many patients cases.
                  </p>
                </div>
              </a>
            </article>
          </div>
        </div>
      </div>
      <Divider height="5rem" />
      <Title
        title="Physical Mental and Virtual Care"
        color="#11a683"
        mobile={false}
      />
      ;
      <Sections />
      <Divider height="5rem" />
      <Title
        color={"#11a683"}
        mobile={false}
        title={"We Have Steps To Follow"}
      />
      <Divider height="2rem" />
      <Swippereffect />
      <Divider height="5rem" />
      <Title title="Latest Statistics" color={"#11a683"} mobile={false} />
      <Divider height="3rem" />

      <div className="countsdown">
        <CountDown
          end={300000}
          mount={1000}
          something={"Users"}
          start={start}
        />
        <CountDown
          end={2000}
          mount={1}
          something={"Daily Post"}
          start={start}
        />
        <CountDown
          a={ref}
          end={450}
          mount={1}
          something={"Events in cairo"}
          start={start}
        />
      </div>
      <Divider height="5rem" />
      <Title
        color={"#11a683"}
        mobile={false}
        title={"Discover Latest Technology"}
      />
            <Divider height="3rem" />

      <BannerGrid style={{ zIndex: "555" }} />
      <Divider height="5rem" />
      <Title color={"#11a683"} mobile={false} title={"Top Actions"} />
      <Divider height="3rem" />
      <VerticalTabs />
      <Divider height="5rem" />
      <Title color={"#11a683"} mobile={false} title={"Social Links"} />
      <Divider height="3rem" />
      <Flex />
      <Footer />
 
    </>
  );
}

export default Design;

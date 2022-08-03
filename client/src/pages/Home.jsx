import React, { useEffect } from "react";
import Articles from "../components/Articles";
import MyBanner from "../components/MyBanner";

import SimpleDrawer from "../components/SimpleDrawer";
import IconCards from "../components/IconCards/IconCards";
import { Swipper } from "../components/Swipper";
import styled from "styled-components";
import AnimaGasp from "./AnimaGasp";
import SupportEngine from "../chat/SupportEngine";
import Sendmail from "../components/Sendmail";
import Title from "../components/Title";
import { Link } from "react-router-dom";

function Home( ) {
  useEffect(()=>{ 
    window.scrollTo(0,0)
    window.history.scrollRestoration = 'manual'
  
  },[])
  
  return (
    <div>
      <MyBanner   />
      <Divider  height="2rem" />
      <Divider  height="2rem" />
      <Divider id="sec77"  height="2rem" />
      <Title    color={"brown"} mobile={false} title={"Researchs Field"} />
      <IconCards />
      <Divider height="6rem" />
      <SimpleDrawer />
      <Title color={"brown"} mobile={false} title={"Their Smile Matters"} />
      <Link to="/MedReports">
      <Swipper /></Link>
      <Divider height="5rem" />
      <Articles />

      <AnimaGasp />
    
      <Sendmail />
      <Quote> </Quote>
     <SupportEngine/>
    </div>
  );
}

export default Home;
export const Divider = styled.div`
  height: ${(props) => props.height};
  @media (max-width: 600px) {
    height: 4rem;
  }
`;
const Quote = styled.div`
  color: var(--main);
  font-size: 1.4rem;
  font-weight: 700;
  width: 50%;
  line-height: 3rem;
  text-align: center;
  margin: auto;
 
  @media (max-width: 700px) {
    font-size: 1rem;
    width: 80%;
    margin: auto;
    line-height: 3rem;
    text-align: justify;
  }
`;

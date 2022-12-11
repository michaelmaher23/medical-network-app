import React, { useEffect } from "react";
import styled from "styled-components";
import { Button } from "./Header";
import LOGOO from "../images/LOGOO.svg";
import portf from "./portf.jpg"
import Main from "../images/Main.svg";
import gsap from "gsap";
import { Link } from "react-router-dom";
 function MyBanner() {
  useEffect(()=>{
    var tl = gsap.timeline({
        repeat: 100, 
        repeatDelay:80,
        
      });
     tl.fromTo("#r",   { scale:.9 ,rotate:-5 , },{duration:3,rotate:0 ,y:10 ,   scale:1});         


},[])


  return (
    <div>
      <Banner>
        <BannerLeft>
         <img alt='' style={{borderTopRightRadius:'10%',filter:"brightness(104%)" ,border:'1px solid #b5ab38', borderTopLeftRadius:'50%',borderBottomRightRadius:'20%'}} src={portf}/> 


         
          
        </BannerLeft>
        <BannerRight>
          <img alt=''   id="r"    src={Main} />
          <Link style={{textDecoration:'none'}} to={`/signup`}>
          
          <Button
            background={"var(--main2)"}
            textcolor={"var(--main)"}
            width={"17rem"}
            height={"2.5rem"}
            style={{ marginTop: "2rem" }}
           
          >
            Join The Community Now
          </Button></Link>
         </BannerRight>
      </Banner>
    </div>
  );
}

export default MyBanner;
const Banner = styled.div`
  padding-top: 6rem;
  padding-right: 7%;
  padding-left: 7%;
  display: flex;
  flex-direction: row;

  @media (max-width: 800px) {
    padding-top: 6rem;

    flex-direction: column;
    
  }
  @media (max-width: 500px) {
  
    flex-direction: column;
  }
`;
const BannerLeft = styled.div`

 flex:40%;
img{
  width:100%;margin-top: 1rem;
  @media (max-width: 800px) {
    text-align: center;
    display:block;
    width:97%;
    margin:auto;
    margin-top: unset;
  }

}  
div{
  box-shadow: .3px 5px 20px var(--main);
  width: fit-content;
  height: fit-content;
  width:60%;
  box-shadow: -3px 41px 109px 27px rgba(153,83,83,0.61) ;
  background-color: #a52a2a19;
  border-radius: 10%;
   border-bottom-right-radius: 50%;
  margin-left: 3rem;  @media (max-width: 800px) {
   
   display:block;
   width:100%;
   margin:auto;
   margin-bottom:3rem;
 }
}
video{
  position: relative;
  width:100%;
  
 
clip-path: circle(46.0% at 50% 49%);
  filter: contrast(1.2) brightness(1.1);
  box-shadow: -3px 41px 109px 27px rgba(153,83,83,0.61) inset;
  
 

}

  h2 {
    width: 100%;
    line-height: 2.1rem;
    font-weight: 800;
    letter-spacing: 1px;
    padding-bottom: 0rem;
    color: var(--main);
    font-size: 1.6em;
    @media (max-width:950px){
      width:90%;
margin-top:0;
    }
    @media (max-width: 800px) {
      text-align: center;
      margin:auto;
      margin-bottom: 1rem;
    }
  }

 
`;
const BannerRight = styled.div`
flex:50%;
  img {
    padding-top: 1rem;
    margin: auto;
    display: block;
 width:80%;
    
  }
`;

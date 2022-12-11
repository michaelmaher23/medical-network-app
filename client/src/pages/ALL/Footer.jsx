import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
 import { Link   } from "react-router-dom";
import {
    faFacebook,
    faYoutube,
    faTwitter,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <ContainerFooter>
      <DIV>
        <GRID>
          <Pages>
              <h5>LINEUP</h5>
            <Link className='link' to="/">
             
              <span>HOME</span>
            </Link >
            <Link className='link' to="/">
              <span>HEARTCARE</span>
            </Link >
            <Link className='link' to="/">
              <span>STUDIES</span>
            </Link >
            <Link className='link' to="/">
              <span>CORONA</span>
            </Link >
          </Pages>
          <Pages>
              <h5>INFORMATION</h5>
            <Link className='link' to="/">
             
              <span>EXPERIENCE</span>
            </Link >
            <Link className='link' to="/">
              <span>HEARTCARE</span>
            </Link >
            <Link className='link' to="/">
              <span>STUDIES</span>
            </Link >
            <Link className='link' to="/">
              <span>CORONA</span>
            </Link >
          </Pages>
          <Pages>
              <h5>PARTENER</h5>
            <Link className='link' to="/">
             
              <span>HOME</span>
            </Link >
            <Link className='link' to="/">
              <span>HEARTCARE</span>
            </Link >
            <Link className='link' to="/">
              <span>STUDIES</span>
            </Link >
            <Link className='link' to="/">
              <span>CORONA</span>
            </Link >
          </Pages>
          <Pages>
              <h5>EXPERIENCE</h5>
            <Link className='link' to="/">
             
              <span>HOME</span>
            </Link >
            <Link className='link' to="/">
              <span>HEARTCARE</span>
            </Link >
            <Link className='link' to="/">
              <span>STUDIES</span>
            </Link >
            <Link className='link' to="/">
              <span>CORONA</span>
            </Link >
          </Pages>
          <Pages>
              <h5>CONTACTS</h5>
            <Link className='link' to="/">
             
              <span>HOME</span>
            </Link >
            <Link className='link' to="/">
              <span>HEARTCARE</span>
            </Link >
            <Link className='link' to="/">
              <span>STUDIES</span>
            </Link >
            <Link className='link' to="/">
              <span>CORONA</span>
            </Link >
          </Pages>

          <Pages>
              <h5>TITLE</h5>
            <Link className='link' to="/">
             
              <span>HOME</span>
            </Link >
            <Link className='link' to="/">
              <span>HEARTCARE</span>
            </Link >
            <Link className='link' to="/">
              <span>STUDIES</span>
            </Link >
            <Link className='link' to="/">
              <span>CORONA</span>
            </Link >
          </Pages>
          </GRID>
     <FlexC>
          <USE>
            <Link className='link' to="/">
              {" "}
              <span>2022 MICHAEL</span>
            </Link >
            <Link className='link' to="/">
              <span>PRIVACY</span>
            </Link >
            <Link className='link' to="/">
              <span>TERMS OF USE</span>
            </Link >
          </USE>
          <Social>
         
            
             
           



          <Link className='link' to="/">
            <span>
            <FontAwesomeIcon
                style={{
                  fontSize: "1.3rem",
                  cursor: "pointer",
                  color: "#4968ad",
                }}
                icon={faFacebook}
              />            </span>
          </Link >
          <Link className='link' to="/">
            <span>
            <FontAwesomeIcon
                style={{
                  fontSize: "1.3rem",
                  cursor: "pointer",
                  color: "#0a66c2",
                }}
                icon={faLinkedin}
              />
            </span>
          </Link >
          <Link className='link' to="/">
            <span>
            <FontAwesomeIcon
                style={{
                  fontSize: "1.3rem",
                  cursor: "pointer",
                  color: " #1da1f2",
                }}
                icon={faTwitter}
              />
            </span>
          </Link >
          <Link className='link' to="/">
            <span>
              
            <FontAwesomeIcon
                style={{ fontSize: "1.3rem", color: "red", cursor: "pointer" }}
                icon={faYoutube}
              />
            </span>
          </Link >
        </Social>


        
   </FlexC>    
      </DIV>
    </ContainerFooter>
  );
}

export default Footer;
const ContainerFooter = styled.div`
position:static;
bottom: 0;
width:100%;
background:linear-gradient(#8b5e1a, #cfb875e1);
margin:auto;
border-top: 14px solid #ffd390;
padding-top:2rem;
margin-top: 4rem;

`;
const FlexC = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
padding-bottom:3rem;
padding-top: 2rem;
@media (max-width:700px){
    flex-direction: column;
    gap:1rem;
}
`;

const GRID = styled.div`
width:90%;
margin: auto;
display:grid;
padding-bottom:1rem;
justify-content: center;
justify-items: center;
row-gap: 2rem;
grid-template-columns: 15.5% 15.5% 15.5%  15.5% 15.5% 15.5% ;
@media(max-width:950px){
    grid-template-columns: 33.3% 33.3%  33.3%;

}
@media(max-width:700px){
    grid-template-columns: 50% 50% ;
  
}
`;

const Pages = styled.div`
h5{
    color:#fcf398;
    font-size:15px;
    font-weight: 700;
}
display:flex;
flex-direction: column;
.link{
    text-decoration: none;
    color:white;
    font-size: 13px;
    font-weight: 600;
    :hover{
        color:#f9a11b;
    }
}

`;
const DIV = styled.div`

`;
const USE = styled.div` 
.link{
    text-decoration: none;
    font-size: 12px;
    color:#ffffff;
   margin-right: .7rem;
    :hover{
        color:#433116;
    }
    @media(max-width:700px){
      font-size: 9px;
    }


}


`;

const Social = styled.div`
.link{
    margin-left: 1rem;
}
`;

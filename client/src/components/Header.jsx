import React, { useState, useEffect } from 'react';
import logo from "../images/logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LoginIcon from '@mui/icons-material/Login';
export default function Header() {
const [show, setShow] = useState(true);
const [lastScrollY, setLastScrollY] = useState(0);
const controlNavbar = () => {
  if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) {
       // if scroll down hide the navbar
        setShow(false); 
      } else { // if scroll up show the navbar
        setShow(true);  
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <Main  show={show} >
      <div>
        <Link to="/">
          <Logo src={logo} alt="michael" />
        </Link>
      </div>
      <Links>
        <Linkat>
          <a href="">Heart care</a>
        </Linkat>
        <Linkat>
          <a href=""> Neuro system</a>
        </Linkat>{" "}
        <Linkat className="header_middle">
          {" "}
          <a>&nbsp;&nbsp;&nbsp;&nbsp;Studies </a>
          <ArrowDropDownIcon style={{ display: "inline" }} />
          <div className="div1">
            <h4 className="item">Lung Diseases</h4>
            <h4 className="item">Kidney conditions</h4>
            <h4 className="item">Mental Illness</h4>
          </div>
        </Linkat>
      </Links>
      <Btns>
        <Link style={{textDecoration:'none'}} to="/signup">
          <Button
            background={"rgba(241, 179, 165 ,.9)"}
            textcolor={"brown"}
            width={"5rem"}
            height={"1.8rem"}

          >
            Sign up
          </Button>
        </Link>{" "}
        <Link style={{textDecoration:'none'}}to="login">
          {" "}
          <Button
            background={"#CF6A54"}
            textcolor={"black"}
            width={"5rem"}
            height={"1.8rem"}
          >
            Log in
          </Button>
        </Link>

      </Btns>
     <BtnCustom   style={{ backgroundColor:'var(--main2)',padding:'.2rem',paddingInline:'.4rem', borderRadius:'23px', position:'absolute',top:'.6rem',right:'5rem',gap:'.3rem',alignItems:'center',color:'var(--main)'}} ><p>Join Us</p><LoginIcon />
    </BtnCustom></Main>
  );
}
const BtnCustom=styled.div`
display:none;
@media (max-width: 900px) {
display:flex;
}

`
const Logo = styled.img`
  height: 36px;
  margin-left: 2rem;
  display: block;
  @media (max-width: 900px) {
    height: 30px;
    margin-left: 0.3rem;
  }
`;
const Button = styled.button`
  background-color: ${(props) => props.background};
  color: ${(props) => props.textcolor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  
 a{text-decoration:none;}
  border: none;
  outline: none;
  margin-right: 1rem;
  border-radius: 4px;
  font-size: 1.1em;
  font-weight:700;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  
    display: block;
    margin: auto;
    
`;
const Linkat = styled.div`
  min-height: 100%;
  display: flex;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: relative;
  .div1 {
    position: absolute;
    display: none;
  }
  :hover {
    .div1 {
      display: flex;
    }
    background-color: rgba(241, 179, 165, 0.6);
  }
  a {
    text-decoration: none;

    color: grey;
    font-weight: 600;

    letter-spacing: 1px;
    font-size: 1em;
    :hover {
      font-weight: 600;
      color: brown;
    }
  }
`;
const Links = styled.div`
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  min-height: 100%;

  text-align: center;
  align-items: center;
  @media (max-width: 900px) {
    display: none;
  }
`;
const Main = styled.div`
  * {
    font-size: 0.9rem;
  }
  min-height: 3.3rem;
  display: grid;
  grid-template-columns: 33% 38% 31%;
  padding-inline: 0.1rem;
  align-items: center;
  box-shadow: 0.3px 1px 9px grey;
  position: fixed;
  top:${(props)=>props.show? '0px' : '-3.5rem'};
  transition: 0.2s linear;
  z-index: 30;
  background-color: white;
  width: 100%;
  @media (max-width: 900px) {
    grid-template-columns: initial;
    
  }
  @media(min-width:900px){
    .u{
      display:none;
    }
  }
`;
const Btns = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 900px) {
    display: none;
  }
`;
export { Button };

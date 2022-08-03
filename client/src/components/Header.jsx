import React, { useState, useEffect } from "react";
import logo from "../images/logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LoginIcon from "@mui/icons-material/Login";
import SimpleDrawer from "./SimpleDrawer";
import { HashLink } from "react-router-hash-link";
import { useDispatch, useSelector } from "react-redux";
import icon99 from "./icon99.webp";
import { getUserDetails, logout } from "../Redux/Actions/UserAction";
export default function Header() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };
  const mydata = useSelector((state) => state.userDetails);
  const me = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (me?.userInfo?._id) dispatch(getUserDetails(me?.userInfo?._id));
  }, [me?.userInfo?._id]);
 const Logout=(e)=>{
  e.preventDefault();
  dispatch(logout(me?.userInfo?._id))
 }
  return (
    <>
      <SimpleDrawer />
      <Main show={show}>
        <div>
          <Link to="/medproducts">
            <Logo src={logo} alt="michael" />
          </Link>
        </div>
        <Links>
          <Linkat to="/medproducts">
            <p> Products</p>
          </Linkat>

          <LinkA to="/#sec77">Fields</LinkA>

          <Drop>
            <p style={{ marginBottom: 0 }}> &nbsp;&nbsp;&nbsp;&nbsp;Studies</p>
            <ArrowDropDownIcon style={{ display: "inline" }} />
            <div className="div1">
              <Link to="/Field/Lungs" style={{ textDecoration: "none" }}>
                {" "}
                <h4 className="item">Lung Diseases</h4>
              </Link>
              <Link to="/Field/Kidneys" style={{ textDecoration: "none" }}>
                {" "}
                <h4 className="item">Kidney Conditions</h4>
              </Link>
              <Link
                to="/Field/Mental_Health"
                style={{ textDecoration: "none" }}
              >
                {" "}
                <h4 className="item">Mental Illness</h4>
              </Link>
              <Link to="/Field/Eyes" style={{ textDecoration: "none" }}>
                {" "}
                <h4 className="item">Eyes</h4>
              </Link>
              <Link to="/Field/Corona" style={{ textDecoration: "none" }}>
                {" "}
                <h4 className="item">Corona</h4>
              </Link>
              <Link to="/Field/Studies" style={{ textDecoration: "none" }}>
                {" "}
                <h4 className="item">Studies</h4>
              </Link>
              <Link to="/Field/Heart" style={{ textDecoration: "none" }}>
                {" "}
                <h4 className="item">Heart Problems</h4>
              </Link>
            </div>
          </Drop>
        </Links>
        {mydata && mydata?.user?.email ? (
         
         <div className="tooltip77"><span className="tooltiptext77"><button style={{border:'none',outline:'none',color:'brown',fontWeight:'900', backgroundColor:"transparent"}}  onClick={(e)=>Logout(e)}>SignOut</button></span><div>
            {" "}
            <img
              style={{
                width: "2rem",
                borderRadius: "50%",
                position: "relative",
              }}
              src={mydata.user?.photo ? mydata?.user?.photo : icon99}
            />{" "}
            <span
              style={{ color: "brown", fontWeight: "800", fontSize: "1rem" }}
            >
              {" "}
              @{(mydata?.user?.email).split("@")[0]}
            </span>
          </div></div>
        ) : (
          <Btns>
            <Link style={{ textDecoration: "none" }} to="/signup">
              <Button
                background={"white"}
                textcolor={"var(--main)"}
                width={"4rem"}
                height={"1.9rem"}
              >
                Sign up
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/login">
              <Button
                background={"var(--main2)"}
                textcolor={"var(--main)"}
                width={"4rem"}
                height={"1.9rem"}
              >
                Log in
              </Button>
            </Link>
          </Btns>
        )}
      </Main>
    </>
  );
}

const Logo = styled.img`
  height: 36px;
  margin-left: 2rem;
  display: block;
  @media (max-width: 950px) {
    height: 30px;
    margin-left: 0.3rem;
  }
`;
const Button = styled.button`
  background-color: ${(props) => props.background};
  color: ${(props) => props.textcolor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  border: none;
  outline: none;
  margin-right: 1rem;
  border-radius: 4px;
  font-size: 1rem;
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
  @media (max-width: 700px) {
    font-size: 14px;
  }
`;
const Linkat = styled(Link)`
  min-height: 100%;
  display: flex;
  text-decoration: none;
  color: var(--main);
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: relative;

  :hover {
    background-color: rgba(241, 179, 165, 0.6);
    p {
      font-weight: 600;

      color: var(--main);
    }
  }
  p {
    text-decoration: none;
    margin-bottom: 0;

    font-weight: 600;
    letter-spacing: 1px;
    font-size: 1em;
  }
`;
const Drop = styled.div`
  position: relative;
  flex-direction: row;
  display: flex;
  align-items: center;
  color: var(--main);
  font-weight: 700;

  .div1 {
    opacity: 0;
    position: absolute;
    display: none;
  }
  :hover {
    .div1 {
      display: flex;
      flex-direction: row;

      flex-wrap: wrap;
      justify-content: space-around;
      transition: opacity 0.8s linear;
      opacity: 1;
      top: 102%;
      width: 300%;
      background-color: white;
      padding: 1rem;
      border-bottom-left-radius: 25px;
      border-bottom: 2px solid pink;
      .item {
        margin-top: 0.2rem;
        flex: 33.3%;
        width: 100%;
        text-align: left;
        box-shadow: 1px 2px 10px pink;

        color: var(--main);
        padding: 0.5rem 0.6rem;
        font-weight: 700;
        border-radius: 25px;
      }
    }
  }
`;
const Links = styled.div`
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  min-height: 100%;
  text-align: center;
  align-items: center;
  @media (max-width: 950px) {
    display: none;
  }
`;
const LinkA = styled(HashLink)`
  min-height: 100%;
  display: flex;
  text-decoration: none;
  color: var(--main);
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: relative;

  :hover {
    background-color: rgba(241, 179, 165, 0.6);

    font-weight: 600;

    color: var(--main);
  }

  text-decoration: none;
  margin-bottom: 0;

  font-weight: 600;
  letter-spacing: 1px;
  font-size: 1em;
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
  top: ${(props) => (props.show ? "0px" : "-3.2rem")};
  transition: 0.4s ease;
  transition-delay: 0.1s;

  z-index: 30;
  background-color: white;
  width: 100%;
  @media (max-width: 950px) {
    grid-template-columns: initial;
  }
  @media (min-width: 950px) {
    .u {
      display: none;
    }
  }
`;
const Btns = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 950px) {
    display: none;
  }
`;
export { Button };

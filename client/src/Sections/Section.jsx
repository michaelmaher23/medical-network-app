import React from "react";
import styled from "styled-components";
import Lungs from "./Photos/Lungs.PNG";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import { NavLink } from "react-router-dom";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}
function Section({loading,name,pic,error,THEME}) {
  return (
    <>
      <Container77>
        <Category>
          <CategoryName>
            <h4>{name?name:""}</h4>
          </CategoryName>
          <svg
            width="100%"
            height="77"
            viewBox="0 0 464 77"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 77V0L464 77H0Z" fill="#dc777747" fill-opacity="0.7" />
          </svg>
          <svg
            width="100%"
            height="37"
            viewBox="0 0 456 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 37V0L456 37H0Z" fill="#c73828" fill-opacity="0.9" />
          </svg>
        </Category>
        <CategoryPic>
          <img src={pic?pic:""} />
        </CategoryPic>
      </Container77>
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs
          style={{ width: "80%", margin: "auto", marginTop: "2rem" }}
          aria-label="breadcrumb"
        >
          <NavLink
            to={" /"}
            style={{
              color: "var(--main)",
              textDecoration: "none",
              fontWeight: "800",
            }}
          >
            <HomeIcon
              sx={{ fontSize: "1.5rem", mr: 0.5, color: "var(--main)" }}
            />
            Medical Sections
          </NavLink>
          <Typography
            sx={{ display: "flex", alignItems: "center" }}
            style={{ color: "var(--main)" }}
          >
            <GrainIcon
              sx={{ fontSize: "1.5rem", mr: 0.5, color: "var(--main)" }}
              fontSize="inherit"
            />
            {name?name:""}
          </Typography>
        </Breadcrumbs>
      </div>
    </>
  );
}

export default Section;
const Container77 = styled.div`
  width: 89vw;
  margin: auto;
  margin-top: 6rem;

  display: flex;
  justify-content: space-around;
  height: 20rem;

  border-radius: 20px;
  box-shadow: 0.3px 3px 10px grey;
  overflow: hidden;
`;
const Category = styled.div`
  background: linear-gradient(to right, #310f0f, #e74c3c);
  position: relative;
  background-color: #e8e4a0;
  height: 100%;
  flex: 45%;
  display: flex;

  justify-content: flex-start;
  align-items: center;

  h4 {
    font-family: "Baloo 2", cursive;
    margin-left: 3rem;
    font-size: 50px;
    color: white;
  }
  svg {
    width: 96%;

    position: absolute;

    bottom: -2px;
    left: 0;
  }
`;
const CategoryPic = styled.div`
  position: relative;
  ::after {
    content: "";
    height: 100%;
    width: 3rem;
    background-color: #e74c3c;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;

    clip-path: polygon(0 0, 0 100%, 100% 0);
  }
  width: 55%;
  height: 100%;
  img {
    height: 100%;
    width: 100%;
    display: block;
  }
`;
const CategoryName = styled.div``;

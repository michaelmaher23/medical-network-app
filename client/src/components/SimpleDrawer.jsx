import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import ListIcon from "@mui/icons-material/List";
import {
  faBook,
  
  
  faBuildingLock,
} from "@fortawesome/free-solid-svg-icons";

import { Collapse, IconButton } from "@mui/material";
import logo from "../images/logo.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ArrowDropDown } from "@mui/icons-material";
import { ArrayofSections } from "../WebsiteSections.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Logo = styled.img`
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  display: block;
  @media (max-width: 950px) {
    height: 35px;
  }
`;
export default function SimpleDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [open1, setOpen1] = React.useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    setOpen1(!open1);
    toggleDrawer("right", true);
  };
  const arrauth = [
    { text: "Help Center", icon: <MailIcon /> },
    { text:    <Link style={{textDecoration:'none'}} to={`/signup`}><p style={{color:'brown'}}>Join us</p></Link>, icon: <Link style={{textDecoration:'none'}} to={`/signup`}><MailIcon /></Link> },
  ];
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      style={{
        background: "rgb(255,255,255)",
        height: "100vh",
        background:
          "linear-gradient(187deg, rgba(255,255,255,0.34965060216299493) 0%, rgba(121,9,9,0.3092779313555415) 83%)",
      }}
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        overflowX: "hidden",
      }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div onClick={toggleDrawer(anchor, false)}>
        <Link to="/">
          <Logo src={logo} alt="michael" />
        </Link>
      </div>
      <List>
        {ArrayofSections.map((i, index) => (
          <>
              <div
                style={{
                  padding:"2rem" ,
                  height: "2rem",
                  color: "var(--main)",
                 
                  display: "flex",
                  alignItems:"center"
                }}
              >
                <p className="iconafter"> {i.icon}</p>
                <p
                  style={{
                    color: "var(--main)",

                    marginLeft: ".4rem",

                    fontSize: ".94rem",

                    fontWeight: "600",
                  }}
                 
                >{i.text}</p>
              </div>
            
          </>
        ))}
        <ListItemButton onClick={handleClick}>
          <FontAwesomeIcon
            style={{ fontSize: "1.2rem", color: "var(--main)" }}
            icon={faBook}
          />
          <ListItemText
            primaryTypographyProps={{
              color: "var(--main)",
              fontSize: ".9rem",
              marginLeft: "2rem",
              fontWeight: "600",
            }}
            primary="More"
          />
          <ArrowDropDown sx={{ color: "var(--main)" }} />
        </ListItemButton>

        <Collapse in={open1} timeout="4sec" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4, width: 200 }}>
              <FontAwesomeIcon
                style={{ fontSize: "1.2rem", color: "var(--main)" }}
                icon={faBook}
              />
              <ListItemText
                primaryTypographyProps={{
                  fontSize: ".9em",
                  marginLeft: "1.4rem",
                  color: "var(--main)",
                  fontWeight: "700",
                }}
                primary="Surgeries domain"
              />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4, width: 200 }}>
              <FontAwesomeIcon
                style={{ fontSize: "1.2rem", color: "var(--main)" }}
                icon={faBook}
              />
              <ListItemText
                primaryTypographyProps={{
                  fontSize: ".9em",
                  marginLeft: "1.4rem",
                  color: "var(--main)",
                  fontWeight: "700",
                }}
                primary="Intesive care"
              />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <List>
        {arrauth.map((i, index) => (
          <>
            <ListItem
              disablePadding
              style={{ textAlign: "center", color: "var(--main)" }}
              key={i.text}
            >
              <ListItemButton>
                <ListItemText
                  primaryTypographyProps={{
                    color: "var(--main)",
                    fontSize: ".9rem",
                    marginLeft: "1.6rem",
                    fontWeight: "600",
                  }}
                  primary={i.text}
                />
              </ListItemButton>
            </ListItem>{" "}
            <Divider />
          </>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton
        style={{
          zIndex: "99",
          position: "fixed",
          top: "0",
          right: ".9rem",
          color: "var(--main)",
        }}
        onClick={toggleDrawer("right", true)}
      >
        <ListIcon style={{ fontSize: "2.1rem" }} />
      </IconButton>
      <Drawer
        style={{ overflowX: "hidden" }}
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </div>
  );
}

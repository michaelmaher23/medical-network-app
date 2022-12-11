import React, { useEffect } from "react";
import gsap from "gsap";
import styled from "styled-components";
import { Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Capture from "../images/Capture.PNG";
import Capture1 from "../images/Capture1.PNG";
import ml from "../images/ml.png";
import ml2 from "../images/ml2.png";
import image6 from "../images/image6.png";
import Frame from "../images/Frame.svg";
import "../pages/ResearchFiled.css";
import 'antd/dist/antd.css';
import Section from "../Sections/Section";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listSectionDetails } from "../Redux/Actions/SectionsAction";


function ResearchField() {
  const {loading,error,details}=useSelector(state=>state.sections)
  const {name}=useParams()
  const dispatch=useDispatch()
  useEffect(()=>{ 
    window.scrollTo(0,0)
    window.history.scrollRestoration = 'manual'

   dispatch(listSectionDetails((name.trim())))
  },[name,dispatch])
  
  useEffect(() => {
 
    var tl = gsap.timeline({
      repeat: 100,
      repeatDelay: 50,
    });
    tl.fromTo(
      "#ml",
      { opacity: 0.8, scale: 1, y: -100 },
      { duration: 5, opacity: 1, scale: 1.1, y: -40 }
    );
    var tl = gsap.timeline({
      repeat: 100,
      repeatDelay: 50,
    });
    tl.fromTo(
      "#ml2",
      { opacity: 0.8, scale: 0.6, y: -60 },
      { duration: 5, opacity: 1, scale: 1, y: -10 }
    );
  }, []);

  return (
    <>
    <Section  loading={loading} error={error} name={details?.name} pic={details?.pic}/>
      {/*<div
        className=" "
        style={{
          backgroundImage: `url(${Frame})`,
          letterSpacing: "4px",
          height: "auto",
          borderRadius: "25px",
          overflow: "Hidden",
          backgroundPosition: "bottom right",
          backgroundSize: "cover",
          marginLeft: ".4rem",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1
          style={{
            backgroundColor: "var(--main)",
            textShadow: "16px 5px 17px var(--main)",
            boxShadow: ".3px 4px 20px var(--main)",
            borderRadius: "20px",
            padding: ".5rem",
            paddingTop: "4rem",
            maxWidth: "fit-content",
            paddingBottom: "1rem",

            marginBottom: "1.5rem",
            width: "auto",
            color: "var(--main2)",
            fontsize: "34px",
          }}
          className="title"
        >
          {" "}
          Heart Care
        </h1>
        <img
          id="ml"
          className="imagemain "
          style={{ height: "10rem", right: "6rem", position: "absolute" }}
          src={ml}
        />
        <img alt='' className="imagemobile" id="ml2" style={{}} src={ml2} />
        <h2
          style={{
            boxShadow: ".3px 6px 12px lightblue",
            borderRight: "10px solid white",
            borderTop: "10px solid white",
            padding: "1rem",
            borderRadius: "25px",
            backgroundColor: "var(--main)",
            paddingBottom: "1rem",
            color: "white",
            fontsize: "30px",
          }}
          className="subtitle"
        >
          Here you will find all you want to know about Heart Care.
        </h2>
        <img
          className="imageanimation "
          style={{
            position: "absolute",
            right: "0rem",
            top: "2rem",
            height: "70%",
            width: "40px",
            borderRadius: "25px",
          }}
          src={Capture}
        />
        </div>*/}
      <Container>
        <Row
          style={{
            backgroundImage: `url(${Capture1})`,
            backgroundSize: "contain",
            backgroundOrigin: "0 0",
            margin: "1rem",
            borderRadius: "25px",
            padding: ".2rem",
            backgroundColor: "white",
            border: "2px solid var(--main)",
          }}
          className="justify-content-space-around align-items-center  "
        >
          <Col md="12" lg="8">
            <Form>
              <InputGroup
                className="centersearch"
                style={{
                  border: "1px solid var(--main)",
                  width: "14rem",
                  borderRadius: "25px",
                  overflow: "hidden",
                }}
              >
                <InputGroup.Text>
                  <FontAwesomeIcon
                    className=" "
                    style={{ color: "var(--main)" }}
                    icon={faSearch}
                  />
                </InputGroup.Text>
                <Form.Control
                  className=" "
                  style={{ border: "none", width: "7rem" }}
                  id="inlineFormInputName"
                  placeholder={`Search ${details?.name}...`}
                />
              </InputGroup>
            </Form>{" "}
          </Col>
          <Col md="12" lg="4" className="">
            <h5
              className="centersearch "
              style={{
                color: "white",
                margin: "auto",
                cursor: "pointer",
                borderRadius: "25px",
                backdropFilter: "blur(13px)",
                textAlign: "center",
                width: "70%",
                fontWeight: "500",
                border: "2px solid grey",
              }}
            >
              Go to Fields
            </h5>
          </Col>
        </Row>

        <Row
          className="justify-content-around
 "
        >
          {[...Array(21)].map((a, i) => (
            <Col
              xs="12"
              sm="6"
              md="4"
              className=" "
              style={{ margin: "auto", marginBottom: "2rem" }}
            >
              <Card
                className=" "
                style={{
                  width: "100%",
                  height: "auto",
                  position: "relative",
                  minHeight: "210px",
                  margin: "auto",
                  borderRadius: "0",
                }}
              >
                <DivHover
                  className=" "
                  style={{
                    zIndex: "10",
                    width: "100%",
                    margin: "auto",
                    height: "100%",
                    backgroundColor: "rgba(111,111,111,.4)",
                  }}
                >
                  <div
                    className=" "
                    style={{
                      width: "6rem",
                      height: "2.2rem",
                      backgroundColor: "var(--main)",
                      borderRadius: "5px",
                      margin: "auto",
                      marginTop: "calc(40% - 2rem  )",
                      color: "",
                    }}
                  >
                    <p
                      className=" "
                      style={{
                        width: "100%",
                        textAlign: "center",
                        lineHeight: "2.2rem",
                        margin: "auto",
                        color: "white",
                        fontWeight: "700",
                      }}
                    >
                      More Info
                    </p>
                  </div>
                </DivHover>
                <Card.Img
                  className=" "
                  style={{
                    height: "84%",
                    paddingBottom: "0px",
                    padding: "0px",
                    margin: "0px",
                  }}
                  variant="top"
                  src={image6}
                />
                <Card.Body className=" " style={{ padding: ".4rem" }}>
                  <Card.Title
                    className=" "
                    style={{
                      fontSize: "1.03rem",
                      fontWeight: "700",
                      color: "#606060	",
                    }}
                  >
                    One of the most important thing important One of the most{" "}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}{" "}
        </Row>
      </Container>
    </>
  );
}

export default ResearchField;
const DivHover = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0;
  border: 3px solid var(--main);

  cursor: pointer;
  :hover {
    opacity: 1;
  }
`;

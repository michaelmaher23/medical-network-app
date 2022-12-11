import React from "react";
import styled from "styled-components";
import { Heading } from "../components/Swipper.jsx";
import { Section } from "../Sections.js";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
function Sections() {
  return (
    <>
      <Container
        style={{ width: "100%", overflow: "hidden", paddingBottom: "1rem" }}
      >
        {Section.map((i, index) => {
          return (
            <motion.nav
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <div className="image">
                  <img className="icons" src={i.icon} />
                </div>

                <p>{i.text}</p>
                <div className="plus">
                  <button className="btn8">Read More</button>
                  <FontAwesomeIcon
                    style={{
                      color: "#ffffff",
                      backgroundColor: "#11a683",
                      padding: "8px",
                      borderRadius: "50%",
                    }}
                    icon={faPlus}
                  />
                </div>
              </Card>{" "}
            </motion.nav>
          );
        })}
      </Container>
    </>
  );
}
export default Sections;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  margin: auto;
  margin-top: 0;
  justify-content: center;
  gap: 1rem;
  @media (max-width: 700px) {
    width: 87%;
  }
  @media (max-width: 500px) {
    width: 85%;
  }
`;
export const Card = styled.div`
  background: linear-gradient(0deg, #fff 3%, hsla(0, 0%, 100%, 0)),
    linear-gradient(-257deg, #aaf2e1, #93edf5 50%, #dbebff);
  transition: all 0.2s linear;
  width: fit-content;
  height: 13.5rem;
  border-radius: 5px;
  background: rgb(23 207 151, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.2rem;

  gap: 0.5rem;
  margin: auto;
  margin-top: 0;
  box-shadow: 0.4px 3px 12px #11a68367;
  .image {
    background: #11a6834b;
    width: 5rem;
    display: block;
    margin: auto;
    height: 5rem;
    padding: 1rem;
    border-radius: 50%;
  }
  .plus {
    text-align: center;
    height: 2.7rem;
    margin-bottom: 0.5rem;
    position: relative;
    overflow: hidden;
    width: 8rem;
    .btn8 {
      width: fit-content;

      height: 2.5rem;
      background-color: #11a683;
      border-radius: 25px;
      line-height: 2.5rem;
      border: none;
      outline: none;
      color: white;
      font-weight: 600;
      position: absolute;
      width: 6rem;
      left: calc(50% - 3rem);
      top: 2.8rem;
    }
  }
  .icons {
    transition: all 0.2s linear;
    z-index: -1;

    width: 80%;
    display: block;
    height: 80%;
    margin: auto;
  }
  .icons:hover {
  }
  p {
    transition: all 0.2s linear;
    color: black;
    font-size: 1.2rem;
  }
  :hover {
    transform: skew(0, -0.001turn);
    box-shadow: 0.4px 5px 30px #11a68367;

    .plus .btn8 {
      top: 0;
      right: calc(50% - 4rem);
      transition: all 0.2s linear;
    }

    .icons {
      transform: scale(1);
    }
    p {
      color: #13ad7f;
    }
  }

  @media (max-width: 500px) {
    width: 87vw;
  }
`;

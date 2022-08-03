import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cssprofile.css";
import moment from "moment";
import sucessfull from "./sucessfull.png";
import styled from "styled-components";

import "./MyproUpdated.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDashboard,
  faDatabase,
  faLocation,
  faLocationPin,
  faMapPin,
  faPhone,
  faUserClock,
} from "@fortawesome/free-solid-svg-icons";
import { logout } from "../Redux/Actions/UserAction";
import { useParams } from "react-router-dom";
function MyprofileUpdated({ setR }) {
  const dispatch=useDispatch()
  const {id} =useParams()
  const { form, loading, error } = useSelector((state) => state.formDetails);
  return (
    <div className="pagecss">
      {loading ? (
        <>loading</>
      ) : error ? (
        <>error</>
      ) : (
        <>
          <img className="img99" src={sucessfull} />

          <div className="container99">
            <img src={form?.photo} className="photo99" />
            <div className="top99">
              <h5 className="name99">
               
                {form?.firstName} {form?.lastName}
              </h5>
              <h5 className="location99">
               
                <FontAwesomeIcon
                  style={{ color: "green", marginRight: "5px" }}
                  icon={faLocationPin}
                /> 
                {form?.country} ,{form?.region}
              </h5>
              <h5 className="phone99">
               
                <FontAwesomeIcon
                  style={{ color: "green", marginRight: "5px" }}
                  icon={faPhone}
                /> 
                {form?.phone}
              </h5>
            </div>
            <div className="footer99">
              {" "}
              <div className="left99">
                <h5 className="joinedat99">
                  <FontAwesomeIcon
                    style={{ color: "green", marginRight: "5px" }}
                    icon={faUserClock}
                  />
                  Joined in{" "}
                  {moment(form?.createdAt).format()
                    ? moment(form?.createdAt).format(" MMMM YYYY")
                    : ""}
                </h5>
              </div>
              <div className="right99">
                <ButtonInbox
                  onClick={(e) => {
                    dispatch(logout(id));
                  }}
                >
                  SignOut
                </ButtonInbox>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default MyprofileUpdated;
const ButtonInbox = styled.button`
  background-color: rgb(31, 164, 60);
  color: white;
  font-size: 0.96rem;
  border-radius: 60px;
  padding: 4px 9px;
  border: 0;
  outline: 0;
  width: fit-content;
  :hover {
    filter: brightness(1.3);
  }
  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

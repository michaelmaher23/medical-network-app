 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
import "./ordersgrid.css";
import moment from "moment";

import React, { useEffect, useState } from "react";
import Grid from "react-loading-icons/dist/esm/components/grid";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { listFormsbyEmail } from "../../Redux/Actions/FormAction";
import {
  
  logout,
 
} from "../../Redux/Actions/UserAction";
import { faUsd ,faSignOut} from "@fortawesome/free-solid-svg-icons";
import Myprofile from '../Mypro'
function Myaccount() {
  const [r, setR] = useState(true);

  const mydata = useSelector((state) => state.userLogin);
  const { Forms, loading, error } = useSelector((state) => state.forms);

   const [orders, setOrders] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (mydata?.userInfo?.email) {
      const useremail = mydata?.userInfo?.email;
      dispatch(listFormsbyEmail(useremail));
    }
  }, [dispatch, mydata?.userInfo?.email]);
  useEffect(() => {
    if (mydata?.userInfo?.email) {
      setOrders(true)
    }
  }, [mydata?.userInfo?.email]);
  return (

<>
    <div>
    <ButtonInbox
onClick={(e) => {
  dispatch(logout(mydata?.userInfo?._id));
}}
>
<FontAwesomeIcon icon={faSignOut}/>
</ButtonInbox>



    </div>
        <div style={{maxWidth:"100vw"}}>

              
            

          {loading ? (
            <div style={{ width: "fit-conetent", margin: "auto" }}>
              <div
                style={{
                  width: "fit-content",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "6rem 0",
                  margin: "auto",
                }}
              >
                <Grid fill="#6bac6b" style={{ color: "gray" }} />
              </div>
            </div>
          ) : error ? (
            <>Error</>
          ) : (
            <div>
            
              <Myprofile setR={setR} />
              <div
                style={{
                  width: "100%",
                  height: "fit-content",
                  textAlign: "center",
                  borderTop: "1px solid #e1e1e1",
                }}
              >
                <p
                  style={{
                    fontWeight: "800",
                    color: "rgb(31, 164, 124)",
                    width: "fit-content",
                    margin: "auto",
                    marginTop: "1rem",
                    fontSize: "1.3rem",
                  }}
                >
                  My Orders
                </p>
              </div>
              {Array.isArray(Forms) &&
                Forms?.map((i, k) => {
                  return (
                    <div className="order">
                      <div className="leftside">
                        <p className="totallabel">Total:</p>
                        <p className="total55">
                          {i?.totalAmount ? (
                            <div>
                              {" "}
                              {i?.totalAmount?.toFixed(0)}
                              <FontAwesomeIcon
                                style={{ marginLeft: ".4rem" }}
                                icon={faUsd}
                              />
                            </div>
                          ) : (
                            ""
                          )}
                        </p>
                      </div>

                      <div className="rightside">
                        <table>
                          <tr className="tra">
                            {" "}
                            <th className="tha">Email Address</th>
                            <td className="tda">{i.email}</td>
                          </tr>
                          <tr>
                            <th className="tha">Name</th>
                            <td className="tda">
                              {i?.firstName}
                              {i?.lastName}
                            </td>
                          </tr>

                          <tr>
                            <th className="tha">Phone Number</th>
                            <td>
                              <a target="_blank" href={`tel:+${i?.phone}`}>
                                {" "}
                                tel:+{i?.phone}{" "}
                              </a>
                            </td>
                          </tr>
                          <tr>
                            {" "}
                            <th className="tha">Location</th>
                            <td>
                              {i?.address} {i?.region} {i?.country}
                            </td>
                          </tr>
                          <tr>
                            {" "}
                            <th className="tha">Date of Delivery </th>
                            <td>
                              {moment(i?.date).format()
                                ? moment(i?.date).format("MMMM Do YYYY")
                                : ""}
                            </td>
                          </tr>
                        </table>
                        <div>
                          <div className="products55">
                            {i?.items &&
                              i?.items?.length > 0 &&
                              i?.items?.map((a) => {
                                return (
                                  <div
                                    style={{ marginTop: "1.5rem" }}
                                    className="product55"
                                  >
                                    <p
                                      style={{
                                        display: "block",
                                        marginBottom: ".5rem",
                                        fontWeight: 700,
                                      }}
                                    >
                                      <span
                                        style={{
                                          padding: "0rem .5rem",
                                          color: "rgb(31, 164, 124)",
                                          borderRadius: "13px",
                                          backgroundColor: "#e1e1e1",
                                          fontSize: "1.5rem",
                                        }}
                                      >
                                        {" "}
                                        {a?.amount} Items
                                      </span>{" "}
                                      &nbsp; <div>{a?.name}</div>
                                    </p>
                                    <img
                                      className="image55"
                                      src={a?.images[0]}
                                    />{" "}
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          )}
        </div></>
     
   
  );
}

export default Myaccount;
const ButtonInbox = styled.button`
  float: right;
  margin-top: 3rem;
  margin-right: 3rem;
  display: block;
  background-color: rgb(31, 164, 124);
  color: white;
  font-size: 1rem;
  border-radius: 10px;
  padding: 5px 15px;
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
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Label } from "@mui/icons-material";
import { Formik } from "formik";
import "./ordersgrid.css";
import moment from 'moment'
import React, { useEffect, useState } from "react";
import Grid from "react-loading-icons/dist/esm/components/grid";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { listFormsbyEmail } from "../../Redux/Actions/FormAction";
import { login, register, logout,social } from "../../Redux/Actions/UserAction";
import {  faUsd } from "@fortawesome/free-solid-svg-icons";
import {  FAB,GAP,auth} from "../../firebase.js";
import Myprofile from "../Mypro";
function MyPage() {  
  const [r,setR]=useState(true)
  const facebook1=(e)=>{
    e.preventDefault()
  try{
    auth.signInWithPopup(FAB).then((result)=>{
console.log(result?.user?.displayName)
var user = (result?.user)?result?.user:null; 
dispatch(social({
  email:user.email,
  lastName:user?.displayName?.split(" ")[1],
  firstName : user?.displayName?.split(" ")[0],
  type:'social'
}))


    }).catch((error)=>{
      console.log(error.code)
      if(error?.code=='auth/account-exists-with-different-credential'){
dispatch(social({
        email:error?.customData?._tokenResponse?.email,
        lastName:error?.customData?._tokenResponse?.displayName?.split(" ")[1],
        firstName : error?.customData?._tokenResponse?.displayName?.split(" ")[0],
        type:'social'
      }))
      

      }
      
    })
  
 

  }catch(err){
    console.log(err)

  }

window.location.reload()

}


 

     
     
    
   

 
 


   const google1=(e)=>{
e.preventDefault()
try{
  auth?.signInWithPopup(GAP)
.then((result) => {
  var credential = result.credential;
  
  var user = result.user;

  
dispatch(social({
  email:user?.email,
  lastName: user?.displayName?.split(" ")?.[1],
  firstName : user?.displayName?.split(" ")?.[0],
  type:'social'
}))


}).catch((error) => {
  console.log(error)
 

   var errorCode = error.code;
  var errorMessage = error.message;
   var email = error.email;
   var credential = error.credential;
 });

}catch(err){
  console.log(err)
}


   }

  const mydata = useSelector((state) => state.userLogin);
  const { Forms, loading, error } = useSelector((state) => state.forms);
  const orders55= useSelector((state) => state.forms);

  const mydata2 = useSelector((state) => state.userRegister);
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
      setOrders(true);
    }
  }, [mydata?.userInfo?.email]);
  useEffect(() => {
    if (mydata2?.userInfo?.email) {
      setOrders(true);
    }
  }, [mydata2]);
 {/*
 moment.updateLocale('en', {
    months : [
        "يناير", "فبراير", "مارس", "ابريل", "مايو", "يونيو", "يوليو",
        "اغطسطس", "سبتمبر", "اكتوبر", "نوفمبر", "ديسمبر"
    ]
});
 
*/ }
  return (
    <>



      {false? (
        <>
         
        </>
      ) : (
        <>
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
            <>
           
        
             <div style={{width:'100%'}}>
 <ButtonInbox 
                
                onClick={(e) => {
                  dispatch(logout(mydata?.userInfo?._id));
            
                 }}
              >
                LOGOUT
              </ButtonInbox>


             </div>
             <Myprofile setR={setR}/>
             <div
                style={{
                  width: "100%",
                  height: "fit-content",
                  textAlign: "center",
                 borderTop: "1px solid #e1e1e1"
                }}
              >
                <p
                  style={{
                    fontWeight: "800",
                    color: "rgb(31, 164, 124)",
                    width: "fit-content",
                    margin: "auto",
                    marginTop:'1rem',
                    fontSize: "1.3rem",
                    
                  
                  }}
                >
                  My Orders
                </p>
              </div>
              {
             (Array.isArray(Forms)  &&
                Forms?.map((i, k) => {
                  return (
                    <div className="order">
                      <div className="leftside">
                        <p className="totallabel">Total:</p>
                        <p className="total55">{i?.totalAmount ?<div> {(i?.totalAmount)?.toFixed(0)} 
                        <FontAwesomeIcon style={{marginLeft:'.4rem'}} icon={faUsd}/></div>
                        : ""}</p>
                      </div>

                      <div className="rightside">
                        <table>
                          <tr className="tra">
                            {" "}
                            <th className="tha">Email Address</th>
                            <td className="tda">{i.email}</td>
                          </tr>
                          <tr>
                            <th   className="tha" >Name</th>
                            <td  className="tda"  >
                              {i?.firstName}
                              {i?.lastName}
                            </td>
                          </tr>

                          <tr>
                            <th  className="tha" >Phone Number</th>
                            <td>
                            <a  target="_blank"   href={`tel:+${i?.phone}`} > tel:+{i?.phone} </a>

                              
                              
                              </td>
                          </tr>
                          <tr>
                            {" "}
                            <th    className="tha"   >Location</th>
                            <td>
                              {i?.address} {i?.region} {i?.country}
                            </td>
                          </tr>
                          <tr>
                            {" "}
                            <th   className="tha"    >Date of Delivery </th>
                            <td>{moment(i?.date).format()?
                              
                           moment(i?.date).format('MMMM Do YYYY')

                            :

                            ""
                            
                            
                            
                            
                            }</td>
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
                                        fontWeight:700,
                                      }}
                                    >
                                   <span style={{padding:'0rem .5rem',color:'rgb(31, 164, 124)',borderRadius:'13px',backgroundColor:'#e1e1e1', fontSize:'1.5rem'}}> {a?.amount} Items</span>  &nbsp; <div>{a?.name}</div>
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
                }))}
            </>
          )}
        </>
      )}
    </>
  );
}

export default MyPage;
const Label1 = styled.span`
  font-weight: 800;
  line-height: 100%;
  font-size: 1.3rem;

  color: rgb(31, 164, 124);
  @media (max-width: 700px) {
    font-size: 1rem;
  }
`;
const Label2 = styled.span`
  display: block;
  color: rgb(31, 164, 124);
  margin-bottom: 7px;
  @media (max-width: 700px) {
    font-size: 15px;
  }
`;
const Input1 = styled.input`
  padding: 4px 10px;

  width: 90%;
  height: 2.5rem;

  border-radius: 0px;
  border: 1px solid #e1e1e1;
  box-shadow: 0.3px 3px 12px #e4e4e4;
  :focus {
    outline: 1px solid green;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;
const Input2 = styled.input`
  margin-right: 4px;
  margin-left: 5px;
  display: inline-block;
`;
const Button = styled.button`
  margin-right: 0.6rem;

  background-color: rgb(31, 164, 124);
  color: white;
  font-size: 1rem;
  border-radius: 10px;
  padding: 5px 15px;
  border: 0;
  outline: 0;
  min-width: 10rem;
  :hover {
    filter: brightness(1.3);
  }
  @media (max-width: 700px) {
    font-size: 14px;
  }
`;
const Span1 = styled(Link)`
  text-decoration: none;
  color: gray;

  font-size: 1rem;
  @media (max-width: 700px) {
    font-size: 13px;
  }
`;
const Div1 = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const Div2 = styled.form`
  :first-of-type {
    border-right: 1px solid #e1e1e1;
    border-width: 10px;
  }

  padding: 2rem 1rem;
  flex: 50%;
  width: 100%;
  @media (max-width: 800px) {
    margin-bottom: 4rem;
    flex: 100%;
    padding: 2rem 0;
    :first-of-type {
      border-right: none;
    }
  }
`;
const FacebookButton = styled.button`
  margin-top: 1rem;
  width: 90%;
  min-width: 10rem;
  height: 2.6rem;
  display: flex;
  align-items: center;
  outline: none;
  border: 0;
  background-color: #4267b2;
  color: white;
  border-radius: 6px;
  .textlabel {
    flex: 1;
    text-align: center;
    margin-right: 1rem;
    font-weight: 500;
    font-size: 1rem;
  }
  transition: all 0.1s linear;
  :hover {
    filter: brightness(1.2);
  }

  padding: 0px 12px;
  @media (max-width: 700px) {
    width: 100%;
    .textlabel {
      width: 100%;

      font-size: 14px;
    }
  }
`;
const GoogleButton = styled.button`
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0px 12px;
  width: 90%;
  min-width: 10rem;
  height: 2.6rem;
  display: flex;
  align-items: center;
  outline: none;
  border: 1px solid #d5d4d4;
  background-color: #f7f7f7;
  color: #313131;
  border-radius: 6px;
  .textlabel {
    width: 100%;
    text-align: center;
    margin-right: 1rem;
    font-weight: 500;
    font-size: 1rem;
  }
  transition: all 0.1s linear;
  :hover {
    filter: brightness(1.07);
  }
  @media (max-width: 700px) {
    width: 100%;
    .textlabel {
      width: 100%;

      font-size: 14px;
    }
  }
`;

const Div3 = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;

  @media (max-width: 800px) {
    width: 100%;
    flex-direction: column;
  }
`;
const Div4 = styled.div`
  width: 47%;

  @media (max-width: 800px) {
    width: 100%;
  }
`;
const ErrorMessage = styled.span`
  color: #bb5858;
  font-size: 14px;
  margin-top: 3px;
  margin-bottom: 9px;
  display: block;
  @media (max-width: 700px) {
    font-size: 11px;
  }
`;
const Message = styled.span`
  font-weight: 700;
  font-size: 17px;
  margin-left: 0.4rem;
  margin-bottom: 0.2rem;
  width: fit-content;
  display: block;
  color: #b11111;
  @media (max-width: 700px) {
    font-size: 12px;
  }
`;
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
  min-width: 10rem;
  :hover {
    filter: brightness(1.3);
  }
  @media (max-width: 700px) {
    font-size: 14px;
  }
`;
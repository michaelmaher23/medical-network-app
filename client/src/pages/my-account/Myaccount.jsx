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
function Myaccount() {  
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



      {mydata && !mydata?.userInfo?.token && !orders ? (
        <>
          <div
            style={{
              padding: "0 1rem",
              borderTop: "1px solid #c3c3c3",
              minHeight: "17rem",
              borderBottom: "1px solid #c3c3c3",
            }}
          >
            <Div1>
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = "Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }
                  if (!values.password) {
                    errors.password = "Required";
                  } else if (values.password.length < 8) {
                    errors.password = "Password shouldn't be less that 8 Chars";
                  }

                  return errors;
                }}
                onSubmit={(values, { setSubmitting,resetForm }) => {
                  dispatch(login(values));


                  resetForm();
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <Div2  onSubmit={handleSubmit}  >
                    <div
                      style={{
                        marginBottom: "12px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {" "}
                      <Label style={{ color: "rgb(31, 164, 124)" }} />
                      <Label1>LOGIN</Label1>
                    </div>{" "}




                    <FacebookButton  onClick={e=>facebook1(e)}      >
                      <FontAwesomeIcon icon={faFacebookF} />
                      <span className="textlabel"> Sign in with Facebook </span>
                    </FacebookButton>

                    <div >
  
  <GoogleButton onClick={e=>google1(e)}>
                      <svg
                        height={"19PX"}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 326667 333333"
                        shape-rendering="geometricPrecision"
                        text-rendering="geometricPrecision"
                        image-rendering="optimizeQuality"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      >
                        <path
                          d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z"
                          fill="#4285f4"
                        />
                        <path
                          d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z"
                          fill="#34a853"
                        />
                        <path
                          d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z"
                          fill="#fbbc04"
                        />
                        <path
                          d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z"
                          fill="#ea4335"
                        />
                      </svg>
                      <span className="textlabel"> Sign in with Google</span>
                    </GoogleButton>
                     
                    </div>
            
   
 

                   
                  
                    <Label2>Username or email address *</Label2>
                    <Input1
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    <ErrorMessage>
                      {" "}
                      {errors.email && touched.email && errors.email}
                    </ErrorMessage>
                    <Label2>Password *</Label2>
                    <Input1
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    <ErrorMessage>
                      {" "}
                      {errors.password && touched.password && errors.password}
                    </ErrorMessage>
                    <div
                      style={{
                        padding: "6px 0px",
                        marginBottom: "1rem",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Input2 type={"checkbox"} name="remember" id="remember" />
                      <span for="remember" style={{ color: "gray" }}>
                        {" "}
                        Remember me
                      </span>
                    </div>
                    {mydata?.error && <Message>{mydata?.error}</Message>}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      onClick={handleSubmit}
                    >
                      LOGIN
                    </Button>
                    <Span1 to="/">Lost your password?</Span1>
                  </Div2>
                )}
              </Formik>
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  password: "",
                  repeat: "",
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = "Required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }
                  if (!values.password) {
                    errors.password = "Required";
                  } else if (values.password.length < 8) {
                    errors.password = "Password shouldn't be less that 8 Chars";
                  }
                  if (!values.repeat) {
                    errors.repeat = "Required";
                  } else if (values.password !== values.repeat) {
                    errors.repeat = "Password should Match";
                  }
                  if (!values.lastName) {
                    errors.lastName = "Required";
                  } else if (values.lastName.length < 4) {
                    errors.lastName = "Last Name less than 4 chars";
                  }
                  if (!values.firstName) {
                    errors.firstName = "Required";
                  } else if (values.firstName.length < 4) {
                    errors.firstName = "First Name less than 4 chars";
                  }

                  return errors;
                }}
                onSubmit={(values, { setSubmitting , resetForm}) => {
                  dispatch(register({...values,type:"user"})); 
                resetForm();

              

            
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <Div2 onSubmit={handleSubmit}>
                    <div
                      style={{
                        marginBottom: "12px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {" "}
                      <Label style={{ color: "rgb(31, 164, 124)" }} />
                      <Label1>REGISTER</Label1>{" "}
                    </div>

                    <Div3>
                      <Div4>
                        <Label2>First Name *</Label2>
                        <Input1
                          type="text"
                          name="firstName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.firstName}
                          style={{ width: "100%" }}
                        />
                        <ErrorMessage>
                          {" "}
                          {errors.firstName &&
                            touched.firstName &&
                            errors.firstName}
                        </ErrorMessage>
                      </Div4>
                      <Div4>
                        <Label2>Last Name *</Label2>
                        <Input1
                          type="text"
                          name="lastName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.lastName}
                          style={{ width: "100%" }}
                        />
                        <ErrorMessage>
                          {" "}
                          {errors.lastName &&
                            touched.lastName &&
                            errors.lastName}
                        </ErrorMessage>
                      </Div4>
                    </Div3>
                    <Label2>Email address *</Label2>
                    <Input1
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    <ErrorMessage>
                      {" "}
                      {errors.email && touched.email && errors.email}
                    </ErrorMessage>
                    <Label2>Password *</Label2>
                    <Input1
                      type="password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    <ErrorMessage>
                      {" "}
                      {errors.password && touched.password && errors.password}
                    </ErrorMessage>
                    <Label2>Repeat Password *</Label2>
                    <Input1
                      type="password"
                      name="repeat"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.repeat}
                    />
                    <ErrorMessage>
                      {errors.repeat && touched.repeat && errors.repeat}
                    </ErrorMessage>
                    <div
                      style={{
                        padding: "6px 0px",
                        marginBottom: "1rem",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Input2 type={"checkbox"} name="remember" id="remember" />
                      <span for="remember" style={{ color: "gray" }}>
                        {" "}
                        Remember me
                      </span>
                    </div>
                    {mydata2?.error && <Message>{mydata2.error}</Message>}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      onClick=
                       {handleSubmit}
                       
                       
                        
                     
                    >
                      SUBMIT
                    </Button>
                  </Div2>
                )}
              </Formik>
            </Div1>
          </div>
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
                  dispatch(logout());
            
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

export default Myaccount;
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

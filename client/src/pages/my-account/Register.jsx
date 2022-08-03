 
import { Label } from "@mui/icons-material";
import { Formik } from "formik";
import "./ordersgrid.css";
 
import React, { useEffect, useState } from "react";
 
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { listFormsbyEmail } from "../../Redux/Actions/FormAction";
import {  register } from "../../Redux/Actions/UserAction";
 
function Register() {    const dispatch = useDispatch();
   const mydata = useSelector((state) => state.userLogin);
 
  const mydata2 = useSelector((state) => state.userRegister);
  {mydata2?.error && <Message>{mydata2.error}</Message>}

  const [orders, setOrders] = useState(false);

  {/*useEffect(() => {
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
  }, [mydata2]);*/}
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
            <Div1>
            
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
     
    </>
  );
}

export default Register;
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

  width: 100%;
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
  display: flex;margin: auto;
  margin-top: 3rem;
  width: 40%;
  
  @media (max-width: 800px) {
    flex-direction: column;
    width:100%;
    margin: auto;
  }
`;
const Div2 = styled.form`


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


const Div3 = styled.div`
  display: flex;
  width: 100%;
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
 export const Message = styled.span`
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

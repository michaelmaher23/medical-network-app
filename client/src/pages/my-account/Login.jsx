import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Label } from "@mui/icons-material";
import { Formik } from "formik";
import "./ordersgrid.css";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Grid from "react-loading-icons/dist/esm/components/grid";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { listFormsbyEmail } from "../../Redux/Actions/FormAction";
import {
  login,
  register,
  logout,
  social,
} from "../../Redux/Actions/UserAction";
import { faUsd } from "@fortawesome/free-solid-svg-icons";
import { FAB, GAP, auth } from "../../firebase.js";
import Myprofile from "../Mypro";
function Login() {
  const [r, setR] = useState(true);
  const facebook1 = (e) => {
    e.preventDefault();
    try {
      auth
        .signInWithPopup(FAB)
        .then((result) => {
          console.log(result?.user?.displayName);
          var user = result?.user ? result?.user : null;
          dispatch(
            social({
              email: user.email,
              lastName: user?.displayName?.split(" ")[1],
              firstName: user?.displayName?.split(" ")[0],
              type: "social",
            })
          );
        })
        .catch((error) => {
          console.log(error.code);
          if (error?.code == "auth/account-exists-with-different-credential") {
            dispatch(
              social({
                email: error?.customData?._tokenResponse?.email,
                lastName:
                  error?.customData?._tokenResponse?.displayName?.split(" ")[1],
                firstName:
                  error?.customData?._tokenResponse?.displayName?.split(" ")[0],
                type: "social",
              })
            );
          }
        });
    } catch (err) {
      console.log(err);
    }

    window.location.reload();
  };

  const google1 = (e) => {
    e.preventDefault();
    try {
      auth
        ?.signInWithPopup(GAP)
        .then((result) => {
          var credential = result.credential;

          var user = result.user;

          dispatch(
            social({
              email: user?.email,
              lastName: user?.displayName?.split(" ")?.[1],
              firstName: user?.displayName?.split(" ")?.[0],
              type: "social",
            })
          );
        })
        .catch((error) => {
          console.log(error);

          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
        });
    } catch (err) {
      console.log(err);
    }
  };

  const mydata = useSelector((state) => state.userLogin);
  {mydata?.error && <Message>{mydata?.error}</Message>}
 

  const dispatch = useDispatch();


  {
    /*
 moment.updateLocale('en', {
    months : [
        "يناير", "فبراير", "مارس", "ابريل", "مايو", "يونيو", "يوليو",
        "اغطسطس", "سبتمبر", "اكتوبر", "نوفمبر", "ديسمبر"
    ]
});
 
*/
  }
  return (
    <>
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
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
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
          onSubmit={(values, { setSubmitting, resetForm }) => {
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
                <Label1>LOGIN</Label1>
              </div>{" "}
              <FacebookButton onClick={(e) => facebook1(e)}>
                <FontAwesomeIcon icon={faFacebookF} />
                <span className="textlabel"> Sign in with Facebook </span>
              </FacebookButton>
              <div>
                <GoogleButton onClick={(e) => google1(e)}>
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
      </Div1>
    </>
  );
}

export default Login;
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
  display: flex;
  margin: auto;
  margin-top: 3rem;
  width: 40%;

  @media (max-width: 800px) {
    flex-direction: column;
    width: 100%;
    margin: auto;
  }
`;
const Div2 = styled.form`
  width: 100%;
  @media (max-width: 800px) {
    margin-bottom: 4rem;

    padding: 2rem 0;
  }
`;
const FacebookButton = styled.button`
  margin-top: 1rem;
  width: 100%;
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
  width: 100%;
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

import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import m from "../images/m.png";
import { useDispatch, useSelector } from "react-redux";
import {register as reg} from "../../src/Redux/Actions/UserAction.js";
import { Message } from "./my-account/Register";
const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup
      .string()
      .required("No password provided.")
      .min(8, " Short Password - should be 8 chars min.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    cfpassword: yup
      .string()
      .required("No password provided.")
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .min(8, "Short Password - should be 8 chars min.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  })
  .required();
const A = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  padding: "7px",
  paddingBottom: "2rem",
  paddingTop: "0px",
  fontWeight: "700",
  color: "var(--main)",
}));
const Field = styled(TextField)(({ theme }) => ({
  marginBottom: "2.2rem",
  height: "2.9rem",
  "& .MuiOutlinedInput-root": {
    height: "2.9rem",

    "& fieldset": {
      // - The <fieldset> inside the Input-root
      borderColor: "grey",
      borderRadius: "7px",
      // - Set the Input border
    },
    "&:hover fieldset": {
      borderColor: "grey", // - Set the Input border when parent has :hover
    },
    "&.Mui-focused fieldset": {
      // - Set the Input border when parent is focused
      borderColor: "var(--main)",
    },
  },
}));
const BOX = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  width: "77%",
  margin: "auto",
  paddingInline: "5%",
  paddingTop: "0rem",
  borderRadius: "13px",
  marginTop: "4.6rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0rem",
  backgroundColor: "rgba(241, 179, 165 ,.5)",
  paddingTop: "0rem",
  paddingBottom: ".8rem",
  [theme.breakpoints.up("md")]: {
    width: "35%",
  },
}));
function Auth() {
  const mydata2 = useSelector((state) => state.userRegister);
  const [valuesmain, setValuesmain] = useState("");

  const location = useLocation();
  const [auth, setAuth] = useState("login");
  useEffect(() => {
    setAuth(location.pathname);
  }, [location.pathname]);
  useEffect(() => {
    setValuesmain(null);
  }, [location.pathname]);
  const [values, setValues] = React.useState({
    password: "",
    cfpassword: "",
    showPassword: false,
    showcfPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
      showcfPassword: !values.showcfPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
const dispatch = useDispatch();   
  const onSubmit = (data) => {
    console.log(data);
    
 
    dispatch(reg({...data,type:"user"}));


  };

  return (
    <BOX>
      <img
        alt=""
        src={m}
        style={{ width: "8rem", margin: "auto", padding: "0" }}
      />
      <A variant="h6" component="h2">
        {auth == "/login" ? "Sign in" : "Register"}
      </A>

      {auth == "/signup" ? (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Field
              InputLabelProps={{
                style: { color: "var(--main)", "&:focus": { color: "red" } },
              }}
              fullWidth
              {...register("email", { required: true })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle sx={{ color: "var(--main)" }} />
                  </InputAdornment>
                ),
              }}
              label="Email"
              helperText={
                errors.email && (
                  <span style={{ color: " var(--main)", paddingTop: "0px" }}>
                    {errors.email?.message}
                  </span>
                )
              }
            />
            <Field
              sx={{ color: "var(--main)" }}
              InputLabelProps={{
                style: { fontSize: ".9rem", color: "var(--main)" },
              }}
              fullWidth
              {...register("password", { required: true, minLength: 8 })}
              variant="outlined"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              label="Password"
              onChange={handleChange("password")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? (
                        <VisibilityOff sx={{ color: "red" }} />
                      ) : (
                        <Visibility sx={{ color: "var(--main)" }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              helperText={
                errors.password && (
                  <span style={{ color: " var(--main)", paddingTop: "0px" }}>
                    {errors.password?.message}
                  </span>
                )
              }
            />

            <Field
              sx={{ color: "var(--main)", marginBottom: "3" }}
              InputLabelProps={{
                style: { fontSize: ".9rem", color: "var(--main)" },
              }}
              fullWidth
              {...register("cfpassword")}
              type={values.showcfPassword ? "text" : "password"}
              value={values.cfpassword}
              label="Repeat Password"
              onChange={handleChange("cfpassword")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showcfPassword ? (
                        <VisibilityOff sx={{ color: "red" }} />
                      ) : (
                        <Visibility sx={{ color: "grey" }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              helperText={
                errors.cfpassword && (
                  <span style={{ color: " var(--main)", paddingTop: "0px" }}>
                    {errors.cfpassword?.message}
                  </span>
                )
              }
            />
 {mydata2?.error && <Message>{mydata2.error}</Message>}
            <Button
              type="submit"
              sx={{
                color: "var(--main)",
                borderRadius: "25px",
                width: "70%",
                mx: "15%",
                backgroundColor: "rgba(241, 179, 165 ,.99)",
              }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </form>
        </>
      ) : (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Field
              InputLabelProps={{
                style: { color: "var(--main)", "&:focus": { color: "red" } },
              }}
              fullWidth
              {...register("email", { required: true })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle sx={{ color: "var(--main)" }} />
                  </InputAdornment>
                ),
              }}
              label="Email"
              helperText={
                errors.email && (
                  <span style={{ color: " var(--main)", paddingTop: "0px" }}>
                    {errors.email?.message}
                  </span>
                )
              }
            />
            <Field
              sx={{ color: "var(--main)" }}
              InputLabelProps={{
                style: { fontSize: ".9rem", color: "var(--main)" },
              }}
              fullWidth
              {...register("password", { required: true, minLength: 8 })}
              variant="outlined"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              label="Password"
              onChange={handleChange("password")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? (
                        <VisibilityOff sx={{ color: "red" }} />
                      ) : (
                        <Visibility sx={{ color: "var(--main)" }} />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              helperText={
                errors.password && (
                  <span style={{ color: " var(--main)", paddingTop: "0px" }}>
                    {errors.password?.message}
                  </span>
                )
              }
            />
            <Button
              type="submit"
              sx={{
                color: "var(--main)",
                borderRadius: "25px",
                width: "70%",
                mx: "15%",
                backgroundColor: "rgba(241, 179, 165 ,.99)",
              }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
        

          </form> 
          
        </>
      )}
    </BOX>
  );
}

export default Auth;

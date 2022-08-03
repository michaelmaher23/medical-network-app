import React from "react";

import PhoneInput from "react-phone-input-2";

import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputBase,
  InputLabel,
  styled,
  Typography,
} from "@mui/material";
import "./stylee.css";
import { useState } from "react";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #dbdbdb",
    fontSize: 14,
    width: "100%",
    padding: "6px 6px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `green 0 0 0 1px`,
      borderColor: "transparent",
    },
  },
}));

export const renderText = ({ type, label, color, ...rest }) => (
  <>
    <Typography
      mt={5}
      sx={{ fontWeight: "600", fontSize: "15px", color: "green" }}
      color={color}
      {...rest}
    >
      {label}
    </Typography>
  </>
);

export const renderInputField = ({
  name,
  label,
  type,
  icon,
  f,
  state,
  onChange,
}) => {
  const { data, errors } = state;

  return (
    <>
      <FormControl
        error={errors[name] ? true : false}
        sx={{
          border: "none",
          outline: "none",
          boxShadow: "none",
          width: "100%",
        }}
        mt={2}
        variant="standard"
      >
        <InputLabel fullWidth={true} color="success" shrink>
          {label}
        </InputLabel>
        <BootstrapInput
          type={type ? type : "text"}
          value={data[name]}
          startAdornment={
            <InputAdornment position="start">
              <IconButton aria-label="toggle password visibility" edge="end">
                {icon}
              </IconButton>
            </InputAdornment>
          }
          name={name}
          onChange={(e) => {
            onChange(e);
          }}
        />
        <FormHelperText>{errors[name]}</FormHelperText>
      </FormControl>
    </>
  );
};
export const RenderSelectCountries = ({
  name,
  label,
  options,
  icon,
  state,
  onChange,
}) => {
  const [s, setS] = useState({ country: "", region: "" });
  const selectCountry = (val) => {
    setS({ country: val });
  };

  const selectRegion = (val) => {
    setS({ ...s, region: val });
  };

  const { data, errors } = state;

  return (
    <>
      {" "}
      <FormControl
        name={name}
        value={s}
        onChange={onChange}
        fullWidth={true}
        error={errors[name] ? true : false}
        sx={{
          border: "none",
          outline: "none",
          boxShadow: "none",
          width: "100%",
        }}
        mt={2}
        variant="standard"
      >
        <InputLabel color="success" id="demo-simple-select-label" shrink>
          {label}
        </InputLabel>
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "17px" }}
        >
          <IconButton edge="end">{icon}</IconButton>
       
          <BootstrapInput
            name={"country"}
            style={{
              fontSize: "13px",
              marginLeft: "6px",
              width: "50%",
              height: "2rem",
              borderRadius: "4px",
              border: "1px solid #e1e1e1",
              outline: "none",
            }}
            value={s.country}
            onChange={(e) => {
              selectCountry(e.target.value);
              onChange(e);
            }}
          />
  <BootstrapInput

style={{
  fontSize: "13px",
  marginLeft: "10%",
  width: "45%",
  height: "2rem",
  borderRadius: "4px",
  border: "1px solid #e1e1e1",
  outline: "none",
}}
name={"region"}
 
          value={s.region}
onChange={(e) => {selectRegion(e.target.value);  onChange(e)} } />
          {/*
       <div style={{display:'flex',width:'100%'}}>


       
        <CountryDropdown

name={"country"}     

 style={{
   fontSize: "13px",
   marginLeft: "6px",
   width: "50%",
   height: "2rem",
   borderRadius: "4px",
   border: "1px solid #e1e1e1",
   outline: "none",
 }}


          value={s.country}
          onChange={(e) => {selectCountry(e.target.value);  onChange(e)} } />
        <RegionDropdown

style={{
  fontSize: "13px",
  marginLeft: "10%",
  width: "45%",
  height: "2rem",
  borderRadius: "4px",
  border: "1px solid #e1e1e1",
  outline: "none",
}}
name={"region"}
  country={s.country}
          value={s.region}
onChange={(val,e) => {selectRegion(val);  onChange(e)} } />
         
          
      </div>
    
    
    */}
        </div>

        <FormHelperText style={{ color: "#783737" }}>
          {errors["region"] ? (
            <p style={{ color: "#d32f2f" }}> من فضلك ادخل البلد و المحافظة</p>
          ) : (
            ""
          )}
        </FormHelperText>
      </FormControl>
    </>
  );
};
const RenderSelect = ({ name, label, options, icon, state, onChange }) => {
  const { data, errors } = state;
  const [x, setX] = useState();
  return (
    <>
      {" "}
      <FormControl
        fullWidth={true}
        error={errors[name] ? true : false}
        sx={{
          border: "none",
          outline: "none",
          boxShadow: "none",
          width: "100%",
        }}
        mt={2}
        variant="standard"
      >
        <InputLabel color="success" id="demo-simple-select-label" shrink>
          {label}
        </InputLabel>
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "17px" }}
        >
          <IconButton edge="end">{icon}</IconButton>
          <select
            style={{
              fontSize: "13px",
              marginLeft: "6px",
              width: "100%",
              height: "2rem",
              borderRadius: "4px",
              border: "1px solid #e1e1e1",
              outline: "none",
            }}
            name={name}
            value={data[name]}
            onChange={onChange}
          >
            <option selected hidden value="Choose Here">
              Choose Here
            </option>
            <option value="000000">More that 1000 $</option>
            <option value="00000">More that 10000 $</option>
          </select>
        </div>

        <FormHelperText>{errors[name] ? errors[name] : ""}</FormHelperText>
      </FormControl>
    </>
  );
};
export const RenderSelectPhone = ({
  name,
  label,
  options,
  state,
  onChange,
  icon,
}) => {
  const { data, errors } = state;
  const [x, setX] = useState("02");
  const [y, setY] = useState();
  return (
    <>
      {" "}
      <FormControl
        fullWidth={true}
        error={errors[name] ? true : false}
        sx={{
          border: "none",
          outline: "none",
          boxShadow: "none",
          width: "100%",
        }}
        mt={2}
        variant="standard"
      >
        <InputLabel color="success" shrink>
          {label}
        </InputLabel>
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "17px" }}
        >
          <IconButton edge="end">{icon} </IconButton>
          <PhoneInput
            inputProps={{
              name: name,
              value: x,
              onChange: (e) => {
                onChange(e);
                setX(e.target.value);
              },
            }}
            specialLabel={""}
            country={"eg"}
            inputStyle={{}}
            onChange={(value, country, e, formattedValue) => {
              setY(country.dialCode);
              setX(value);
            }}
          />
        </div>

        <FormHelperText>{errors[name] ? errors[name] : ""}</FormHelperText>
      </FormControl>
    </>
  );
};

export const renderButton = ({ label, variant, color, fullWidth, onClick }) => (
  <Button
    xs={8}
    sm={5}
    sx={{ margin: "auto", color: "green", border: "1px solid green" }}
    variant={variant ? variant : "standard"}
    onClick={onClick}
  >
    Order Now
  </Button>
);
export default RenderSelect;

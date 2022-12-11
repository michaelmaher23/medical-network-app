import React, { useEffect, useRef } from "react";
import styled from "styled-components";




import {
  Box,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  Paper,  InputLabel,
  TextField,
} from "@mui/material";


import { styles } from "../common/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import {
  faEnvelope,
  faMobilePhone,
  faLocationPin,
  faAddressCard,
  faVcard,
  faMoneyBillAlt,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import {
  renderButton,
  renderInputField,
  renderText,
} from "../common/DisplayComponent";
import RenderSelect from "../common/DisplayComponent";
import {
  RenderSelectPhone,
  RenderSelectCountries,
} from "../common/DisplayComponent";
import { borderRadius } from "@mui/system";
import { faCalendarTimes } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";


const WhiteBorderTextField = styled(TextField)`

  & label.Mui-focused {
    color: #ffffff;
  }

  & .css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root{

&.Mui-focused  input {
      border:1px solid green;
      height:2rem;
      width:100%;
      padding: 0;
      padding-left: 9px;
     
    } 
      input {
      border:1px solid #e1e1e1;
      height:2rem;
      width:100%;
      padding: 0;
      padding-left: 9px;
      border-radius: 9px;
     
    } 
  }
  & .MuiOutlinedInput-root {
   fieldset {
      border:none;
      width:100%;
      height:2rem;
      margin-left: 1rem;
    } 

    &.Mui-focused fieldset {
      border-color: #8b1b1b;
    }
  }
`;


const Step1 = ({
  state,
  handleChange,
  handleNext,
  setIsChecked,
  setState,
  isChecked,
}) => {
  const f = (e) => {};
  
  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setIsChecked(!isChecked);
    // Don't miss the exclamation mark
  };
 

  const [value, setValue] = React.useState("");
  const [value2, setValue2] = React.useState("hjhjkh");

const ref3=useRef()
  const handleChanges = (newValue) => {
    setValue(newValue);  
   const {data}=state
  data["date"] = newValue;
    setState({...state,data})
 
   
  };
  useEffect(()=>{
    
   
    
    setValue2(value); 
 
  })

const {errors}=state
  return (
    <Paper style={styles.steps}>
      <Box mt={2} mb={2}>
        {renderText({
          label: "Fill Your Data",
          type: "p",

          align: "center",
        })}
      </Box>
      {state.message !== "" ? (
        <>
          <div
            style={{
              width: "fit-content",
              padding: "3px 10%",
              color: "#5a1717",
              backgroundColor: "#edcfcf",
              borderRadius: "9px",
              height: "fit-content",
              margin: "auto",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              border: "1px solid #d4a79eec1",
            }}
          >
            {state.message}{" "}
          </div>
        </>
      ) : (
        ""
      )}
      <Grid container>
        <Grid
          item
          xs={12}
          sm={10}
          style={{ margin: "auto", marginBottom: "10px" }}
        >
          {renderInputField({
            state,
            icon: (
              <FontAwesomeIcon
                style={{ fontSize: "1.1rem", color: "green" }}
                icon={faVcard}
              />
            ),

            name: "firstName",
            label: "First Name",
            onChange: handleChange,
          })}
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          style={{ margin: "auto", marginBottom: "19px" }}
        >
          {renderInputField({
            state,
            f: f,
            icon: (
              <FontAwesomeIcon
                style={{ fontSize: "1.1rem", color: "green" }}
                icon={faVcard}
              />
            ),
            name: "lastName",
            label: "Last Name",
            onChange: handleChange,
          })}
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={10}
          style={{ margin: "auto", marginBottom: "19px" }}
        >
          <RenderSelect
            state={state}
            icon={
              <FontAwesomeIcon
                style={{
                  fontSize: "1.1rem",
                  marginLeft: "3px",
                  color: "green",
                }}
                icon={faMoneyBillAlt}
              />
            }
            name={"budget"}
            label={"Budget"}
            onChange={handleChange}
          ></RenderSelect>
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={10}
          style={{ margin: "auto", marginBottom: "19px" }}
        >
          <RenderSelectPhone




            state={state}
            type={"number"}
            name={"phone"}
            label={"phone"}
            icon={
              <FontAwesomeIcon
                style={{
                  color: "green",
                  fontSize: "1.2rem",
                  marginRight: "9px",
                }}
                icon={faMobilePhone}
              />
            }
            onChange={handleChange}
          ></RenderSelectPhone>
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={10}
          style={{ margin: "auto", marginBottom: "19px" }}
        >
          <RenderSelectCountries
            state={state}
            type={"select"}
            name={"s"}
            label={"Region"}
            icon={
              <FontAwesomeIcon
                style={{
                  color: "green",
                  fontSize: "1.2rem",
                  marginRight: "3px",
                }}
                icon={faLocationPin}
              />
            }
            onChange={handleChange}
          ></RenderSelectCountries>
        </Grid>
      </Grid>
      <Grid container>
        {" "}
        <Grid
          item
          xs={12}
          sm={10}
          style={{ margin: "auto", marginBottom: "19px" }}
        >
          {renderInputField({
            state,
            name: "email",
            label: "Email",
            icon: (
              <FontAwesomeIcon
                style={{ fontSize: "1.1rem", color: "green" }}
                icon={faEnvelope}
              />
            ),

            type: "email",
            onChange: handleChange,
          })}
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          style={{ margin: "auto", marginBottom: "19px" }}
        >
          {" "}
          {renderInputField({
            state,
            name: "address",
            label: "Address",
            icon: (
              <FontAwesomeIcon
                style={{ fontSize: "1.1rem", color: "green" }}
                icon={faAddressCard}
              />
            ),

            onChange: handleChange,
          })}
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        sm={10}
        style={{ margin: "auto", marginBottom: "19px" }}
      >


<FormControl
       sx={{width:"100%",}} 
       
   
        mt={2}
        variant="standard"
      >
        <InputLabel color="success" shrink>
          {"Date of Deliverance"}
        </InputLabel>
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "17px" }}
        >
          <IconButton edge="end">
          <FontAwesomeIcon
                style={{
                  color: "green",
                  fontSize: "1.2rem",
                  marginRight: "9px",
                }}
                icon={faCalendar}
              />          </IconButton>
          
      
        <DesktopDatePicker
      
         
    name="date"
           onError={(error)=>{
            if(error!==null && value!==""){
                 errors["date"]=error;
          setState({...state,errors})
            }else{
              errors["date"]="";
              setState({...state,errors})
            }
         
          }}
           
      value={value}
            onChange={(y)=>{handleChanges(y);}} 
            
             PopperProps={{ sx:{
          
              "& .MuiPaper-root": {
                width: "fit-content",
                zIndex: "99999",
                boxShadow: "0px .6px 12px green",
                padding: 0,
                margin: 0,
                borderRadius: "19px",
                height: "270px",
                overflow: "hidden",
              },
              "& .MuiCalendarPicker-root": {
                width: "fit-content",
                height: "fit-content",
                backgroundColor: "rgb(255, 255, 255)",
                borderRadius: "19px",
              },
              "& .MuiPickersDay-dayWithMargin": {
                color: "green",
                backgroundColor: "#e1e1e1",
                borderRadius: "5px",
                width: "1.90rem",
                height: "1.5rem",
              },
              "& .MuiTabs-root": { backgroundColor: "rgb(255, 255, 255)" },
              "& .MuiPickersDay-dayWithMargin.Mui-selected": {
                backgroundColor: "green",
                color: "white",
              },
              "& .css-1w13o7u-MuiTypography-root ": {
                backgroundColor: "#57b84c",
                color: "white",
                transform: "scale(70%)",
                borderRadius: "9px",
              },
             


          }


}
          }  

        
       minDate={Date.now()}
    
          inputFormat="MM/dd/yyyy"
          renderInput={(params) => (
            <WhiteBorderTextField
      sx={{
        width: "100%",
        marginLeft:'9px',
        border:'none',
        padding: "0px",
        height: '2rem',
           paddingBottom: 0,
           marginTop: 0,
           fontWeight: 500


      }}
         
              {...params}
            />
          )}
        />  
        
        </div>
        <FormHelperText  style={{color:'#d32f2f'}}>{errors["date"]?"ادخل التاريخ بشكل صحيح":''}</FormHelperText>
      </FormControl>


      </Grid>

      <div
        style={{
          width: "fit-content",
          color: "green",
          margin: "auto",
          marginBottom: "19px",
        }}
      >
        <input
          checked={isChecked}
          style={{ marginRight: "9px" }}
          type="checkbox"
          onChange={checkboxHandler}
        />
        <span>
          {" "}
          I agree to <b>terms and conditions</b>
        </span>
      </div>
      {/* Don't miss the exclamation mark* */}

      <Grid container mt={2} p={0}>
        {renderButton({ label: "Next", onClick: handleNext })}
      </Grid>
    </Paper>
  );
};

export default Step1;

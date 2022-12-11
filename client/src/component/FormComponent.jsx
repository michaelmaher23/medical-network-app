import React, { Component, useRef } from "react";
import {useDispatch, useSelector} from 'react-redux'
import Frame10 from "./Steps/Frame10.svg"
import {
  Box,
  Grid,
  Paper,
  Stepper,
  Step,
  
  StepButton,
} from "@mui/material";
import Step1 from "./Steps/step1";
import Step2 from "./Steps/step2";
import Step3 from "./Steps/step3";
import FinalStep from "./Steps/FinalStep";

import { styles } from "./common/styles";

import * as yup from "yup";

import { useState } from "react";
import { formDetails } from "../Redux/Actions/FormAction";
import { clear, open } from "../Redux/Actions/CartAction";
const schesma = yup.object({
  firstName: yup.string().required("Required f ").min(6, "لا يقل عن ستة احرف"),
  lastName: yup.string().required("Required l").min(6, "لا يقل عن ستة احرف"),
  budget: yup.string().required("Required bu").min(3, "لا يقل عن اربع احرف"),
  phone: yup.string().required("Required p").min(6, "لا يقل عن ستة ارقام"),
  email: yup.string().email("not valid").required("email is req"),
  address: yup.string().required("Required ad").min(6, "لا يقل عن اربع احرف"),
});
let schema = yup.object().shape({
  email: yup.string().email("not email"),
});
let schema2 = yup.object().shape({
  phone: yup.number().required().positive().integer(),
});

// check validity

const FormComponent = () => {
  const dispatch=useDispatch()
  const [end,setEnd]=useState(true)
  const {totalAmount,items}=useSelector(state=>state.cart)
  console.log(totalAmount)
  const [state, setState] = useState({
    ok:1,
    message:"",
    data: {
   country:"",
   region:"",
      address: "",
      budget: "",
      email: "",
      firstName: "",
      lastName: "",
      
      date:"",
    
    },
    errors: {
      date:"",
      address: "",
      budget: "",
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      country:"",
   region:"",
    },
    steps: [{ label: "Checkout details" }, { label: "Order Complete" }],
    stepCount: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  const onSubmit = (data) => {
    console.log(data);
  };
  const [isChecked, setIsChecked] = useState(false);
  const handleOnChange = ({ target }) => {
   
    const { data, errors,ok } = state;
 if(target.name!=="email"  ){
 target.value.length < 4
      ? (errors[target.name] = ` لا ينبغي ان يقل عن اربع احرف ${target.name} `)
      : (errors[target.name] = "");
      setState({ ...state, errors  });

 }
   
   if (target.name === "phone") {
      schema2
        .isValid({
          phone: target.value,
        })
        .then((valid) => {
          if (valid == false) {
            errors[target.name] = ` يجب ادخال ارقام فقط`;
            setState({ ...state,  errors });

          } else {
            errors[target.name] = "";
            setState({ ...state, errors  });

          }
        })
    }

    if (target.name === "email") {
      schema
        .isValid({
          email: target.value,
        })
        .then((valid) => {
          if (valid == false) {
            errors[target.name] = `من فضلك ادخل ايميلا صالحا للاستخدام`;
            setState({ ...state,  errors  });

          } else {
            errors[target.name] = "";
            setState({ ...state,  errors  });
          }
        }) 
        
    }
    data[target.name] = target.value;
  
 
 

 
    setState({ ...state, data });

  };

  const handleNextStep = () => {
    
    let { stepCount,errors ,data,message} = state;
  
 let ok=1


for (const value of Object.values(errors)) {
  if(value!==''){
  console.log(value)
ok=0
   executeScroll()
message=`ادخل البيانات بشكل صحيح`

break;
  }else{
  
     for (const value of Object.values(data)) {
  if(value==''){
 console.log(value)
ok=0
 
message="ادخل البيانات المطلوبة" 
executeScroll()
 
 break;
  }else{
    message="" 
    
  }




  
}  
  }
  
} 



setState({ ...state, message});



   if(ok==1 && isChecked){

try{ 
   stepCount=stepCount+ok
  
 dispatch(formDetails({...data,totalAmount:totalAmount,items:items}))

 setState({ ...state, stepCount }); 
 setEnd(false) 
     

setTimeout(() => {
     dispatch(clear())  
}, 10000);
 
    
        
      
    

  
   
   







}catch(err){

}
 }
     

   
      
  };
  const handleBackStep = () => {
    let { stepCount } = state;
    stepCount = stepCount - 1;
    setState({ ...state, stepCount });

  };
  const handleStep = (step) => () => {
    setState({ ...state, stepCount: step });
  };
  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Step1
            state={state}
            handleChange={handleOnChange}
            handleNext={handleNextStep}
            setIsChecked={setIsChecked}
            isChecked={isChecked}
            setState={setState}
          />
        );

      case 1:
        return <FinalStep state={state} />;
      default:
        return (
          <Step1
            state={state}
            handleChange={handleOnChange}
            handleNext={handleNextStep}
            setIsChecked={setIsChecked}
            isChecked={isChecked}
            setState={setState}
          />
        );
    }
  };
  const myRef = useRef(null)

  const executeScroll = () => myRef.current.scrollIntoView()    
  return (
   <> 
    {end &&  <Grid  container className={styles.formContainer}>
     
    <>  
    <div ref={myRef}  />
      <Grid
        item
        xs={12}
        sm={11}
        style={{ margin: "auto", border: "none", outline: "none" }}
      >   



        <form onSubmit={handleSubmit} className={styles.form}>
     
 <Paper component={Box} mb={0} pt={4} style={{ boxShadow: "none" }}>
            <Stepper
              nonLinear
              activeStep={state.stepCount}
              sx={styles.a}
              style={{ width: "80%", height: "1rem", margin: "auto" }}
            >



              {  state.steps.map((item, index) => (
                <Step key={item.label}>
                  <StepButton
                    onClick={handleStep(index)}
                    sx={{
                      backgroundColor: "#efefef",
                      height: "0rem",
                      borderRadius: "5px",
                    }}
                  >
                    {item.label}
                  </StepButton>
                </Step>
              ))}
            </Stepper>
          </Paper>


       

      

          {getStepContent(state.stepCount)}
       
       
       
        
       
        </form>
       
      </Grid></> 
    </Grid>  }
    
     {!end &&  (<img  src={Frame10} style={{marginTop:'0px',height:'50vh',width:'100%'}}/>)}

 </> )
}

export default FormComponent;

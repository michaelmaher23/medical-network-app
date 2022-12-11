import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Message, WhatsApp } from "@mui/icons-material";
import React, { useState } from "react";
import "./Radio.css";
function Radio(props) {
  const [state,setState]=useState({})
  function onValueChange(e) {
    if(e.target.name=="close"){
      setState({
        selectedOption:""
      });
    }else{
      setState({
      selectedOption: e.target.value
    });
    }
  
    console.log(state) ;
    if(e.target.value=="whats"){
      window.open('https://wa.me/20', '_blank');
   
    }
  }
  const formSubmit=(event)=> {
    event.preventDefault();
    console.log(state.selectedOption)
   
  }


  return (
    <div class="rating-container">
     
      <div class="rating">
        <form  className="radio-toolbar">
          <span className="span55" style={{ marginRight: ".3rem" }}>
            <input
              type="radio"
              name="rating"
              value="whats"
              onChange={(e)=>onValueChange(e)}
              checked={state.selectedOption === "whats"}
              className="icon55"
              id="icon55"
              
            />
            <div className="icon5555">
              <WhatsApp sx={{ fontSize: "1.6rem" }} />
              <label className="label5555" for="icon55">
                Call us now
              </label>
            </div>
          </span>
          <span className="span55">
            <input
              type="radio"
              name="rating"
              onChange={(e)=>onValueChange(e)}
              className="icon555"
              id="icon555"
              value="message"
              checked={state.selectedOption === "message"}
            /> 
            <div className="icon5555"  >
              <Message sx={{ fontSize: "1.6rem" }} />
              <label className="label5555" style={{   visibility:(state?.selectedoption=="message")?"hidden":"visible"}} for="icon555">
                Send Message
              </label>{state?.selectedOption=='message'?(<textarea name="msgs"  onChange={e=>props.onChange(e)}  className="inpt55"   ></textarea>):(<div></div>)}
            </div>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Radio;

import React from "react";
import "./Subs.css";
import Sub from "./Sub.png";
import { Post,Get } from "../../utils/JsonOperations";
import { useState } from "react";
import { useEffect } from "react";
function Subs() {
  const [email,setEmail]=useState(null);
  const [emails,setEmails]=useState([])
  const [showsuccess,setShowsuccess]=useState(false);
  useEffect(()=>{
    Get('http://localhost:5000/api/prods/getemails').then((data)=>
    {
    console.log(data);
    }
    )
   fetchGreeting()
  
  },[]) 
  async function fetchGreeting() {
      const response = await fetch('http://localhost:9000/', {
         method: 'POST',
         headers: {
           'content-type': 'application/json',
          
         },
         body: JSON.stringify({
          query: `
          query{
            get{
              email
            }
          } 
       `
         })
      });
      const responseBody = await response.json();
      console.log(responseBody);
     setEmails(responseBody.data.get);
    }
  
  const sendData=async()=>{
 await Post('http://localhost:5000/api/prods/postemail',{email}).then((data)=>
 {
 console.log(data)
if (data.email){
setShowsuccess(true)
setEmail('Done!')
}
else{
setShowsuccess(false)
setEmail("Enter Email Again!")
}
 }
 )

      

  }
  return (
    <>
      <div className="ToContain">
        <div className="firstDiv">
          <h2 className="MainTitle"> {showsuccess?'Congratulations🎉 Done ! ':'Keep in the know'}  </h2>
          <p className="secondtitle">
          {showsuccess?'You will be delivered by our newest Products.':'Subscribe to keep up-to-date with everything .'}  
          </p>
          <div className="SearchContainer">
            <input
             disabled={showsuccess?true:false}
              type="email"
              placeholder="Enter your email..."
              className="inpt"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          { emails[0].email}
            <button  disabled={showsuccess?true:false} className="sub" onClick={(e)=>sendData()}> {showsuccess?'Subscribed':'Subscribe'}     </button>
          </div>
        </div>
        <div className="SecondDiv">

          <img className="imga" src={Sub} />
        </div>
      </div>
    </>
  );
}

export default Subs;

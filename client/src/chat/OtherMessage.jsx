import React from "react";
import chaticon from "../images/chaticon.webp";
import ReactTimeAgo from 'react-time-ago'

function OtherMessage({email,message}) {
  return (
    <div style={{ marginBottom: "10px",   }}>
      <div
        style={{
          width: "var(--chatwidth)",
          display: "flex",
          margin : "auto",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
         
             <ReactTimeAgo  style={{
                minWidth: "5rem",
                color: "grey",
                paddingLeft: ".7rem",
                opacity: ".9",
                fontSize: "11px",
                fontWeight: "600",

              }} date={Date.now()} locale="en-US"/>
           

            <div
              style={{
                width: "9rem",
                display: "flex",
                justifyContent: "flex-end",
                alignItems:'center'
                ,marginBottom:'.5rem',
                gap:'10px'
              }}
            >
            
              <p
                style={{
                  textAlign:'center',
                  color: "var(--main)",
                   padding:'4px',
                   borderRadius:'5px',
                  opacity: ".8",
                  fontSize: "13px",
                  fontWeight: "700",
                  backgroundColor:'var(--main2)',
                }}
              >
                {email}
              </p>
              <img alt='' 
                style={{ width: "30px", height: "30px", borderRadius: "15px" }}
                src={chaticon}
              />

            </div>


          </div>
          <div
            style={{
                maxWidth: "80%",
                width:'fit-content',
              backgroundColor: "var(--main)",
              marginRight: "1rem",
               height: "auto",
              borderRadius: "15px",
              marginLeft:'auto',
              borderTopRightRadius: "0",
            }}
          >
            <p
              style={{
               
                padding: ".6rem",
                fontSize: "12px",
                fontWeight: "600",
                color: "var(--main2)",
                textAlign:'right',
                wordBreak:'break-word'
              }}
            >{message}
            </p>
          </div>

    </div>
  );
}

export default OtherMessage;

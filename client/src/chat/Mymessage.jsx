import React from 'react'
import chaticon from "../images/chaticon.webp";
import ReactTimeAgo from 'react-time-ago'

function Mymessage({email,message,h}) {
  return (
    <div style={{marginBottom:'10px', }}  >
        <div
            style={{
              width: "var(--chatwidth)",
              display: "flex",
              margin: "auto",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems:'center',
            }}
          >
            <div
              style={{
                width: "9rem",
                display: "flex",
                justifyContent: "flex-start",
                alignItems:'center'
                ,marginBottom:'.5rem',
                gap:'10px'
              }}
            >
              <img alt='' 
                style={{ width: "30px", height: "30px", borderRadius: "15px" }}
                src={chaticon}
              />
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
            </div>
           
      
             
             <ReactTimeAgo  style={{
                minWidth: "5rem",
                color: "grey",
                paddingLeft: ".7rem",
                opacity: ".9",
                fontSize: "11px",
                fontWeight: "600",

              }} date={Date.now()} locale="en-US"/>
             



         
          </div>
          <div
            style={{
                maxWidth: "80%",
                width:'fit-content',
              backgroundColor: "#c4aead",
              marginLeft: "1rem",
               height: "auto",
              borderRadius: "15px",
              borderTopLeftRadius: "0",
            }}
          >
            <p
              style={{
                padding: ".6rem",
                fontSize: "12px",
                fontWeight: "600",
                color: "var(--main)",
                textAlign:'left',
                wordBreak:'break-word'
              }}
            >{message}
            </p>
          </div>




    </div>
  )
}

export default Mymessage
import React, { useState } from "react";
import Avatar from "./Avatar.jsx";
import { styles } from "./styles.js";
import { Bars } from "react-loading-icons";
import ChatRoom from "./ChatRoom.jsx";
 
function EmailForm() {
  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [start, setStart] = useState('');
  const [hover, setHover] = useState(false);
  const handleSUB = (e) => {
      e.preventDefault();
      setStart(email);
     
      setLoading(true);
      
      
    }  
  
  return (<>
    {!start && <div
      style={{ ...styles.emailFormWindow, ...{ height: "calc(100% )" , opacity: "1" } }}
    >
      <div style={{ height: "0px" }}>
        <div style={{ ...styles.stripe }} />
      </div>
      <div
        className="transition-5"
        style={{
          ...styles.loadingDiv,
          ...{
            zIndex: loading ? "10" : "-1",
            opacity: loading ? ".33" : "0",
          },
        }}
      ></div>

      <Bars  
        className="transition-5 avatar"
        style={{
          ...styles.loadingIcon,
          ...{
            zIndex: loading ? "1" : "1",
            opacity: loading ? "1" : "1",
            top: "85%",
            height:'20%',
            left: "calc(50% - 40px)",
          },
        }}
      />
      <div
        style={{
          position: "absolute",
          textAlign: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <Avatar  
          style={{ position: "absolute", left: "calc(80% - 25px)", top: "5%" }}
        />
        <div className="LIVESUPPORT" style={styles.topText}>
          <br />
          Live Support
        </div>
        <form   
          onSubmit={handleSUB}
          style={{ position: "relative", width: "100%", top: "19%" }}
        >
          <input className="emailformchat" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.emailInput}
            placeholder="Your Email"
          />
          {loading ? (
            <div style={styles.bottomText}>Waiting...</div>
          ) : (
            <button
              onMouseEnter={() => {
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
              type="submit"   className="avatar"
              disabled={email ? false : true}
              style={{
                ...{
                  cursor: email ? "pointer" : "not-allowed",
                  position: "absolute",
                  width: "8rem",
                  top: "150%",
                  height: "2rem",
                  border: "none",
                  outline: "none",
                  fontWeight: "600",
                  padding: ".5rem",
                  borderRadius: "25px",
                  left: "calc(50% - 4rem",
                  color: email ? "var(--main)" : "var(--main)",
                  backgroundColor: email ? "var(--main2)" : "",
                
                },
                ...(hover ? styles.hover : null),
              }}
            >
              {" "}
              Start Live Chat{" "}
            </button>
          )}
        </form>
      </div>
    </div>  }
    
    {start && <ChatRoom email={start}/> }</>
  );
}

export default EmailForm;

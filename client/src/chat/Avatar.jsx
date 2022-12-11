import React, { useState } from "react";
import { styles } from "./styles.js";
function Avatar(props) {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={props.style}>
      {/*
      <div  
        className="transition-3 avatar"
        style={{ ...styles.avatarHello, ...{ opacity: hovered ? "1" : "0" } }}
      >
        Michael
      </div>
      
      */}
      <div
        onClick={() => props.onClick && props.onClick()}
        className="transition-3   avatar   "
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          ...styles.chatWithMeButton,
          ...{ border: hovered ? "1px solid var(--main)" : "2px solid var(--main)" },
        }}
      />
    </div>
  );
}

export default Avatar;

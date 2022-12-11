import React, { useState, useEffect, useRef } from "react";
import Avatar from "./Avatar.jsx";
import SupportWindow from "./SupportWindow.jsx";

function SupportEngine() {
  const ref = useRef(null);
  const [visble, setVisble] = useState(false);
 
  useEffect(() => {
    function handleClickOutSide(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setVisble(false);
    
       
      }
    }
    document.addEventListener("mouseup", handleClickOutSide);

  
  }, [ref]);
  return (
    <div ref={ref}>
      <SupportWindow  visble={visble} />

      <Avatar
       
        onClick={() => setVisble(true)}
        style={{
          position: "fixed",
          zIndex: "100",
          bottom: "10px",
          right: "10px",
        }}
      />
    </div>
  );
}

export default SupportEngine;

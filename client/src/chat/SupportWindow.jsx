import React from "react";
import EmailForm from "./EmailForm.jsx";
import { styles } from "./styles.js";
function SupportWindow({  visble }) {
  return (
    <div
      className="transition-5"
      style={{
        ...styles.supportWindow,
        ...{ display: visble ? "block" : "none" },
      }}
    >
      <EmailForm visble={visble}/>
    </div>
  );
}

export default SupportWindow;

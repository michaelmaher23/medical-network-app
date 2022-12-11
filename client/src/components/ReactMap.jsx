import React, { useEffect, useRef, useState } from "react";
 import Map from "./Map";
import "./ReactMap.css";
import corona from "./corona.PNG";
function ReactMap() {
  const render = (status) => {
    return <h1>{status}</h1>;
  };

  return (
    <>
      <div className="mapsection" style={{ width: "100%", display: "flex" }}>
        <div className="frameareacont">
          <div className="frameareaoverlay"></div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13808.58806514824!2d31.29695625!3d30.089975600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1654687440416!5m2!1sar!2seg"
            referrerpolicy="no-referrer-when-downgrade"
            className="theframe "
            style={{
              
          
            }}
          >
            <div></div>
          </iframe>
        </div>
        <div className="theotherareacont">
          <div className="theotherarea">
            <img className="theimage" src={corona} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ReactMap;

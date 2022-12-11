import { Stars } from "@mui/icons-material";
import React from "react";
import "./ProductCard.css";
import original from "./original.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faStar} from "@fortawesome/free-regular-svg-icons"

function ProductCard({ title, image, founder }) {
  return (
    <div className="mainContainer">
      <div className="imageContainer">
        <img className="imageCard" src={image} />
     <FontAwesomeIcon style={{position:'absolute',top:'.4rem',fontSize:'.9rem' ,left:'.4rem',color:'#008578' ,padding:'.2rem', borderRadius:'50%',cursor:'pointer',backgroundColor:'white'}} icon={faStar}/>
 
      </div>
      <div className="titlesdiv">
        <span className="cardspan">Charity Organization</span>
        <p className="titlecard">{title}</p>
        <div className="allstarsdiv">
          <Stars className="stars" />
          <Stars className="stars" />
          <Stars className="stars" />
          <Stars className="stars" />
          <Stars className="stars" />
        </div>
        <span style={{ lineHeight: "0" }} className="cardspan">
          Research and service to the patients are rising since the Date of Construction.
        </span>
        <div className="cardend">
          <div className="enddiv">
            <p className="enddivbig">Thanks to the effort of</p>
            <span className="enddivsmall">{founder}</span>
          </div>
          <div>
            <button className="cardbutton">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

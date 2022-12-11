import React from "react";
import '../components/Cards.css'
import image7 from '../images/image7.png'
import image2 from '../images/image2.png'
import image6 from '../images/image6.png'

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import { Link } from "react-router-dom";

function Cards() {
  return (
    <div   className="grids">
      <div className="outline">
        <div className="image1">
          <img alt=''  src={image6}/>
          <div className="category">
            <p>Research</p>
          </div>
        </div>
        <div className="title">
          <p>Research in Action Research in Action Research in Action</p>
        </div>
         <div className="info">
         <div style={{display:'flex',alignItems:'center'}}> <CalendarMonthIcon style={{color:'var(--main)',fontSize:'19px',marginRight:'5px'}} /><p>  17/2/1994 2000 4pm  </p>
        </div>  <ReadMoreIcon/>
        </div>
      </div>
   
      <div className="outline">
        <div className="image1">
          <img alt=''  src={image2}/>
          <div className="category">
            <p> Students</p>
          </div>
        </div>
       <Link to='article'style={{textDecoration:'none'}}> <div className="title" >
          <p>Learn From the Best Learn From the Best  Learn From the </p>
        </div></Link>
        <div className="info">
         <div style={{display:'flex',alignItems:'center'}}> <CalendarMonthIcon style={{color:'var(--main)',fontSize:'19px',marginRight:'5px'}} /><p>  17/2/1994 2000 4pm  </p>
        </div>  <ReadMoreIcon/>
        </div>
      </div>
      <div className="outline">
        <div className="image1">
          <img alt=''  src={image7}/>
          <div className="category">
            <p> Corona Virus</p>
          </div>
        </div>
        <div className="title">
          <p>Latest coronavirus news as of 1pm 16 May.</p>
        </div>
   
<div className="info">
         <div style={{display:'flex',alignItems:'center'}}> <CalendarMonthIcon style={{color:'var(--main)',fontSize:'19px',marginRight:'5px'}} /><p>  17/2/1994 2000 4pm  </p>
        </div>  <ReadMoreIcon/>
        </div> </div>
    </div>
  );
}

export default Cards;

import React, { useEffect } from "react";
import styled from "styled-components";
 import './BannerGrid.css'
 
 
 import MuiMasonary from '../components/MuiMasonary'
function BannerGrid() {
  return (

          <div>
      <Banner>
        <BannerLeft>
          <div> <h5 className="sectionsidesmall" >WAYS TO EXPAND  </h5>
          <h3  className="sectionsidetitle">Discover Medical Devices that fit Patients needs and safety.</h3>
          </div>   <p> Access Our medical services on the go! Control your clinic with advanced Devices. Explore ways of how can you import those Technologies.</p>
           <button className="btnbanner">
         Start Now
           </button>
        </BannerLeft>
        <div  style={{ padding:'5px',margin:'0'}} className="height">
            <BannerRight> 
           <div className='animate'>
                 
                 <MuiMasonary  />
            </div>

            <div className='animate' >
                 
                 <MuiMasonary  />
            </div>
          
         
           
         </BannerRight> 
        </div>
       
      </Banner>
    </div>

  
  )
}

export default BannerGrid

const Banner = styled.div`

  width:97%;
  display: flex;
  flex-direction: row;
  
  @media (max-width: 800px) {
    padding-top: 1rem;
    flex-direction: column;
  }
  @media (max-width: 500px) {
  
    flex-direction: column;
  }
`;
const BannerLeft = styled.div`
display: flex;
flex-direction:column;
justify-content: flex-start;
>*{
    margin-bottom: 2rem;
}
margin: 0;
margin-top: 1rem;

padding:0rem 6rem 1rem 3rem;
 flex:50%;

 .sectionsidesmall{
    font-weight: 900;
   
letter-spacing: 1px;
     color: #4e5c6186;
    font-size:16px;
 }
  .sectionsidetitle {
    font-family: Helvetica Neue,sans-serif;
     font-weight: 700;
     line-height: 1.2;
     color: #11a683;
     
     margin: 0;
    font-size: 1.575rem;
    @media (max-width:950px){
      width:90%;
margin-top:0;
    }
    @media (max-width: 800px) {
      text-align: center;
      margin:auto;
      margin-bottom: 1rem;
    }
  }
  p{
    font-family: Helvetica Neue,sans-serif;
    font-weight: 400;
   
    font-size: 1.1rem;
    line-height: 1.57143;
  
     
  }
  .btnbanner{
   

   padding: .5rem;
   outline: none;
   position: relative;
    display: inline-block;
    width: 180px;
    min-height: 47px;
    z-index: 1;
    color: #d4dae4;
    outline: none;
    cursor: pointer;
    overflow: hidden;
    padding: 13px 22px;
    text-align: center;
    text-decoration: none;
    text-transform: none;
    font-weight: 700;
    border-radius: 6px;
    border: 2px solid transparent;
    transition: all .35s ease 0s;
    background-color: #11a683;
   
    font-size: 1.2rem;
    line-height: .875;
  }
@media (max-width:800px){
    display: flex;
flex-direction:column;
width:95%;
 
justify-content: space-around;
>*{
    margin-bottom: 1.3rem;
}
margin: 0;
 

padding:0;
 
margin: auto;
.sectionsidesmall{
    font-weight: 900;
   
letter-spacing: 1px;
     color: #4e5c6186;
    font-size:11px;
    text-align: center;
 }
  .sectionsidetitle {
    font-family: Helvetica Neue,sans-serif;
     font-weight: 700;
     line-height: 1.2;
     color: #11a683;
     text-align: center;
     
    font-size: 17px;
   
  }
  p{
    font-family: Helvetica Neue,sans-serif;
    font-weight: 400;
    text-align: center;

    font-size: 13px;
    line-height: 1.57143;
  
     
  }
  .btnbanner{
   padding: .5rem;
   outline: none;
   position: relative;
    display: inline-block;
    width: 180px;
    min-height: 30px;
    z-index: 1;
    color: #d4dae4;
    outline: none;
    cursor: pointer;
    overflow: hidden;
    padding: 10px 15px;
    text-align: center;
    text-decoration: none;
    text-transform: none;
    font-weight: 700;
    border-radius: 6px;
    border: 2px solid transparent;
    transition: all .35s ease 0s;
    background-color: #11a683;
    margin: auto;
    font-size: 1.1rem;
    line-height: .875;
  }
margin-bottom: 2rem;


 }
 
`;
const BannerRight = styled.div`
flex:38%;
width: 100%;
height:fit-content;
margin-top: -595px;
z-index: -10;
overflow: hidden;
position: relative;

 .animate
 {
    height: 595px;
 position: relative;
 animation: move 12s infinite linear;
   

 @keyframes move {
		0%{
            transform: translateY(-595px); 
         
        }
        50%{
            transform: translateY(-300px);
          

                  }
      
        100%{
            transform: translateY(0px);
         
        }
		} 

}.animate2
 {
    height: 500px;
 position: relative;
 animation: move 5s alternate linear;

 margin-top: -500px;



 }
 @keyframes move {
		0%{
            transform: translateY(0px);

        }
        50%{
            transform: translateY(295px);
          
        }
        100%{
            transform: translateY(590px);
           
		} 

}
 
 `;

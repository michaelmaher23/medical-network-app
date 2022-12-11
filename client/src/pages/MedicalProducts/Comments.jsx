import React from 'react'
import './Comments.css'
import CallAgent from '../../chat/CallAgent.PNG'
import Title from "../../components/Title";
import { Divider } from "../Home";
import styled from "styled-components";
import { Container } from './Description';
import reviews from './reviews.png'
import reviews2 from './reviews2.png'
import { Rate } from 'antd';
import { RateReview } from '@mui/icons-material';

function Comments() {
  return (
<>
    {" "}
    <div
      style={{
        width: "fit-content",
        margin: "auto",
        textAlign: "center",
        borderBottom: "4px solid rgb(31, 164, 124)",
      }}
    >
      <Divider height={"3rem"} />
      <Title Font="21px" mobile={false} color="Black" title="Reviews" />
    </div>
    <div style={{width:'91vw',display:'flex', margin:'auto',padding:'2rem 0rem 2rem 0rem'}}className='myreviews'> 
      

            <section class="comments_section">
      <ul class="comment_list">
       

            <li>
                <div class="comment_card"  >
                    <div class="figure1">
                        <img class="image" src={CallAgent} alt="Naveen Pantra"/>
                        <div class="fig_caption">
                            <h5 class="name">     <RateReview
          allowHalf
          style={{
           
            color: "rgb(31, 164, 124)",
           
           
            fontSize: "1rem",
          }}
  
        />  Naveen Pantra</h5>
                  
                 <Rate
          allowHalf
          style={{
           
            color: "gold",
           
           
            fontSize: "1rem",
          }}
  
        />
                             <p class="date">22nd March, 2020</p>
                        </div>
                    </div>
                   
        
                    <div class="comment_text">
                        Hello this is a test comment.   
                    </div>
                    <div class="comment_options">
                        <button>Edit</button>
                        <button>Comment   </button>
                        <button> Comments</button>  
                    </div>
              
                    <div class="comments">
                        <p class="no_comment_found">No Comments Found :(</p>     
                    </div>
                </div>
            </li>
            <li>
                <div class="comment_card"  >
                    <div class="figure1">
                        <img class="image" src={CallAgent} alt="Naveen Pantra"/>
                        <div class="fig_caption">
                            <h5 class="name">Naveen Pantra</h5>
                             <p class="date">22nd March, 2020</p>
                        </div>
                    </div>
                    <div class="comment_text">
                        Hello this is a test comment.
                    </div>
                    <div class="comment_options">
                        <button>Edit</button>
                        <button>Comment</button>
                        <button>Comments</button>  
                    </div>
                    <div class="comment_edit">
                       <textarea name="comment_edit" id="comment_edit" class="comment_edit_textarea"   rows="0"></textarea>
                       <p class="comment_message">Please enter more than one character to accept comment.</p>
                        <div class="comment_edit_options">
                            <button data-action="submit">Submit</button>
                            <button data-action="cancle">Cancle</button>
                        </div> 
                    </div>
                    <div class="comments">
                    <ul class="comment_list">
            <li>
                <div class="comment_card"  >
                    <div class="figure1">
                        <img class="image" src={CallAgent} alt="Naveen Pantra"/>
                        <div class="fig_caption">
                            <h5 class="name">Naveen Pantra</h5>
                            <h6 class="occupation">Software Engineer</h6>
                            <p class="date">22nd March, 2020</p>
                        </div>
                    </div>
                    <div class="comment_text">
                        Hello this is a test comment.
                    </div>
                    <div class=" edit ">
                        <button   >Edit</button>
                    </div>
              
                 
                </div>
            </li>
            <li>
                <div class="comment_card"  >
                    <div class="figure1">
                        <img class="image" src={CallAgent} alt="Naveen Pantra"/>
                        <div class="fig_caption">
                            <h5 class="name">Naveen Pantra</h5>
                            <h6 class="occupation">Software Engineer</h6>
                            <p class="date">22nd March, 2020</p>
                        </div>
                    </div>
                    <div class="comment_text">
                        Hello this is a test comment.
                    </div>
                    <div class="  edit">
                        <button  >Edit</button>
                    </div>
                   
                  
                </div>
            </li>
        </ul> 
                    </div>
                </div>
            </li>
        </ul> 
    </section>

    <div  style={{width:'22rem',maxWidth:'90vw' ,margin:'auto',marginTop:'0rem'}} >
        <img src={reviews2} style={{width:'100%',marginBottom:'5rem',float:'right'}}/>

                     <img src={reviews} style={{width:'100%',margin:'auto'}}/>
 
        </div>
    

    </div>

</>
  )
}

export default Comments
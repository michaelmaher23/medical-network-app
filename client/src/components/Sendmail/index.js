import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser'
import validator from 'validator';
import ReCAPTCHA from "react-google-recaptcha";
import { Heading } from "../Swipper";

function Sendmail() {
  const recaptchaRef=useRef();
  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('')
    } else {
      setEmailError('Not valid')
    }
  }
  const [result,setResult]=useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const recaptchaValue = recaptchaRef.current.getValue();
console.log(recaptchaValue)

if(recaptchaValue){
emailjs.sendForm('service_vzr714e', 'template_ece8zxe', form.current, 'tJLXI8yBeGmTeQAao')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      setResult(true);
      setTimeout(() => {
        setResult(false);
      }, 4000);


}

    
 }; 
  return (
    <div>
        
        <div className="contactme" id="contact">
          <div className="contactOverlay">
            <div className="container">
              <div className="form">
              <form className="Aform" ref={form} onSubmit={sendEmail}>
                  <div className="formWord">
                    <Heading style={{color:'var(--main)',marginBottom:'2rem',backgroundColor:'var(--main2)', padding:'1.4rem',borderRadius:'25px',width:'fit-content'}}>Send Feedback</Heading>
                    <span>Full Name</span>
                    <br />
                    <input
                      className="input100"
                      type="text"
                      name="fullName"
                      required
                    />
                    <br />
                    <span>Phone Number</span>
                    <br />
                    <input
                    pattern="[0-9]*" inputmode="numeric"
                      className="input100"
                      type="text"
                      name="phone"
                      required
                      
                    />
                    <br />
                    <span>Enter Email</span>
                    <br />
                    <input
                    onChange={(e) => validateEmail(e)}
                   
                      className="input100"
                      type="text"
                      name="email"
                      required
                    />
                    <br />
                   
        <span style={{
          fontWeight: '300',
          color: 'red',
        }}>{emailError}</span>
                  </div>
                  <div className="formWord">
                    <span>Message</span>
                    <br />
                    <textarea name="message" required></textarea>
                    <br />
                    <ReCAPTCHA
                  style={{ transform:'scale(0.77)',
                    transformOrigin:'0 0'}}
        ref={recaptchaRef}
        sitekey="6Lc1rB4gAAAAACBr4kfoFv5SUeejuUG6M-7RrbBk"
        onChange={sendEmail}
      />
                    <button>SUBMIT</button>
                    
                    <div className="row" style={{marginTop:'1rem',marginLeft:'7rem'}}>
                     {!emailError && result? (<h1 style={{color:'var(--main)',fontWeight:'700'}}> Done !</h1>):null}
                     </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>



    </div>
  )
}

export default Sendmail
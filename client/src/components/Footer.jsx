import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../images/logo.svg";

function Footer() {
  {
    /*  const issmall = useMediaQuery({ query: "(max-width: 700px)" });
  const [block1, setBlock1] = useState(true);
  const [block2, setBlock2] = useState(true);
  const [block3, setBlock3] = useState(true);
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  useEffect(() => {
   if (issmall) {
      setBlock1(false);
      setBlock2(false);
      setBlock3(false);
    }
    block1
      ? (ref1?.current.style.display = "block")
      : (ref1?.current.style.display = "none");
    block2
      ? (ref2?.current.style.display = "block")
      : (ref2?.current.style.display = "none");
    block3
      ? (ref3?.current.style.display = "block")
      : (ref3?.current.style.display = "none");
  }, []);
  useEffect(() => {
    block1
      ? (ref1?.current.style.display = "block")
      : (ref1?.current.style.display = "none");
    block2
      ? (ref2?.current.style.display = "block")
      : (ref2?.current.style.display = "none");
    block3
      ? (ref3?.current.style.display = "block")
      : (ref3?.current.style.display = "none");
  }, [!block1, !block2, !block3]);*/
  }
  return (
    <>
     
        <FooterMain>
          <FlexSocial>
            <div style={{ display: "flex" }}>
              <FontAwesomeIcon
                style={{
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  color: "#4968ad",
                  marginRight:'1rem'
                }}
                icon={faFacebook}
              />
              <FontAwesomeIcon
                style={{
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  color: "#0a66c2", marginRight:'1rem'
                }}
                icon={faLinkedin}
              />
              <FontAwesomeIcon
                style={{
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  color: " #1da1f2", marginRight:'1rem'
                }}
                icon={faTwitter}
              />
              <FontAwesomeIcon
                style={{ fontSize: "1.5rem", color: "red", cursor: "pointer" ,marginRight:'1rem' }}
                icon={faYoutube}
              />
            </div>   <div style={{ width:'80%',margin:'auto',display:'flex',marginBottom:'1rem',justifyContent:'space-between'}}>
 
        <div   >
        <img   style={{display:'block',maxWidth:'8rem'}}  alt=""  src={logo}  /></div>
        <div    ><a href="/signup" className="buttonfooter"  style={{display:'block',width:'fit-content',padding:'.2rem .5rem' , textAlign:'center',textDecoration:'none',fontSize:'13px',borderRadius:'25px'}}  >
          Sign up
        </a></div>
      </div>
          </FlexSocial>
        </FooterMain>
    
   
    </>
  );
}

export default Footer;

const FooterMain = styled.div`
border-top: 1px solid grey;
margin-top: 2rem;
padding-top: .2rem;
padding-bottom: 1rem;

`;

 export const FlexSocial = styled.div`
  display: flex;
  flex: 40%;
padding: 2rem;
padding-bottom: 0;
  justify-content: space-between;
  align-items: center;


  @media (max-width:700px){
    align-items: center;

  }
  flex-direction: column;
  > * {
    margin-bottom: 2rem;
  }


 
`;

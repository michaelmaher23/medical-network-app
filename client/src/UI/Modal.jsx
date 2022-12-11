import { Block } from "@mui/icons-material";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
 
const ModalOverlay = (props) => {
  return <StyledModalOverlay>{props.children}</StyledModalOverlay>;
};


const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  const {open}=useSelector((state)=>state.cart)
console.log(open)
  return (
    <>
  <StyledModalOverlay  open={open}>{props.children}</StyledModalOverlay>
       
 
    </>
  );
};

const StyledModalOverlay = styled.div`
  position: fixed;
  display: ${(props)=>props.open?'block':'none'};
  ::after{
    position: absolute;
    content:'Thank You For Choosing Us.';
    top:-2px;
    z-index: 999;
    right:calc(50% - 6rem);
    width:12rem;
    margin:0;

    margin:auto;
    text-align: center;
    font-weight: 800;
    margin:0;
    font-size: .9rem;
    color:white;
    background-color: rgb(31, 164, 124);
    border-bottom-left-radius: 7px;
    border: 0px;
    border-bottom-right-radius: 7px;

  }
  
  overflow-y: scroll;
  top: 10vh;
  padding: 1.5rem;
  width: 60vw;
  height: 85vh;
  right: 20vw;
  border: 6px solid #0b6c2a4d;

  overflow-x: hidden;
  z-index: 999;
  background-color: #ffffff;
  border-radius: 22px;
  box-shadow: rgba(50, 93, 60, 0.2) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.2) 0px 30px 60px -30px;
 
  animation: slide-down 1s ease-out forwards;
  ::-webkit-scrollbar {
    width: .3rem;
  }
   
 ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgb(255, 255, 255);
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
   
  ::-webkit-scrollbar-thumb {
    background-color: #c1c0c0;
    border-radius: 9px;
    outline: none;
  
  }

  @media (max-width: 700px) {
    width: 90%;
    top: 9vh;
    bottom:17vh;
    right: 5%;
  }
  @keyframes slide-down {
    from {
      opacity: 0;
    
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
    
      transform: translateY(0);
    }
  }
`;

export default Modal;
 

import ChatAgent from './CallAgent.PNG'

export const styles = {
  chatWithMeButton: {
    cursor: "pointer",
    boxShadow: "0px 0px 7px 4px var(--main)",
    // Border
    borderRadius: "50%",
    // Background
    backgroundImage: `url(${ChatAgent})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "84px",
    // Size
    zIndex: "104",
    width: "60px",
    height: "60px",
  },
  avatarHello: {
    // Position
    position: "absolute",
    right: "90%",
    top: "calc(70% - 1.1rem)",
    // Layering
maxHeight:'2.2rem',
    boxShadow: "0px 0px 16px 6px rgba(0, 0, 0, 0.33)",
    // Border
    padding: "8px",
    width:'auto',
    color: "var(--main)",
    borderRadius: "25px",
    // Color
    backgroundColor: "var(--main2)",
  },
  supportWindow: {
    // Position
    zIndex: "9",
    position: "fixed",
    bottom: "18px",
    right: "22px",
    // Size
    display: "block",
    width: "330px",
    height: "75%",
    maxWidth: "88vw",
    maxHeight: "75vh",
    background:'white',
    background:
    "linear-gradient(187deg, rgba(255,255,255,0.94965060216299493) 0%, rgba(121,9,9,0.9092779313555415) 83%)",    // Border
    borderRadius: "12px",
    border: `7px solid var(--main)`,
    overflow: "hidden",
    // Shadow
    boxShadow: "0px 0px 16px 6px rgba(0, 0, 0, 0.33)",
  },
  emailFormWindow: {
    width: "100%",
    height:'750px',
    overflow: "hidden",
    transition: "all 0.5s ease",
    WebkitTransition: "all 0.5s ease",
    MozTransition: "all 0.5s ease",
    
  },
  stripe: {
    position: "relative",
    top: "-50px",
    overflow: "hidden",
    width: "100%",
    height: "300px",
    backgroundColor: "var(--main)",
    borderRadius: "28px",
    transform: "skewY(-12deg)",
  },
  topText: {
    position: "relative",
    width: "100%",
    top: "15%",
    color: "white",
    fontSize: "23px",
    fontWeight: "600",



  },
  emailInput: {
    width: "66%",
    textAlign: "center",
    outline: "none",
    padding: "8px",
    borderRadius: "0px",
    border: "2px solid var(--main2)",

  },
  bottomText: {
    position: "absolute",
    width: "100%",
    top: "120%",
    color: "white",
    fontSize: "15px",
    fontWeight: "600",
  },
  loadingDiv: {
    position: "absolute",
    height: "100%",
    width: "100%",
    textAlign: "center",
    backgroundColor: "white",
  },
  loadingIcon: {
    color: "#7a39e0",
    position: "absolute",
    top: "calc(50% - 0px)",
    left: "calc(50% - 51px)",
    fontWeight: "800",
    
  },
  chatEngineWindow: {
    width: "100%",
    backgroundColor: "#fff",
  },
  hover: {
    backgroundColor: "var(--main)",
    color: "white",
  },
};

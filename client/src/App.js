import React, { useEffect }  from "react";
 import "./App.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
 import Auth from "./pages/Auth";
import AuthLogin from "./pages/AuthLogin";

import { createTheme, ThemeProvider } from "@mui/material/styles";
 import SupportAdmin from "./chat/SupportAdmin";
import Sendmail from "./components/Sendmail/index";
import ResearchField from "./pages/ResearchField";
import Article from "./pages/Article/Article";
import ALL from "./pages/ALL/ALL";
import A from "./pages/A";
import B from "./pages/B";
import C from "./pages/C";
import Sidebar from "./pages/Sidebar";
import Design from "./components/Design";  

import MedicalProducts from "./pages/MedicalProducts/MedicalProducts";
import MyProducts from "./pages/MedicalProducts/MyProducts";
import FormComponent from './component/FormComponent'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import Login from "./pages/my-account/Login";
import Register from "./pages/my-account/Register";
import MyPage from "./pages/my-account/MyPage";

import Myaccount from "./pages/my-account/Done";
import MyaccountUpdated from "./pages/my-account/Success";

  const theme = createTheme();


function App(props) {
 
useEffect(()=>{




},[])
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  var modalStyles = { 
    height: "6rem",
    
    overlay: {} };
  modalStyles.overlay["z-index"] = 10;

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
<LocalizationProvider dateAdapter={AdapterDateFns}>
    
  
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div {...props} className="App">
     
          <Routes>
          <Route element={<B />}>
          <Route path="/field" element={<ALL />} />{" "}
              <Route path="/MedReports" element={<Sidebar />} />
              <Route path="/MedLandingPage" element={<Design/>}/>
              </Route>
            <Route element={<C />}>  
              <Route path="/medproducts" element={<MyProducts  />}/>
              <Route path="/medproducts/:name" element={<MedicalProducts   />}/>
              <Route path="/medproducts/checkout" element={<FormComponent/>}/>
              <Route path="/account/:id/successfullyupdated" element={<MyaccountUpdated />}/>
              <Route path="/account/:id" element={<Myaccount />}/>
              <Route path="/account/login" element={<Login  />}/>
              <Route path="/account/register" element={<Register  />}/>
             </Route>
            <Route element={<A />}>
              
              <Route path="/" element={<Home   />} />
              <Route path="/login" element={<AuthLogin />} />
              <Route path="/signup" element={<Auth />} />
              <Route path="/main" element={<SupportAdmin />} />
              <Route path="/email" element={<Sendmail />} />
              <Route path="/Field/:name" element={<ResearchField />} />
              <Route path="/article" element={<Article />} />
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>  </LocalizationProvider>
  );
}

export default App;

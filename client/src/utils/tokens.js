
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
const getLocalAccessToken = () => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    return user?.token;
  };
  

  
  const getUser = () => {
    const token= JSON.parse(localStorage.getItem("userInfo"));
    const refreshToken=Cookies.get('refreshToken')
    return {token,refreshToken}
  };
  
  const setUser = (user) => {
    //   console.log(JSON.stringify(user));
    localStorage.setItem("userInfo", JSON.stringify(user));
  };
  
  const removeUser = () => {
    localStorage.removeItem("userInfo");
  };
  

const getLocalRefreshToken = () => 
   {
    /*  = JSON.parse(localStorage.getItem("user"));
    return user?.refreshToken;*/
    const refreshToken=Cookies.get('refreshToken')
    return refreshToken;
  };
  const updateNewAccessToken = (token) => {
    let user = JSON.parse(localStorage.getItem("userInfo"));
    user.token = token;
    localStorage.setItem("userInfo", JSON.stringify(user));
  };

  
  const instance = axios.create({
    baseURL: "https://medical-network-app.onrender.com",
    headers: {
      "Content-Type": "application/json",
    },
  });
  // Before making request, do the following
  {/*instance.interceptors.request.use(
    (config) => {
      // console.log("getLocalAccessToken", TokenService.getLocalAccessToken());
      const token =  getLocalAccessToken();
      if (token) {
        config.headers["x-auth-token"] = token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);*/}
  
  // With response data, do the following
  instance.interceptors.response.use(
    (res) => {
      return res;
    },
   {/*
 async (err) => {
      const originalConfig = err.config;
  
      if (err.response) {
        // access token expired
        if (err.response.status === 403 && !originalConfig._retry) {
          // handle infinite loop
          originalConfig._retry = true;
  
          // console.log("refresh", TokenService.getLocalRefreshToken());
          try {
            const rs = await instance.post("/auth/token", {
              refreshToken:  getLocalRefreshToken(),
            });
  
            console.log("response", rs);
  
            const { accessToken } = rs.data;
  
            console.log("updateNewAccessToken", accessToken);
           updateNewAccessToken(accessToken);
  
            return instance(originalConfig);
          } catch (_error) {
            return Promise.reject(_error);
          }
        }
  
        // refresh token expired
      }
  
      return Promise.reject(err);
    }


*/}
  );

  export default instance;
  

import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
} from "../Constants/UserConstants";

//import { ORDER_LIST_MY_RESET } from "../Constants/OrderConstants";
import instance from '../../utils/tokens.js'
 
// LOGIN
 export const login = (data1) => async (dispatch) => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });

    const config = {
     
    
      withCredentials: true,


    };

    const { data } = await instance.post(
      `/api/users/login`,
      data1,
      config
    );
  




    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
    window.location.href=`/account/${data._id}`
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error?.response?.data?.message
          ? error?.response?.data?.message
          : error?.message,
    });
  }
};

// LOGOUT
export const logout = (id) =>async(dispatch) => {
  try {
     localStorage.removeItem("userInfo");
    dispatch({ type: USER_LOGOUT });
 
    window.location.href=`/`
    const config = {
  
      withCredentials: true,
    };
    const { data } = await instance.put(
      `/api/users/logout`,
      id,
      config
    ); 
 



  } catch (error) {
   console.log(error)
  }
  //dispatch({ type: ORDER_LIST_MY_RESET });
};

// REGISTER
export const register = (data1) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const config = {
   
      withCredentials: true,
    };

    const { data } = await instance.post(
      `/api/users`,
      data1,
      config
    );
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
  
   
    localStorage.setItem("registerinfo", JSON.stringify(data));
    window.location.href="/account/login"
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const social = (data1) => async (dispatch) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    const config = {
    
      withCredentials: true,
    };

    const { data } = await instance.post(
      `/api/users/social`,
      data1,
      config);
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
    window.location.href=`/account/${data._id}`

  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// USER DETAILS
export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_DETAILS_REQUEST });
    const {userLogin: { userInfo },} = getState();
    const config = {
      headers: {
        authorization: `Bearer ${userInfo.access_token}`,
      },
      withCredentials:true,
   };
       

  
    const { data } = await instance.get(`/api/users/profile/${id}`,config);
    if(data)
    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });
    
  } catch (error) {
    
window.location.href=`/account/login`
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
 
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: message,
    });

  }
};

// UPDATE PROFILE
export const updateUserProfile = (user) => async (dispatch, getState) => {
 try{
    dispatch({ type: USER_UPDATE_PROFILE_REQUEST });
     
    const config = {
       withCredentials:true,
    };
        const {userLogin: { userInfo },} = getState();
    const body=
      {rf_Token:userInfo.rf_Token}
    
      const res = await instance.post(`/api/users/reftoken`,body,config);
       
     if( res && res?.data){
      const access_token = res.data.access_token
    const config1 = {
      headers: {
        authorization: `Bearer ${access_token}`,
      },
    };
    const res1 = await instance.put(
      `/api/users/profile`,
      user,config1
    ); 
    if (res1 && res1?.data){
      dispatch({ type: USER_DETAILS_SUCCESS, payload: res1.data });
      dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: res1.data });
      

    }else{
      dispatch({
        type: USER_UPDATE_PROFILE_FAIL,
        payload: "no result",
      });
    }
   
    
     }
        
      
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "the token failed please , try again in onother time") {
dispatch(logout())
    }
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload: message,
    });
  }
};
{/* 
export const refreshToken = () => 
async (dispatch) => {window.prompt(` refresh`);
  const userInfo =JSON.parse(localStorage.getItem('userInfo'))
  if( !userInfo ||  !userInfo?.access_token) return;
  try {
    dispatch({ type: RREFRESH_REQUEST });
    const res = await instance.get(`/api/users/reftoken`);
    window.prompt(`update data  ${res.data}`);
    localStorage.setItem("userInfo",JSON.stringify(res.data))
    dispatch({ type: REFRESH_SUCCESS, payload: res.data });
  } catch (error) {
    const message =
    error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
  dispatch({
    type: REFRESH_FAIL,
    payload: message,
  });
    dispatch(logout())
  }
}*/}


export const updateUserForm = (user) => async (dispatch, getState) => {
  try{
     dispatch({ type: "USER_UPDATE_Form_REQUEST" });
      
     const config = {
        withCredentials:true,
     };
         const {userLogin: { userInfo },} = getState();
     const body=
       {rf_Token:userInfo.rf_Token}
     
       const res = await instance.post(`/api/users/reftoken`,body,config);
        
      if( res && res?.data){
       const access_token = res.data.access_token
     const config1 = {
       headers: {
         authorization: `Bearer ${access_token}`,
       },
     };
     const res1 = await instance.put(
       `/api/users/profile`,
       user,config1
     ); 
     if (res1 && res1?.data.firstName){
       
       dispatch({ type: "USER_UPDATE_Form_SUCCESS", payload: res1.data });
       if(user.firstName && user.lastName && user.country ){
       window.location.href=`/account/${res1.data._id}/successfullyupdated`

       }
     }else{
       dispatch({
         type: "USER_UPDATE_Form_FAIL",
         payload: "no result",
       });
     }
    
     
      }
         
       
   } catch (error) {
     const message =
       error.response && error.response.data.message
         ? error.response.data.message
         : error.message;
     if (message === "the token failed please , try again in onother time") {
 dispatch(logout())
     }
     dispatch({
       type: USER_UPDATE_PROFILE_FAIL,
       payload: message,
     });
   }
 };

 export const getFormDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: "FORM_DETAILS_REQUEST" });
    const {userLogin: { userInfo },} = getState();
    const config = {
      headers: {
        authorization: `Bearer ${userInfo.access_token}`,
      },
      withCredentials:true,
   };
       

  
    const { data } = await instance.get(`/api/users/form/${id}`,config);
    if(data)
    dispatch({ type: "FORM_DETAILS_SUCCESS", payload: data });
    
  } catch (error) {
    
window.location.href=`/account/login`
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
 
    dispatch({
      type: "FORM_DETAILS_FAIL",
      payload: message,
    });

  }
};
import axios from "axios";
import {
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../Constants/ProductConstants";
 
 


export const listSectionDetails = (urlname) => async (dispatch) => {
  try {
    dispatch({ type: "SECTION_DETAILS_REQUEST" });
    const { data } = await axios.get(`http://localhost:5000/api/sections/${urlname}`);
    dispatch({ type: "SECTION_DETAILS_SUCCESS", payload: data });
    console.log(data);
  } catch (error) {
    dispatch({
      type: "SECTION_DETAILS_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
 
//  
 
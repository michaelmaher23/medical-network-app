import axios from "axios";

export const formDetails = (data1) => async (dispatch) => {
  try {
    dispatch({ type: "FORM_DETAILS_REQUEST" });
    const { data } = await axios.post(`http://localhost:5000/api/form/postform`,data1);
    dispatch({ type: "FORM_DETAILS_SUCCESS", payload: data });
    console.log(data);

  } catch (error) {
    console.log(error.response.data.errors)
    dispatch({
      type: "FORM_DETAILS_FAIL",
      payload:
        error.response && error.response.data.errors
          ? error.response.data.errors
          : error.message
    });
  }
};
export const listFormsbyEmail = (email) => async (dispatch) => {
  try {
    dispatch({ type: "FORMS_REQUEST" });
    const { data } = await axios.get(`http://localhost:5000/api/form/getbyemail/${email}`);
    dispatch({ type: "FORMS_SUCCESS", payload: data });
    console.log(data);

  } catch (error) {
    dispatch({
      type: "FORMS_FAIL",
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
 
//  
 
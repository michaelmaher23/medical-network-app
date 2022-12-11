
  
  //FORM LIST
  export const formReducer = (state = { Form: {} }, action) => {
    switch (action.type) {
      case "FORM_DETAILS_REQUEST":
        return { loading: true, Form: {} };
      case "FORM_DETAILS_SUCCESS":
        return {
          loading: false,
          Form: action.payload ,
        };
      case "FORM_DETAILS_FAIL":
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const formsReducer = (state = {Forms:[] ,loading:true,error:null}, action) => {
    switch (action.type) {
      case "FORMS_REQUEST":
        return { loading: true, Forms: [] };
      case "FORMS_SUCCESS":
        return {
          loading: false,
          Forms: action.payload ,
        };
      case "FORMS_FAIL":
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

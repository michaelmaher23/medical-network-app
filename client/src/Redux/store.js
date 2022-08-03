import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import {
            productDetailsReducer,
            productListReducer,
} from "./Reducers/ProductReducers";
import { CartReducer } from "./Reducers/CartReducer";
import { formReducer, formsReducer } from "./Reducers/FormReducers";
import { formDetailsReducer, userDetailsReducer, userLoginReducer, userRegisterReducer, userUpdateFormReducer, userUpdateProfileReducer } from "./Reducers/UserReducers";
import { sectionDetailsReducer } from "./Reducers/SectionReducer";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: CartReducer,
  form:formReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer, 
   userDetails: userDetailsReducer,
   userFormDetails: userUpdateFormReducer,
   update:userUpdateProfileReducer,
   formDetails:formDetailsReducer,
   forms:formsReducer,
   sections:sectionDetailsReducer,

});

const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
  const T = localStorage.getItem("T")
  ? JSON.parse(localStorage.getItem("T"))
  : '';
  const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
// shippingAddress
const shippingAddressFromLocalStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const initialState = {
  cart: {
    items: cartItemsFromLocalStorage,
    shippingAddress: shippingAddressFromLocalStorage,
    open:false,
    totalAmount:T
  },
  forms:{Forms:[]},
  userLogin:{userInfo:userInfoFromLocalStorage}
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

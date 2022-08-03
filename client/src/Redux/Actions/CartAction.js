import axios from "axios";

export const addToCart = (id, amount) => async (dispatch, getState) => {
  const { data } = await axios.get(`https://medicalprojectnet.herokuapp.com/api/prods?id=${id}`);

  dispatch({
    type: "Add_SUCCESS",
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      rating:data.rating,
      countInStock: data.countInStock-data.amount,
      amount,
      all: (Number(amount) * Number(data.price)).toFixed(1),
      images:data.images
    },
  });
  localStorage.setItem("T", JSON.stringify(getState().cart.totalAmount));

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.items));

};

// REMOVE PRODUCT FROM CART
export const removefromcart = (id) => (dispatch, getState) => {
  dispatch({
    type:  "Remove_SUCCESS",
    payload: id,
  });
  localStorage.setItem("T", JSON.stringify(getState().cart.totalAmount));

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.items));

};

// SAVE SHIPPING ADDRESS
export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: 'CART_SAVE_SHIPPING_ADDRESS',
    payload: data,
  });

  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

// SAVE PAYMENT METHOD
export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: 'CART_SAVE_PAYMENT_METHOD',
    payload: data,
  });

  localStorage.setItem("paymentMethod", JSON.stringify(data));
};
 
// SAVE PAYMENT METHOD
export const open = (a) => (dispatch) => {
  dispatch({
    type: "open",
    payload:a
   });

 };
 export const clear = () => (dispatch) => {
  dispatch({
    type: "Clear_SUCCESS",
    
   });
   
   localStorage.setItem("cartItems", []);
   localStorage.setItem("T", 0);


 };
 
import styled from "styled-components";
// Context
// Components
import CartItem from "./CartItem";
import Modal from "./UI/Modal";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faWeightHanging } from "@fortawesome/free-solid-svg-icons";
import { Tag } from "antd";
import { SyncOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { open,clear } from "./Redux/Actions/CartAction";
// Icons
import FormComponent from '../src/component/FormComponent'
const Cart = () => {
  const { items, totalAmount } = useSelector((state) => state?.cart);
  const [total,setTotal]=useState(0)
  const dispatch = useDispatch();
useEffect(()=>{
  const a=Number(totalAmount).toFixed(1) 
setTotal(((a)))

},[totalAmount])
const [first,setFirst]=useState(true)
useEffect(()=>{
setFirst(true);
},[])
useEffect(()=>{
  setFirst(true);
  },[items])
  return (
    <Modal>
      <Title>
        <FontAwesomeIcon
          style={{
            marginLeft: "0rem",
            backgroundColor: "#1FA47C",
            padding: ".6rem",
            borderRadius: "4px",
            color: "white",
            cursor: "pointer",
            fontSize: "1rem",
          }}
          icon={faWeightHanging}
        />
      </Title>
      <CloseIconStyle onClick={(e) => dispatch(open(false))}>
        <FontAwesomeIcon
          style={{
            fontSize: "1.6rem",
            padding: "1rem",
            color: "rgb(31, 164, 124)",
            cursor: "pointer",
          }}
          icon={faClose}
        />
      </CloseIconStyle>
      <StyledLine />
      {first?( <Content>
        <ul style={{ margin: "0", padding: "0" }}>
          {items?.map((i) => (
            <CartItem my={i.product}>
              <img
                src="https://ezbrt4adg6k.exactdn.com/wp-content/uploads/2021/08/reverso-768x538.jpg?strip=all&lossy=1&ssl=1"
                alt="product"
              />
            </CartItem>
          ))}
        </ul>

        <Total>
          <Tag
            style={{
              height: "fit-content",
              fontSize: "1rem",
              display: "flex",
              alignItems: "center",
              padding: ".2rem",
            }}
            icon={<SyncOutlined spin />}
            color="processing"
          >
            Total:{total?total:0 }${" "}
          </Tag>
        </Total>

        <StyledButton style={{cursor:`${total?(total==0)?"not-allowed":'pointer':'not-allowed'}`}}  disabled={total?(total==0)?true:false:true} onClick={(e)=>setFirst(false)}>Checkout</StyledButton>
        {false && (
          <Empty>
            <h4>No Products</h4>
          </Empty>
        )}
      </Content>):(
        <FormComponent/>
      )}
    </Modal>
  );
};

const Title = styled.h3`
  text-align: left;
  padding: 1rem;
  font-weight: 800;
  color: #369b6e;
  @media (max-width: 700px) {
    padding-top: 1rem;
    font-size: 15x;
  }
`;

const Content = styled.div`
  padding: 0rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  h3 {
    text-align: left;
  }
`;

const StyledLine = styled.hr`
  color: #aaaaaa;
  width: 100%;
  margin-top: 0px 0;
`;

const Total = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  span {
    font-weight: 700;
    margin-left: 5px;
  }
`;

const CloseIconStyle = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  @media (max-width: 414px) {
  }
`;

const StyledButton = styled.button`
  background-color: #f0f0f0;
  color: rgb(31, 164, 124);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1px;
  padding: 1rem 1.5rem;
  width: 250px;
  font-weight: 700;
  font-size: 16px;
  border: 2px solid rgb(31, 164, 124);
  margin: auto;
  cursor: pointer;
  @media (max-width: 700px) {
    width: 80vw;
  }
  :hover {
    background-color: white;
  }
`;

const Empty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  height: max-content;
  h4 {
    color: red;
  }
`;

export default Cart;

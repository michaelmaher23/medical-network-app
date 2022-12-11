import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
// Icon
import {
  faDeleteLeft,
  faWeightHanging,
} from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "@mui/material";
import { Rate } from "antd";
import { useEffect, useState } from "react";
import { Badge } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addToCart,removefromcart } from "./Redux/Actions/CartAction";

const CartItem = ({ my }) => {
  const { items ,totalAmount} = useSelector((state) => state?.cart);
  const dispatch = useDispatch();
  console.log(items);
  function increment(e) {
    e.preventDefault();
    dispatch(addToCart(my,(item?.amount+1)))
  
  }
  function decrement(e) {
    e.preventDefault();
 
    dispatch(addToCart(my,(item?.amount > 0 ? (qty - 1 ): 0)))
  }
  const [item, setItem] = useState();
  useEffect(() => {
    console.log(my);
    items.forEach((i) => {
      if (i.product == my) {
        setItem(i);
        setQty(item?.amount);
        setCount(item?.all)
      }
    });
  });
  const [count, setCount] = useState(item?.all);

  const [qty, setQty] = useState();
  console.log(item);
  return (
    <>
      <Wrapper>
        <ProductThumb>
          <img src={item?.images?.[0] ? item?.images?.[0] : ""} />
        </ProductThumb>
        <Content>
          <h6
            style={{
              textTransform: "uppercase",
              fontWeight: "900",
              color: "#6f9a7d",
            }}
          >
            {item?.name}
          </h6>

          <Rate
            allowHalf
            value={item?.rating}
            style={{
              marginLeft: "0rem",
              color: "gold",
              marginBottom: "0rem",

              fontSize: "1rem",
            }}
          />

          <div className="qty">
            <Badge.Ribbon
              style={{ marginTop: "-1.5rem" }}
          
              text={ count}
            >
              <div>
                <div className="quantity-input">
                  <button
                    className="quantity-input__modifier quantity-input__modifier--left"
                    onClick={(e) => decrement(e)}
                  >
                    &mdash;
                  </button>
                  <input
                    className="quantity-input__screen"
                    type="text"
                    value={item?.amount}
                    readonly
                  />
                  <button
                    className="quantity-input__modifier quantity-input__modifier--right"
                    onClick={(e) => increment(e)}
                  >
                    &#xff0b;
                  </button>
                </div>
              </div>
            </Badge.Ribbon>
          </div>
        </Content>
        <IconButton  onClick={(e)=>dispatch(removefromcart(my))}>
          <FontAwesomeIcon
            fontSize={"1.1rem"}
            style={{ color: "rgb(31, 164, 124)" }}
            icon={faDeleteLeft}
          />
        </IconButton>
      </Wrapper>
    </>
  );
};

// Styles
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem;
  margin-bottom: 29px;
  width: 100%;
  button {
    cursor: pointer;
  }
`;

const ProductThumb = styled.div`
  width: fit-content;
  margin: 0;
  img {
    width: 9rem;
    height: 9rem;
    display: block;
    border-radius: 5px;
    border: 1px solid #e1e1e1;
    @media (max-width: 700px) {
      width: 4rem;
      height: 4rem;
    }
  }
`;

const Content = styled.div`
  width: 70%;
  margin-left: 1rem;
  .qty {
    margin-top: 1rem;
    margin-left: 0rem;
    display: flex;
    align-items: center;
    .quantity-input {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      border-radius: 3px;
      width: fit-content;
    }
    .quantity-input:focus {
      background: red;
    }

    .quantity-input__modifier,
    .quantity-input__screen {
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      outline: none;
    }

    .quantity-input__modifier {
      padding: 0.3rem;
      width: 2.1rem;
      font-size: 1.3rem;
      background: #f3f3f3;
      color: #888;
      border: 0 solid #dbdbdb;
      text-align: center;
      text-shadow: 0 1px 0 rgba(255, 255, 255, 0.6);
      cursor: pointer;
    }
    .quantity-input__modifier:hover {
      background: #dadada;
      color: #555555;
    }
    .quantity-input__modifier--left {
      border-radius: 3px 0 0 3px;
    }
    .quantity-input__modifier--right {
      border-radius: 0 3px 3px 0;
    }

    .quantity-input__screen {
      width: 3rem;
      padding: 0.3rem;
      font-size: 1.2rem;
      border: 0;
      border-top: 0 solid #dbdbdb;
      border-bottom: 0 solid #dbdbdb;
      text-align: center;
    }
  }
  .price {
    font-size: 2rem;
    font-weight: 400 !important;
    margin: 0.3rem 0;
    padding: 2rem 0;
    border-top: 1px solid #eeeeed;
    border-bottom: 1px solid #eeeeed;
    color: #5580c0;
  }
  @media (max-width: 700px) {
    h6 {
      font-size: 14px;
    }
    .qty {
      margin-top: 1rem;
      margin-left: 0rem;
    }
  }
  @media (max-width: 414px) {
    inline-size: 60vw;
  }
`;

export default CartItem;

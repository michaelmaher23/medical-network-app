import React from "react";
import Title from "../../components/Title";
import { Divider } from "../Home";
import styled from "styled-components";
function Description({product}) {
  return (
    <>
      {" "}
      <div
        style={{
          width: "fit-content",
          margin: "auto",
          textAlign: "center",
          borderBottom: "4px solid rgb(31, 164, 124)",
        }}
      >
        <Divider height={"3rem"} />
        <Title Font="21px" mobile={false} color="Black" title="Description" />
      </div>
      <Container>



        <p>
          <b>Product description:&nbsp;</b>
        </p>
        <p>
        { (product.product?.description?.string1)?(product.product?.description?.string1):
        "this product is used for head, neck, chest, abdomen, perineum and surgery and obstetrics and gynecology, ophthalmology, Otolaryngology, orthopedics and other operations in hospital operating  rooms"}


         
        </p>
        <p>
          <b>&nbsp;The product has unique advantages:&nbsp;</b>
        </p>
       
        { (product.product?.description?.string1)?(product.product?.description?.string1):



         <><p>1. The Angle adjustment of the back board and leg board of the
          integrated operating table is realized by hand-operated worm, gear and
          rack mechanism.&nbsp;
        </p>
        <p>
          2. table and cover material according to user needs to choose
          high-quality cold-rolled carbon steel spray plastic or high-grade
          stainless steel.&nbsp;
        </p>
        <p>
          3. the use of oil pump hydraulic lift, surgical position adjustment
          required on both sides of the table control.&nbsp;
        </p></>}
      </Container>
      <br />
    </>
  );
}

export default Description;
export const Container = styled.div`
  border: 1px solid #e5e5e5;

  border-radius:0px ;
  width: 92vw;
  font-weight: 400;
  height: fit-content;
  line-height: 2rem;
  margin: auto;
  padding: 4rem 4rem 6rem 4rem;
  font-size: 16px;
  b{
    font-size: 18px;
    font-weight: 900;
    margin-left:-1rem;
  }
  p{
 
  }
  @media (max-width: 950px) {
    width: 94vw;
    padding: 30px 30px;
    p,b{
      font-size: 13px;
    }
  }
`;

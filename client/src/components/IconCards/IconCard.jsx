import React from "react";
import styled from "styled-components";
function IconCard({ Icon, Text }) {
  return (
    <Card>
      {Icon}

      <p>{Text}</p>
    </Card>
  );
}

export default IconCard;
export const Card = styled.div`
  width: 27vw;
  height: 10rem;
  border-radius: 27px;
  background: var(--main2);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  gap: 1.1rem;
  .icons {
    background: transparent;
    color: var(--main);
    font-size: 4rem;
  }
  p {
    color: var(--main);
    font-weight: 600;
    font-size: 0.9rem;
  }
  :hover {
    background: var(--main);

    .icons {
      color: var(--main2);
    }
    p {
      color: var(--main2);
    }
  }
  margin-top: 2rem;
  @media (max-width: 790px) {
    width: 40vw;
  }
  @media (max-width: 500px) {
    width: 87vw;
  }


  animation:animated 1s ease infinite alternate;
  
  @keyframes animated {
    50%{
     
    }
    75%{
       
    }
    100%{
        }
  }
`;

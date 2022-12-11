import React from 'react'
import styled from 'styled-components'
function Title(props) {
  return (
    <div>
        <Container>
            <Heading   Font={props.Font} Weight={props.Weight} mobile={props.mobile}  color={props.color}>
                {props.title}
            </Heading>
        </Container>
    </div>
  )
}

export default Title
const Container=styled.div`
    width: 100%;
    height:fit-content;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
`
const Heading=styled.h3`
max-width: 100%;
width: fit-content;
text-align: center;
margin: auto;
margin-top:0rem;
margin-bottom: .4rem;
font-variant-caps: titling-caps;
    font-size: ${(props)=>props.Font?props.Font: props.mobile? '14px':'30px'};
    font-weight:${(props)=>props.Weight?props.Weight:600};
    color:${(props)=>props.color};
    @media screen and (max-width:700px) {
        font-size: ${(props)=>props.mobile? '30px':'16px'};
        margin-bottom: 1.6rem;

        
    }
`
 export const TitleHere=styled(Title)`
 
border-bottom: 26px solid red;



`
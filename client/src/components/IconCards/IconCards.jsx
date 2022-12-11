import React from 'react'
import styled from 'styled-components'
import { ArrayofSections } from '../../WebsiteSections.js'
import { Heading } from '../Swipper.jsx'
 
 import IconCard from './IconCard'

function IconCards() {
  return (
    <>
        <div   >
          {/*<Heading style={{width:'100%',textAlign:'center', margin:'auto',color:'var(--main)' }}>Researchs Fields</Heading>*/}
          <Container>
              {ArrayofSections.map((i,index)=>{
                  return (
                     <IconCard key={index} Text={i.text} Icon={i.icon}/> 
                  )
              })}
          </Container>
      </div>
      
      
      
      
      </>
    
  )
}

export default IconCards

const Container=styled.div`
display:flex;
flex-wrap:wrap;
width:87%;
margin:auto;
 

justify-content:space-between;
@media(max-width:700px){
  width:87%;
}
@media(max-width:500px){
  width:85%;
}

`
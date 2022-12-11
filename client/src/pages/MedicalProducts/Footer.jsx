import React from 'react'
import { Link } from 'react-router-dom'
 import './Footer.css'
function Footer() {
  return (<>
    <div       className='footerGrid' style={{width:'97vw',margin:'auto', paddingLeft:'2rem',display:'grid'}}>
        <div   >
          <p className='head1' >About Medical Projects</p>
          <div  style={{height:'3px',width:'8rem',backgroundColor:'rgb(31, 164, 124)',marginBottom:'1rem'}}   ></div>
       <p  className='parag' >
          Medical Projects is the leading Number 1 Medical Solutions in th near future
With a product portfolio of over 25 different innovative solutions that fit every Hospital Need for pure healthy and safe Medical  Services, Project has been stablished  in 2022
Our site is also proud to be extending its trusted products across 6 Export countries throughout North Africa, GCC and the Far East.
</p>
      
      

        </div>
        <div>
        <p className='head1'  >Categories</p>
          <div   style={{height:'3px',width:'8rem',backgroundColor:'rgb(31, 164, 124)',marginBottom:'1rem'}}    ></div>
          <Link to='/'    >   <p>Surgries</p></Link><Link to='/'> <p> Heart Care</p></Link> <Link to='/'><p> Mental Care</p> </Link><Link to='/'><p>Medical Devices</p> </Link> 
        </div>
        <div>
        <p className='head1' >Site Map</p>
          <div     style={{height:'3px',width:'8rem',backgroundColor:'rgb(31, 164, 124)',marginBottom:'1rem'}}  ></div>
          <Link to='/'   className='a'> <p>Main Page </p> </Link><Link to='/'>  <p> Landing Page</p></Link> <Link to='/'><p>Articles</p> </Link> 
        </div>

    </div><span style={{display:'block'}} className='copyright'>
    Copyright © 2022 All Rights Reserved.    </span></>
  )
}

export default Footer
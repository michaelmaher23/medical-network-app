import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import arrowsvg from '../../src/components/svgs/arrowsvg.svg'
import facebookSvg from '../../src/components/svgs/facebookSvg.svg'
import gnailsvg from '../../src/components/svgs/gnailsvg.svg'
import pencilsvg from '../../src/components/svgs/pencilsvg.svg'
import pintersvg from '../../src/components/svgs/pintersvg.svg'
import twitterSvg from '../../src/components/svgs/twitterSvg.svg'
import {faYoutube } from '@fortawesome/free-brands-svg-icons'
import './flex.css'
function Flex() {
  return (
    <div className='main'>
        <div className="flex-column-main">
         <img  className='iconstyle'  alt='' src={arrowsvg}/>
         
           <p  className='textstyle'>search</p>
        </div>
        <div className="flex-column-main">
        <img  className='iconstyle'  alt='' src={pintersvg}/>
           {/*<FontAwesomeIcon className='iconstyle'   icon={faSearch}/>  */}
           <p  className='textstyle'>search</p>
        </div>
        <div className="flex-column-main">
        <img  className='iconstyle'  alt='' src={facebookSvg}/>
          {/* <FontAwesomeIcon className='iconstyle'   icon={faSearch}/>  */}
           <p  className='textstyle'>search</p>
        </div>
        <div className="flex-column-main">
        <img  className='iconstyle'  alt='' src={twitterSvg}/>
         {/*  <FontAwesomeIcon className='iconstyle'    icon={faSearch}/>  */}
           <p  className='textstyle'>search</p>
        </div>
        {/* <div className="flex-column-main">
        <img  className='iconstyle'  alt='' src={pencilsvg}/>
           <FontAwesomeIcon className='iconstyle'   icon={faSearch}/>  
           <p  className='textstyle'>search</p>
        </div> */}
        <div className="flex-column-main">
           <FontAwesomeIcon className='  icon' icon={faYoutube}/>  
           <p  className='textstyle'>search</p>
        </div>
        <div className="flex-column-main">
        <img  className='iconstyle'  alt='' src={gnailsvg}/>
          {/* <FontAwesomeIcon className='iconstyle'   icon={faSearch}/>  */}
           <p  className='textstyle'>search</p>
        </div>
     
    </div>
  )
}

export default Flex
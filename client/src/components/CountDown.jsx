import React from 'react'
import { useState, useEffect } from 'react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import './CountDown.css'

const Timer = ({end,mount,start,a,something} ) => {
 
    const [ count, setCount ] = useState(223);
     useEffect(()=>{

    let myInterval = setInterval(() => {
            if ( start && ( count <  end)) {
                setCount(count + mount );
            }
   
        
        }, .0001)
        return ()=> {
        
   clearInterval(myInterval);
          };
    });

    return (<>
{ /*<CircularProgress sx={{color:'blue',backgroundColor:'rgb(31, 164, 124)'}} value={((count*100)/end)} color='rgb(31, 164, 124).400'>
  <CircularProgressLabel>+ {((count*100)/end).toFixed(0)} %</CircularProgressLabel>
</CircularProgress>
 
 <p ref={a} > +{count}  </p>*/}
 
            
		
		<div className="fleex" style={{width:'280px',height:'70px',display:'flex',alignItems:'center',justifyContent:'space-between', margin:'auto' }}>
 	<svg >
			{start &&  	<circle cx="50" cy="50" r="25" class="progressbar__svg-circle circle-css shadow-css"> </circle> }
             
			</svg>
    <span ref={a} class="progressbar__text shadow-css">+{count} {something} </span>

</div>
 

     </>
    )
}

export default Timer;
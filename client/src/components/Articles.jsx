import React from 'react'
import Cards from './Cards'
import { Heading } from './Swipper'

function Articles() {
  return (<>
      <div  style={{ width:'95%',margin:'auto'}}>
    <div className='Articles-banner'>
        <Heading  style={{  fontWeight: '700',
    color: 'var(--main)',
           letterSpacing: '.8px'    }} >
         Latests Articles
        </Heading>
        <h5 >
         All Articles
        </h5>
    </div>
<Cards  />
    </div>
    
    
    
    
    </>
  )
}

export default Articles
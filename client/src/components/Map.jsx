import React, { useEffect } from 'react'

function Map() {
    const ref = React.useRef(null);
    const [map, setMap] = React.useState();
    useEffect(() => {
        if (ref.current && !map) {
          setMap(new window.google.maps.Map(ref.current, {zoom:11,center:{
              lat:30.033333,lng:31.233334
          }}));
        }
      }, [ref, map]);

  return (
    <div  ref={ref}   style={{height:'20rem',width:'20rem'}} />
        

  )
}

export default Map
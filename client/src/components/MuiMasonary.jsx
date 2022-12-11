import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import med1 from './CameraRoll/med1.PNG'
import med2 from './CameraRoll/med2.PNG'
import med3 from './CameraRoll/med3.PNG'
import med4 from './CameraRoll/med4.PNG'
import med5 from './CameraRoll/med5.PNG'
import med6 from './CameraRoll/med6.PNG'
import med7 from './CameraRoll/med7.PNG'
import med8 from './CameraRoll/med8.PNG'
import med9 from './CameraRoll/med9.PNG'
 const heights=[med1,med9,med3,med4,med5,med2,med7, med6];
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  borderRadius:'10px',
  outline:0,
  border:0,
  overflow: 'hidden',
  textAlign: 'center',
  boxShadow:'none',
  color: theme.palette.text.secondary,
}));

export default function SSRMasonry() {
  return (
    <Box sx={{ width: '100%',margin:'auto'}}>
      <Masonry
        columns={3}
        spacing={1}
        defaultHeight={120}
        defaultColumns={3}
        defaultSpacing={1}
      >
        {heights.map((height, index) => (
          <Item key={index}  style={{ marginBottom:'2rem'}}   >
           <img src={height}   style={{width:'100%',minHeight:'150px',  }}/>
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}
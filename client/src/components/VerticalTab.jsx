import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendarPlus,
    faLocationDot,
 faUsersLine
} from "@fortawesome/free-solid-svg-icons";
import './VrticalTab.css'
import Carasoul from './Carasoul';
import ReactMap from './ReactMap';
const AntTabs = styled(Tabs)({
   display: 'none',
  borderBottom: '8px solid #2d1d1d',
  '& .MuiTabs-indicator': {
    backgroundColor: '#3eae4d',
  },
});

const AntTab = styled((props ) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    minWidth: 0,
 
     
    
    [theme.breakpoints.up('sm')]: {
        width: '33%',
      },
      [theme.breakpoints.up('md')]: {
       width:"150px",
      },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(2),
    color: 'rgba(0, 0, 0, 0.85)',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&.Mui-selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#d1eaff',
    },
  }),
);

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
   display: 'flex',
 
    '& .MuiTabs-indicator': {
     backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    
    backgroundColor: '#6d6abd',
  },
     
 
});

 

const StyledTab = styled((props     ) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({  
  textTransform: 'ubercase',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(13),
 minHeight:'0px',
 height: '2rem',
display: "flex",flexDirection:'row',
  color: 'rgb(21, 111, 82)',
 
  '&.Mui-selected': {
    color: 'rgb(16, 181, 167)',
  },
  '&.Mui-focusVisible': {
  },
  [theme.breakpoints.up('sm')]: {
    width: '33%',
    padding:"0px",
  },
  [theme.breakpoints.up('md')]: {

  },
  
}));
function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    const [bigScreen,setBigscreen]=React.useState(true)
    React.useEffect(()=>{
      if(window.innerWidth<1000)
      setBigscreen(false)
      else
      setBigscreen(true)
        

 window.addEventListener('resize',()=>{
  
    if(window.innerWidth<1000)
    setBigscreen(false)
    else
    setBigscreen(true)
      
      


 })
    
    })
  
  
    
   
    return (
      <div
        role="tabpanel"
        hidden={!bigScreen?false: (value !== index)}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {bigScreen && (value===index) ? (
          <Box sx={{mt:5, bgcolor:"linear-gradient(0deg,#fff 3%,hsla(0,0%,100%,0)),linear-gradient(-257deg,#aaf2e1,#93edf5 50%,#dbebff)"}}>
            <Typography>{children}</Typography>
          </Box>)
          :(
          <Box sx={{mt:5, bgcolor:"linear-gradient(0deg,#fff 3%,hsla(0,0%,100%,0)),linear-gradient(-257deg,#aaf2e1,#93edf5 50%,#dbebff)"}}>
            <Typography>{children}</Typography>
          </Box>)
         }
      </div>
    );
  }
  
export default function CustomizedTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  const [bigScreen,setBigscreen]=React.useState(true)
  React.useEffect(()=>{
    if(window.innerWidth<1000)
    setBigscreen(false)
    else
    setBigscreen(true)
      

window.addEventListener('resize',()=>{

  if(window.innerWidth<1000)
  setBigscreen(false)
  else
  setBigscreen(true)
    
    


})})



  return (
    <Box sx={{ width: '100%' }}>
    
      <Box sx={{bgcolor: '#a6b3b8e' }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
          style={{display:!bigScreen?'none':'block'}}
        >
          <StyledTab label="Top Contributers" icon={<FontAwesomeIcon style={{ fontSize:'1.3rem',marginRight:'1rem'}} icon={faUsersLine} />} {...a11yProps(0)} />
                  <StyledTab    label="Top Events" icon={<FontAwesomeIcon style={{ fontSize:'1.3rem',marginRight:'1rem'}} icon={faCalendarPlus} />}    {...a11yProps(2)}/>
  <StyledTab      label="Top Locations"  icon={<FontAwesomeIcon style={{ fontSize:'1.3rem',marginRight:'1rem'}} icon={faLocationDot} />}   {...a11yProps(1)}/>
        </StyledTabs>
       
      </Box>
      <TabPanel value={value} index={0}>
      <Carasoul/>

      </TabPanel>
      <TabPanel value={value} index={2}>
      <ReactMap/>
      </TabPanel>
      <TabPanel value={value} index={1}>
          <div className='myevents'>
          <a href="#">
  <figure className='C fa' >
    <div class="date"><span class="card-date-day">2</span><span class="card-date-month">MAR</span></div>
    <figcaption>
    <span>Communication in Medicine field</span>
    <p>  مؤسسة التكنولوجيا المصرية</p>

     </figcaption>
  </figure></a>
  <a href="#">
  <figure className='A fa'>
    <div class="date"><span class="card-date-day">20</span><span class="card-date-month">APR</span></div>
    <figcaption>
      <h4> <span>Giving life to Missing Pieces</span></h4>
      <p> منتدي التجمع الخامس</p>
     </figcaption>
  </figure></a>
  <a href="#">
  <figure className='B fa' >
    <div class="date"><span class="card-date-day">25</span><span class="card-date-month">APR</span></div>
    <figcaption>
      <h4> <span>Organized Collaboration 
</span></h4>
<p> التعاون الافريقي الدولي</p>

 
 
    </figcaption>
  </figure></a>
          </div>
      
      </TabPanel>
    </Box>
  );
}

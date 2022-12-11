import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faVirusCovid,
  faBuildingColumns,
  faHeartbeat,
  faBrain,
  faLungsVirus,
  faHeadSideMask,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const ArrayofSections = [
  {
    text:<Link style={{textDecoration:"none",color:"inherit"}}  to="/Field/Corona">Corona news</Link> ,
    icon:(<Link to="/Field/Corona"><FontAwesomeIcon className="icons" icon={faVirusCovid} /></Link>),
  },
  {
    text: <Link   style={{textDecoration:"none",color:"inherit"}} to="/Field/Heart">Hearts care</Link>,
    icon: (
      <Link   style={{textDecoration:"none",color:"inherit"}}  to="/Field/Heart">
        {" "}
        <FontAwesomeIcon className="icons" icon={faHeartbeat} />
      </Link>
    ),
  },
  {
    text:  <Link   style={{textDecoration:"none",color:"inherit"}}  to="/Field/Lungs">Lungs section"</Link>,
    icon: (
      <Link to="/Field/Lungs">
        {" "}
        <FontAwesomeIcon className="icons" icon={faLungsVirus} />
      </Link>
    ),
  },
  {
    text: <Link   style={{textDecoration:"none",color:"inherit"}}  to="/Field/Eyes">Eyes care</Link>,
    icon: 
    (
      <Link to="/Field/Eyes">
    <FontAwesomeIcon className="icons" icon={faEye} /> </Link>
    ),
  },
  {
    text: <Link  style={{textDecoration:"none",color:"inherit"}}   to="/Field/Studies">Studies</Link>,
    icon:(
      <Link to="/Field/Studies"><FontAwesomeIcon className="icons" icon={faBuildingColumns} /> </Link>
      ),
  },
  {
    text: <Link   style={{textDecoration:"none",color:"inherit"}}  to="/Field/Mental_Health">Mental Health</Link>,
    icon: (<Link to="/Field/Mental_Health"><FontAwesomeIcon className="icons" icon={faBrain} />,
 </Link>) },
];

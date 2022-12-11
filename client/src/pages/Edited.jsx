import { faUser, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cssprofile.css";
import Status from "./my-account/Status.png";
import Prof from "./my-account/Prof.png";
import Radio from "./my-account/Radio";
import cloud from "./cloud.png";
import {
  getUserDetails,
  
  updateUserProfile,
} from "../Redux/Actions/UserAction";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Myprofile({ setR }) {
  let navigate=useNavigate()
  const dispatch = useDispatch();
  const { Forms, loading, error } = useSelector((state) => state.forms);
  const mydata = useSelector((state) => state.userLogin);
  useEffect(() => {
    dispatch(getUserDetails(mydata?.userInfo?._id)); 
}, [mydata?.userInfo?._id]);
  
  const { user } = useSelector((state) => state.userDetails);  
  const [user1, setUser1] = useState({ _id: user?._id });

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser1({ ...user1, _id: mydata.userInfo._id, [name]: value });
    console.log(user1)
  };
  const [start, setStart] = useState(false);
  useEffect(() => {
    dispatch(updateUserProfile(user1));
   
    setUser1({ _id: mydata?.userInfo?._id });
  }, [!start]);
const update = useSelector((state) => state.update);
  const funct = (e) => {
    e.preventDefault();
    setStart(!start);
    dispatch(getUserDetails(mydata?.userInfo?._id))
    navigate(0);
  };

  const [image, setImage] = useState("");
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      const data = new FormData();
      data.append("file", img);
      axios.post("http://localhost:3000/image", data).then((res) => {
        if (res.status == 200)
          dispatch(
            updateUserProfile({ photo: img.name, _id: mydata?.userInfo?._id })
          );
        setImage(URL.createObjectURL(img));
      });
    }
  }; 
   const [show, setShow] = useState(true);

  const [reset, setReset] = useState({
    password: "",
    repeat: "",
    message: "",
    successmessage: "",
  });
  function validateSignupForm(e) {
    e.preventDefault();
    if (reset.password.length < 8) {
      setReset({ ...reset, message: "Password too short", successmessage: "" });
    } else if (reset.password != reset.repeat) {
      setReset({
        password: "",
        repeat: "",
        message: "Passwords don't match",
        successmessage: "",
      });
    } else {
      try {
        if (reset.successmessage !== "Canceled Successfully") {
          setShow(!show);
          dispatch(
            updateUserProfile({
              _id: mydata.userInfo._id,
              password: reset.password,
            })
          );

          setStart(!start);

          console.log(update);

          setReset({ successmessage: "Successfully Updated" });
        }
      } catch {
        setReset({ successmessage: "error" });
      }
    }
  }
   var countries = {
    AF: { name: "Afghanistan", phone: 93 },
    AX: { name: "Aland Islands", phone: 358 },
    AL: { name: "Albania", phone: 355 },
    DZ: { name: "Algeria", phone: 213 },
    AS: { name: "American Samoa", phone: 1684 },
    AD: { name: "Andorra", phone: 376 },
    AW: { name: "Aruba", phone: 297 },
    AU: { name: "Australia", phone: 61 },
    AT: { name: "Austria", phone: 43 },
    AZ: { name: "Azerbaijan", phone: 994 },
    BS: { name: "Bahamas", phone: 1242 },
    BH: { name: "Bahrain", phone: 973 },
    BB: { name: "Barbados", phone: 1246 },
    BE: { name: "Belgium", phone: 32 },
    BZ: { name: "Belize", phone: 501 },
    BJ: { name: "Benin", phone: 229 },
    BO: { name: "Bolivia", phone: 591 },
    BQ: { name: "Bonaire, Sint Eustatius and Saba", phone: 599 },
    BA: { name: "Bosnia and Herzegovina", phone: 387 },
    BR: { name: "Brazil", phone: 55 },
    IO: { name: "British Indian Ocean Territory", phone: 246 },
    BG: { name: "Bulgaria", phone: 359 },
    BF: { name: "Burkina Faso", phone: 226 },
    BI: { name: "Burundi", phone: 257 },
    KH: { name: "Cambodia", phone: 855 },
    CM: { name: "Cameroon", phone: 237 },
    CA: { name: "Canada", phone: 1 },
    CF: { name: "Central African Republic", phone: 236 },
    TD: { name: "Chad", phone: 235 },
    CL: { name: "Chile", phone: 56 },
    CN: { name: "China", phone: 86 },
    CX: { name: "Christmas Island", phone: 61 },
    CO: { name: "Colombia", phone: 57 },
    KM: { name: "Comoros", phone: 269 },
    CD: { name: "Congo, Democratic Republic of the Congo", phone: 242 },
    CK: { name: "Cook Islands", phone: 682 },
    CR: { name: "Costa Rica", phone: 506 },
    CI: { name: "Cote D'Ivoire", phone: 225 },
    HR: { name: "Croatia", phone: 385 },
    CU: { name: "Cuba", phone: 53 },
    CW: { name: "Curacao", phone: 599 },
    CY: { name: "Cyprus", phone: 357 },
    CZ: { name: "Czech Republic", phone: 420 },
    DK: { name: "Denmark", phone: 45 },
    DJ: { name: "Djibouti", phone: 253 },
    DM: { name: "Dominica", phone: 1767 },
    DO: { name: "Dominican Republic", phone: 1809 },
    EC: { name: "Ecuador", phone: 593 },
    EG: { name: "Egypt", phone: 20 },
    SV: { name: "El Salvador", phone: 503 },
    GQ: { name: "Equatorial Guinea", phone: 240 },
    ER: { name: "Eritrea", phone: 291 },
    EE: { name: "Estonia", phone: 372 },
    ET: { name: "Ethiopia", phone: 251 },
    FK: { name: "Falkland Islands (Malvinas)", phone: 500 },
    FO: { name: "Faroe Islands", phone: 298 },
    FJ: { name: "Fiji", phone: 679 },
    FI: { name: "Finland", phone: 358 },
    FR: { name: "France", phone: 33 },
    GF: { name: "French Guiana", phone: 594 },
    PF: { name: "French Polynesia", phone: 689 },
    TF: { name: "French Southern Territories", phone: 262 },
    GA: { name: "Gabon", phone: 241 },
    GM: { name: "Gambia", phone: 220 },
    GE: { name: "Georgia", phone: 995 },
    DE: { name: "Germany", phone: 49 },
    GH: { name: "Ghana", phone: 233 },
    GI: { name: "Gibraltar", phone: 350 },
    GR: { name: "Greece", phone: 30 },
    GL: { name: "Greenland", phone: 299 },
    GD: { name: "Grenada", phone: 1473 },
    GP: { name: "Guadeloupe", phone: 590 },
    GU: { name: "Guam", phone: 1671 },
    GT: { name: "Guatemala", phone: 502 },
    GG: { name: "Guernsey", phone: 44 },
    GN: { name: "Guinea", phone: 224 },
    GW: { name: "Guinea-Bissau", phone: 245 },
    GY: { name: "Guyana", phone: 592 },
    HT: { name: "Haiti", phone: 509 },
    HM: { name: "Heard Island and Mcdonald Islands", phone: 0 },
    VA: { name: "Holy See (Vatican City State)", phone: 39 },
    HN: { name: "Honduras", phone: 504 },
    HK: { name: "Hong Kong", phone: 852 },
    HU: { name: "Hungary", phone: 36 },
    IS: { name: "Iceland", phone: 354 },
    IN: { name: "India", phone: 91 },
    ID: { name: "Indonesia", phone: 62 },
    IR: { name: "Iran, Islamic Republic of", phone: 98 },
    IQ: { name: "Iraq", phone: 964 },
    IE: { name: "Ireland", phone: 353 },
    IM: { name: "Isle of Man", phone: 44 },
    IL: { name: "Israel", phone: 972 },
    IT: { name: "Italy", phone: 39 },
    JM: { name: "Jamaica", phone: 1876 },
    JP: { name: "Japan", phone: 81 },
    JE: { name: "Jersey", phone: 44 },
    JO: { name: "Jordan", phone: 962 },
    KZ: { name: "Kazakhstan", phone: 7 },
    KE: { name: "Kenya", phone: 254 },
    KI: { name: "Kiribati", phone: 686 },
    KP: { name: "Korea, Democratic People's Republic of", phone: 850 },
    KR: { name: "Korea, Republic of", phone: 82 },
    XK: { name: "Kosovo", phone: 381 },
    KW: { name: "Kuwait", phone: 965 },
    KG: { name: "Kyrgyzstan", phone: 996 },
    LA: { name: "Lao People's Democratic Republic", phone: 856 },
    LV: { name: "Latvia", phone: 371 },
    LB: { name: "Lebanon", phone: 961 },
    LS: { name: "Lesotho", phone: 266 },
    LR: { name: "Liberia", phone: 231 },
    LY: { name: "Libyan Arab Jamahiriya", phone: 218 },
    LI: { name: "Liechtenstein", phone: 423 },
    LT: { name: "Lithuania", phone: 370 },
    LU: { name: "Luxembourg", phone: 352 },
    MO: { name: "Macao", phone: 853 },
    MK: { name: "Macedonia, the Former Yugoslav Republic of", phone: 389 },
    MG: { name: "Madagascar", phone: 261 },
    MW: { name: "Malawi", phone: 265 },
    MY: { name: "Malaysia", phone: 60 },
    MV: { name: "Maldives", phone: 960 },
    ML: { name: "Mali", phone: 223 },
    MT: { name: "Malta", phone: 356 },
    MH: { name: "Marshall Islands", phone: 692 },
    MQ: { name: "Martinique", phone: 596 },
    MR: { name: "Mauritania", phone: 222 },
    MU: { name: "Mauritius", phone: 230 },
    YT: { name: "Mayotte", phone: 269 },
    MX: { name: "Mexico", phone: 52 },
    FM: { name: "Micronesia, Federated States of", phone: 691 },
    MD: { name: "Moldova, Republic of", phone: 373 },
    MC: { name: "Monaco", phone: 377 },
    MN: { name: "Mongolia", phone: 976 },
    ME: { name: "Montenegro", phone: 382 },
    MS: { name: "Montserrat", phone: 1664 },
    MA: { name: "Morocco", phone: 212 },
    MZ: { name: "Mozambique", phone: 258 },
    MM: { name: "Myanmar", phone: 95 },
    NA: { name: "Namibia", phone: 264 },
    NR: { name: "Nauru", phone: 674 },
    NP: { name: "Nepal", phone: 977 },
    NL: { name: "Netherlands", phone: 31 },
    AN: { name: "Netherlands Antilles", phone: 599 },
    NC: { name: "New Caledonia", phone: 687 },
    NZ: { name: "New Zealand", phone: 64 },
    NI: { name: "Nicaragua", phone: 505 },
    NE: { name: "Niger", phone: 227 },
    NG: { name: "Nigeria", phone: 234 },
    NU: { name: "Niue", phone: 683 },
    NF: { name: "Norfolk Island", phone: 672 },
    MP: { name: "Northern Mariana Islands", phone: 1670 },
    NO: { name: "Norway", phone: 47 },
    OM: { name: "Oman", phone: 968 },
    PK: { name: "Pakistan", phone: 92 },
    PW: { name: "Palau", phone: 680 },
    PS: { name: "Palestinian Territory, Occupied", phone: 970 },
    PA: { name: "Panama", phone: 507 },
    PG: { name: "Papua New Guinea", phone: 675 },
    PY: { name: "Paraguay", phone: 595 },
    PE: { name: "Peru", phone: 51 },
    PH: { name: "Philippines", phone: 63 },
    PN: { name: "Pitcairn", phone: 64 },
    PL: { name: "Poland", phone: 48 },
    PT: { name: "Portugal", phone: 351 },
    PR: { name: "Puerto Rico", phone: 1787 },
    QA: { name: "Qatar", phone: 974 },
    RE: { name: "Reunion", phone: 262 },
    RO: { name: "Romania", phone: 40 },
    RU: { name: "Russian Federation", phone: 70 },
    RW: { name: "Rwanda", phone: 250 },
    BL: { name: "Saint Barthelemy", phone: 590 },
    SH: { name: "Saint Helena", phone: 290 },
    KN: { name: "Saint Kitts and Nevis", phone: 1869 },
    LC: { name: "Saint Lucia", phone: 1758 },
    MF: { name: "Saint Martin", phone: 590 },
    PM: { name: "Saint Pierre and Miquelon", phone: 508 },
    VC: { name: "Saint Vincent and the Grenadines", phone: 1784 },
    WS: { name: "Samoa", phone: 684 },
    SM: { name: "San Marino", phone: 378 },
    ST: { name: "Sao Tome and Principe", phone: 239 },
    SA: { name: "Saudi Arabia", phone: 966 },
    SN: { name: "Senegal", phone: 221 },
    RS: { name: "Serbia", phone: 381 },
    CS: { name: "Serbia and Montenegro", phone: 381 },
    SC: { name: "Seychelles", phone: 248 },
    SL: { name: "Sierra Leone", phone: 232 },
    SG: { name: "Singapore", phone: 65 },
    SX: { name: "Sint Maarten", phone: 1 },
    SK: { name: "Slovakia", phone: 421 },
    SI: { name: "Slovenia", phone: 386 },
    SB: { name: "Solomon Islands", phone: 677 },
    SO: { name: "Somalia", phone: 252 },
    ZA: { name: "South Africa", phone: 27 },
    GS: { name: "South Georgia and the South Sandwich Islands", phone: 500 },
    SS: { name: "South Sudan", phone: 211 },
    ES: { name: "Spain", phone: 34 },
    LK: { name: "Sri Lanka", phone: 94 },
    SD: { name: "Sudan", phone: 249 },
    SR: { name: "Suriname", phone: 597 },
    SJ: { name: "Svalbard and Jan Mayen", phone: 47 },
    SZ: { name: "Swaziland", phone: 268 },
    SE: { name: "Sweden", phone: 46 },
    CH: { name: "Switzerland", phone: 41 },
    SY: { name: "Syrian Arab Republic", phone: 963 },
    TW: { name: "Taiwan, Province of China", phone: 886 },
    TJ: { name: "Tajikistan", phone: 992 },
    TZ: { name: "Tanzania, United Republic of", phone: 255 },
    TH: { name: "Thailand", phone: 66 },
    TL: { name: "Timor-Leste", phone: 670 },
    TG: { name: "Togo", phone: 228 },
    TK: { name: "Tokelau", phone: 690 },
    TO: { name: "Tonga", phone: 676 },
    TT: { name: "Trinidad and Tobago", phone: 1868 },
    TN: { name: "Tunisia", phone: 216 },
    TR: { name: "Turkey", phone: 90 },
    TM: { name: "Turkmenistan", phone: 7370 },
    TC: { name: "Turks and Caicos Islands", phone: 1649 },
    TV: { name: "Tuvalu", phone: 688 },
    UG: { name: "Uganda", phone: 256 },
    UA: { name: "Ukraine", phone: 380 },
    AE: { name: "United Arab Emirates", phone: 971 },
    GB: { name: "United Kingdom", phone: 44 },
    US: { name: "United States", phone: 1 },
    UM: { name: "United States Minor Outlying Islands", phone: 1 },
    UY: { name: "Uruguay", phone: 598 },
    UZ: { name: "Uzbekistan", phone: 998 },
    VU: { name: "Vanuatu", phone: 678 },
    VE: { name: "Venezuela", phone: 58 },
    VN: { name: "Viet Nam", phone: 84 },
    VG: { name: "Virgin Islands, British", phone: 1284 },
    VI: { name: "Virgin Islands, U.s.", phone: 1340 },
    WF: { name: "Wallis and Futuna", phone: 681 },
    EH: { name: "Western Sahara", phone: 212 },
    YE: { name: "Yemen", phone: 967 },
    ZM: { name: "Zambia", phone: 260 },
    ZW: { name: "Zimbabwe", phone: 263 },
  };
  var countriesarr = [
    { name: "Afghanistan", code: "AF", phone: 93 },
    { name: "Aland Islands", code: "AX", phone: 358 },
    { name: "Albania", code: "AL", phone: 355 },
    { name: "Algeria", code: "DZ", phone: 213 },
    { name: "American Samoa", code: "AS", phone: 1684 },
    { name: "Andorra", code: "AD", phone: 376 },
    { name: "Angola", code: "AO", phone: 244 },
    { name: "Anguilla", code: "AI", phone: 1264 },
    { name: "Antarctica", code: "AQ", phone: 672 },
    { name: "Antigua and Barbuda", code: "AG", phone: 1268 },
    { name: "Argentina", code: "AR", phone: 54 },
    { name: "Armenia", code: "AM", phone: 374 },
    { name: "Aruba", code: "AW", phone: 297 },
    { name: "Australia", code: "AU", phone: 61 },
    { name: "Austria", code: "AT", phone: 43 },
    { name: "Azerbaijan", code: "AZ", phone: 994 },
    { name: "Bahamas", code: "BS", phone: 1242 },
    { name: "Bahrain", code: "BH", phone: 973 },
    { name: "Bangladesh", code: "BD", phone: 880 },
    { name: "Barbados", code: "BB", phone: 1246 },
    { name: "Belarus", code: "BY", phone: 375 },
    { name: "Belgium", code: "BE", phone: 32 },
    { name: "Belize", code: "BZ", phone: 501 },
    { name: "Benin", code: "BJ", phone: 229 },
    { name: "Bermuda", code: "BM", phone: 1441 },
    { name: "Bhutan", code: "BT", phone: 975 },
    { name: "Bolivia", code: "BO", phone: 591 },
    { name: "Bonaire, Sint Eustatius and Saba", code: "BQ", phone: 599 },
    { name: "Bosnia and Herzegovina", code: "BA", phone: 387 },
    { name: "Botswana", code: "BW", phone: 267 },
    { name: "Bouvet Island", code: "BV", phone: 55 },
    { name: "Brazil", code: "BR", phone: 55 },
    { name: "British Indian Ocean Territory", code: "IO", phone: 246 },
    { name: "Brunei Darussalam", code: "BN", phone: 673 },
    { name: "Bulgaria", code: "BG", phone: 359 },
    { name: "Burkina Faso", code: "BF", phone: 226 },
    { name: "Burundi", code: "BI", phone: 257 },
    { name: "Cambodia", code: "KH", phone: 855 },
    { name: "Cameroon", code: "CM", phone: 237 },
    { name: "Canada", code: "CA", phone: 1 },
    { name: "Cape Verde", code: "CV", phone: 238 },
    { name: "Cayman Islands", code: "KY", phone: 1345 },
    { name: "Central African Republic", code: "CF", phone: 236 },
    { name: "Chad", code: "TD", phone: 235 },
    { name: "Chile", code: "CL", phone: 56 },
    { name: "China", code: "CN", phone: 86 },
    { name: "Christmas Island", code: "CX", phone: 61 },
    { name: "Cocos (Keeling) Islands", code: "CC", phone: 672 },
    { name: "Colombia", code: "CO", phone: 57 },
    { name: "Comoros", code: "KM", phone: 269 },
    { name: "Congo", code: "CG", phone: 242 },
    { name: "Congo, Democratic Republic of the Congo", code: "CD", phone: 242 },
    { name: "Cook Islands", code: "CK", phone: 682 },
    { name: "Costa Rica", code: "CR", phone: 506 },
    { name: "Cote D'Ivoire", code: "CI", phone: 225 },
    { name: "Croatia", code: "HR", phone: 385 },
    { name: "Cuba", code: "CU", phone: 53 },
    { name: "Curacao", code: "CW", phone: 599 },
    { name: "Cyprus", code: "CY", phone: 357 },
    { name: "Czech Republic", code: "CZ", phone: 420 },
    { name: "Denmark", code: "DK", phone: 45 },
    { name: "Djibouti", code: "DJ", phone: 253 },
    { name: "Dominica", code: "DM", phone: 1767 },
    { name: "Dominican Republic", code: "DO", phone: 1809 },
    { name: "Ecuador", code: "EC", phone: 593 },
    { name: "Egypt", code: "EG", phone: 20 },
    { name: "El Salvador", code: "SV", phone: 503 },
    { name: "Equatorial Guinea", code: "GQ", phone: 240 },
    { name: "Eritrea", code: "ER", phone: 291 },
    { name: "Estonia", code: "EE", phone: 372 },
    { name: "Ethiopia", code: "ET", phone: 251 },
    { name: "Falkland Islands (Malvinas)", code: "FK", phone: 500 },
    { name: "Faroe Islands", code: "FO", phone: 298 },
    { name: "Fiji", code: "FJ", phone: 679 },
    { name: "Finland", code: "FI", phone: 358 },
    { name: "France", code: "FR", phone: 33 },
    { name: "French Guiana", code: "GF", phone: 594 },
    { name: "French Polynesia", code: "PF", phone: 689 },
    { name: "French Southern Territories", code: "TF", phone: 262 },
    { name: "Gabon", code: "GA", phone: 241 },
    { name: "Gambia", code: "GM", phone: 220 },
    { name: "Georgia", code: "GE", phone: 995 },
    { name: "Germany", code: "DE", phone: 49 },
    { name: "Ghana", code: "GH", phone: 233 },
    { name: "Gibraltar", code: "GI", phone: 350 },
    { name: "Greece", code: "GR", phone: 30 },
    { name: "Greenland", code: "GL", phone: 299 },
    { name: "Grenada", code: "GD", phone: 1473 },
    { name: "Guadeloupe", code: "GP", phone: 590 },
    { name: "Guam", code: "GU", phone: 1671 },
    { name: "Guatemala", code: "GT", phone: 502 },
    { name: "Guernsey", code: "GG", phone: 44 },
    { name: "Guinea", code: "GN", phone: 224 },
    { name: "Guinea-Bissau", code: "GW", phone: 245 },
    { name: "Guyana", code: "GY", phone: 592 },
    { name: "Haiti", code: "HT", phone: 509 },
    { name: "Heard Island and Mcdonald Islands", code: "HM", phone: 0 },
    { name: "Holy See (Vatican City State)", code: "VA", phone: 39 },
    { name: "Honduras", code: "HN", phone: 504 },
    { name: "Hong Kong", code: "HK", phone: 852 },
    { name: "Hungary", code: "HU", phone: 36 },
    { name: "Iceland", code: "IS", phone: 354 },
    { name: "India", code: "IN", phone: 91 },
    { name: "Indonesia", code: "ID", phone: 62 },
    { name: "Iran, Islamic Republic of", code: "IR", phone: 98 },
    { name: "Iraq", code: "IQ", phone: 964 },
    { name: "Ireland", code: "IE", phone: 353 },
    { name: "Isle of Man", code: "IM", phone: 44 },
    { name: "Israel", code: "IL", phone: 972 },
    { name: "Italy", code: "IT", phone: 39 },
    { name: "Jamaica", code: "JM", phone: 1876 },
    { name: "Japan", code: "JP", phone: 81 },
    { name: "Jersey", code: "JE", phone: 44 },
    { name: "Jordan", code: "JO", phone: 962 },
    { name: "Kazakhstan", code: "KZ", phone: 7 },
    { name: "Kenya", code: "KE", phone: 254 },
    { name: "Kiribati", code: "KI", phone: 686 },
    { name: "Korea, Democratic People's Republic of", code: "KP", phone: 850 },
    { name: "Korea, Republic of", code: "KR", phone: 82 },
    { name: "Kosovo", code: "XK", phone: 381 },
    { name: "Kuwait", code: "KW", phone: 965 },
    { name: "Kyrgyzstan", code: "KG", phone: 996 },
    { name: "Lao People's Democratic Republic", code: "LA", phone: 856 },
    { name: "Latvia", code: "LV", phone: 371 },
    { name: "Lebanon", code: "LB", phone: 961 },
    { name: "Lesotho", code: "LS", phone: 266 },
    { name: "Liberia", code: "LR", phone: 231 },
    { name: "Libyan Arab Jamahiriya", code: "LY", phone: 218 },
    { name: "Liechtenstein", code: "LI", phone: 423 },
    { name: "Lithuania", code: "LT", phone: 370 },
    { name: "Luxembourg", code: "LU", phone: 352 },
    { name: "Macao", code: "MO", phone: 853 },
    {
      name: "Macedonia, the Former Yugoslav Republic of",
      code: "MK",
      phone: 389,
    },
    { name: "Madagascar", code: "MG", phone: 261 },
    { name: "Malawi", code: "MW", phone: 265 },
    { name: "Malaysia", code: "MY", phone: 60 },
    { name: "Maldives", code: "MV", phone: 960 },
    { name: "Mali", code: "ML", phone: 223 },
    { name: "Malta", code: "MT", phone: 356 },
    { name: "Marshall Islands", code: "MH", phone: 692 },
    { name: "Martinique", code: "MQ", phone: 596 },
    { name: "Mauritania", code: "MR", phone: 222 },
    { name: "Mauritius", code: "MU", phone: 230 },
    { name: "Mayotte", code: "YT", phone: 269 },
    { name: "Mexico", code: "MX", phone: 52 },
    { name: "Micronesia, Federated States of", code: "FM", phone: 691 },
    { name: "Moldova, Republic of", code: "MD", phone: 373 },
    { name: "Monaco", code: "MC", phone: 377 },
    { name: "Mongolia", code: "MN", phone: 976 },
    { name: "Montenegro", code: "ME", phone: 382 },
    { name: "Montserrat", code: "MS", phone: 1664 },
    { name: "Morocco", code: "MA", phone: 212 },
    { name: "Mozambique", code: "MZ", phone: 258 },
    { name: "Myanmar", code: "MM", phone: 95 },
    { name: "Namibia", code: "NA", phone: 264 },
    { name: "Nauru", code: "NR", phone: 674 },
    { name: "Nepal", code: "NP", phone: 977 },
    { name: "Netherlands", code: "NL", phone: 31 },
    { name: "Netherlands Antilles", code: "AN", phone: 599 },
    { name: "New Caledonia", code: "NC", phone: 687 },
    { name: "New Zealand", code: "NZ", phone: 64 },
    { name: "Nicaragua", code: "NI", phone: 505 },
    { name: "Niger", code: "NE", phone: 227 },
    { name: "Nigeria", code: "NG", phone: 234 },
    { name: "Niue", code: "NU", phone: 683 },
    { name: "Norfolk Island", code: "NF", phone: 672 },
    { name: "Northern Mariana Islands", code: "MP", phone: 1670 },
    { name: "Norway", code: "NO", phone: 47 },
    { name: "Oman", code: "OM", phone: 968 },
    { name: "Pakistan", code: "PK", phone: 92 },
    { name: "Palau", code: "PW", phone: 680 },
    { name: "Palestinian Territory, Occupied", code: "PS", phone: 970 },
    { name: "Panama", code: "PA", phone: 507 },
    { name: "Papua New Guinea", code: "PG", phone: 675 },
    { name: "Paraguay", code: "PY", phone: 595 },
    { name: "Peru", code: "PE", phone: 51 },
    { name: "Philippines", code: "PH", phone: 63 },
    { name: "Pitcairn", code: "PN", phone: 64 },
    { name: "Poland", code: "PL", phone: 48 },
    { name: "Portugal", code: "PT", phone: 351 },
    { name: "Puerto Rico", code: "PR", phone: 1787 },
    { name: "Qatar", code: "QA", phone: 974 },
    { name: "Reunion", code: "RE", phone: 262 },
    { name: "Romania", code: "RO", phone: 40 },
    { name: "Russian Federation", code: "RU", phone: 70 },
    { name: "Rwanda", code: "RW", phone: 250 },
    { name: "Saint Barthelemy", code: "BL", phone: 590 },
    { name: "Saint Helena", code: "SH", phone: 290 },
    { name: "Saint Kitts and Nevis", code: "KN", phone: 1869 },
    { name: "Saint Lucia", code: "LC", phone: 1758 },
    { name: "Saint Martin", code: "MF", phone: 590 },
    { name: "Saint Pierre and Miquelon", code: "PM", phone: 508 },
    { name: "Saint Vincent and the Grenadines", code: "VC", phone: 1784 },
    { name: "Samoa", code: "WS", phone: 684 },
    { name: "San Marino", code: "SM", phone: 378 },
    { name: "Sao Tome and Principe", code: "ST", phone: 239 },
    { name: "Saudi Arabia", code: "SA", phone: 966 },
    { name: "Senegal", code: "SN", phone: 221 },
    { name: "Serbia", code: "RS", phone: 381 },
    { name: "Serbia and Montenegro", code: "CS", phone: 381 },
    { name: "Seychelles", code: "SC", phone: 248 },
    { name: "Sierra Leone", code: "SL", phone: 232 },
    { name: "Singapore", code: "SG", phone: 65 },
    { name: "Sint Maarten", code: "SX", phone: 1 },
    { name: "Slovakia", code: "SK", phone: 421 },
    { name: "Slovenia", code: "SI", phone: 386 },
    { name: "Solomon Islands", code: "SB", phone: 677 },
    { name: "Somalia", code: "SO", phone: 252 },
    { name: "South Africa", code: "ZA", phone: 27 },
    {
      name: "South Georgia and the South Sandwich Islands",
      code: "GS",
      phone: 500,
    },
    { name: "South Sudan", code: "SS", phone: 211 },
    { name: "Spain", code: "ES", phone: 34 },
    { name: "Sri Lanka", code: "LK", phone: 94 },
    { name: "Sudan", code: "SD", phone: 249 },
    { name: "Suriname", code: "SR", phone: 597 },
    { name: "Svalbard and Jan Mayen", code: "SJ", phone: 47 },
    { name: "Swaziland", code: "SZ", phone: 268 },
    { name: "Sweden", code: "SE", phone: 46 },
    { name: "Switzerland", code: "CH", phone: 41 },
    { name: "Syrian Arab Republic", code: "SY", phone: 963 },
    { name: "Taiwan, Province of China", code: "TW", phone: 886 },
    { name: "Tajikistan", code: "TJ", phone: 992 },
    { name: "Tanzania, United Republic of", code: "TZ", phone: 255 },
    { name: "Thailand", code: "TH", phone: 66 },
    { name: "Timor-Leste", code: "TL", phone: 670 },
    { name: "Togo", code: "TG", phone: 228 },
    { name: "Tokelau", code: "TK", phone: 690 },
    { name: "Tonga", code: "TO", phone: 676 },
    { name: "Trinidad and Tobago", code: "TT", phone: 1868 },
    { name: "Tunisia", code: "TN", phone: 216 },
    { name: "Turkey", code: "TR", phone: 90 },
    { name: "Turkmenistan", code: "TM", phone: 7370 },
    { name: "Turks and Caicos Islands", code: "TC", phone: 1649 },
    { name: "Tuvalu", code: "TV", phone: 688 },
    { name: "Uganda", code: "UG", phone: 256 },
    { name: "Ukraine", code: "UA", phone: 380 },
    { name: "United Arab Emirates", code: "AE", phone: 971 },
    { name: "United Kingdom", code: "GB", phone: 44 },
    { name: "United States", code: "US", phone: 1 },
    { name: "United States Minor Outlying Islands", code: "UM", phone: 1 },
    { name: "Uruguay", code: "UY", phone: 598 },
    { name: "Uzbekistan", code: "UZ", phone: 998 },
    { name: "Vanuatu", code: "VU", phone: 678 },
    { name: "Venezuela", code: "VE", phone: 58 },
    { name: "Viet Nam", code: "VN", phone: 84 },
    { name: "Virgin Islands, British", code: "VG", phone: 1284 },
    { name: "Virgin Islands, U.s.", code: "VI", phone: 1340 },
    { name: "Wallis and Futuna", code: "WF", phone: 681 },
    { name: "Western Sahara", code: "EH", phone: 212 },
    { name: "Yemen", code: "YE", phone: 967 },
    { name: "Zambia", code: "ZM", phone: 260 },
    { name: "Zimbabwe", code: "ZW", phone: 263 },
  ];
  return (
    <div
      style={{
        marginTop: "3rem",
        backgroundColor: "white",
        width: "95%",
        margin: "auto",
      }}
      className="col-md-12 "
    >
      <div
        style={{ display: "flex", alignItems: "flex-start" }}
        className="profileContainer"
      >
        <div class="wrapper">
          <div class="container55">
            <img
              src={image || user?.photo || Prof}
              alt=""
              class="profile-img"
            />

            <div class="content">
              <div class="sub-content">
                <h1>
                  {(user && user?.firstName && user?.firstName) }
                  &nbsp;
                  {(user && user?.lastName && user?.lastName) }
                </h1>
                <p>
                  @
                  {user && user?.email && (user?.email).split("@")[0]
                    ? (user?.email).split("@")[0]
                    : "Myaccount"}
                </p>
                <span>
                  <FontAwesomeIcon icon={faLocationPin} />{" "}
                  {(user && user?.country) ||
                    (Forms && Forms[0]?.country
                      ? (Forms[0]?.country).split("@")[0]
                      : "MyLocation")}
                </span>
              </div>
              <div><label className="mylabel" for="fileinpt">
                <img src={cloud} className="cloud" />
                <input style={{opacity:'0'}}
                  type="file"
                  id="fileinpt"
                  name="myImage"
                  accept="image/png, image/jpg, image/gif, image/jpeg"

                  onChange={(e) => onImageChange(e)}
                /></label>
                
              </div>
            </div>
            <div className="secured55">
              <img src={Status} className="Status55" />
              <p className="text55">Secured Account</p>
            </div>
            {show && (
              <>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShow(!show);
                    setReset({ successmessage: "" });
                  }}
                  className="change55"
                >
                  {"Edit Password"}{" "}
                </button>{" "}
                <div className="formaaa" style={{ boxShadow: "none" }}>
                  <label
                    style={{
                      margin: "0rem 3rem 3rem 2.3rem",
                      color: "#dacda3",
                    }}
                  >
                    {reset?.successmessage}
                  </label>
                </div>
              </>
            )}
            {!show && (
              <form
                className="formaaa"
                style={{ boxShadow: "none", padding: "0rem 1rem 1rem 1rem" }}
                name="signupForm"
              >
                <img src="" id="signupLogo" />

                <div class="inputDiv">
                  <label class="inputLabel" for="password">
                    New Password
                  </label>
                  <input
                    className="inpt55"
                    value={reset.password}
                    onChange={(e) =>
                      setReset({ ...reset, password: e.target.value })
                    }
                    type="password"
                    id="password"
                    name="password"
                    required
                  />
                </div>

                <div class="inputDiv">
                  <label class="inputLabel" for="confirmPassword">
                    Confirm Password
                  </label>
                  <input
                    className="inpt55"
                    value={reset.repeat}
                    onChange={(e) =>
                      setReset({ ...reset, repeat: e.target.value })
                    }
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                  />
                </div>

                <div class="buttonWrapper">
                  <button
                    type="submit"
                    id="submitButton"
                    onClick={(e) => {
                      e.preventDefault();
                      validateSignupForm(e);
                    }}
                    className="submit55"
                  >
                    {reset.successmessage == ""
                      ? "Update"
                      : "Updated Successfully"}
                  </button>
                  <button
                    type="submit"
                    id="submitButton"
                    className="submit55"
                    style={{
                      color: "#094e1c",
                      backgroundColor: "#c8a475",
                      border: "2px solid rgb(208, 100, 41)",
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      setShow(!show);
                      setReset({ successmessage: "Canceled Successfully" });
                    }}
                  >
                    Cancel
                  </button>
                </div>
                <label style={{ margin: "1rem", color: "#491111" }}>
                  {reset?.message}
                </label>
              </form>
            )}
          </div>
        </div>

        <div className="secondwrapper">
          <form onSubmit={(e) => funct(e)} className="formaaa">
            <div className="back55"></div>

            <ul style={{ width: "100%" }} className="form_fields">
              <div
                style={{ display: "flex", justifyContent: "space-between" }}
                className="col-12"
              >
                <div style={{ width: "47%" }} className="field_value ">
                  <label>
                    First Name <span>*</span>
                  </label>

                  <input
                    id="fname"
                    type="text"
                    required
                    onChange={(e) => onChange(e)}
                    name="firstName"
                    maxLength="16"
                    minLength="4"
                    className="inpt55"
                  />
                </div>
                <div style={{ width: "47%" }} className="field_value ">
                  <label>
                    Last Name <span className="required">*</span>
                  </label>

                  <input
                    id="lname"
                    type="text"
                    required
                    onChange={(e) => onChange(e)}
                    name="lastName"
                    maxLength="16"
                    minLength="4"
                    className="inpt55"
                  />
                </div>
              </div>

              <div>
                <label>Company Address</label>

                <input
                  id="fname"
                  type="text"
                  required
                  onChange={(e) => onChange(e)}
                  name="address"
                  maxLength="16"
                  minLength="4"
                  className="inpt55"
                />
              </div>
              <div>
                <label>
                  Country <span>*</span>
                </label>
                <div>
                  <select
                    onChange={(e) => onChange(e)}
                    name="country"
                    required
                    className="inpt55"
                  >
                    <option selected disabled>
                      -- Select Country Code
                    </option>

                    {countriesarr.map((i, k) => (
                      <option style={{ color: "black" }} value={i.name}>
                        +({i.phone}) {i.name}
                      </option>
                    ))}
                  </select>
                  <span className="field_info"></span>
                </div>
              </div>
              <div>
                <label>
                  اسم المحافظة (مصر ) <span>*</span>
                </label>

                <select
                  onChange={(e) => onChange(e)}
                  name="region"
                  className="inpt55"
                  
                >
                  <option style={{ color: "black" }} selected disabled>
                    -- Select Governorate
                  </option>
                  <option style={{ color: "black" }} value="الغربية">
                    الغربية
                  </option>
                  <option style={{ color: "black" }} value="الجيزة">
                    الجيزة{" "}
                  </option>
                  <option style={{ color: "black" }} value="الإسماعيلية">
                    الإسماعيلية
                  </option>
                  <option style={{ color: "black" }} value="كفر الشيخ">
                    كفر الشيخ
                  </option>
                  <option style={{ color: "black" }} value="مطروح">
                    مطروح
                  </option>
                  <option style={{ color: "black" }} value="المنيا">
                    المنيا
                  </option>
                  <option style={{ color: "black" }} value="المنوفية">
                    المنوفية
                  </option>
                  <option style={{ color: "black" }} value="الوادي الجديد">
                    الوادي الجديد
                  </option>
                  <option style={{ color: "black" }} value="شمال سيناء">
                    شمال سيناء
                  </option>
                  <option style={{ color: "black" }} value="بورسعيد">
                    بورسعيد
                  </option>
                  <option style={{ color: "black" }} value="القليوبية">
                    القليوبية
                  </option>
                  <option style={{ color: "black" }} value="قنا">
                    قنا
                  </option>
                  <option style={{ color: "black" }} value="البحر الأحمر">
                    البحر الأحمر
                  </option>
                  <option style={{ color: "black" }} value="الشرقية">
                    الشرقية
                  </option>
                  <option style={{ color: "black" }} value="سوهاج">
                    سوهاج
                  </option>

                  <option style={{ color: "black" }} value="الأقصر">
                    الأقصر
                  </option>
                  <option style={{ color: "black" }} value="القاهرة">
                    القاهرة
                  </option>
                  <option style={{ color: "black" }} value="الإسكندرية">
                    الإسكندرية
                  </option>

                  <option style={{ color: "black" }} value="الدقهلية">
                    الدقهلية
                  </option>
                  <option style={{ color: "black" }} value="دمياط">
                    دمياط
                  </option>
                </select>
              </div>

              <div>
                <label for="phone">Enter your phone number:</label>

                <input
                  className="inpt55"
                  onChange={(e) => onChange(e)}
                  type="number"
                  name="phone"
                  min="1111"
                />
              </div>
              <div></div>
              <label>
                Would you like to speak to one of our Experts?
                <span>*</span>
              </label>

              <Radio   onChange={onChange} />

              <button
                type="submit"
                onSubmit={(e) => funct(e)}
                value="Update My Profile"
                className="submit55"
              >
                Update My Profile
              </button>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Myprofile;

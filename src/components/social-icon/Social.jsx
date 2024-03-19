import React, { useState } from 'react';
import './Menu.css' // Import your CSS file
import { FaFacebook,FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";
import { BiSolidMessageSquareAdd } from "react-icons/bi";
import Donate from '../../assets/images/donationsai.png'

const Social = () => {
  const [isMenuVisible, setMenuVisible] = useState(true);

  const handleClick = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (

    <>
    <div className="menu trans">
    <span className="" ><img src={Donate} alt="" /></span>
    </div>
    <div className="menu">
      <span className={`${isMenuVisible ? 'hidden' : 'show'}`}><FaFacebook id='facebook'/></span>
      <span className={` ${isMenuVisible ? 'hidden' : 'show'}`}><FaInstagram id='insta'/></span>
      <span className={`${isMenuVisible ? 'hidden' : 'show'}`}><FaTwitter id='twitter'/></span>
      <span className={`${isMenuVisible ? 'hidden' : 'show'}`}><FaYoutube id='youtube'/></span>
      <span className="" onClick={handleClick}><BiSolidMessageSquareAdd id='soc'/></span>
    </div>
    </>
  );
}


export default Social

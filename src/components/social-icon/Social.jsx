import React, { useState } from "react";
import "./Menu.css"; // Import your CSS file
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiSolidMessageSquareAdd } from "react-icons/bi";
import Donate from "../../assets/images/donationsai.png";

const Social = () => {
  const [isMenuVisible, setMenuVisible] = useState(true);

  const handleClick = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <div className="menu trans">
        <a className="">
          <img src={Donate} alt="" />
        </a>
      </div>
      <div className="menu">
        <a
          href="https://www.facebook.com/shrisaibabasansthantrustshirdi"
          className={`${isMenuVisible ? "hidden" : "show"}`}
          target="_blank"
        >
          <FaFacebook id="facebook" />
        </a>
        {/* <span className={` ${isMenuVisible ? "hidden" : "show"}`}> */}
        <a
          className={` ${isMenuVisible ? "hidden" : "show"}`}
          href="https://www.instagram.com/shreesaibabasansthantrust?utm_medium=copy_link"
          target="_blank"
        >
          <FaInstagram id="insta" />
        </a>
        {/* </span> */}
        <a
          className={`${isMenuVisible ? "hidden" : "show"}`}
          href="https://twitter.com/ssstshirdi"
          target="_blank"
        >
          <FaTwitter id="twitter" />
        </a>
        <a
          className={`${isMenuVisible ? "hidden" : "show"}`}
          href="https://www.youtube.com/user/saibabasansthantrust/videos"
          target="_blank"
        >
          <FaYoutube id="youtube" />
        </a>
        <a className="" onClick={handleClick}>
          <BiSolidMessageSquareAdd id="soc" />
        </a>
      </div>
    </>
  );
};

export default Social;

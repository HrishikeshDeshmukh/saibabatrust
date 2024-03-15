import React from "react";
import Logo from "../assets/download.png";
import Pooja from "../assets/images/pooja.png";
import Darshan from "../assets/images/darshan.png";
import Aarti from "../assets/images/aarti.png";
import Accommodity from "../assets/images/Accommodation.png";
import Publications from "../assets/images/publications.png";

const Services = () => {
  return (
    <section>
      <div className="title-wrapper">
        <div className="about-head">
          <h3>
            <span className="about-head-span">Online Services</span>
          </h3>
        </div>
        {/* <div className="img-container">
          <img classname="img" src={Logo} alt="" width={100} />
        </div> */}
      </div>

      <div className="services">
        <p>
          Shri Saibaba Sansthan Trust, Shirdi is pleased to launch next
          generation portal for availing Darshan, Aarti, Donation,
          Accommodation, Pooja, Membership and Publications services. Please
          click on the below links to avail the services.
        </p>
        <div className="ser-icons">
          <div className="pooja-icon">
            <img src={Darshan} alt="" />
            <h3>Darshan</h3>
          </div>

          <div className="pooja-icon">
            <img src={Aarti} alt="" />
            <h3>Aarti</h3>
          </div>

          <div className="pooja-icon">
            <img src={Pooja} alt="" />
            <h3>Pooja</h3>
          </div>
          <div className="pooja-icon">
            <img src={Publications} alt="" />
            <h3>Publications</h3>
          </div>

          <div className="pooja-icon">
            <img src={Accommodity} alt="" />
            <h3>Accommodation</h3>
          </div>
        </div>

        <button className="btn btn2">Donation</button>
      </div>
    </section>
  );
};

export default Services;

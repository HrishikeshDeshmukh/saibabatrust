import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaApple } from "react-icons/fa6";
import { IoLogoAndroid } from "react-icons/io";

const Footer = () => {
    return (
        <footer>
            <div className='footer'>

                <div className="quick">
                    <div>
                        <h2>Quick Links</h2>
                    </div>
                    <div className="ele-wrap">
                        <div className='ele'>
                            <ul>
                                <li>Work Tenure</li>
                                <li>RTI ACT Section-4</li>
                                <li>Sansthan Regulations</li>
                                <li>Screen Reader Access</li>
                                <li>Statistical Reports</li>
                            </ul>
                        </div>

                        <div className='ele'>
                            <ul>
                                <li>Appeal</li>
                                <li>Annual Reports</li>
                                <li>Resolutions</li>
                                <li>Notice</li>
                                <li>Information Centers</li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="quick">
                    <h2>Reach Us On</h2>

                    <div className='con'>
                        <h5>For Online Services please do contact on</h5>
                        <span>02423-258956, 02423-258963</span>
                    </div>

                    <div className='con'>
                        <h5>Help Line No.</h5>
                        <span>+91 7588375204 / 7588371245 / 7588373189 / 7588374469</span>
                    </div>


                </div>


                <div className="quick">
                    <h2>Follow Us On</h2>

                    <div className='ico'>
                        <ul>
                            <li><FaFacebook id="facebook"/></li>
                            <li><FaInstagram id="insta"/></li>
                            <li><FaTwitter id="twitter" /></li>
                            <li><FaYoutube id="youtube"/></li>
                            
                        </ul>
                    </div>

                    <h2>Download App</h2>

                    <div className='ico'>
                        <ul id='down'>
                            
                            <li><IoLogoAndroid /></li>
                            <li><FaApple /></li>
                        </ul>
                    </div>


                </div>


            </div>
            <hr />
            <div className="footer-end">
                <div>
                    <h4>© Copyright 1998-2024 Shri Saibaba Sansthan Trust, Shirdi</h4>
                </div>
                <div className='term'>Terms & Conditions |
                    Terms & Disclaimer  |
                    Contact Us</div>
            </div>
        </footer>
    )
}

export default Footer

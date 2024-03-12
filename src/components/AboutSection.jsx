import React from 'react'
import { RiLiveLine } from "react-icons/ri";
import Pillar from '../assets/images/pillar.png'
import Logo from '../assets/download.png'
import Pillar2 from '../assets/images/pillar2.png'
import BG from '../assets/images/bg.png'
import Sai from '../assets/images/sai-front.png'

const AboutSection = () => {
    return (
        <section className='about'>
            <div className='title-wrapper'>
                <div className='about-head'>
                    <h3>About Us</h3>
                </div>
                <div className='img-container'>
                    <img classname='img' src={Logo} alt="" width={100} />
                </div>

            </div>

            <div className='pillar'>
                <img src={Pillar} alt="" />
            </div>


            <div className='pillar2'>
                <img src={Pillar2} alt="" />
            </div>

            <div className="contain">

                <div className="image-div">

                    <img src={BG} alt="" width={500} className='bg' />
                    <img src={Sai} alt="" className='sai' />


                </div>

                <div className="info-div">
                    <p>Shri Saibaba Sansthan Trust, Shirdi, is the Governing and Administrative body of Shri Saibaba's Samadhi Temple and all others temples in this premises, and devoted towards teachings of Saibaba <span className='red'>"Sabka Malik Ek"</span> and providing amenities to Sai devotees who are visiting Shirdi and Sai Samadhi Temple.</p>
                    <button className='btn'>Read More</button>
                </div>



            </div>
            <div className="live">
                <h1>Live Darshan</h1>
                <button>Live<RiLiveLine className='icon' /></button>
            </div>
        </section>
    )
}

export default AboutSection

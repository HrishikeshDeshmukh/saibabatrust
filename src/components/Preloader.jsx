import React from 'react'
import Logo from '../assets/images/logo.gif'
import Circle from '../assets/images/Circle.png'
const Preloader = () => {
  return (
    <section id="load">
        <div id="pre-wrapper">
            <div id="circle">
                <img src={Circle} alt="" width={530}  id="circles"/>
            </div>
            <div id="logos">
                <img src={Logo} alt="" id='log' />
            </div>
            <div  id="text">
            <h1>Shri Saibaba Sansthan Trust, Shirdi</h1>
            </div>
        </div>

      
    </section>
  )
}

export default Preloader

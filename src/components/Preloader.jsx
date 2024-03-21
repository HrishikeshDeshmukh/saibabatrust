import React from 'react'
import Logo from '../assets/images/logo.gif'
import Circle from '../assets/images/Circle.png'
const Preloader = () => {
  return (
    <section id="load">
        <div id="pre-wrapper">
            
            <div id="logos">
                <img src={Logo} alt="" id='log' />
            </div>
            <div  id="text">
            <h1>Shri Saibaba Sansthan Trust, Shirdi</h1>
            </div>
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            <div  id="text">
            <h4>Loading...</h4>
            </div>
        </div>

      
    </section>
  )
}

export default Preloader

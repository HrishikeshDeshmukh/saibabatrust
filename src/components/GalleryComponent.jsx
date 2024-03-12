import React from 'react'
import Logo from '../assets/download.png'
import Gallery from '../assets/images/gallery.jpg'
import Frame from '../assets/images/frame.png'

const GalleryComponent = () => {
    return (
        <section>
            <div className="gallery">
                <div className='title-wrapper'>
                    <div className='about-head'>
                        <h3>Gallery</h3>
                    </div>
                    <div className='img-container'>
                        <img classname='img' src={Logo} alt="" width={100} />
                    </div>

                </div>
              
              <div className='imgs'>
                <div className='frame'>
                    <img src={Frame} alt="" width={800} height={550}/>
                </div>

                <div className="gall">
                    <a className='' href='#'>
                        <img src={Gallery} alt="" width={1300} height={300}/>

                    </a>
                </div>
                </div>
            </div>

        </section>
    )
}

export default GalleryComponent

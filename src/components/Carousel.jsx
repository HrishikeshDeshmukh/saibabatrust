import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Flower from '../assets/images/flower.png'

// import images from "../Data/slideimg.json"
import Img1 from "../assets/images/1.png";
import Img2 from "../assets/images/2.png";
import Img3 from "../assets/images/3.png";
import Img4 from "../assets/images/4.png";
import Img5 from "../assets/images/5.png";
import GoldPlate from '../assets/images/gold.png'


const images = [
    {
        id:'1',
        img:Img1

    },
    {
        id:'2',
        img:Img2

    },

    {
        id:'3',
        img:Img3

    },

    {
        id:'4',
        img:Img4

    },

    {
        id:'5',
        img:Img5

    }

    
]



const Carousel = () => {

    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

    return (
     <>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
            {images.map((image)=> (
                <div className={`embla__slide ${image.id === images.length - 1 ? 'last-slide' : 'second-slide'}`} key={image.id}><img src={image.img} alt="" /></div>
            ))}
          
         
        </div>
      </div>

      <div className="gold-plate">
        <img src={GoldPlate} alt="" width={500} className='goldimg'/>
      </div>

      <div className='containers'>
        <div className="wrapper">
            <div className='text'>
                <p>Devotees are hereby informed that make donations in the Donation Office of Shree Saibaba Sansthan in Temple premises at Shirdi and obtain an official receipt. Donations can also be done through the official website https://online.sai.org.in, and obtain an online receipt. These donations will reach Shree Saibaba Sansthan Trust, Shirdi.</p>
            </div>

            <div className='text'>
                <p>Application for Sai Seva at Shri Saibaba Temple, Shirdi  Click here to apply</p>
            </div>
        </div>

        <div className='wrap-icon'>
            <img src={Flower} alt="" className='flower' />
        </div>

        <div className="wrapper">
            <div className='text'>
                <p>Devotees are hereby informed that make donations in the Donation Office of Shree Saibaba Sansthan in Temple premises at Shirdi and obtain an official receipt. Donations can also be done through the official website https://online.sai.org.in, and obtain an online receipt. These donations will reach Shree Saibaba Sansthan Trust, Shirdi.</p>
            </div>

            <div className='text'>
                <p>Application for Sai Seva at Shri Saibaba Temple, Shirdi  Click here to apply</p>
            </div>
        </div>
      </div>
      </>

    )
}

export default Carousel

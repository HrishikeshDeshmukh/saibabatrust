import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Shani from "../assets/images/Shani-Shingnapur.png";
import Ajanta from "../assets/images/Ajanta.jpeg";
import Ramkund from "../assets/images/ramkund.jpg";
import Muktidham from "../assets/images/mukti.jpg";
import Pandavleni from "../assets/images/Pandavleni.jpg";
import Kalaram from "../assets/images/Kalaram.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/pagination";

const NearbyPlaces = () => {
  return (
    <section>
      <div className="title">
        <h1>
          <span className="temple-premise-span">Shirdi Nearby Places</span>
        </h1>
      </div>
      <Swiper
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2000, // Delay between slides in milliseconds (5 seconds in this case)
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide card">
            <img src={Shani} alt="" />
            <h2>Shani Shingnapur</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img src={Ajanta} alt="" />
            <h2>Ellora Caves</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img src={Ramkund} alt="" />
            <h2>Ramkund</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img src={Muktidham} alt="" />
            <h2>Muktidham</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img src={Pandavleni} alt="" />
            <h2>Pandavleni Caves</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img src={Kalaram} alt="" />
            <h2>Kalaram Temple</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default NearbyPlaces;

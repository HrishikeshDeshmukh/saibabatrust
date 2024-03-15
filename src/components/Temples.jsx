import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Gurusthan from "../assets/images/Gurusthan.png";
import Samadhi from "../assets/images/Samadhi.jpg";
import Dwarkamai from "../assets/images/dwarka.jpg";
import Chavadi from "../assets/images/chavadi.jpg";
import Lendi from "../assets/images/lendibaug.jpg";
import Other from "../assets/images/other-temples.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/pagination";

const Temples = () => {
  return (
    <section id="swipe">
      <div className="title ">
        <h1>
          <span className="temple-premise-span">Temple in Premise</span>
        </h1>
      </div>
      <Swiper
        slidesPerView={"auto"}
        loop={true}
        autoplay={{
          delay: 2000, // Delay between slides in milliseconds (5 seconds in this case)
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          355: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide card">
            <img src={Gurusthan} alt="" />
            <h2>Gurusthan</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img src={Samadhi} alt="" />
            <h2>Samadhi</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img src={Dwarkamai} alt="" />
            <h2>Dwarkamai</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img src={Chavadi} alt="" />
            <h2>Chavadi</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img src={Lendi} alt="" />
            <h2>Lendi Garden</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide">
            <img src={Other} alt="" />
            <h2>Other Temples</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Temples;

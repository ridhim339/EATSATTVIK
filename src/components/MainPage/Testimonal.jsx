import "./testimonial.css";
import React, { useState, useLayoutEffect, useCallback } from "react";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";

import shreyash_jain from "../../assets/images/testimonials/shreyash_jain.jpg";
import dhawal_jain from "../../assets/images/testimonials/dhawal_jain.jpg";
import anoop_garg from "../../assets/images/testimonials/anoop_garg.jpg";
import shreya_munshi from "../../assets/images/testimonials/shreya_munshi.jpg";

SwiperCore.use([Virtual, Navigation, Pagination]);

function Testimonial() {
  //swiper
  const [swiperRef, setSwiperRef] = useState(null);

  //previous and next buttons
  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  // function for window width and height
  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }
  const [width, height] = useWindowSize();

  return (
    <div className="testimonial">
      <div className="swiper-main-content">
        <div className="prev-btn">
          <button onClick={handlePrevious}></button>
        </div>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={width < 740 ? 1 : width < 1500 ? 2 : 3}
          spaceBetween={30}
          virtual
        >
          <SwiperSlide>
            <div className="swiper-content-img">
              <img src={anoop_garg} alt="#"></img>
            </div>
            <div className="content">
              <h1>Anoop Garg</h1>
              <h4>Founder of Sattvik Mess</h4>
              <p>
                I have always been interested in holistic health, and the
                Sattvik lifestyle has exceeded my expectations.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-content-img">
              <img src={shreyash_jain} alt="#"></img>
            </div>
            <div className="content">
              <h1>Shreyash Jain</h1>
              <h4>Co-Founder at Programming Pathshala</h4>
              <p>
                {" "}
                Sattvik and vegetarian food is that it is not only good for my
                physical health, but it also promotes mental clarity and
                balance.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-content-img">
              <img src={shreya_munshi} alt="#"></img>
            </div>
            <div className="content">
              <h1>Shreya Munshi</h1>
              <h4>Cognitive Data Scientist @IBM</h4>
              <p>
                The Sattvik food is delicious and nourishing, and the practice
                of yoga and meditation has brought me a deeper sense of peace.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="swiper-content-img">
              <img src={dhawal_jain} alt="#"></img>
            </div>
            <div className="content">
              <h1>Dhawal Jain</h1>
              <h4>SDE @Piramal</h4>
              <p>
                The philosophy behind Sattvik food is based on the principle of
                eating foods that are pure, fresh, and full of life force, which
                resonates with me.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="next-btn">
          <button onClick={handleNext}></button>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;

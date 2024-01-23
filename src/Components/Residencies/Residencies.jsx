import React from "react";
import "./Residencies.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";

export default function Residencies() {
  return (
    <section className="r-wrapper" id="Residencies">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText"> Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        <Swiper {...sliderSettings}>

            <SliderButtons/>
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flexColStart r-card">
                <img src={item.image} alt="item-card" />
                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{item.price}</span>
                </span>

                <span className="primaryText">{item.name}</span>
                <span className="secondaryText">{item.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

const SliderButtons=()=>{
    const swiper=useSwiper();
    return(
<div className="flexCenter r-buttons">
    <button onClick={()=>swiper.slidePrev()}>&lt;</button>
    <button onClick={()=>swiper.slideNext()}>&gt;</button>
</div>
    )
}
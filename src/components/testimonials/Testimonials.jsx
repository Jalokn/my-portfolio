import React from "react";

import AVTR1 from "assets/avatar1.jpg";
import AVTR2 from "assets/avatar2.jpg";
import AVTR3 from "assets/avatar3.jpg";
import AVTR4 from "assets/avatar4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "testimonials.css";

import { Pagination } from "swiper";

//
// {
//   data.map(({avatar,name,review}, index=>{
//return(
//<article key={index} className="testimonial">
// <div className="client_avatar">
//   <img src={avatar} alt={name} />
// </div>
// <h5 className="client_name">{name}</h5>
// <small className="client_review">
//  {review}
// </small>
// </SwiperSlide>
// )
// }))
// }

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials_container">
        <Swiper
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={Pagination}
          className="mySwiper"
        >
          <SwiperSlide className="testimonial">
            <div className="client_avatar">
              <img src={AVTR1} alt="client avatar" />
            </div>
            <h5 className="client_name">Client Name</h5>
            <small className="client_review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              tempore a temporibus, assumenda reiciendis voluptas optio cum,
              error eveniet, ratione nesciunt molestias. Tempore voluptatum
              corrupti, perferendis dolorem quo vel aspernatur.
            </small>
          </SwiperSlide>
          <SwiperSlide className="testimonial">
            <div className="client_avatar">
              <img src={AVTR2} alt="client avatar" />
            </div>
            <h5 className="client_name">Client Name</h5>
            <small className="client_review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              tempore a temporibus, assumenda reiciendis voluptas optio cum,
              error eveniet, ratione nesciunt molestias. Tempore voluptatum
              corrupti, perferendis dolorem quo vel aspernatur.
            </small>
          </SwiperSlide>
          <SwiperSlide className="testimonial">
            <div className="client_avatar">
              <img src={AVTR3} alt="client avatar" />
            </div>
            <h5 className="client_name">Client Name</h5>
            <small className="client_review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              tempore a temporibus, assumenda reiciendis voluptas optio cum,
              error eveniet, ratione nesciunt molestias. Tempore voluptatum
              corrupti, perferendis dolorem quo vel aspernatur.
            </small>
          </SwiperSlide>
          <SwiperSlide className="testimonial">
            <div className="client_avatar">
              <img src={AVTR4} alt="client avatar" />
            </div>
            <h5 className="client_name">Client Name</h5>
            <small className="client_review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              tempore a temporibus, assumenda reiciendis voluptas optio cum,
              error eveniet, ratione nesciunt molestias. Tempore voluptatum
              corrupti, perferendis dolorem quo vel aspernatur.
            </small>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

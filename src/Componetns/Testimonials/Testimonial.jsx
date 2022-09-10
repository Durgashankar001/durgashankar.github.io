import React from 'react'
import './testimonial.css'
import AVTAR from "../../Assests/avatar1.jpg"
import AVTAR2 from "../../Assests/avatar2.jpg"
import AVTAR3 from "../../Assests/avatar3.jpg"
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const data = [
  {
    avatar: AVTAR,
    name: "Masai School",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima inventore dolore sapiente repudiandae, facilis optio veniam nobis neque quis dignissimos, nam autem molestias ipsum, repellendus velit! Nobis ut illo quae"
  },
  {
    avatar: AVTAR2,
    name: "Masai School",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima inventore dolore sapiente repudiandae, facilis optio veniam nobis neque quis dignissimos, nam autem molestias ipsum, repellendus velit! Nobis ut illo quae"
  },
  {
    avatar: AVTAR3,
    name: "Masai School",
    review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima inventore dolore sapiente repudiandae, facilis optio veniam nobis neque quis dignissimos, nam autem molestias ipsum, repellendus velit! Nobis ut illo quae"
  }

]

const Testimonial = () => {
  return (
    <section>
      <h5>My</h5>
      <h2>Education</h2>
      <Swiper className="container testimonials_container"
         modules={[ Pagination, A11y]}
         spaceBetween={40}
         slidesPerView={1}
         navigation
         pagination={{ clickable: true }}
      >
        {data.map((el, index) => {
          return (
            <SwiperSlide className='testimonial'>
              <div className="client_avtar">
                <img src={el.avatar} alt="avatar" />
              </div>
              <h5 className='client_name'>{el.name}</h5>
              <small className='client_review'>
                {el.review}
              </small>
            </SwiperSlide>
          )
        })}

      </Swiper>
    </section>
  )
}

export default Testimonial
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Slider = () => {
  return (
    <div className="container mx-auto my-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-500">
       Our Features
      </h2>
      

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {/* --- Slide 1 --- */}
        <SwiperSlide>
          <div className="bg-cyan-200 p-6 rounded-2xl shadow-lg text-center">
            <img
              src="https://i.ibb.co.com/HTPzQ772/arabic-man-watching-online-webinar-sitting-kitchen-with-computer-enjoying-distance-learning.jpg"
              alt="Arabic Man"
              className="rounded-xl w-full h-60 object-cover mb-4"
            />
            {/* <h3 className="text-xl font-bold">Teddy Bear</h3> */}
            <p className="text-gray-600">Find Your Study Partner in Online</p>
          </div>
        </SwiperSlide>

        {/* --- Slide 2 --- */}
        <SwiperSlide>
          <div className="bg-cyan-200 p-6 rounded-2xl shadow-lg text-center">
            <img
              src="https://i.ibb.co.com/rKVNhTDt/front-view-work-process-two-businessmen-discussing-project-while-sitting-desk.jpg"
              alt="Toy Car"
              className="rounded-xl w-full h-60 object-cover mb-4"
            />
            <p className="text-gray-600">Find Your Study Partner in Offline</p>
          </div>
        </SwiperSlide>

        {/* --- Slide 3 --- */}
        <SwiperSlide>
          <div className="bg-cyan-200 p-6 rounded-2xl shadow-lg text-center">
            <img
              src="https://i.ibb.co.com/hJf162JB/technology-integrated-everyday-life.jpg"
              alt="Building Blocks"
              className="rounded-xl w-full h-60 object-cover mb-4"
            />
            
            <p className="text-gray-600">Improve Group Study With AI </p>
          </div>
        </SwiperSlide>

        {/* --- Slide 4 (extra for loop) --- */}
        <SwiperSlide>
          <div className="bg-cyan-200 p-6 rounded-2xl shadow-lg text-center">
            <img
              src="https://i.ibb.co.com/0jq8NcSN/firmbee-com-gcs-NOs-PEXfs-unsplash.jpg"
              alt="Cute Doll"
              className="rounded-xl w-full h-60 object-cover mb-4"
            />
            
            <p className="text-gray-600">Track Your Study</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
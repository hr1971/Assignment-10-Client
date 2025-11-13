import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
  return (
    <div className="container mx-auto my-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-500">
        Our Features
      </h2>

      <Carousel
        showArrows={true}
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2500}
        showStatus={false}
        stopOnHover
      >
        <div className="bg-cyan-100 p-6 rounded-2xl shadow-lg text-center">
          <img
            src="https://i.ibb.co/HTPzQ772/arabic-man-watching-online-webinar-sitting-kitchen-with-computer-enjoying-distance-learning.jpg"
            alt="Online Study"
            className="rounded-xl w-full h-120 object-cover mb-4"
          />
          <p className="text-gray-600">Find Your Study Partner in Online</p>
        </div>

        <div className="bg-cyan-100 p-6 rounded-2xl shadow-lg text-center">
          <img
            src="https://i.ibb.co/rKVNhTDt/front-view-work-process-two-businessmen-discussing-project-while-sitting-desk.jpg"
            alt="Offline Study"
            className="rounded-xl w-full h-120 object-cover mb-4"
          />
          <p className="text-gray-600">Find Your Study Partner in Offline</p>
        </div>

        <div className="bg-cyan-100 p-6 rounded-2xl shadow-lg text-center">
          <img
            src="https://i.ibb.co/hJf162JB/technology-integrated-everyday-life.jpg"
            alt="AI Study"
            className="rounded-xl w-full h-120 object-cover mb-4"
          />
          <p className="text-gray-600">Improve Group Study With AI</p>
        </div>

        <div className="bg-cyan-100 p-6 rounded-2xl shadow-lg text-center">
          <img
            src="https://i.ibb.co/0jq8NcSN/firmbee-com-gcs-NOs-PEXfs-unsplash.jpg"
            alt="Track Study"
            className="rounded-xl w-full h-120 object-cover mb-4"
          />
          <p className="text-gray-600">Track Your Study</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;

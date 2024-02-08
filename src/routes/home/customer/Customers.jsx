import "./Customers.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import video1 from "../../../assets/video/video1.mp4";
import video2 from "../../../assets/video/video2.mp4";
import video3 from "../../../assets/video/video3.mp4";
import video4 from "../../../assets/video/video4.mp4";
import React, { useRef } from "react";
const Customers = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);
  const videoRef4 = useRef(null);

  const handleMouseEnter1 = () => {
    videoRef1.current.play();
  };

  const handleMouseLeave1 = () => {
    videoRef1.current.pause();
  };

  const handleMouseEnter2 = () => {
    videoRef2.current.play();
  };

  const handleMouseLeave2 = () => {
    videoRef2.current.pause();
  };
  const handleMouseEnter3 = () => {
    videoRef3.current.play();
  };

  const handleMouseLeave3 = () => {
    videoRef3.current.pause();
  };
  const handleMouseEnter4 = () => {
    videoRef4.current.play();
  };

  const handleMouseLeave4 = () => {
    videoRef4.current.pause();
  };

  return (
    <div className="container">
      <div className="caroucel">
        <video src="../../../"></video>
        <h1 className="cards_title">Mijozlarning fikrlari</h1>

        <Swiper
          slidesPerView={4}
          spaceBetween={80}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            340: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            400: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            460: {
              slidesPerView: 2,
              spaceBetween: 100,
            },
            490: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            550: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            581: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            660: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            830: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            930: {
              slidesPerView: 3,
              spaceBetween: 100,
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 140,
            },
            1150: {
              slidesPerView: 3,
              spaceBetween: 120,
            },
            1200: {
              spaceBetween: 0,
            },
            1240: {
              spaceBetween: 30,
            },
            1300: {
              spaceBetween: 50,
            },
            1370: {
              spaceBetween: 70,
            },
            1400: {
              spaceBetween: 80,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <video
              ref={videoRef1}
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
              controls
              muted
              autoPlay
              className="caroucel_video"
              src={video1}
            ></video>
          </SwiperSlide>
          <SwiperSlide>
            <video
              ref={videoRef2}
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
              controls
              muted
              className="caroucel_video"
              src={video2}
            ></video>
          </SwiperSlide>
          <SwiperSlide>
            <video
              ref={videoRef3}
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
              controls
              muted
              className="caroucel_video"
              src={video3}
            ></video>
          </SwiperSlide>
          <SwiperSlide>
            <video
              ref={videoRef4}
              onMouseEnter={handleMouseEnter4}
              onMouseLeave={handleMouseLeave4}
              controls
              muted
              loop
              className="caroucel_video"
              src={video4}
            ></video>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Customers;

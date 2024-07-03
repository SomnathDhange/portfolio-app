import React, { useState, useRef, useCallback } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { recentBlogList } from "../Helper/Constant";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const RecentBlogCarousel = (props) => {
  const sliderRef = useRef(null);

  const prevSlide = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const nextSlide = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="container py-10 m-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center py-9">
        <div>
          <h1 className="text-5xl font-semibold leading-normal">
            Recent Blogs
          </h1>
        </div>
        <div className="flex justify-between items-center">
          <button
            className="text-white transition-all duration-700 rounded-full w-9 h-9 bg-slate-400 hover:bg-black mr-4 text-center flex  justify-center items-center"
            onClick={prevSlide}
          >
            <ArrowLeftIcon className="w-4 h-4" />
          </button>
          <button
            className="text-white transition-all duration-700 rounded-full w-9 h-9 bg-slate-400 hover:bg-black text-center flex justify-center items-center"
            onClick={nextSlide}
          >
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div style={{ height: "500px" }}>
        <Swiper
          ref={sliderRef}
          modules={[Navigation]}
          loop={false}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{
            clickable: false,
          }}
          grabCursor={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            425: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="carousel"
        >
          <div className="px-20">
            {recentBlogList.map((item, index) => {
              return (
                <SwiperSlide>
                  <div
                    key={index}
                    className="group p-4 border transition-all duration-700 border-white hover:border hover:border-slate-400 hover:shadow-xl"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto"
                    />
                    <div>
                      <p className="text-xs mb-2 mt-2">November 10, 2023</p>
                      <div className="flex justify-between">
                        <div className="w-5/6">
                          <h2 className="text-xl font-semibold mb-1">
                            {item.title}
                          </h2>
                          <p className="text-xs font-medium">
                            {item.description}
                          </p>
                        </div>
                        <div className="w-1/6 flex items-end justify-end">
                          <a
                            href="#"
                            className="border transition-all text-black duration-700 border-white group-hover:bg-black group-hover:text-white rounded-full leading-3 w-10 h-10 text-center font-semibold flex items-center justify-center"
                          >
                            <ArrowRightIcon className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default RecentBlogCarousel;

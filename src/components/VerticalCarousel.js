import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Mousewheel, Pagination, Scrollbar } from "swiper/modules";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { projectList } from "../Helper/Constant";
export default function VerticalCarousel() {
  const swiperRefLocal = useRef();
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    console.log("Mouse Leave");
    setHovered(false);
  };

  const BadgeWithLabel = (props) => {
    return (
      <a
        href="#"
        className="bg-transparent border border-white/[.4] text-white inline-block px-2.5 py-1.5 rounded-3xl text-xs mt-2 mr-2 font-medium"
      >
        {props.label}
      </a>
    );
  };

  return (
    <div
      className="swiper-main-custom overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Swiper
        direction={"vertical"}
        ref={swiperRefLocal}
        slidesPerView={1}
        spaceBetween={400}
        speed={2000}
        mousewheel={{
          releaseOnEdges: true,
          sensitivity:1,
          forceToAxis:true
        }}
        freeMode={true}
        modules={[Mousewheel, Scrollbar, Pagination]}
        className="mySwiper"
      >
        
        {projectList.map((item) => {
          return (
            <SwiperSlide>
              <div className="bg-black p-2.5 relative overflow-hidden">
                <div class="container m-auto grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="sm:col-span-8 relative z-10">
                    <img src={item.projectImg} alt={item.heading} />
                  </div>
                  <div className="sm:col-span-4 pt-8 text-white text-left">
                    <div className="pl-5 relative z-10">
                      <h1 className="text-3xl font-semibold leading-normal">
                        {item.heading}
                      </h1>
                      <p className="text-neutral-400 pb-3">{item.subHeading}</p>
                      {item.skillArr.map((item) => (
                        <BadgeWithLabel label={item} />
                      ))}

                      <div className="flex  items-center pt-4 pb-9">
                        <a
                          href="#"
                          className="bg-white inline-block py-3 rounded-3xl px-5 text-xs font-semibold text-black"
                        >
                          View Project
                        </a>
                        <a
                          href="#"
                          className="bg-white  text-black rounded-full leading-3 w-10 h-10 text-center font-semibold flex items-center justify-center"
                        >
                          <ArrowRightIcon className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {isHovered && (
                  <>
                    <div className="project-banner-graident-1"></div>
                    <div className="project-banner-graident-2"></div>
                  </>
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

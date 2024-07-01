import React, { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import VerticalCarousel from "../components/VerticalCarousel";
import { aboutSectionArr, recentBlogList } from "../Helper/Constant";
import AboutSectionItem from "../components/AboutSectionItem";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? recentBlogList.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === recentBlogList.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className="container m-auto px-14 py-20 sm:px-40">
        <div class=" grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="sm:col-span-4">
            <h1 className="text-5xl font-semibold">About Me</h1>
          </div>
          <div className="sm:col-span-8">
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur. Fermentum tellus at enim
              suspendisse vel mus. Ut nullam libero amet purus eget. Sem iaculis
              enim diam semper eget tincidunt. Lacus blandit ultrices faucibus
              nibh. Tortor etiam turpis diam fusce viverra. Mi blandit a sed
              amet nulla.Lorem ipsum dolor sit amet consectetur. Fermentum
              tellus at enim suspendisse vel mus. Ut nullam libero amet purus
              eget. Sem iaculis enim diam semper eget tincidunt. Lacus blandit
              ultrices faucibus nibh. Tortor etiam turpis diam fusce viverra. Mi
              blandit a sed amet nulla.
            </p>
          </div>
        </div>
      </div>
      <div className="container m-auto transition-all px-2.5 py-5 sm:px-40 ">
        <div class=" grid grid-cols-1 md:grid-cols-12 gap-4">
          {aboutSectionArr.map((item) => {
            return <AboutSectionItem item={item} />;
          })}
        </div>
      </div>

      <div className="container md:px-40 m-auto py-14">
        <h1 className="text-5xl font-semibold leading-normal text-center mb-6">
          Projects
        </h1>
        <VerticalCarousel />
      </div>

      <div className="container md:px-40 py-10 m-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center py-9">
          <div>
            <h1 className="text-5xl font-semibold leading-normal">
              Recent Blogs
            </h1>
          </div>
          <div className="flex justify-between items-center">
            <button
              className="text-white  rounded-full w-9 h-9 bg-slate-400 mr-4 text-center flex  justify-center items-center"
              onClick={prevSlide}
            >
              <ArrowLeftIcon className="w-4 h-4" />
            </button>
            <button
              className="text-white  rounded-full w-9 h-9 bg-black text-center flex justify-center items-center"
              onClick={nextSlide}
            >
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform ease-in-out duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {recentBlogList.map((item, index) => (
              <div key={index} className="w-full md:w-1/3 flex-shrink-0 p-3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto"
                />
                <div>
                  <p className="text-xs mb-2 mt-2">November 10, 2023</p>
                  <h2 className="text-xl font-semibold mb-1">{item.title}</h2>
                  <p className="text-xs font-medium">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

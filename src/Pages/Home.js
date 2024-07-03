import React from "react";
import "react-multi-carousel/lib/styles.css";
import VerticalCarousel from "../components/VerticalCarousel";
import { aboutSectionArr } from "../Helper/Constant";
import AboutSectionItem from "../components/AboutSectionItem";
import RecentBlogCarousel from "../components/RecentBlogCarousel";

const Home = () => {
  return (
    <>
      <div className="container m-auto px-14 py-20">
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
      <div className="container m-auto transition-all px-2.5 py-14">
        <div class=" grid grid-cols-1 md:grid-cols-12 gap-4">
          {aboutSectionArr.map((item) => {
            return <AboutSectionItem item={item} />;
          })}
        </div>
      </div>

      
      <VerticalCarousel />
      <RecentBlogCarousel />
    </>
  );
};

export default Home;

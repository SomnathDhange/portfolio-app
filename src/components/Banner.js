import React from "react";
import HomeBannerContent from "./HomeBannerContent";
import AboutBannerContent from "./AboutBannerContent";
import CommonBannerContent from "./CommonBannerContent";

const Banner = (props) => {
  const renderBannerContent = (param) => {
    switch (param) {
      case "home":
        return <HomeBannerContent />;
      case "about":
        return <AboutBannerContent />;
      default:
        return <CommonBannerContent pageLoaded={param} />;
    }
  };

  return (
    <>
      <div className="container px-5 sm:px-20 m-auto">
        {renderBannerContent(props.componentLoded)}
      </div>
      <div className="banner-graident-1"></div>
      <div className="banner-graident-2"></div>
      <div className="banner-graident-3"></div>
    </>
  );
};

export default Banner;

import React, { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
const AboutSectionItem = (props) => {
  const { item } = props;
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isMobile) setIsHovered(true);
    else setIsHovered(false);
  }, [isMobile]);
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group overflow-hidden relative col-span-1 h-96 sm:h-80 sm:col-span-4 cursor-pointer bg-[#1a1a1a] transition-all duration-300 }`}
    >
      <div className="relative  transition-all z-10  w-full py-2 text-center flex justify-center h-full flex-col">
        <div>
          <img src={item.icon} alt={item.label} className="m-auto w-1/4" />
        </div>
        <div>
          <Link
            to={item.url}
            className="bg-transparent border border-slate-200 inline-block px-6 py-3 rounded-3xl font-semibold mt-6 text-white"
          >
            {item.label}
          </Link>
        </div>
      </div>

      {isHovered && (
        <div className="transition-all duration-300">
          <div className="about-section-graident-1"></div>
          <div className="about-section-graident-2"></div>
        </div>
      )}
    </div>
  );
};

export default AboutSectionItem;

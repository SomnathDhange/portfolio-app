import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();

  const [pageLoaded, setPageLoded] = useState("home");

  useEffect(() => {
    const { pathname } = location;

    if (pathname.includes("about")) {
      setPageLoded("about");
    } else if (pathname.includes("projects")) {
      setPageLoded("projects");
    } else if (pathname.includes("leetcode")) {
      setPageLoded("leetcode");
    } else if (pathname.includes("github")) {
      setPageLoded("github");
    } else if (pathname.includes("medium")) {
      setPageLoded("medium");
    } else if (pathname.includes("/")) {
      setPageLoded("home");
    }
  }, [location]);

  return (
    <div className="sm:p-2.5 ">
      <div className="banner header-banner  flex flex-col h-3/4">
        <Navbar />
        <Banner componentLoded={pageLoaded} />
      </div>
    </div>
  );
};

export default Header;

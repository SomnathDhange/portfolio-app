import React, { useEffect, useState } from "react";

import { socialMediaList } from "../Helper/Constant";
const Footer = () => {
  return (
    <div className="p-2.5">
      <div className="footer-banner banner  flex flex-col">
        <div className="sm:flex  sm:flex-col items-center justify-between m-auto   text-white">
          <div>
            <h1 className="font-semibold text-4xl sm:text-7xl tex">
              Let’s Work Together
            </h1>
            <div className="pt-6 text-center">
              <div className="mb-4 sm:mr-4 sm:mb-0 sm:inline-block">
                <a
                  href="#"
                  className="border border-white bg-transparent inline-block px-6 py-4 rounded-3xl font-semibold text-xs "
                >
                  ganna@gmail.com
                </a>
              </div>
              <div className="sm:inline-block">
                <a
                  href="#"
                  className="border border-white bg-transparent inline-block px-6 py-4 rounded-3xl font-semibold text-xs"
                >
                  +91 8328540081
                </a>
              </div>
            </div>
            <div className="absolute w-full bottom-0 left-0">
              <div className="px-10 py-4 flex justify-between items-center">
                <div className="text-xs">©ganna,2024</div>
                <div>
                  <ul className="flex space-x-6  text-white">
                    {socialMediaList.map((item) => {
                      return (
                        <li>
                          <a href={item.url}>
                            <img
                              src={item.icon}
                              alt={item.name}
                              className={
                                item.name === "Facebook" ? "w-2.5" : "w-4"
                              }
                            />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="banner-graident-1"></div>
        <div className="banner-graident-2"></div>
        <div className="banner-graident-3"></div>
      </div>
    </div>
  );
};

export default Footer;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (toggleMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [toggleMenu]);

  const handleNavigete=(path)=>{
    navigate(path);
    setToggleMenu(false)
  }

  return (
    <div className="container mx-auto px-10 sm:px-20 pt-8 flex h-20 justify-between items-center">
      <div>
        <Link
          to="/"
          className="flex font-bold gap-3 items-center text-2xl text-white"
        >
          Ganna
        </Link>
      </div>
      <div>
        <div className="flex items-center justify-between space-x-6 ">
          
            <ul className="hidden lg:flex space-x-6 text-xs text-white font-semibold">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
            <div className="hidden lg:flex items-center">
              <a
                href="#"
                className="bg-white inline-block py-2.5 rounded-3xl px-5 font-semibold text-xs"
              >
                Get in touch
              </a>

              <div
                class="group border  rounded-full w-fit grid bg-white  cursor-pointer"
                style={{ clipPath: "inset(0 0 0 0 )" }}
              >
                <div class="[grid-area:1/1] flex items-center justify-center h-9 w-9 transition ease-in-out group-hover:delay-300 -translate-x-10  group-hover:translate-x-0">
                  <ArrowRightIcon className="w-4 h-4" />
                </div>
                <div class="[grid-area:1/1] flex items-center justify-center h-9 w-9  transition ease-in-out delay-300 group-hover:delay-[0s] duration-300  group-hover:translate-x-10">
                  <ArrowRightIcon className="w-4 h-4" />
                </div>
              </div>
            </div>
       
          <div className="sm:hidden">
            <div>
              <div className="relative z-50">
                {toggleMenu ? (
                  <XMarkIcon
                    className="w-7 h-7 text-white"
                    onClick={() => setToggleMenu(!toggleMenu)}
                  />
                ) : (
                  <Bars3Icon
                    className="w-7 h-7 text-white"
                    onClick={() => setToggleMenu(!toggleMenu)}
                  />
                )}
              </div>
              {toggleMenu && (
                <div
                  className={`fixed z-40 w-full h-full top-0 left-0 bg-black/[0.9] text-white overflow-hidden flex flex-col lg:hidden gap-16 duration-700 `}
                >
                  <div className="py-20 px-5">
                    <div className="flex flex-col gap-8 font-bold">
                      <a href="javascript:void(0)" onClick={()=>handleNavigete('/')}>Home</a>
                      <a href="javascript:void(0)" onClick={()=>handleNavigete('/projects')}>Projects</a>
                      <a href="javascript:void(0)" onClick={()=>handleNavigete('/about')}>About</a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import Logo from "../assets/Img/Logo.svg";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <div className="container px-10 sm:px-20 pt-5 flex h-20 justify-between items-center">
      <div>
        <Link
          to="/"
          className="flex font-bold gap-3 items-center text-2xl text-white"
        >
          <img src={Logo} alt="Logo" />
          Ganna
        </Link>
      </div>
      <div>
        <div className="flex items-center justify-between space-x-6 ">
          <ul className="lg:flex hidden space-x-6 text-xs text-white font-semibold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects"> Projects </Link>
            </li>
            <li>
              <Link to="/about"> About </Link>
            </li>
          </ul>
          <div className="lg:flex hidden items-center">
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { ArrowDownIcon } from "@heroicons/react/24/outline";

const HomeBannerContent = () => (
  <div className="flex flex-col items-center justify-between m-auto text-center text-white sm:w-4/6">
    <div>
      <a
        href="#"
        className="flex relative justify-between items-center spac border border-white/[.2] bg-transparent px-6 py-3 rounded-3xl font-medium uppercase text-xs"
      >
        <span class="relative flex h-2 w-2 mr-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
        </span>
        Open to work
      </a>
    </div>
    <div className="pt-6">
      <h1 className="font-semibold text-4xl sm:text-7xl">Hi, I am Ganna</h1>
      <h1 className="font-semibold text-4xl sm:text-7xl">
        Full stack Developer
      </h1>
      <p className="text-slate-400 pt-4 px-14">
        With over 7 years of experience in this field with skills in HTML, CSS,
        JavaScript and PHP, as well as frameworks like React, Next.js
      </p>
    </div>

    <div className="flex items-center justify-center pt-6 relative z-10">
      <a
        href="#"
        className="bg-white/[.2] inline-block px-5 py-3 rounded-3xl font-semibold  text-xs"
      >
        Want to Know more
      </a>
      <div
        class="group rounded-full w-fit grid bg-white/[.2] cursor-pointer"
        style={{ clipPath: "inset(0 0 0 0 )" }}
      >
        <div class="[grid-area:1/1] flex items-center justify-center h-9 w-9 rounded-full  transition ease-in-out group-hover:delay-300 -translate-y-10  group-hover:translate-y-0">
          <ArrowDownIcon className="w-4 h-4" />
        </div>
        <div class="[grid-area:1/1] flex items-center justify-center h-9 w-9  rounded-full transition ease-in-out delay-300 group-hover:delay-[0s] duration-300 group-hover:translate-y-10">
          <ArrowDownIcon className="w-4 h-4" />
        </div>
      </div>
      {/* <a
        href="#"
        className="flex rounded-full w-12 h-12 text-center font-semibold items-center justify-center"
      ></a> */}
    </div>
  </div>
);

export default HomeBannerContent;

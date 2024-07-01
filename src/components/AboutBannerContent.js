import UserImg from "../assets/Img/about.png";
const AboutBannerContent = () => {
  return (
    <div className="sm:flex sm:flex-col items-center justify-between m-auto   text-white">
      <div class="container m-auto grid  grid-cols-1 sm:grid-cols-12  gap-4 justify-items-center">
        <div className="sm:col-span-3">
          <div className="h-72 w-48 sm:h-96 sm:w-52">
            <img src={UserImg} alt="User Image" />
          </div>
        </div>
        <div className="sm:col-span-7 text-center sm:text-left">
          <div className="pt-6">
            <h1 className="font-semibold text-4xl sm:text-7xl">Hi, I am Ganna</h1>
            <h1 className="font-semibold text-4xl sm:text-7xl">Full stack Developer</h1>
            <p className="text-slate-400 pt-4">
              With over 7 years of experience in this field with skills in HTML,
              CSS, JavaScript and PHP, as well as frameworks like React, Next.js
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBannerContent;

import LeetCodeImg from "../assets/Img/leetcode.png";
import GithubImg from "../assets/Img/github.png";
import MediumImg from "../assets/Img/medium.png";
import { blogList } from "../Helper/Constant";

const CommonBannerContent = (props) => {
  return (
    <div className="flex justify-center items-center text-white">
      {["leetcode", "github", "medium"].includes(props.pageLoaded) ? (
        <>
          <div>
            <img
              src={blogList[props.pageLoaded].img}
              alt="Leet Code"
              className="w-16 mr-2"
            />
          </div>
          <div>
            <h1 className="text-6xl">{blogList[props.pageLoaded].heading}</h1>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-7xl font-bold">Projects</h1>
        </>
      )}
    </div>
  );
};

export default CommonBannerContent;

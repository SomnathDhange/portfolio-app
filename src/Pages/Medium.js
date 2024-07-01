import MediumBlogImg from "../assets/Img/medium-blog.png";
const Medium = () => {
  const mediumBlogs = [
    {
      title: "Microsoft is ditching React",
      subTitle: "Here's why Microsoft considers React a mistake for Edge.",
      releaseDate: "June 6th",
      blogImg: MediumBlogImg,
    },
    {
      title: "Microsoft is ditching React",
      subTitle: "Here's why Microsoft considers React a mistake for Edge.",
      releaseDate: "June 6th",

      blogImg: MediumBlogImg,
    },
    {
      title: "Microsoft is ditching React",
      subTitle: "Here's why Microsoft considers React a mistake for Edge.",
      releaseDate: "June 6th",
      blogImg: MediumBlogImg,
    },
    {
      title: "Microsoft is ditching React",
      subTitle: "Here's why Microsoft considers React a mistake for Edge.",
      releaseDate: "June 6th",
      blogImg: MediumBlogImg,
    },
  ];

  return (
      <div class="container m-auto py-20 sm:px-10 grid-cols-1 gap-4 p-4">
        <div className="flex flex-col gap-4 pt-8 w-full">
          {mediumBlogs.map((item) => {
            return (
              <div className="sm:flex p-2.5 justify-between items-center px-3 border-black border-b-2  py-5">
                <div className="sm:w-1/2 mb-2">
                  <h1 className="text-3xl font-bold">{item.title}</h1>
                  <p className="pb-3">{item.subTitle}</p>
                  <span className="bg-black/[.2] inline-block px-3 py-2 rounded-3xl text-xs">
                    {item.releaseDate}
                  </span>
                </div>
                <div className="w-1/1">
                  <img src={item.blogImg} className="w-full" />
                </div>
                <div className="w-1/1 mt-2">
                  <a
                    href="#"
                    className="bg-black/[.2] border border-black inline-block px-4 py-2 rounded-3xl text-xs"
                  >
                    Medium
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
  );
};

export default Medium;

const Github = () => {
  const githubBlogs = [
    {
      title: "cohort-assignments",
      subTitle:
        "Dive into the creative cosmos of Project Nexus, where ideas transcend and your project wishes find their magical home",
      releaseDate: "Dec 4, 2023",
      skill: "Javascript",
    },
    {
      title: "cohort-assignments",
      subTitle:
        "Dive into the creative cosmos of Project Nexus, where ideas transcend and your project wishes find their magical home",
      releaseDate: "Dec 4, 2023",
      skill: "Javascript",
    },
    {
      title: "cohort-assignments",
      subTitle:
        "Dive into the creative cosmos of Project Nexus, where ideas transcend and your project wishes find their magical home",
      releaseDate: "Dec 4, 2023",
      skill: "Javascript",
    },
    {
      title: "cohort-assignments",
      subTitle:
        "Dive into the creative cosmos of Project Nexus, where ideas transcend andyour project wishes find their magical home",
      releaseDate: "Dec 4, 2023",
      skill: "Javascript",
    },
  ];

  return (
    <div class="container m-auto py-20 sm:px-10 grid grid-cols-1 gap-4 p-4">
      {githubBlogs.map((item) => {
        return (
          <div className="sm:flex justify-between items-center px-3 border-black border-b-2  py-5">
            <div className="sm:w-1/2 pb-4">
              <h1 className="text-3xl font-bold">{item.title}</h1>
              <p className="pb-3 pt-3">{item.subTitle}</p>
              <span className="bg-black/[.2] inline-block px-3 py-2 rounded-3xl text-xs font-bold">
                {item.skill}
              </span>
              <span className="bg-black/[.2] inline-block px-3 py-2 rounded-3xl text-xs ml-1">
                Updated an {item.releaseDate}
              </span>
            </div>

            <div>
              <a
                href="#"
                className="bg-black/[.2] border border-black inline-block px-4 py-2 rounded-3xl text-xs"
              >
                Github
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Github;

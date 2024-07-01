import { projectList } from "../Helper/Constant";
import { ProjectItem } from "../components/ProjectItem";

const Projects = () => {
  return (
    <div className="container m-auto py-20 md:px-5">
      {projectList.map((item) => (
        <ProjectItem item={item} />
      ))}
    </div>
  );
};

export default Projects;

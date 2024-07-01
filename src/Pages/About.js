import { experienceSectionArr, mainSkillSetArr } from "../Helper/Constant";

const BadgeWithLabel = (props) => {
  return (
    <a
      href="#"
      className="bg-black/[.1] border border-black inline-block px-4 py-1 rounded-3xl text-xs mt-2 mr-2"
    >
      {props.label}
    </a>
  );
};
const About = () => {
  return (
    <div class="container m-auto py-20 sm:px-10 grid  grid-cols-1  sm:grid-cols-12 gap-4 p-4">
      <div className="sm:col-span-7">
        <h1 className="text-5xl font-bold pb-6 ">Experience</h1>
        <div className="pt-6">
          {experienceSectionArr.map((item) => {
            return (
              <div className="pb-8">
                <BadgeWithLabel label={item.date} />
                <h1 className="leading-10 text-3xl font-semibold pt-1">
                  {item.label}
                </h1>
                <p>{item.subText}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="sm:col-span-5">
        {mainSkillSetArr.map((item, index) => {
          return (
            <div className={index != 0 ? "pt-20" : ""}>
              <h1 className="text-5xl font-bold pb-6">{item.label}</h1>
              {item.skillArr.map((item) => (
                <BadgeWithLabel label={item} />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default About;

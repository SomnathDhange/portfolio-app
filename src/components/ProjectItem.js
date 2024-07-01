import { ArrowRightIcon } from "@heroicons/react/24/outline";

const BadgeWithLabel = (props) => {
  return (
    <a
      href="#"
      className="bg-black/[.1] inline-block px-2.5 py-1.5 rounded-3xl text-xs mt-2 mr-2 font-medium"
    >
      {props.label}
    </a>
  );
};
export const ProjectItem = (props) => {
  const { item } = props;

  return (
    <div className="relative pb-8">
      <div class="container m-auto grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="sm:col-span-8 md:order-2">
          <img src={item.projectImg} alt={item.heading} className="w-full" />
        </div>
        <div className="sm:col-span-4 md:order-1 pt-8 text-left">
          <div className="pl-5 relative z-10">
            <h1 className="text-3xl font-semibold leading-normal">
              {item.heading}
            </h1>
            <p className="text-neutral-400 pb-3">{item.subHeading}</p>
            {item.skillArr.map((item) => (
              <BadgeWithLabel label={item} />
            ))}

            <div className="flex  items-center pt-4 pb-9">
              <a
                href="#"
                className="border border-black/[.1] inline-block py-3 rounded-3xl px-5 text-xs font-semibold text-black"
              >
                View Project
              </a>
              <a
                href="#"
                className="border border-black/[.1] rounded-full leading-3 w-10 h-10 text-center font-semibold flex items-center justify-center"
              >
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

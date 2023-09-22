import React from "react";
import businessLandingSite from "../assets/businessLandingSite.png";
import AnalysisTool from "../assets/listAnalysisTool.png";
import TrailBlazer from "../assets/Trailblazer.png";

const work = [
  {
    name: "Business.smart.market Wordpress Landing Site",
    id: 1,
    image: businessLandingSite,
    description:
      "A WordPress customer landing site for advertising the main application.",
    skills: [
      "WordPress",
      "HTML",
      "CSS",
      "JavaScript",
      "Plugin Development",
      "PHP",
      "MySQL",
      "SSL Certificate",
    ],
    link: "https://business.smart.market",
  },
  {
    name: "Business.smart.market List Analysis Tool",
    id: 2,
    image: AnalysisTool,
    description:
      "A proprietary analytics tool I built while at Everything Marketing.",
    skills: [
      "AngularJs",
      "HTML",
      "CSS",
      "Web Components",
      "Google maps API",
      "TurfJs",
      "Lodash",
      "JavaScript",
    ],
    link: "https://business1.smart.market",
  },
  {
    name: "TrailBlazer Supply Co.",
    id: 3,
    image: TrailBlazer,
    description:
      "A responsive mockup of an ecommerce site. A work in progress. My plan is to make it real.",
    skills: [
      "React",
      "TailwindCss",
      "react-router",
      "React Slick",
      "Framer motion",
    ],
    link: "https://trailblazersupply.com",
  },
  {
    name: "Jeremyhayes.me",
    id: 4,
    image: AnalysisTool,
    skills: ["React", "TailwindCss", "react-router", "Flowbite"],
    description: "The site you are on right now",
    link: "#",
  },
];
const Projects2 = () => {
  return (
    <div className="w-full px-2 bg-teal-300 dark:bg-gray-800 py-8">
      <div className="py-3 text-xl max-w-screen-xl mx-auto">
        <h3>My Work</h3>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-screen-xl mx-auto">
        {work.map((item, idx) => (
          <div
            key={idx}
            className="p-3 bg-white dark:bg-gray-700 flex flex-col justify-between"
          >
            <div>
              <h4>{item.name}</h4>
              <img
                className="border-[1px] border-gray-300 mb-2 mt-2 dark:border-gray-600"
                src={item.image}
                alt={item.title}
              />
              <p className="text-sm relative">{item.description}</p>
            </div>
            <div className="p-2 h-15 my-2 w-full flex items-end justify-between">
              <span className="group relative">
                <ul className=" border w-fit p-2 rounded-sm bg-gray-50 dark:bg-gray-700 hidden group-hover:block absolute bottom-10 left-0">
                  {item.skills.map((it, i) => (
                    <li key={it.name + i}>{it}</li>
                  ))}
                </ul>
                <button className="border-2 border-teal-500 p-2 rounded-lg">
                  Skills
                </button>
              </span>
              <a
                type="link"
                href={item.link}
                className="bg-transparent border-2 rounded-lg border-teal-500 p-2"
              >
                Visit Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects2;

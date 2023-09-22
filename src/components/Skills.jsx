import React from "react";
import businessLandingSite from "../assets/businessLandingSite.png";
import AnalysisTool from "../assets/listAnalysisTool.png";
import TrailBlazer from "../assets/Trailblazer.png";

const skills = [
  {
    name: "Front-end",
    id: 1,
    items: [{skill:"AngularJs", time: 6},{skill:"React", time: 2}, {skill:"NextJs", time: 2}, {skill:"Vue", time: 1}, {skill:"Tailwind", time: 2}, {skill:"Bootstrap", time: 10}, {skill:"UiKit", time: 6}]
  },
  {
    name: "Back-end",
    id: 2,
    items: [{skill:"NodeJs", time: 6},{skill:"Fastify", time: 3}, {skill:"Python", time: 10}, {skill:"Nginx", time: 10}, {skill:"MySql", time: 10}, {skill:"MongoDB", time: 1}],
  },
  {
    name: "Everything else",
    id: 3,
  items: [{skill:"Linux Administration", time: 18}, {skill:"Large Language Models", time: 18}, {skill:"A.I.", time: 1}, {skill:"WordPress", time: 10}, {skill:"IPFS", time:1}, {skill:"Web3", time:1}],
  }
];
const Skills = () => {
  return (
    <div className="w-full px-2 bg-gray-100 dark:bg-gray-900 py-8">
      <div className="py-3 text-xl max-w-screen-xl mx-auto">
        <h3>My Skills</h3>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 max-w-screen-xl mx-auto">
        {skills.map((item) => (
          <div key={item.id} className="px-8 py-6 bg-white dark:bg-gray-700">
            <h4 >{item.name}</h4>
            <ul className="w-full">
              {item.items.map((it, i)=>(
                <li key={i} className="w-full flex justify-between">
                  <span className="text-sm">
                  {it.skill}
                  </span>
                  <span className=" text-xs text-gray-500 italic">
                    {it.time} Year{it.time !== 1 && <span>s</span>}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

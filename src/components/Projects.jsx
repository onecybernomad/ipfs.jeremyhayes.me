import { Transition } from "@tailwindui/react";
import { Button } from "flowbite-react";
import { useState } from "react";
import businessLandingSite from "../assets/businessLandingSite.png";
import AnalysisTool from "../assets/listAnalysisTool.png";

export default function Projects() {
  const [showSMBL, setShowSMBL] = useState(true);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const projects = [
    {
      name: "Business.smart.market Wordpress Landing Site",
      id: 1,
      active: true
    },
    {
        name: "Business.smart.market List Analysis Tool",
        id: 2,
        active: false,
      },
      
  ];
  return (
    <section className="md:container md:mx-auto">
      <h1 className="w-full text-2xl my-10 ml-6"> My Work</h1>
      <div className="mt-10 mb-10 hidden lg:flex w-full">
        <div className="w-full md:w-1/2 lg:w-1/4">
          <Button
            onClick={() => {
              setShowSMBL(true);
              setShowAnalysis(false);
            }}
            className="w-full mb-4"
            gradientDuoTone={showSMBL === true ? "cyanToBlue" : "greenToBlue"}
            outline
          >
            Business.smart.market Wordpress Landing Site
          </Button>
          <Button
            onClick={() => {
              setShowAnalysis(true);
              setShowSMBL(false);
            }}
            className="w-full"
            gradientDuoTone={
              showAnalysis === true ? "cyanToBlue" : "greenToBlue"
            }
            outline
          >
            Business.smart.market List Analysis Tool
          </Button>
        </div>
        <div className="w-full px-8 md:w-1/2 lg:w-3/4">
          <Transition
            appear={true}
            show={showSMBL}
            enter="transition-opacity duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <img className="rounded-md mx-auto" src={businessLandingSite} />
          </Transition>
          <Transition
            appear={true}
            show={showAnalysis}
            enter="transition-opacity duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <img className="rounded-md " src={AnalysisTool} />
          </Transition>
        </div>
      </div>
      <div className="w-full block lg:hidden mt-6">
        <div className="w-full px-8 ">
          <Transition
            appear={true}
            show={showSMBL}
            enter="transition-opacity duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <img className="rounded-md " src={businessLandingSite} />
          </Transition>
          <Transition
            appear={true}
            show={showAnalysis}
            enter="transition-opacity duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <img className="rounded-md " src={AnalysisTool} />
          </Transition>
        </div>
        <div className="w-full mt-10">
          <Button
            onClick={() => {
              setShowSMBL(true);
              setShowAnalysis(false);
            }}
            className="w-full mb-4"
            gradientDuoTone={showSMBL === true ? "cyanToBlue" : "greenToBlue"}
            outline
          >
            Business.smart.market Wordpress Landing Site
          </Button>
          <Button
            onClick={() => {
              setShowAnalysis(true);
              setShowSMBL(false);
            }}
            className="w-full"
            gradientDuoTone={
              showAnalysis === true ? "cyanToBlue" : "greenToBlue"
            }
            outline
          >
            Business.smart.market List Analysis Tool
          </Button>
        </div>
      </div>
    </section>
  );
}

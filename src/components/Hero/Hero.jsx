import { Transition } from "@tailwindui/react";
import { Button } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Hero() {
  const [showHero, setShowHero] = useState(true);

  return (
    <section className={"bg-gray-50 dark:bg-gray-900 md:py-6"}>
      <div className="max-w-screen-xl mx-auto">
        <div className="md:container md:mx-auto">
          <div
            className={
              "w-full content-between block sm:block md:flex sm:justify-evenly"
            }
          >
            <Transition
              className="md:w-1/3 xl:w-1/3 lg:w-1/3 w-full"
              appear={true}
              show={showHero}
              enter="transition-opacity duration-1000"
              enterFrom="opacity-0"
              enterTo="opacity-100"
            >
              <img
                className="block mx-auto w-1/2 md:w-full mb-6 rounded-bl-full mr-10 rounded-br-full"
                src="/me2.PNG"
                alt="An image of me"
              />
            </Transition>

            <div className="md:w-2/3 xl:w-2/3 lg:w-2/3 sm:block lg:flex xl:flex md:flex w-full justify-center">
              <Transition
                appear={true}
                show={showHero}
                enter="transition-opacity duration-1000"
                enterFrom="opacity-0"
                enterTo="opacity-100"
              >
                <div className="p-12 pt-0 h-full w-full flex justify-center items-center">
                  <span>
                    <h1 className="text-center w-full text-5xl font-light text-teal-600">
                      Well, hello there!
                    </h1>
                    <h2 className="text-center w-full text-5xl font-extralight dark:text-gray-200">
                      I build custom
                    </h2>
                    <h1 className="text-center w-full text-5xl font-light text-teal-600">
                      web applications
                    </h1>
                    <p className="text-left pt-7">
                      With over 10 years of experience, I deliver responsive,
                      mobile-first web apps using AngularJS, React, Vue,
                      Bootstrap, and TailwindCSS. My full-stack expertise in
                      Node.js, Python, and Fastify enables me to build robust
                      backends and REST APIs. I have led the development and
                      launch of many responsive site redesigns and migrations.
                      Let's join forces to create something remarkable!{" "}
                    </p>
                    <p className="pt-4 w-full flex justify-end">
                      <Link to="contact" className="p-2 bg-transparent border-teal-500 border-2 rounded-lg transform hover:scale-125 hover:opacity-60">
                        Contact me
                      </Link>
                    </p>
                  </span>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

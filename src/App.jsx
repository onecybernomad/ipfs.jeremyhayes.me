import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, DarkThemeToggle, Flowbite, Footer, Navbar } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaGitlab } from "react-icons/fa6";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Flowbite>
      <Navbar>
        <Navbar.Brand>JEREMY HAYES</Navbar.Brand>
        <Flowbite>
          <DarkThemeToggle />
        </Flowbite>
      </Navbar>

      <section className="my-6 py-6">
      <div className="w-full flex sm:block md:flex sm:justify-evenly">
        <img className="md:w-1/2 h-auto sm:w-full transition duration-300 hover:duration-150 ease-in-out mb-6 rounded-bl-full rounded-br-full rounded-tr-full"
          src="/meinperu.jpg"
          alt="An image of me"
        />
        <div className="md:w-1/2 sm:block xl:w-1/2 xl:flex md:flex sm:w-full justify-center">

        <div className="p-12 pt-0">
          <h1 className="text-center text-5xl font-bold text-orange-600">Well hello there!</h1>
          <h2 className="text-center text-4xl font-semibold dark:text-gray-200">I build custom</h2>
          <h1 className="text-center text-5xl font-bold text-orange-600">web applications</h1>
        <p className="text-left pt-7">
          Unlock the full potential of modern web development with my expertise in the latest technologies including HTML5, CSS3, JavaScript, TypeScript, AngularJS, ReactJS, Vue.js, and Node.js. With over 10 years of experience in developing dynamic and engaging user interfaces, I am well-equipped to bring your vision to life and deliver results that exceed expectations. Join forces and let's create something truly remarkable together!
          </p>
          <p className="pt-4 w-full flex justify-end">
            <Button className="transform hover:scale-125 hover:opacity-60">Contact me</Button>
          </p>
        </div>
        </div>
      </div>
      <hr className="mt-6" />
      
    </section>
      <div className="card"></div>
      <Footer>
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <Footer.Brand
                alt="Flowbite Logo"
                href="https://flowbite.com"
                name="Flowbite"
                src="https://flowbite.com/docs/images/logo.svg"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Contact</Footer.Link>
                  <Footer.Link href="#">About me</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Gitlab</Footer.Link>
                  <Footer.Link href="#">Discord</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright by="Jeremy Hayes" href="#" year={2023} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />

              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={FaGitlab} />
            </div>
          </div>
        </div>
      </Footer>
    </Flowbite>
  );
}

export default App;

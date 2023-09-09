import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { DarkThemeToggle, Flowbite, Footer, Navbar } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaGitlab } from "react-icons/fa6";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar>
        <Navbar.Brand>JEREMY HAYES</Navbar.Brand>
        <Flowbite>
          <DarkThemeToggle />
        </Flowbite>
      </Navbar>

      <section className="my-6 py-6">
      <div className="w-full flex justify-evenly">
        <img className="w-1/2 mb-6 rounded-bl-full rounded-br-full rounded-tr-full"
          src="/assets/meinperu.jpg"
          alt="An image of me"
        />
        <div className="w-1/2 flex justify-center">

        <div className="w-1/2">
        Unlock the full potential of modern web development with my expertise in the latest technologies including HTML5, CSS3, JavaScript, TypeScript, AngularJS, ReactJS, Vue.js, and Node.js. With over 10 years of experience in developing dynamic and engaging user interfaces, I am well-equipped to bring your vision to life and deliver results that exceed expectations. Join forces and let's create something truly remarkable together!
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
    </>
  );
}

export default App;

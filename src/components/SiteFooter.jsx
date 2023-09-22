import { Footer } from "flowbite-react";
import Logo from "./Logo";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaGitlab } from "react-icons/fa6";

export default function SiteFooter (){
    return (
        <Footer>
        <div className="w-full bg-teal-300 dark:bg-gray-800">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div className="w-1/4 p-3 flex justify-start content-start">
              <Logo />
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
                <Footer.Title title="Follow me" />
                <Footer.LinkGroup col>
                  <Footer.Link href="https://gitea.jeremyhayes.me">Gitea</Footer.Link>
                  <Footer.Link href="#">Discord</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright by="Jeremy Hayes" href="#" year={2023} />
            <div className="m-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />

              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="#" icon={BsTwitter} />
              <Footer.Icon href="#" icon={FaGitlab} />
            </div>
          </div>
        </div>
      </Footer>
    )
}
import { DarkThemeToggle, Flowbite, Navbar } from "flowbite-react";
import Logo from "./Logo";

export default function TopNav() {
  return (
    <Navbar className="bg-teal-300 dark:bg-gray-800">
      <Navbar.Brand>
        <Logo />
      </Navbar.Brand>
      <Flowbite>
        <DarkThemeToggle />
      </Flowbite>
    </Navbar>
  );
}

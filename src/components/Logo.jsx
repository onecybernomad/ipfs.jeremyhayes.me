import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
export default function Logo() {
  return (
    <>
      <img className="w-6 h-7 hidden dark:block" src={logo1} />
      <img className="w-6 h-7 block dark:hidden" src={logo2} />&nbsp;<span className="text-lg">JEREMY HAYES</span>
    </>
  );
}

import MoonIcon from "./icons/MoonIcon";

type Props = {};
const Navbar = (props: Props) => {
  return (
    <div className="w-full flex justify-between items-center">
      <h2 className="font-bold text-2xl">devfinder</h2>
      <div className=" flex justify-between gap-x-4">
        <span className="text-sm font-bold">DARK</span>
        <MoonIcon />
      </div>
    </div>
  );
};
export default Navbar;

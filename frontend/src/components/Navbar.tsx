import { IoIosContact } from "react-icons/io";
import { MdHome } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex h-10 items-center justify-center gap-5 bg-slate-700 text-3xl md:hidden">
      <Link to={"/"}>
        <MdHome />
      </Link>
      <Link to={"/dashboard"}>
        <RiDashboard2Fill />
      </Link>
      <Link to={"/about"}>
        <IoIosContact />
      </Link>
    </div>
  );
}

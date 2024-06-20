import { useState } from "react";

import { Link } from "react-router-dom";

import { MdHome } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { RiDashboard2Fill } from "react-icons/ri";

import { cn } from "../lib/utils";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const menuItems = [
    {
      to: "/",
      title: "Home",
      icon: <MdHome />,
    },
    {
      to: "/dashboard",
      title: "Dashboard",
      icon: <RiDashboard2Fill />,
    },
    {
      to: "/about",
      title: "About",
      icon: <IoIosContact />,
    },
  ];
  return (
    <aside
      className={cn(
        "h-full w-14 space-y-1 overflow-hidden bg-slate-700 p-2 duration-200",
        { "w-48": open },
      )}
    >
      <button
        onClick={() => setOpen((open) => !open)}
        className="ml-auto flex size-10 items-center justify-center rounded-md text-2xl hover:bg-slate-800"
      >
        <FaAngleRight className={cn("duration-200", { "rotate-180": open })} />
      </button>
      {menuItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={cn(
            "flex h-10 items-center rounded-md hover:bg-slate-800",
            {
              "": open,
            },
          )}
        >
          <span className="flex w-10 shrink-0 items-center justify-center text-2xl">
            {item.icon}
          </span>
          {open && item.title}
        </Link>
      ))}
    </aside>
  );
}

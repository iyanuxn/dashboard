import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PiWindFill } from "react-icons/pi";
import { TbSettings2 } from "react-icons/tb";
import { BsBarChartFill } from "react-icons/bs";

const sidePanel = () => {
  const location = useLocation();

  const [active, setActive] = useState(null);

  useEffect(() => {
    if (location.pathname === "/") {
      setActive("overview");
    }
    if (location.pathname === "/settings") {
      setActive("settings");
    }
  }, [location]);

  return (
    <div className="w-52 border-r border-neutral-800">
      {/* Logo */}
      <div className="flex pl-7 items-center gap-2 pb-5 border-r border-b border-neutral-800 rounded-br-3xl">
        <PiWindFill className="text-4xl" />
        <span className="font-extrabold text-lg">zephyr</span>
      </div>

      {/* tabs */}
      <div className="flex flex-col items-start overflow-hidden border-r border-b border-neutral-800 rounded-r-3xl">
        <Link
          to="/"
          className="flex pl-7 items-center gap-3  w-full py-5 hover:bg-neutral-950 transition-all duration-300 ease-in-out"
        >
          <BsBarChartFill
            className={`transition-all duration-300 ease-in-out 
          ${active === "overview" ? "text-lime-400" : ""}
          `}
          />
          <span>Overview</span>
        </Link>
        <Link
          to="/settings"
          className="flex pl-7 items-center gap-3  w-full py-5 hover:bg-neutral-950 transition-all duration-300 ease-in-out"
        >
          <TbSettings2
            className={`transition-all duration-300 ease-in-out
          ${active === "settings" ? "text-lime-400" : ""}
          `}
          />
          <span>Settings</span>
        </Link>
      </div>
    </div>
  );
};

export default sidePanel;

import { PiWindFill } from "react-icons/pi";
import React from "react";

const sidePanel = () => {
  return (
    <div className="w-52 border-r border-neutral-800">
      
      {/* Logo */}
      <div className="flex items-center gap-2 pb-7 border-r border-b border-neutral-800 rounded-br-3xl">
        <PiWindFill className="text-4xl" />
        <span className="font-extrabold text-lg">zephyr</span>
      </div>

      {/* tabs */}
      <div className="flex flex-col">
        <button>
            Overview
        </button>
      </div>
    </div>
  );
};

export default sidePanel;

import { useState } from "react";
import { IoNotificationsOutline, IoChevronDownOutline } from "react-icons/io5";

const UserMenu = ({ name }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center gap-8">
      <div className="relative">
        <IoNotificationsOutline className="text-2xl" />
        <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></div>
      </div>
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={toggleMenu}
      >
        <img
          className="w-8 h-8 rounded-full"
          src="https://preview.redd.it/1fayaed8cbu71.png?width=640&crop=smart&auto=webp&s=f8f60d5c20f3253ccd9ff4df76a988dcddf9187a"
          alt="user"
        />
        <span className="text-white font-semibold">{name}</span>
        <IoChevronDownOutline className="text-white text-sm" />
      </div>

      {/* menu */}
      {isMenuOpen && (
        <div className="absolute top-24 right-4 border border-neutral-800 rounded-2xl w-52 p-2 bg-neutral-800 bg-opacity-20 backdrop-blur-md">
          <button className="w-full text-left text-sm text-neutral-300 hover:bg-neutral-950 hover:text-white py-3 px-5 rounded-lg transition-all duration-300 ease-in-out">
            Profile
          </button>
          <button className="w-full text-left text-sm text-neutral-300 hover:bg-neutral-950 hover:text-white py-3 px-5 rounded-lg transition-all duration-300 ease-in-out">
            Settings
          </button>
          <button className="w-full text-left text-sm text-neutral-300 hover:bg-neutral-950 hover:text-white py-3 px-5 rounded-lg transition-all duration-300 ease-in-out">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;

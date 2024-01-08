import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PiWindFill } from "react-icons/pi";
import {
  TbBook2,
  TbChevronDown,
  TbLogout2,
  TbSettings2,
  TbShoppingBag,
  TbShoppingCart,
  TbUser,
} from "react-icons/tb";
import { BsBarChartFill } from "react-icons/bs";

const sidePanel = () => {
  const location = useLocation();

  const [active, setActive] = useState(null);
  const [no_of_orders, setNo_of_orders] = useState(2);
  const [products, setProducts] = useState(false);
  const [customers, setCustomers] = useState(false);

  const toggleProducts = () => {
    setProducts(!products);
  };

  const toggleCustomers = () => {
    setCustomers(!customers);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setActive("overview");
    }
    if (location.pathname === "/settings") {
      setActive("settings");
    }
    if (location.pathname === "/orders") {
      setActive("orders");
    }
    if (location.pathname === "/checkout") {
      setActive("checkout");
    }
    if (location.pathname === "/products") {
      setActive("products");
    }
    if (location.pathname === "/customers") {
      setActive("customers");
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
      <div className="flex flex-col h-[58vh] items-start overflow-hidden border-r border-b border-neutral-800 rounded-r-3xl">
        <Link
          to="/"
          className="flex pl-7 items-center gap-3  w-full pt-7 py-3 hover:bg-neutral-950 transition-all duration-300 ease-in-out"
        >
          <BsBarChartFill
            className={`transition-all duration-100 ease-in-out 
          ${active === "overview" ? "text-lime-400" : "text-neutral-400"}
          `}
          />
          <span
            className={`transition-all duration-100 ease-in-out
          ${active === "overview" ? "font-semibold" : "text-neutral-400"}
          `}
          >
            Overview
          </span>
        </Link>
        <button
          className=" flex justify-between items-center w-full py-3 px-7 cursor-pointer hover:bg-neutral-950 transition-all duration-300 ease-in-out"
          onClick={toggleProducts}
        >
          <div className="flex gap-3 items-center">
            <TbShoppingBag
              className={`text-xl transition-all duration-100 ease-in-out
          ${active === "products" ? "text-lime-400" : "text-neutral-400"}
          `}
            />
            <span
              className={`transition-all duration-100 ease-in-out
          ${active === "products" ? "font-semibold" : "text-neutral-400"}
          `}
            >
              Products
            </span>
          </div>
          <TbChevronDown
            className={`transition-all duration-100 ease-in-out
          ${products ? "transform rotate-180" : ""}
          ${active === "products" ? "" : "text-neutral-400"}
          `}
          />
        </button>
        {/* products dropdown */}
        <div
          className={`${
            products ? "block" : "hidden"
          } w-full flex flex-col items-start`}
        >
          <a
            href="products#buy"
            className="flex pl-[3.8rem] items-center gap-3  w-full py-3 hover:bg-neutral-950 transition-all duration-300 ease-in-out"
          >
            <span className="text-neutral-400">Buy</span>
          </a>
          <a
            href="products#sell"
            className="flex pl-[3.8rem] items-center gap-3  w-full py-3 hover:bg-neutral-950 transition-all duration-300 ease-in-out"
          >
            <span className="text-neutral-400">Sell</span>
          </a>
        </div>
        <button
          className=" flex justify-between items-center w-full py-3 px-7 cursor-pointer hover:bg-neutral-950 transition-all duration-300 ease-in-out"
          onClick={toggleCustomers}
        >
          <div className="flex gap-3 items-center">
            <TbUser
              className={`text-xl transition-all duration-100 ease-in-out
          ${active === "customers" ? "text-lime-400" : "text-neutral-400"}
          `}
            />
            <span
              className={`transition-all duration-100 ease-in-out
          ${active === "customers" ? "font-semibold" : "text-neutral-400"}
          `}
            >
              Customers
            </span>
          </div>
          <TbChevronDown
            className={`transition-all duration-100 ease-in-out
          ${customers ? "transform rotate-180" : ""}
          ${active === "customers" ? "" : "text-neutral-400"}
          `}
          />
        </button>
        {/* customers dropdown */}
        <div
          className={`${
            customers ? "block" : "hidden"
          } w-full flex flex-col items-start`}
        >
          <a
            href="customers#buy"
            className="flex pl-[3.8rem] items-center gap-3  w-full py-3 hover:bg-neutral-950 transition-all duration-300 ease-in-out"
          >
            <span className="text-neutral-400">Buy</span>
          </a>
          <a
            href="customers#sell"
            className="flex pl-[3.8rem] items-center gap-3  w-full py-3 hover:bg-neutral-950 transition-all duration-300 ease-in-out"
          >
            <span className="text-neutral-400">Sell</span>
          </a>
        </div>

        <div className="w-full flex items-center">
          <Link
            to="/orders"
            className="flex px-7 items-center justify-between w-full py-3 hover:bg-neutral-950 transition-all duration-300 ease-in-out"
          >
            <div className="flex items-center gap-3">
              <TbBook2
                className={`text-xl transition-all duration-100 ease-in-out
          ${active === "orders" ? "text-lime-400" : "text-neutral-400"}
          `}
              />
              <span
                className={`transition-all duration-100 ease-in-out
          ${active === "orders" ? "font-semibold" : "text-neutral-400"}
          `}
              >
                Orders
              </span>
            </div>
            {no_of_orders ? (
              <div className="flex justify-center items-center relative">
                <div className="bg-red-500 -z-10 w-4 h-4 rounded-md absolute animate-ping"></div>
                <div className="bg-red-600 w-5 h-5 rounded-md flex justify-center items-center text-xs">
                  {no_of_orders}
                </div>
              </div>
            ) : (
              ""
            )}
          </Link>
        </div>
        <Link
          to="/checkout"
          className="flex pl-7 items-center gap-3  w-full py-3 hover:bg-neutral-950 transition-all duration-300 ease-in-out"
        >
          <TbShoppingCart
            className={`text-xl transition-all duration-100 ease-in-out
          ${active === "checkout" ? "text-lime-400" : "text-neutral-400"}
          `}
          />
          <span
            className={`transition-all duration-100 ease-in-out
          ${active === "checkout" ? "font-semibold" : "text-neutral-400"}
          `}
          >
            Checkout
          </span>
        </Link>
        <Link
          to="/settings"
          className="flex pl-7 items-center gap-3  w-full py-3 hover:bg-neutral-950 transition-all duration-300 ease-in-out"
        >
          <TbSettings2
            className={`text-xl transition-all duration-100 ease-in-out
          ${active === "settings" ? "text-lime-400" : "text-neutral-400"}
          `}
          />
          <span
            className={`transition-all duration-100 ease-in-out
          ${active === "settings" ? "font-semibold" : "text-neutral-400"}
          `}
          >
            Settings
          </span>
        </Link>
      </div>

      {/* logout and others*/}
      <div className="flex flex-col items-start overflow-hidden border-r border-neutral-800 rounded-tr-3xl">
        <button className="flex pl-7 items-center  w-full pt-7 pb-3 hover:bg-neutral-950 transition-all duration-300 ease-in-out">
          <span className="">Help</span>
        </button>
        <button className="flex pl-7 items-center  w-full py-3 hover:bg-neutral-950 transition-all duration-300 ease-in-out">
          <span className="">Contact us</span>
        </button>
        <button className="flex pl-7 items-center gap-3  w-full py-3 hover:bg-neutral-950 transition-all duration-300 ease-in-out">
          <TbLogout2 className="text-xl" />
          <span className="">Log out</span>
        </button>
      </div>
    </div>
  );
};

export default sidePanel;

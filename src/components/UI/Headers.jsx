import { useState } from "react";
import { TbMenuDeep } from "react-icons/tb";
import { FaArrowCircleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Headers = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="bg-[#202020] fixed w-full flex justify-between items-center lg:px-50 p-5 font-outfit">
        <div>
          <NavLink
            to="/"
            className="text-2xl font-bold text-gray-300 tracking-wider cursor-pointer"
          >
            WorldAtlas
          </NavLink>
        </div>
        <nav>
          <ul className="hidden lg:flex gap-6 text-gray-300">
            <NavLink to="/" className="text-md text-gray-300 cursor-pointer">
              Home
            </NavLink>
            <NavLink to="/about" className="text-md  cursor-pointer">
              About
            </NavLink>
            <NavLink to="/country" className="text-md  cursor-pointer">
              Country
            </NavLink>
            <NavLink to="/contact" className="text-md  cursor-pointer">
              Contact
            </NavLink>
          </ul>
          <div
            className="text-2xl lg:hidden text-gray-300"
            onClick={() => setVisible(true)}
          >
            <TbMenuDeep />
          </div>
        </nav>
      </div>
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden transition-all bg-[#202020] ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-300">
          <div
            onClick={() => setVisible(false)}
            className="flex cursor-pointer items-center gap-4 p-3"
          >
            <FaArrowCircleRight />
            <p>Back </p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="pl-6 border py-2"
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="pl-6 border py-2"
            to={"/country"}
          >
            Country
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="pl-6 border py-2"
            to={"/contact"}
          >
            Contact
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="pl-6 border py-2"
            to={"/about"}
          >
            About
          </NavLink>
        </div>
      </div>
    </>
  );
};

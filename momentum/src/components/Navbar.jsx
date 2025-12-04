import { useState } from "react";
// 1. IMPORT HASHLINK AS LINK
import { HashLink as Link } from "react-router-hash-link";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

// 2. IMPORT THE MODAL
import RequestDemoModal from "./RequestDemoModal";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  // 3. STATE FOR MODAL
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <>
      <nav className="w-full flex py-6 justify-between items-center navbar sticky top-0 z-50">
        {/* Logo */}
        <Link to="/#">
          <img src={logo} alt="momentum" className="w-[124px] h-[32px]" />
        </Link>

        {/* Desktop Navbar */}
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              <Link to={nav.id} smooth>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navbar */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => {
                    setActive(nav.title);
                    setToggle(false);
                  }}
                >
                  <Link to={nav.id} smooth>
                    {nav.title}
                  </Link>
                </li>
              ))}

              {/* Mobile "Request Demo" */}
              <button
                onClick={() => {
                  setDemoOpen(true);
                  setToggle(false);
                }}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded w-full text-left"
              >
                Request Demo
              </button>
            </ul>
          </div>
        </div>

        {/* Desktop "Request Demo" */}
        <button
          onClick={() => setDemoOpen(true)}
          className="ml-4 hidden sm:inline-block px-4 py-2 bg-blue-600 text-white rounded"
          type="button"
        >
          Request Demo
        </button>
      </nav>

      {/* MODAL RENDERS HERE */}
      <RequestDemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
};

export default Navbar;

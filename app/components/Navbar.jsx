"use client";
import React, { useState } from "react";
import Link from "next/link";


const Navbar = () => {
  const [toggle, setToggle] = useState(false); // State to manage dropdown visibility

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="bg-white border-gray-200 z-50 shadow-lg md:px-10 px-1 fixed w-full top-0">
      <div className="flex justify-between items-center py-2 md:py-4 md:px-2 pl-2 mx-auto">
        <div className="flex items-center cursor-pointer">
          <Link 
            href="/" 
            className="font-bold text-xl"
            scroll={true}
          >
            Emma Ezeiru
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex flex-row space-x-8 text-md font-medium">
            {links.map((el) => (
              <li key={el.name}>
                <Link href={`#${el.id}`}
                  scroll={true}
                  className="block py-2 px-3 text-black hover:bg-blue-500 hover:text-white rounded-md"
                >
                  {el.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setToggle(!toggle)}
          className="md:hidden flex items-center focus:outline-none pr-3"
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </div>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {toggle && (
        <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-2 px-3 fixed top-16 right-2 w-48 z-50">
          <ul className="space-y-2">
            {links.map((el) => (
              <li key={el.name} onClick={() => setToggle(false)}>
                <Link href={`#${el.id}`}
                  scroll={true}
                  className="block py-2 px-3 text-black hover:bg-blue-500 hover:text-white rounded-md"
                >
                  {el.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

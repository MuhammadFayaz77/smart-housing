"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiAlignJustify } from "react-icons/fi";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { src: "/Housing/home.svg", label: "Home" },
    { src: "/Housing/finding.svg", label: "Finding House" },
    { src: "/Housing/Support.svg", label: "Support" },
  ];

  return (
    <div
      className="w-full bg-[#F0F4F5]  "
     
    >
      <div className="lg:w-[90%] mx-auto flex justify-between items-center  md:mt-8 py-3 "
       style={{
        borderBottom: "2px solid #97CFE9 ",
        margin:" 0 auto",
        color:"#97CFE9",

      }}>
        
        <Image src="/Housing/logo.svg" width={150} height={150} alt="Logo" />
      

        <div className="hidden md:flex items-center bg-white rounded-full px-4 py-2">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center px-3 py-2 rounded-full hover:bg-[#3E3E3E]  cursor-pointer transition"
            >
              <Image src={item.src} width={17} height={17} alt={item.label} />
              <h1 className="text-sm px-2 text-black hover:text-white">{item.label}</h1>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {["/Housing/msg.svg", "/Housing/notification.svg"].map(
            (src, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-10 h-10 bg-white rounded-full p-2"
              >
                <Image src={src} width={17} height={17} alt="Icon" />
              </div>
            )
          )}

          <div className="flex items-center justify-center w-10 h-10 rounded-full overflow-hidden">
            <Image
              src="/Housing/man.svg"
              width={37}
              height={37}
              alt="User Icon"
            />
          </div>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black  sm:px-5"
          >
            <FiAlignJustify />
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 w-auto h-auto bg-white shadow-lg transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-black p-2"
        >
          ✖
        </button>

        <div className="flex flex-col mt-16 space-y-4 px-6">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center px-3 py-2 rounded-lg hover:bg-slate-600 cursor-pointer transition"
            >
              <Image src={item.src} width={20} height={20} alt={item.label} />
              <h1 className="text-lg px-2 text-black">{item.label}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;

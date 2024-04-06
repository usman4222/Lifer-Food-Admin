import React, { useState } from "react";
import { GoBell } from "react-icons/go";
import { BiSolidMessageSquareDots } from "react-icons/bi";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";
import profile from '../assets/images/profile.png'

const Navbar = ({ toggleChat, toggleNotification }) => {
  const handleSidebarToggle = () => {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    sidebar.classList.remove("translate-x-[-100%]");
    sidebar.classList.add("translate-x-0");
    overlay.classList.remove("hidden");
  };

  const closeSideBar = () => {
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    sidebar.classList.add("translate-x-[-100%]");
    overlay.classList.add("hidden");
  };

  return (
    <>
      <div className="w-full flex flex-row px-10 lg:justify-end justify-between items-center md:gap-x-3 p-4">
        <div className="lg:hidden bg-linkBg p-2 rounded-lg text-textActive cursor-pointer">
          <HiMiniBars3BottomLeft size={20} onClick={handleSidebarToggle} />
        </div>
        <div className="text-primary hidden md:block">
          <span className="text-[15px]">Welcome,{"   "}</span>
          <span className="font-semibold">Admin1</span>
        </div>
        <img
          src={profile}
          className="w-[50px] h-[50px] rounded-full"
          alt=""
        />
        <div>
          <Link to="/login">
            <button className="bg-[#F58201] px-3 py-2 rounded-lg text-white text-sm">Log In</button>
          </Link>
        </div>
        <div
          id="overlay"
          className="w-full h-full absolute top-0 left-0 bg-[rgba(0,0,0,0.5)] hidden z-10"
          onClick={closeSideBar}
        ></div>
      </div>
    </>
  );
};

export default Navbar;

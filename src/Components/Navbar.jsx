import React, { useState } from "react";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import profile from '../assets/images/profile.png'
import messages_en from '../Language/en.json';
import messages_de from '../Language/de.json';
import { FormattedMessage } from 'react-intl'

const messages = {
  en: messages_en,
  de: messages_de,
};

const Navbar = ({ locale, changeLocale }) => {
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
        <nav>
          <select
            className='rounded-full px-2 py-3 border-textActive focus:outline-none focus:ring-0 focus:border-textActive'
            value={locale}
            onChange={(e) => changeLocale(e.target.value)}
            aria-label="Select language"
            id="language-select"
          >
            <option value="en">English</option>
            <option value="de">German</option>
          </select>
        </nav>
        <div className="lg:hidden bg-linkBg p-2 rounded-lg text-textActive cursor-pointer">
          <HiMiniBars3BottomLeft size={20} onClick={handleSidebarToggle} />
        </div>
        <div className="text-primary hidden md:block">
          <span className="text-[15px]"><FormattedMessage id="welcome" />,{"   "}</span>
          <span className="font-semibold">Admin1</span>
        </div>
        <img
          src={profile}
          className="w-[50px] h-[50px] rounded-full"
          alt=""
        />
        <div>
          <Link to="/login">
            <button className="bg-[#F58201] px-3 py-2 rounded-lg text-white text-sm"><FormattedMessage id="Login"/></button>
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

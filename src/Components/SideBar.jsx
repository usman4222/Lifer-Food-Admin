import {
  IoHomeOutline,
  IoDocumentOutline,
  IoBicycleOutline,
} from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import { FiClock } from "react-icons/fi";
import { TfiWallet } from "react-icons/tfi";
import { MdOutlineContactSupport } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { BsTicketPerforated } from "react-icons/bs";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { RiUserFollowLine } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiMoneyFill } from "react-icons/pi";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="w-[200px] md:w-[250px] lg:block lg:w-[250px] min-h-full  bg-white pt-10 fixed top-0 left-0 transition-transform duration-500 transform lg:translate-x-0 translate-x-[-100%]  lg:shadow-2xl shadow-gray-400 md:shadow-none"
        style={{ zIndex: 1000 }}
        id="sidebar"
      >
        <div className="flex flex-col justify-center items-center gap-y-5 ">
          <img
            src={logo}
            className="w-[200px] cursor-pointer px-4 md:px-0"
            alt=""
            onClick={() => navigate("/")}
          />
          <ul className="flex flex-col gap-y-2 w-full">
            <li className=" text-[14px] w-full relative">
              <NavLink
                className=" w-[70%] mx-auto flex flex-row justify-start items-center gap-x-3  p-2.5  rounded-md cursor-pointer transition-all duration-300 hover:bg-linkBg hover:text-textActive"
                to={"/"}
              >
                <LuLayoutDashboard size={18} />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li className=" text-[14px] w-full relative">
              <NavLink
                className=" w-[70%] mx-auto flex flex-row justify-start items-center gap-x-3  p-2 rounded-md cursor-pointer transition-all duration-300 hover:bg-linkBg hover:text-textActive"
                to={"/revenue"}
              >
                <PiMoneyFill size={18} />
                <span>Revenue</span>
              </NavLink>
            </li>
            <li className=" text-[14px] w-full relative">
              <NavLink
                className=" w-[70%] mx-auto flex flex-row justify-start items-center gap-x-3  p-2 rounded-md cursor-pointer transition-all duration-300 hover:bg-linkBg hover:text-textActive"
                to={"/registered-restaurants"}
              >
                <RiUserFollowLine size={18} />
                <span className="text-[12px]"> Reg Restaurants</span>
              </NavLink>
            </li>
            <li className=" text-[14px] w-full relative">
              <NavLink
                className=" w-[70%] mx-auto flex flex-row justify-start items-center gap-x-3  p-2 rounded-md cursor-pointer transition-all duration-300 hover:bg-linkBg hover:text-textActive"
                to={"/registered-customers"}
              >
                <MdOutlineVerifiedUser size={18} />
                <span className="text-[12px]"> Reg Customers</span>
              </NavLink>
            </li>
            <li className=" text-[14px] w-full relative">
              <NavLink
                className=" w-[70%] mx-auto flex flex-row justify-start items-center gap-x-3  p-2 rounded-md cursor-pointer transition-all duration-300 hover:bg-linkBg hover:text-textActive"
                to={"/ticket"}
              >
                <BsTicketPerforated size={18} />
                <span className="text-[12px]"> Ticket Management</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;

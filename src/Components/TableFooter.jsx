import React from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { FormattedMessage } from "react-intl";
const TableFooter = ({ ticket, revenue }) => {
  return (
    <>
      <div
        className={`lg:px-4 px-2 py-3 flex justify-between items-center text-gray-500 text-sm border-t  bg-white mx-5 ${
          ticket && "mx-0 md:mx-0 md:mr-3.5"
        }
          ${revenue && "mx-0 md:mx-0"}
        `}
      >
        <div className="flex justify-center items-center lg:gap-x-2 gap-x-2">
          <span><FormattedMessage id="Showing"/></span>
          <select
            name="page"
            id="page"
            className="lg:px-3 py-1 px-1 rounded-lg text-gray-800 bg-white border border-gray-200 outline-none"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <span>of 50</span>
        </div>
        <div className="flex justify-center items-center gap-x-2">
          <div className="bg-body rounded-md p-1 lg:p-[10px] text-sm lg:text-[16px] cursor-pointer">
            <MdOutlineKeyboardArrowLeft />
          </div>
          <div className="rounded-md lg:px-[14px] lg:py-[7px] px-[8px] page-active  cursor-pointer">
            <span>1</span>
          </div>
          <div className="bg-body rounded-md lg:px-[14px] lg:py-[7px] px-[8px] cursor-pointer">
            <span>2</span>
          </div>
          <div className="bg-body rounded-md lg:p-[10px] p-1 cursor-pointer">
            <MdOutlineKeyboardArrowRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default TableFooter;

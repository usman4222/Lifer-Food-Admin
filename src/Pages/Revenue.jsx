import React from "react";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import Wrapper from "../Components/Wrapper";
import Head from "../Components/Head";
import revenueIcon1 from '../assets/images/revenue1.png'

const Revenue = () => {

  return (
    <>
      <Wrapper>
        <Head heading={"Revenue"} para={"Track your Earnings"} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mr-6 mt-5 gap-x-2 lg:px-0 gap-y-5 ">
          <div className="bg-white shadow-lg flex flex-row justify-center items-center p-4 rounded-xl gap-x-2 ml-6 md:ml-6 lg:ml-0">
            <div className="p-4 rounded-full">
              <img className="object-contain w-20" src={revenueIcon1} />
            </div>
            <div className="flex flex-col text-primary gap-y-2">
              <h3 className="text-xl font-semibold">Today Revenue</h3>
              <span className="text-2xl font-bold text-right">$23,000.22</span>
              <div className="flex flex-row gap-x-4 justify-center items-center">
                <div className="text-green-500 p-2 bg-green-100 rounded-full">
                  <FaArrowUp size={12} />
                </div>
                <span className="text-gray-600 text-xs">4% (Yesterday)</span>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Revenue;

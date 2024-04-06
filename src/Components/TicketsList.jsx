import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { FormattedMessage} from "react-intl";
const TicketsList = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mt-[75px]">
        <div className="bg-white flex flex-col p-4 rounded-lg gap-y-3">
          <div className="flex flex-row justify-between items-center text-gray-800 text-sm">
            <span><FormattedMessage id="New Restaurants"/></span>
            <FaArrowRight
              className="cursor-pointer"
              onClick={() => navigate("/registered-restaurants")}
            />
          </div>
          <div className="flex flex-row gap-x-2">
            <div className="mt-4">
              <img
                src="https://placeholder.com/50x50"
                className="w-full rounded-full"
                alt=""
              />
            </div>
            <div className="flex flex-col text-gray-600 justify-center items-start">
              <span className="text-lg">McDonalds</span>
              <span className="text-xs py-1">#8930</span>
              <span className="flex flex-row text-xs justify-center ">
                <CiLocationOn />
                <span> Khayabane Sadiq phase 4 Sargodha , Pakistan </span>
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-x-2">
            <div className="mt-4">
              <img
                src="https://placeholder.com/50x50"
                className="w-full rounded-full"
                alt=""
              />
            </div>
            <div className="flex flex-col text-gray-600 justify-center items-start">
              <span className="text-lg">McDonalds</span>
              <span className="text-xs py-1">#8930</span>
              <span className="flex flex-row text-xs justify-center ">
                <CiLocationOn />
                <span> Khayabane Sadiq phase 4 Sargodha , Pakistan </span>
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-x-2">
            <div className="mt-4">
              <img
                src="https://placeholder.com/50x50"
                className="w-full rounded-full"
                alt=""
              />
            </div>
            <div className="flex flex-col text-gray-600 justify-center items-start">
              <span className="text-lg">McDonalds</span>
              <span className="text-xs py-1">#8930</span>
              <span className="flex flex-row text-xs justify-center ">
                <CiLocationOn />
                <span> Khayabane Sadiq phase 4 Sargodha , Pakistan </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketsList;

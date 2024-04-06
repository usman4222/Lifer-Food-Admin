import React from "react";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";
import Wrapper from "../Components/Wrapper";
import Head from "../Components/Head";
import TableFooter from "../Components/TableFooter";
import { useNavigate } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { FormattedMessage } from 'react-intl'

const Revenue = () => {
  const navigate = useNavigate();

  const tableRows = [
    "Display Picture",
    "Restaurant Name",
    "User ID",
    "Registration Date",
    "Location",
    "Amount",
  ];

  const tableData = [
    {
      displayPicture: "https://i.pravatar.cc/50",
      restaurantName: "Restaurant Name",
      userID: "#5089",
      registrationDate: "02/09/2024 15:45",
      location: "Premium",
      amount: "$450.00",
    },
    {
      displayPicture: "https://i.pravatar.cc/50",
      restaurantName: "Restaurant Name",
      userID: "#5089",
      registrationDate: "02/09/2024 15:45",
      location: "Manual",
      amount: "$450.00",
    },
  ];

  return (
    <>
      <Wrapper>
        <Head heading={<FormattedMessage id="Revenue"/>} para={<FormattedMessage id="Track your Earnings"/>} />
        <div className="pt-5 lg:ml-5 lg:grid lg:grid-cols-12 mr-6 mt-5 gap-x-2 lg:px-0 gap-y-5 lg:pr-10">
          <div className="bg-white lg:col-span-8  shadow-lg md:w-[600px] flex flex-row justify-start items-center p-4 rounded-xl gap-x-2 ml-6 md:ml-6 lg:ml-0">
            <div className="flex flex-row text-primary gapy-2">
              <div>
                <h5 className="font-bold"><FormattedMessage id="Revenue Today"/></h5>
                <span className="text-xs text-left">Mon, Jan 28th</span>
                <h3 className="text-2xl font-extrabold mt-5 pb-2">$3K</h3>
                <div className="flex  gap-x-4 justify-center items-center">
                  <div className="flex justify-center items-center">
                    <div className="text-green-500">
                      <FaArrowUp size={12} />
                    </div>
                    <span className="text-xs text-green-500 pl-1">8.56k</span>
                  </div>
                  <span className="text-gray-600 text-xs"><FormattedMessage id="vs last 7 days"/></span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white ml-7 mt-7 lg:mt-0 lg:ml-0 rounded-xl w-fit md:ml-7 md:mt-7 lg:col-span-4 shadow-lg">
            <div className="py-3">
              <h6 className="text-center text-[#464255] font-bold">
                <FormattedMessage id="Sales Today"/>
              </h6>
            </div>
            <div className="flex items-center justify-between">
              <div className="px-3 md:px-10">
                <div>
                  <h6 className="text-center text-[#F58201] bold"><FormattedMessage id="Premium"/></h6>
                  <h5 className="text-center py-3 text-[#464255]">29</h5>
                </div>
                <div className="flex justify-center items-center pb-5">
                  <div className="text-green-500 p-2 bg-green-100 rounded-full">
                    <FaArrowUp size={12} />
                  </div>
                  <span className="text-xs text-[#A3A3A3] pl-1 w-[80px]">
                    <FormattedMessage id="4% Yesterday"/>
                  </span>
                </div>
              </div>
              <div className="px-3 md:px-10">
                <div>
                  <h6 className="text-center text-[#A3BB98]"><FormattedMessage id="Manual"/></h6>
                  <h5 className="text-center py-3 text-[#464255]">29</h5>
                </div>
                <div>
                  <div className="flex justify-center items-center pb-5">
                    <div className="text-[#FF5B5B] p-2 bg-red-100 rounded-full">
                      <FaArrowUp size={12} />
                    </div>
                    <span className="text-xs text-[#A3A3A3] pl-1 w-[80px]">
                      <FormattedMessage id="4% Yesterday"/>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:ml-5 md:ml-2 lg:grid lg:grid-cols-12 pt-5">
          <div className="pt-10 lg:col-span-9">
            <div className="overflow-x-auto bg-white rounded-md mx-5 lg:grid lg:col-row-2 lg:mx-0">
              <div className="w-full py-3 pl-4 border-b ">
                <div className="text-left text-[#1E1E1E] font-bold md:text-xl">
                  <FormattedMessage id="Transaction"/>
                </div>
              </div>
              <table className="table-auto min-w-full">
                <thead>
                  <tr className="text-center border-b">
                    {tableRows.map((item, index) => (
                      <th
                        key={index}
                        className="px-4 py-2 font-normal text-sm text-[#8B909A] md:text-sm	 md:font-semibold"
                      >
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item) => (
                    <React.Fragment key={item.userID}>
                      <tr className="text-center border-b text-gray-500">
                        <td className="px-4 py-2">
                          <img
                            className="rounded-full mx-auto"
                            src={item.displayPicture}
                            alt={item.restaurantName}
                          />
                        </td>
                        <td className="px-4 py-2 text-xs md:text-sm">
                          {item.restaurantName}
                        </td>
                        <td className="px-4 py-2 text-xs md:text-sm">
                          {item.userID}
                        </td>
                        <td className="px-4 py-2 text-[#F58201] text-xs md:text-sm">
                          {item.location}
                        </td>
                        <td className="px-4 py-2 text-xs md:text-sm">
                          {item.registrationDate}
                        </td>
                        <td className="px-4 py-2 text-xs md:text-sm">
                          {item.amount}
                        </td>
                        <td className="px-4 py-2 text-xs md:text-sm">
                          <IoMdArrowDropright
                            size={22}
                            className="cursor-pointer"
                            onClick={() => navigate("/invoice")}
                          />
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
            <TableFooter revenue={true} />
          </div>
          <div className="p-5  md:flex lg:col-span-3 lg:flex-col lg:pt-10">
            <div className="bg-white p-5 rounded-lg shadow-lg">
              <h5 className="font-extrabold	text-[#464255] text-lg pb-2 text-center lg:text-right">
                <FormattedMessage id="Total Revenue"/>
              </h5>
              <div className="flex col-row pt-2 justify-between">
                <div className="flex justify-center items-center pb-5">
                  <div className="text-green-500 p-2 bg-green-100 rounded-full">
                    <FaArrowUp size={12} />
                  </div>
                  <span className="text-xs text-[#A3A3A3] pl-1">
                    <FormattedMessage id="4% Yesterday"/>
                  </span>
                </div>
                <div>
                  <h3 className="text-[#464255] text-xl font-extrabold md:pl-8">
                    $3M
                  </h3>
                </div>
              </div>
            </div>
            <div className="bg-white mt-5 md:mt-0 p-5 rounded-lg md:ml-10 lg:ml-0 lg:mt-5 shadow-lg">
              <h5 className="font-extrabold	text-[#464255] text-lg pb-2 text-center lg:text-right">
                <FormattedMessage id="Total Purchase"/>
              </h5>
              <div className="flex col-row pt-2 justify-between">
                <div className="flex justify-center items-center pb-5">
                  <div className="text-[#FF5B5B] p-2 bg-red-100 rounded-full">
                    <FaArrowUp size={12} />
                  </div>
                  <span className="text-xs text-[#A3A3A3] pl-1">
                    <FormattedMessage id="4% Yesterday"/>
                  </span>
                </div>
                <div>
                  <h3 className="text-[#464255] text-xl font-extrabold md:pl-8">
                    907
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Revenue;

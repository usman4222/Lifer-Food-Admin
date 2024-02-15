import React, { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import TableFooter from "../Components/TableFooter";
import { BsThreeDots } from "react-icons/bs";
import { IoMdPrint } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Table = ({ tableRows, tableData }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="overflow-x-auto bg-white rounded-md mx-5 lg:mx-0">
        <table className="table-auto min-w-full">
          <thead>
            <tr className="text-center border-b">
              {/* <th className="px-4 py-2">ID</th> */}
              {tableRows.map((item, index) => (
                <th key={index} className="px-4 py-2 text-gray-500">
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
                  <td className="px-4 py-2 ">{item.restaurantName}</td>
                  <td className="px-4 py-2">{item.userID}</td>
                  <td className="px-4 py-2 truncate">{item.location}</td>
                  <td className="px-4 py-2">{item.registrationDate}</td>
                  <td className="px-4 py-2">
                    <IoMdArrowDropright
                      size={22}
                      className="cursor-pointer"
                      onClick={() =>
                        navigate("/registered-restaurants/register-restaurant")
                      }
                    />
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <TableFooter />
    </>
  );
};

export default Table;

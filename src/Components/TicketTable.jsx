import { IoMdArrowDropdown } from "react-icons/io";
import TableFooter from "./TableFooter";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const TableRow = () => {
  const [action, setAction] = useState(false);
  const [newToggle, setNewToggle] = useState(false);

  const toggleAction = () => {
    setAction(!action);
  };

  const toggleNew = () => {
    setNewToggle(!newToggle);
  };
  return (
    <>
      <tr className="text-center border-b text-gray-500">
        <td className="px-4 py-2 text-sm">
          <span>#50198</span>
        </td>
        <td className="px-4 py-2  text-sm">
          <span>Mcdonalds</span>
        </td>
        <td className="px-4 py-2 text-sm">
          <span>restaurant@gmail.com</span>
        </td>
        <td className="px-4 py-2  text-sm">
          <span>01/01/2022</span>
        </td>
        <td className="px-4 py-2 truncate  max-w-[140px] text-wrap text-sm text-left">
          <span>Lorem ipsum dolor sit amet, consectetur </span>
        </td>
        <td className="px-4 py-2 text-sm  text-textActive relative">
          <span
            className="font-medium flex flex-row cursor-pointer"
            onClick={toggleNew}
          >
            <FormattedMessage id="New"/>
            <IoMdArrowDropdown size={20} />
          </span>
          {newToggle && (
            <div className="absolute top-8 left-0 bg-white shadow-[5px_5px_10px_5px_rgba(0,0,0,0.1)] px-4 py-2 rounded-md z-50">
              <div className="flex flex-col gap-y-2">
                <span className="text-red-500 cursor-pointer"><FormattedMessage id="Pending"/></span>
                <span className="text-green-500 cursor-pointer"><FormattedMessage id="Resolved"/></span>
              </div>
            </div>
          )}
        </td>
        <td className="px-4 py-2 text-sm text-gray-800 relative">
          <span
            className="font-medium flex flex-row cursor-pointer"
            onClick={toggleAction}
          >
            <FormattedMessage id="Action"/>
            <IoMdArrowDropdown size={20} className="cursor-pointer" />
          </span>
          {action && (
            <div className="absolute top-8 left-0 bg-white shadow-[5px_5px_10px_5px_rgba(0,0,0,0.1)] px-4 py-2 rounded-md z-50">
              <div className="flex flex-col gap-y-2 justify-start items-start">
                <NavLink
                  className="cursor-pointer font-medium"
                  to={"/ticket/ticket-description"}
                >
                  <FormattedMessage id="Reply"/>
                </NavLink>
                <span className="font-medium cursor-pointer"><FormattedMessage id="Delete"/></span>
              </div>
            </div>
          )}
        </td>
      </tr>
    </>
  );
};

const TicketTable = () => {
  return (
    <>
      <div>
        <div className="overflow-x-auto bg-white rounded-md md:mr-3.5">
          <table className="table-auto min-w-full">
            <thead>
              <tr className="text-center border-b">
                <th className="px-4 py-2 text-gray-500 text-xs"><FormattedMessage id="TICKET ID"/></th>
                <th className="px-4 py-2 text-gray-500 text-xs">
                  <FormattedMessage id="RESTAURANT NAME"/>
                </th>
                <th className="px-4 py-2 text-gray-500 text-xs">EMAIL</th>
                <th className="px-4 py-2 text-gray-500 text-xs"><FormattedMessage id="DATE"/></th>
                <th className="px-4 py-2 text-gray-500 text-xs"><FormattedMessage id="MESSAGE"/></th>
                <th className="px-4 py-2 text-gray-500 text-xs"><FormattedMessage id="STATUS"/></th>
              </tr>
            </thead>
            <tbody>
              <TableRow />
              <TableRow />
              <TableRow />
            </tbody>
          </table>
        </div>
        <TableFooter ticket={true} />
      </div>
    </>
  );
};

export default TicketTable;

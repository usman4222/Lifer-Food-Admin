import React from "react";
import { FormattedMessage } from "react-intl";

const TicketInfo = () => {
  return (
    <div className="bg-white shadow-xl rounded-xl flex flex-col h-fit mx-5 md:mx-0">
      <div className="w-full text-white bg-textActive font-medium py-2 text-center rounded-t-xl">
        <FormattedMessage id="Ticket Details"/>
      </div>
      <div className="flex flex-row justify-between p-3 text-[15px] text-gray-800 border-b">
        <span><FormattedMessage id="Restaurant Name"/></span>
        <span>:Mcdonalds</span>
      </div>
      <div className="flex flex-row justify-between p-3 text-[15px] text-gray-800 border-b">
        <span>Email</span>
        <span>:restaurant@gmail.com</span>
      </div>
      <div className="flex flex-row justify-between p-3 text-[15px] text-gray-800 border-b">
        <span><FormattedMessage id="Ticket ID"/></span>
        <span>:#50198</span>
      </div>
      <div className="flex flex-row justify-between p-3 text-[15px] text-gray-800 border-b">
        <span>Status</span>
        <span>:New</span>
      </div>
    </div>
  );
};

export default TicketInfo;

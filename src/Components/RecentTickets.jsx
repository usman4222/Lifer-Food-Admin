import React from "react";
import SearchArea from "../Components/SearchArea";
import TicketTable from "./TicketTable";
import TicketsList from "./TicketsList";

const RecentTickets = () => {
  return (
    <>
      <div className="flex flex-col mx-5 mt-6">
        <h3 className="text-gray-800 text-xl font-medium">Recent Tickets</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 ">
          <div className="flex flex-col col-span-2 gap-y-3">
            <SearchArea
              recentTicket={true}
              searchPlaceholder="Search By Ticket ID"
            />
            <TicketTable />
          </div>
          <TicketsList />
        </div>
      </div>
    </>
  );
};

export default RecentTickets;

import React from "react";
import Wrapper from "../Components/Wrapper";
import Head from "../Components/Head";

const TicketManagement = () => {
  return (
    <>
      <Wrapper>
        <div className="flex flex-col">
          <Head
            heading={"Ticket Management"}
            para={"Admin Hub for Restaurants Requests"}
          />
        </div>
      </Wrapper>
    </>
  );
};

export default TicketManagement;

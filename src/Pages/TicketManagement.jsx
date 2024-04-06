import React from "react";
import Wrapper from "../Components/Wrapper";
import Head from "../Components/Head";
import TicektCard from "../Components/TicektCard";
import RecentTickets from "../Components/RecentTickets";
import { animated, useSpring } from "@react-spring/web";
import { Routes, Route } from "react-router-dom";
import TicketDescription from "../Pages/TicketDescription";
import { FormattedMessage } from "react-intl";

const MainPage = () => {
  const springs = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000, delay: 500 },
  });
  return (
    <animated.div style={springs}>
      <Wrapper>
        <div className="flex flex-col">
          <Head
            heading={<FormattedMessage id="Ticket Management"/>}
            para={<FormattedMessage id="Admin Hub for Restaurant Requests"/>}
          />
          <TicektCard />
        </div>
        <RecentTickets />
      </Wrapper>
    </animated.div>
  );
};

const TicketManagement = () => {
  return (
    <Routes>
      <Route element={<MainPage />} path="/" />
      <Route element={<TicketDescription />} path="/ticket-description" />
    </Routes>
  );
};

export default TicketManagement;

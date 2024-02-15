import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Revenue from "./Pages/Revenue";
import SideBar from "./Components/SideBar";
import Navbar from "./Components/Navbar";
import "./App.css";
import EditRestaurant from "./Pages/EditRestaurant";
import TicketDescription from "./Pages/TicketDescription";
import Restaurants from "./Pages/Restaurants";
import TicketManagement from "./Pages/TicketManagement";

function App() {
  return (
    <Fragment>
      <SideBar />
      <Navbar />
      <Routes>
        <Route element={<TicketManagement />} path="/" />
        <Route element={<Restaurants />} path="/registered-restaurants/*" />
        <Route element={<EditRestaurant />} path="/edit-restaurant" />
        <Route element={<TicketDescription />} path="/ticketdescription" />
      </Routes>
    </Fragment>
  );
}

export default App;

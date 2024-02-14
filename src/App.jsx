import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Revenue from "./Pages/Revenue";
import SideBar from "./Components/SideBar";
import Navbar from "./Components/Navbar";
import "./App.css";
import RegRestaurant from "./Pages/RegRestaurant";
import EditRestaurant from "./Pages/EditRestaurant";
import TicketDescription from "./Pages/TicketDescription";

function App() {
  return (
    <Fragment>
      <SideBar />
      <Navbar />
      <Routes>
        <Route element={<Revenue />} path="/" />
        <Route element={<RegRestaurant />} path="/reg" />
        <Route element={<EditRestaurant />} path="/edit-restaurant" />
        <Route element={<TicketDescription />} path="/ticketdescription" />
      </Routes>
    </Fragment>
  );
}

export default App;

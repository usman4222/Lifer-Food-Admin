import React from "react";
import Wrapper from "../Components/Wrapper";
import Head from "../Components/Head";
import { Routes, Route } from "react-router-dom";
import RestaurantsComponent from "../Components/RestaurantsComponent";
import RegRestaurant from "./RegRestaurant";
const Restaurants = () => {
  return (
    <Wrapper>
      <Head
        heading="Registered Restaurants"
        para={"Centralizing Control of Restaurant Management"}
      />
      <Routes>
        <Route element={<RestaurantsComponent />} path="/" />
        <Route element={<RegRestaurant />} path="/register-restaurant" />
      </Routes>
    </Wrapper>
  );
};

export default Restaurants;

import { Fragment, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Revenue from "./Pages/Revenue";
import SideBar from "./Components/SideBar";
import Navbar from "./Components/Navbar";
import "./App.css";
import EditRestaurant from "./Pages/EditRestaurant";
import Restaurants from "./Pages/Restaurants";
import TicketManagement from "./Pages/TicketManagement";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Transaction from "./Pages/Transaction";
import RegRestaurant from "./Pages/RegRestaurant";
import RegCustomers from "./Pages/RegCustomers";
import messages_en from './Language/en.json';
import messages_de from './Language/de.json';
import { IntlProvider } from 'react-intl';

const messages = {
    en: messages_en,
    de: messages_de,
};

function App() {

  const [locale, setLocale] = useState('en');

  const changeLocale = (newLocale) => {
    setLocale(newLocale);
  };
  return (
    <Fragment>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <SideBar />
        <Navbar locale={locale} changeLocale={changeLocale}  />
        <Routes>
          <Route element={<Dashboard />} path="/" />
          <Route element={<TicketManagement />} path="/ticket/*" />
          <Route element={<Restaurants />} path="/registered-restaurants/*" />
          <Route element={<EditRestaurant />} path="/edit-restaurant" />
          <Route element={<Revenue />} path="/revenue" />
          <Route element={<Transaction />} path="/invoice" />
          <Route element={<RegRestaurant />} path="/reg" />
          <Route element={<Login />} path="/login" />
          <Route element={<RegCustomers />} path="/registered-customers" />
        </Routes>
      </IntlProvider>
    </Fragment>
  );
}

export default App;

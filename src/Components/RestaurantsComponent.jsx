import React from "react";
import Head from "../Components/Head";
import SearchArea from "../Components/SearchArea";
import Table from "../Components/Table";
import { FormattedMessage } from "react-intl"

const RestaurantsComponent = () => {
  const tableRows = [
    "displayPicture",
    "restaurantName",
    "userID",
    "location",
    "registrationDate",
  ];

  const tableData = [
    {
      displayPicture: "https://i.pravatar.cc/50",
      restaurantName: "KFC",
      userID: "123",
      location: "New York",
      registrationDate: "2022-01-01",
    },
    {
      displayPicture: "https://i.pravatar.cc/50",
      restaurantName: "KFC",
      userID: "12356",
      location: "New York",
      registrationDate: "2022-01-01",
    },
  ];

  return (
    <>
      <div className="mx-5">
        <SearchArea />
      </div>
      <div className="w-full lg:pl-0 lg:pr-4 mt-2 md:pl-2 md:pr-2">
        <Table
          tableRows={tableRows.map(key => (
            <FormattedMessage id={key} key={key} defaultMessage={key} />
          ))}
          tableData={tableData}
        />
      </div>
    </>
  );
};

export default RestaurantsComponent;

import React from "react";
import Wrapper from "../Components/Wrapper";
import Table from "../Components/Table";
import SearchArea from "../Components/SearchArea";
import Head from "../Components/Head";
import { FormattedMessage } from 'react-intl'

const RegCustomers = () => {
  const tableRows = [
    "First Name",
    "Last Name",
    "Email",
    "Password",
    "Contact No.",
    "User ID",
  ];

  const tableData = [""];

  return (
    <Wrapper>
      <Head
        heading={<FormattedMessage id="Registered Customers"/>}
        para={<FormattedMessage id="Centralizing Control of Customer Management"/>}
      />
      <div className="flex flex-col gap-y-3 pt-5">
        <div className="lg:ml-5">
          <SearchArea />
        </div>
        <Table tableRows={tableRows} tableData={tableData} delIcon={true} />
      </div>
    </Wrapper>
  );
};

export default RegCustomers;

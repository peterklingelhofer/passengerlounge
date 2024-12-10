// src/gatsby-theme-carbon/components/Header/index.js

import React from "react";
import Header from "gatsby-theme-carbon/src/components/Header";
import ThemeToggle from "../../../components/ThemeToggle";

const CustomHeader = (props) => {
  return (
    <>
      <Header {...props}>
        <strong>Passenger&nbsp;Lounge</strong>
      </Header>
      <ThemeToggle />
    </>
  );
};

export default CustomHeader;

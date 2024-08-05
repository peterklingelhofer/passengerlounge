import React from "react";
import Header from "gatsby-theme-carbon/src/components/Header";
import ThemeToggle from "../../../components/ThemeToggle"; // Adjust the path as necessary

const CustomHeader = (props) => (
  <Header {...props}>
    <div>
      <strong>Passenger&nbsp;Lounge</strong>
      <ThemeToggle />
    </div>
  </Header>
);

export default CustomHeader;

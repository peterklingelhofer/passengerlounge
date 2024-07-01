import React from "react";
import { FourOhFour } from "gatsby-theme-carbon";

const links = [
  { href: "/", text: "Home" },
  { href: "/discography/viscous", text: "Discography" },
  { href: "/upcoming-shows", text: "Upcoming Shows" },
];

const Custom404 = () => <FourOhFour links={links} />;

export default Custom404;

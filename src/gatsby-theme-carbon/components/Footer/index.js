// src/gatsby-theme-carbon/components/Footer/index.js
import React from "react";
import Footer from "gatsby-theme-carbon/src/components/Footer";
import { links as resourceLinks } from "../LeftNav/ResourceLinks";
import BrevoForm from "../../../components/BrevoForm/BrevoForm";

const Content = ({ buildTime }) => (
  <>
    <div style={{ marginBottom: "-40px" }} />
    <BrevoForm />
    {/* <p>Site build time: {buildTime}</p> */}
  </>
);

const distributeLinks = (links) => {
  const midIndex = Math.ceil(links.length / 2);
  return {
    firstCol: links
      .slice(0, midIndex)
      .map((link) => ({ href: link.href, linkText: link.title })),
    secondCol: links
      .slice(midIndex)
      .map((link) => ({ href: link.href, linkText: link.title })),
  };
};

const links = distributeLinks(resourceLinks);

const CustomFooter = () => <Footer links={links} Content={Content} />;

export default CustomFooter;

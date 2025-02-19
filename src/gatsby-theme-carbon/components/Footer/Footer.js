// src/gatsby-theme-carbon/components/Footer/Footer.js
import React from "react";
import { footer, grid, nav, listItem, content } from "./Footer.module.scss";
import { Row, Grid, Column } from "gatsby-theme-carbon/src/components/Grid";
import { links as resourceLinks } from "../LeftNav/ResourceLinks";
import { EmailSubscriptionForm } from "../../../components/EmailSubscriptionForm/EmailSubscriptionForm";
import PropTypes from "prop-types";

const Footer = ({ Content, links }) => {
  const { firstCol, secondCol } = links;

  return (
    <footer className={footer}>
      <Grid className={grid}>
        <Row>
          <Column className={content} colLg={6} colMd={5} colSm={4}>
            <Content />
          </Column>
          <Column colLg={2} colMd={1} colSm={2} offsetMd={-1}>
            <ul className={nav}>
              {firstCol &&
                firstCol.map((link, i) => (
                  <li key={i} className={listItem}>
                    <a href={link.href} aria-label={link.linkText}>
                      {link.linkText}
                    </a>
                  </li>
                ))}
            </ul>
          </Column>
          <Column colLg={2} colMd={1} colSm={2}>
            <ul className={nav}>
              {secondCol &&
                secondCol.map((link, i) => (
                  <li key={i} className={listItem}>
                    <a href={link.href} aria-label={link.linkText}>
                      {link.linkText}
                    </a>
                  </li>
                ))}
            </ul>
          </Column>
        </Row>
      </Grid>
    </footer>
  );
};

Footer.propTypes = {
  /**
   * Specify the first and second columns of your links
   */
  links: PropTypes.exact({
    firstCol: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string,
        linkText: PropTypes.string,
      })
    ),
    secondCol: PropTypes.arrayOf(
      PropTypes.shape({
        href: PropTypes.string,
        linkText: PropTypes.string,
      })
    ),
  }),

  /**
   * Specify the first and second columns of your links
   */
  Content: PropTypes.elementType,

  /**
   * Provide a logo to be rendered in the bottom left corner
   */
  Logo: PropTypes.elementType,
};

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

const CustomFooter = () => (
  <Footer links={links} Content={EmailSubscriptionForm} />
);

export default CustomFooter;

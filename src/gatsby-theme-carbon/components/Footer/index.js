// src/gatsby-theme-carbon/components/Footer/index.js
import React from "react";
import {
  footer,
  grid,
  nav,
  listItem,
  logo,
  content,
} from "./Footer.module.scss";
import { Row, Grid, Column } from "gatsby-theme-carbon/src/components/Grid";
import { links as resourceLinks } from "../LeftNav/ResourceLinks";
import BrevoForm from "../../../components/BrevoForm/BrevoForm";
import PropTypes from "prop-types";

const Footer = ({ Content, links, Logo }) => {
  const { firstCol, secondCol } = links;

  return (
    <footer className={footer}>
      <Grid className={grid}>
        <Row>
          <Column
            className={content}
            colLg={4}
            colMd={4}
            colSm={3}
            offsetLg={2}
          >
            <Content />
          </Column>
          <Column colLg={2} colMd={2}>
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
          <Column colLg={2} colMd={2}>
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

const DefaultContent = () => (
  <p>
    Shadow this content by importing the theme Footer and supplying your own
    props.
  </p>
);

Footer.defaultProps = {
  links: {
    firstCol: [
      { href: "https://www.ibm.com/design", linkText: "Sample" },
      { href: "https://www.ibm.com/design", linkText: "Links" },
      {
        href: "https://www.ibm.com/design",
        linkText: "Column",
      },
      { href: "https://www.ibm.com/design", linkText: "One" },
    ],
    secondCol: [
      {
        href: "https://www.ibm.com/design",
        linkText: "Dribbble",
      },
      {
        href: "https://www.ibm.com/design",
        linkText: "Medium",
      },
      {
        href: "https://www.ibm.com/design",
        linkText: "Twitter",
      },
    ],
  },
  Content: DefaultContent,
  Logo: null,
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

const Content = () => (
  <>
    <div style={{ marginBottom: "-2rem" }} />
    <BrevoForm isWide={true} />
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

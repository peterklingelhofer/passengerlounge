/* eslint-disable global-require */
import React, { useLayoutEffect } from "react";

import LeftNav from "gatsby-theme-carbon/src/components/LeftNav";
import Meta from "gatsby-theme-carbon/src/components/Meta";
import Header from "gatsby-theme-carbon/src/components/Header";
import Switcher from "gatsby-theme-carbon/src/components/Switcher";
import Footer from "gatsby-theme-carbon/src/components/Footer";
import Container from "gatsby-theme-carbon/src/components/Container";
import Stars from "../../components/Stars";
// import Calendar from "../../components/Calendar";
import "gatsby-theme-carbon/src/styles/index.scss";
import { layout } from "../../styles/Layout.module.scss";

const Layout = ({
  children,
  homepage,
  theme,
  titleType,
  pageTitle,
  pageDescription,
  pageKeywords,
  tabs,
}) => {
  const is404 = children.key === null;
  // let childrenWithCalendar;
  // if (pageTitle === "Upcoming Shows") {
  //   const yourArray = [...children];
  //   const arrayFirstHalf = yourArray.slice(0, 2);
  //   const arraySecondHalf = yourArray.slice(3, yourArray.length);
  //   childrenWithCalendar = [
  //     ...arrayFirstHalf,
  //     <Calendar key={"calendar"} />,
  //     ...arraySecondHalf,
  //   ];
  // }

  useLayoutEffect(() => {
    const scroll = require("smooth-scroll")('a[href*="#"]', {
      speed: 400,
      durationMin: 250,
      durationMax: 700,
      easing: "easeInOutCubic",
      clip: true,
      offset: tabs ? 112 : 64,
    });
    return scroll.destroy;
  }, [tabs]);

  return (
    <div className={layout}>
      <Meta
        titleType={titleType}
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        pageKeywords={pageKeywords}
      />
      <Header />
      <Switcher />
      <LeftNav homepage={homepage} is404Page={is404} theme={theme} />
      <Container homepage={homepage} theme={theme}>
        {pageTitle !== "" && <Stars isHome={false} />}
        {children}
        {/* pageTitle !== "Upcoming Shows" ? children : childrenWithCalendar */}
        <Footer />
      </Container>
    </div>
  );
};

export default Layout;

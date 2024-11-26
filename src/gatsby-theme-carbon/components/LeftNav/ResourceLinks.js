import React from "react";
import ResourceLinks from "gatsby-theme-carbon/src/components/LeftNav/ResourceLinks";
import BrevoForm from "../../../components/BrevoForm/BrevoForm";

export const links = [
  {
    title: "BandCamp",
    href: "https://passengerlounge.bandcamp.com",
  },
  {
    title: "SoundCloud",
    href: "https://soundcloud.com/passengerlounge",
  },
  {
    title: "YouTube",
    href: "https://music.youtube.com/playlist?list=OLAK5uy_mZQkjDLvt-hsptFOCBvjZT7NsvHWqYqrA",
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/passengerlounge",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/passengerlounge",
  },
  {
    title: "TikTok",
    href: "https://www.tiktok.com/@passengerlounge",
  },
  {
    title: "Twitter",
    href: "https://twitter.com/passengerlounge",
  },
  {
    title: "Newsletter",
    href: "https://ba1b46a4.sibforms.com/serve/MUIFACQdYp9g2xRzLr2AgJ8f0wVdkSJIvGmt7xD7i4gYxrce0ym1F1bBGOfgP__5JZzkQvYGAwXkW0SX5ZLdYdsr3nzGfC6VSDUR5ke0KKteerFPZK6J74sS_vko-h9YFisAhNPDSC-h2ovUsVDdzhi6w9vG4UhwAaU4YZJAz9FCkn-B500wuFTfMCH6Ze-u40vuWvvpVhsFVo0L",
  },
];

const CustomResources = () => (
  <>
    <ResourceLinks shouldOpenNewTabs links={links} />
    <BrevoForm />
  </>
);

export default CustomResources;

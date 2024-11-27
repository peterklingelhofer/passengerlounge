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
    title: "Bluesky",
    href: "https://bsky.app/profile/passengerlounge.com",
  },
  {
    title: "Twitter",
    href: "https://twitter.com/passengerlounge",
  },
  {
    title: "Newsletter",
    href: "https://ba1b46a4.sibforms.com/serve/MUIFAHOpQ-RpMcSNf0V0K9gOBY9mcv6F12PhIru3I5zrx51CQDa04NL43tPPE00e40Vp4A2Pi3m3dxwMY_mwHW9pd8XaMWhohhTFgF3QKsKfukDxtd9Hc6QMYJDd8zRufyquwXynNOjXFzt2_ABMcq_eVEE2w_e94anHpW_LmHFEcXxPxMQAq3x3BmATohuRrxzFDvI7XqUgPgXE",
  },
];

const CustomResources = () => (
  <>
    <ResourceLinks shouldOpenNewTabs links={links} />
    {/* <BrevoForm isSmallWidth={true} /> */}
  </>
);

export default CustomResources;

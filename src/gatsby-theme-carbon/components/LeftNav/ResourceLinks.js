import React from "react";
import ResourceLinks from "gatsby-theme-carbon/src/components/LeftNav/ResourceLinks";
// import { EmailSubscriptionForm } from "../../../components/EmailSubscriptionForm/EmailSubscriptionForm.js";

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
  // {
  //   title: "Newsletter",
  //   href: "https://cdn.forms-content-1.sg-form.com/d58ad9f4-b028-11ef-b98b-32170b0fc806",
  // },
  {
    title: "Substack",
    href: "https://passengerlounge.substack.com",
  },
  {
    title: "Newsletter",
    href: "https://passengerlounge.substack.com",
  },
];

const CustomResources = () => (
  <>
    <ResourceLinks shouldOpenNewTabs links={links} />
    {/* <EmailSubscriptionForm isLeftSideBar={true} /> */}
  </>
);

export default CustomResources;

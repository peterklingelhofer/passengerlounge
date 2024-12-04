import React from "react";
import ResourceLinks from "gatsby-theme-carbon/src/components/LeftNav/ResourceLinks";
import {
  SUBSCRIBE_FORM_ACTION,
  // EmailSubscriptionForm,
} from "../../../components/EmailSubscriptionForm/EmailSubscriptionForm";

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
    href: SUBSCRIBE_FORM_ACTION,
  },
];

const CustomResources = () => (
  <>
    <ResourceLinks shouldOpenNewTabs links={links} />
    {/* <EmailSubscriptionForm isWide={false} /> */}
  </>
);

export default CustomResources;

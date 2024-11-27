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
    href: "https://ba1b46a4.sibforms.com/serve/MUIFAEU9npVwRv42Mqf-n4sgtNmbLn6MDH9hT5I5FXm5ZJidV0swp_WIF1iRyl0eVOI4k2xvy1NyNo9F1W889rm0cT1_rgW9GzqG5BKPCqmHz-Lwx2S71e9AEH3einDAvjwvPI6vJn_bOlx2P2YBa9BLOebsU4tQIPDDgtKMu9y2ZhRHHPqfpV-L1d8V-ccArrJVdmHUbo9E4p2V",
  },
];

const CustomResources = () => (
  <>
    <ResourceLinks shouldOpenNewTabs links={links} />
    <BrevoForm isWide={false} />
  </>
);

export default CustomResources;

import React from "react";
import ResourceLinks from "gatsby-theme-carbon/src/components/LeftNav/ResourceLinks";

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
    href: "https://cdn.forms-content-1.sg-form.com/d58ad9f4-b028-11ef-b98b-32170b0fc806",
  },
  // {
  //   title: "Newsletter",
  //   href: "https://passengerlounge.substack.com",
  // },
];

const CustomResources = () => (
  <>
    <ResourceLinks shouldOpenNewTabs links={links} />
    {/* <div style={{ marginTop: "60%" }}>
      <iframe
        src="https://passengerlounge.substack.com/embed"
        title="newsletter-subscribe"
        style={{
          background:
            "linear-gradient(0deg, rgba(22,22,22,1) 0%, rgba(26,26,26,1) 95%, rgba(22,22,22,1) 100%)",
          clipPath: "inset(0 0 17% 0)",
          height: "100%",
          width: "98%",
        }}
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div> */}
    {/* <EmailSubscriptionForm isWide={false} /> */}
  </>
);

export default CustomResources;

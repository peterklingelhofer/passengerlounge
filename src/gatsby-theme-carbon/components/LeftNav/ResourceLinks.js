import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'BandCamp',
    href: 'https://passengerlounge.bandcamp.com',
  },
  {
    title: 'Resonate',
    href: 'https://stream.resonate.coop/artist/19140',
  },
  {
    title: 'SoundCloud',
    href: 'https://soundcloud.com/passengerlounge',
  },
  {
    title: 'YouTube',
    href: 'https://music.youtube.com/playlist?list=OLAK5uy_mZQkjDLvt-hsptFOCBvjZT7NsvHWqYqrA',
  },
  {
    title: 'Facebook',
    href: 'https://www.facebook.com/passengerlounge',
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/passengerlounge',
  },
  {
    title: 'TikTok',
    href: 'https://www.tiktok.com/@passengerlounge',
  },
  {
    title: 'Twitter',
    href: 'https://twitter.com/passengerlounge',
  },
  {
    title: 'Newsletter',
    href: 'https://passengerlounge.substack.com',
  },
];

const CustomResources = () => (
  <>
    <ResourceLinks shouldOpenNewTabs links={links} />
    <div style={{ bottom: 0 }}>
      <iframe
        src="https://passengerlounge.substack.com/embed"
        title="newsletter-subscribe"
        style={{
          background:
            'linear-gradient(0deg, rgba(22,22,22,1) 0%, rgba(26,26,26,1) 95%, rgba(22,22,22,1) 100%)',
          clipPath: 'inset(0 0 17% 0)',
          height: '100%',
          width: "98%",
        }}
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  </>
);

export default CustomResources;

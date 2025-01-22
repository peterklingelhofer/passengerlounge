import React from "react";
import { HomepageBanner, HomepageCallout } from "gatsby-theme-carbon";
import HomepageTemplate from "gatsby-theme-carbon/src/templates/Homepage";
import Utils from "./Utils";
import { calloutLink } from "./Homepage.module.scss";
import Stars from "./Stars";
import Black from "../images/black.webp";
import viscousAlbum from "../images/viscous-album-cover.webp";

const EmptyText = () => <p></p>;

const homepageStars = () => <Stars isHome={true} />;

const FirstLeftText = () => (
  <a href="/discography/viscous">
    <img src={viscousAlbum} alt="viscous album cover" />
  </a>
);

const FirstRightText = () => (
  <p>
    “Viscous” is the band's debut single (2021). Available now for purchase on
    all major platforms, including but not limited to{" "}
    <a href="https://music.amazon.com/albums/B09NL54VFT?ref=dm_ff_linkfire&tag=univemuisc-central-21&ie=UTF8&linkCode=as2&ascsubtag=c8bfbb5b8037b7aac8507928a87e8af0">
      Amazon
    </a>
    ,{" "}
    <a href="https://music.apple.com/us/album/viscous-single/1600084402">
      Apple
    </a>
    , <a href="https://passengerlounge.bandcamp.com/track/viscous">BandCamp</a>,{" "}
    <a href="https://www.deezer.com/us/track/1589039992">Deezer</a>,{" "}
    <a href="https://www.pandora.com/artist/passenger-lounge/viscous-single/ALXnXxxPl9dlK72">
      Pandora
    </a>
    ,{" "}
    <a href="https://stream.resonate.coop/artist/19140/release/viscous">
      Resonate
    </a>
    , <a href="https://soundcloud.com/passengerlounge/viscous">SoundCloud</a>,{" "}
    <a href="https://open.spotify.com/track/5ydIU7sbi9c89avQiVllcC?si=FxsfISfoQvumEXVykgMGLQ">
      Spotify
    </a>
    , <a href="http://listen.tidalhifi.com/track/208962742">Tidal</a>, and{" "}
    <a href="https://music.youtube.com/playlist?list=OLAK5uy_mZQkjDLvt-hsptFOCBvjZT7NsvHWqYqrA">
      YouTube
    </a>
    .{" "}
    <a className={calloutLink} href="/discography/viscous">
      Explore →
    </a>
  </p>
);

const SecondLeftText = () => <p></p>;
const SecondRightText = () => <p></p>;

const BannerText = () => (
  <>
    <h1>Passenger Lounge</h1>
    <Utils />
  </>
);

const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Black} />,
  FirstCallout: (
    <>
      <HomepageCallout
        backgroundColor="black"
        color="white"
        leftText={EmptyText}
        rightText={homepageStars}
      />
      <section id="the-band"></section>
    </>
  ),
  SecondCallout: (
    <HomepageCallout
      backgroundColor="black"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  ThirdCallout: (
    <HomepageCallout
      backgroundColor="black"
      color="white"
      leftText={SecondLeftText}
      rightText={SecondRightText}
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;

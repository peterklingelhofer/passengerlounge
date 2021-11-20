import React from 'react';
import { UpToTop20 } from '@carbon/icons-react';
import { button } from './ScrollDownBtn.module.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const ScrollDownBtn = () => (
  <AnchorLink href="#the-band">
    <button
      className={button}
      type="button"
      aria-label="Scroll to next section"
    >
      <UpToTop20 />
    </button>
  </AnchorLink>
);

export default ScrollDownBtn;

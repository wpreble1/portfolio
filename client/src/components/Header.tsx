import React, { FC, ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';

import useDocumentScrollThrottled from './useDocumentScrollThrottled';

import { ScrollData } from './types';
// import {
//   LinkedIn, Github, DevTo, CodeWars,
// } from '../logos';

interface HeaderProps {
}

const Header: FC<HeaderProps> = (): ReactElement => {
  const [hideHeader, setHideHeader] = useState(false);
  const [showShadow, setShowShadow] = useState(false);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 0;

  useDocumentScrollThrottled((callbackData: ScrollData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;
    setShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const shadowStyle = showShadow ? 'shadowMobile' : '';
  const hiddenStyle = hideHeader ? 'hiddenMobile' : '';

  return (
    <header className={`headerMobile ${shadowStyle} ${hiddenStyle} xl:hidden`}>
      <div className="logo">Will Preble</div>
      <ul className="links">
        <li className="link-item">Projects</li>
        <li className="link-item">Info</li>
        <li className="link-item">Resume</li>
      </ul>

    </header>
  );
};

export default Header;

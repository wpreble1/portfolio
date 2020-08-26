import React, { FC, ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';

import useDocumentScrollThrottled from '../hooks/useDocumentScrollThrottled';

import { LogoLinks } from '.';
import { ScrollData } from './types';

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
    <header className={`headerMobile fixed top-0 left-0 flex pt-4 justify-between w-full h-12 bg-white ${shadowStyle} ${hiddenStyle} lg:hidden`}>
      <div className="inline-block text-lg ml-6 hover:text-pink font-serif"><Link className="" to="/">WP</Link></div>
      <LogoLinks />
      <ul className="p-0 mr-6">
        <li className="inline-block mx-1"><Link className="left-underline" to="/projects">Projects</Link></li>
        <li className="inline-block mx-1"><Link className="left-underline" to="/info">Info</Link></li>
        <li className="inline-block mx-1"><Link className="left-underline" to="/resume">Tester</Link></li>
      </ul>

    </header>
  );
};

export default Header;

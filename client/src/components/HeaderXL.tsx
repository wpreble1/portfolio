import React, { FC, ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';

import useDocumentScrollThrottled from './useDocumentScrollThrottled';

import { ScrollData } from './types';
// import {
//   LinkedIn, Github, DevTo, CodeWars,
// } from '../logos';

interface HeaderXLProps {
}

const HeaderXL: FC<HeaderXLProps> = (): ReactElement => {
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

  // const shadowStyle = showShadow ? 'shadowXL' : '';
  const hiddenStyle = hideHeader ? 'hiddenXL' : '';

  return (
    <header className={`hidden xl:block headerXL p-16 ${hiddenStyle}`}>
      <ul className="block text-lg">
        <li className="py-1">Projects</li>
        <li className="py-1">Info</li>
        <li className="py-1">Resume</li>
      </ul>
    </header>
  );
};

export default HeaderXL;

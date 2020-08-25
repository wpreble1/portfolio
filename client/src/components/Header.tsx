import React, { FC, ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';

import useDocumentScrollThrottled from './useDocumentScrollThrottled';

import { ScrollData } from './types';
import {
  LinkedIn, Github, DevTo, CodeWars,
} from '../logos';

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
    <header className={`headerMobile fixed top-0 left-0 flex items-center justify-between w-full h-16 bg-white ${shadowStyle} ${hiddenStyle} lg:hidden`}>
      <div className="text-lg mx-6 hover:text-pink"><Link className="" to="/">WP</Link></div>
      <div className="logos">
        <a
          className="m-1 inline-block"
          href="https://www.linkedin.com/in/will-preble/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </a>
        <a
          className="m-1 inline-block"
          href="https://github.com/wpreble1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
        <a
          className="m-1 inline-block"
          href="https://dev.to/wpreble1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DevTo />
        </a>
        <a
          className="m-1 inline-block"
          href="https://www.codewars.com/users/wpreble1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CodeWars />
        </a>
      </div>
      <ul className="p-0 mx-6">
        <li className="inline-block m-1"><Link className="left-underline" to="/projects">Projects</Link></li>
        <li className="inline-block m-1"><Link className="left-underline" to="/info">Info</Link></li>
        <li className="inline-block m-1"><Link className="left-underline" to="/resume">Resume</Link></li>
      </ul>

    </header>
  );
};

export default Header;

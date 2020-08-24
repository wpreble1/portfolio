import React, { FC, ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';

import useDocumentScrollThrottled from './useDocumentScrollThrottled';

import { ScrollData } from './types';
import { LinkedIn, Github, DevTo, CodeWars } from '../logos';

interface HeaderXLProps {}

const HeaderXL: FC<HeaderXLProps> = (): ReactElement => {
  const [hideHeader, setHideHeader] = useState(false);
  const [, setShowShadow] = useState(false);

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

  const hiddenStyle = hideHeader ? 'fade-out' : '';

  return (
    <header className={`hidden lg:block headerXL p-12 ${hiddenStyle}`}>
      <ul className="block text-lg">
        <li className="py-1">
          <Link className="left" to="/projects">
            Projects
          </Link>
        </li>
        <li className="py-1">
          <Link className="left" to="/info">
            Info
          </Link>
        </li>
        <li className="py-1">
          <a
            className="left"
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </a>
        </li>
      </ul>
      <div className="block logosXL mt-24">
        <a
          className="pl-2 items-center"
          href="https://www.linkedin.com/in/will-preble/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </a>
        <a
          className="pl-2"
          href="https://github.com/wpreble1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
        <a
          className="pl-2"
          href="https://dev.to/wpreble1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DevTo />
        </a>
        <a
          className="pl-2"
          href="https://www.codewars.com/users/wpreble1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CodeWars />
        </a>
      </div>

      <Link to="/">
        <div className="logoXL text-lg tracking-widest">WP</div>
      </Link>
    </header>
  );
};

export default HeaderXL;

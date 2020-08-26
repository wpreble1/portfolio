import React, { FC, ReactElement, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useDocumentScrollThrottled from '../hooks/useDocumentScrollThrottled';
import useWindowDimensions from '../hooks/useWindowDimensions';

import { ScrollData } from './types';
import { LogoLinksXL } from '.';

interface HeaderXLProps {
  fullCover: boolean;
}

const HeaderXL: FC<HeaderXLProps> = ({ fullCover }): ReactElement => {
  const [hideHeader, setHideHeader] = useState(false);
  const [, setShowShadow] = useState(false);
  const [invertHeader, setInvertHeader] = useState(fullCover);

  useEffect(() => {
    setInvertHeader(fullCover);
  }, [fullCover]);

  const { height } = useWindowDimensions();

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 0;

  useDocumentScrollThrottled((callbackData: ScrollData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    setInvertHeader(currentScrollTop < height);

    setShowShadow(currentScrollTop > 2);

    setTimeout(() => {
      setHideHeader(isScrolledDown && isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  const hiddenStyle = hideHeader ? 'fade-out' : '';

  return (
    <header className={`hidden lg:block fixed top-0 left-0 headerXL p-12 ${hiddenStyle} ${invertHeader ? 'text-white' : 'text-black'}`}>
      <ul className="block text-lg">
        <li className="py-1">
          <Link className="left-underline" to="/projects">
            Projects
          </Link>
        </li>
        <li className="py-1">
          <Link className="left-underline" to="/info">
            Info
          </Link>
        </li>
        <li className="py-1">
          <a
            className="left-underline"
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </a>
        </li>
      </ul>

      <LogoLinksXL fill={invertHeader ? 'white' : 'black'} />

      <Link to="/">
        <div className="hover:text-pink text-lg tracking-widest font-serif fixed nameXL">WP</div>
      </Link>
    </header>
  );
};

export default HeaderXL;

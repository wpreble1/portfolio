import React, { FC, ReactElement } from 'react';

import {
  LinkedIn,
  Github,
  DevTo,
  CodeWars,
} from '../logos';

interface LogoLinksXLProps {
  fill: 'white' | 'black';
}

const LogoLinksXL: FC<LogoLinksXLProps> = ({ fill }): ReactElement => {
  const classes = `w-4 lg:w-6 grow ${fill === 'white' ? 'fill-white' : 'fill-black'}`;

  return (
    <div className="block fixed mt-24 logo-links">
      <a
        className="pl-2 items-center"
        href="https://www.linkedin.com/in/will-preble/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedIn classes={classes} />
      </a>
      <a
        className="pl-2"
        href="https://github.com/wpreble1/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github classes={classes} />
      </a>
      <a
        className="pl-2"
        href="https://dev.to/wpreble1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <DevTo classes={classes} />
      </a>
      <a
        className="pl-2"
        href="https://www.codewars.com/users/wpreble1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CodeWars classes={classes} />
      </a>
    </div>
  );
};

export default LogoLinksXL;

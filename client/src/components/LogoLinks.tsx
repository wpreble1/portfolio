import React, { FC, ReactElement } from 'react';

import {
  LinkedIn,
  Github,
  DevTo,
  CodeWars,
} from '../logos';

interface LogoLinksProps {
  fill?: 'white' | 'black';
}

const LogoLinks: FC<LogoLinksProps> = (): ReactElement => {
  const classes = 'w-4 lg:w-6 grow';

  return (
    <div className="">
      <a
        className="mx-1 inline-block"
        href="https://www.linkedin.com/in/will-preble/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedIn classes={classes} />
      </a>
      <a
        className="mx-1 inline-block"
        href="https://github.com/wpreble1/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github classes={classes} />
      </a>
      <a
        className="mx-1 inline-block"
        href="https://dev.to/wpreble1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <DevTo classes={classes} />
      </a>
      <a
        className="mx-1 inline-block"
        href="https://www.codewars.com/users/wpreble1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CodeWars classes={classes} />
      </a>
    </div>
  );
};

export default LogoLinks;

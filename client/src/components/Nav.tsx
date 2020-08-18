import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import {
  LinkedIn, Github, DevTo, CodeWars,
} from '../logos';

interface NavProps {
  toggleSlideDrawer: any;
}

const Nav: FC<NavProps> = ({ toggleSlideDrawer }): ReactElement => {
  return (
    <nav className="flex items-center justify-between bg-blue-100 px-2 py-4">
      <div className="flex items-center flex-shrink-0 mx-6">
        <span className="font-semibold text-xl tracking-tight uppercase font-mono">
          <Link to="/">Will Preble</Link>
        </span>
      </div>
      <div className="hidden w-full flex-grow md:flex md:items-center md:w-auto">
        <div className="text-sm md:flex-grow">
          <Link to="/projects">
            <button
              type="submit"
              className="block mt-4 md:inline-block md:mt-0 hover:font-bold mr-4"
            >
              Projects
            </button>
          </Link>
          <Link to="/info">
            <button
              type="submit"
              className="block mt-4 md:inline-block md:mt-0 hover:font-bold mr-4"
            >
              Info
            </button>
          </Link>
          <div className="block mt-4 md:inline-block md:mt-0 hover:font-bold">
            <a href={`${process.env.PUBLIC_URL}/resume.pdf`}>Resume</a>
          </div>
        </div>
      </div>
      <div className="block mx-6">
        <a
          className="inline-block pl-2 items-center"
          href="https://www.linkedin.com/in/will-preble/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn />
        </a>
        <a
          className="inline-block pl-2"
          href="https://dev.to/wpreble1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DevTo />
        </a>
        <a
          className="inline-block pl-2"
          href="https://www.codewars.com/users/wpreble1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CodeWars />
        </a>
        <a
          className="inline-block pl-2"
          href="https://github.com/wpreble1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
        </a>
      </div>
      <div className="inline-block px-8 md:hidden">
        <div
          className=""
          role="button"
          onClick={toggleSlideDrawer}
          onKeyDown={toggleSlideDrawer}
          aria-label="toggle menu"
          tabIndex={0}
        >
          <svg
            viewBox="0 0 30 30"
            width="30"
            height="24"
            aria-labelledby="Sidebar Menu"
          >
            <rect width="30" height="2" rx="3" />
            <rect y="8" width="30" height="2" rx="3" />
            <rect y="16" width="30" height="2" rx="3" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

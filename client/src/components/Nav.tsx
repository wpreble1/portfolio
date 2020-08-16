import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

// import pdf from '../resume.pdf';

interface NavProps {
}

const Nav: FC<NavProps> = (): ReactElement => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-100 p-6">
      <div className="flex items-center flex-shrink-0 mr-6">
        {/* <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> */}
        <span className="font-semibold text-xl tracking-tight uppercase font-mono"><Link to="/">Will Preble</Link></span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded border-teal-400 hover:text-white hover:border-white" type="submit">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="hidden w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <button type="submit" className="block mt-4 lg:inline-block lg:mt-0 hover:font-bold mr-4">
            Projects
          </button>
          <button type="submit" className="block mt-4 lg:inline-block lg:mt-0 hover:font-bold mr-4">
            Info
          </button>
          <div className="block mt-4 lg:inline-block lg:mt-0 hover:font-bold">
            <a href={`${process.env.PUBLIC_URL}/resume.pdf`}>Resume</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

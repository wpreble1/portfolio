import React, { FC, ReactElement } from 'react';
import '../styles/SlideDrawer.css';

import { Link } from 'react-router-dom';

interface SlideDrawerProps {
  show: boolean;
  toggleSlideDrawer: any;
}

const SlideDrawer: FC<SlideDrawerProps> = ({ show, toggleSlideDrawer }): ReactElement => {
  const drawerClasses = show ? 'side-drawer open' : 'side-drawer';

  return (
    <div className={`${drawerClasses} p-8 text-white`}>
      <ul>
        <li>
          <Link to="/projects">
            <button type="submit" onClick={toggleSlideDrawer}>Projects</button>
          </Link>
        </li>
        <li>
          <Link to="/info">
            <button type="submit" onClick={toggleSlideDrawer}>Info</button>
          </Link>
        </li>
        <li>
          <a href={`${process.env.PUBLIC_URL}/resume.pdf`}>Resume</a>
        </li>
      </ul>
    </div>
  );
};

export default SlideDrawer;

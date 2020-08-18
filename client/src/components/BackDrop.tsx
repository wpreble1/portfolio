import React, { FC, ReactElement } from 'react';
import '../styles/BackDrop.css';

interface BackDropProps {
  toggleSlideDrawer: any;
}

const BackDrop: FC<BackDropProps> = ({ toggleSlideDrawer }): ReactElement => {
  return (
    <div
      role="button"
      className="backdrop"
      onClick={toggleSlideDrawer}
      onKeyDown={toggleSlideDrawer}
      tabIndex={0}
      aria-label="close sidebar"
    />
  );
};

export default BackDrop;

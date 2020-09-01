import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
}

const Footer: FC<FooterProps> = (): ReactElement => {

  return (
    <footer className="w-full h-64 mx-auto flex bg-gray-100">
      <div className="text-black  text-xs justify-center mx-auto align-middle inline-block p-32 tracking-widest">
        copyright &copy;
        <Link to="/"> will preble 2020</Link>
      </div>
    </footer>
  );
};

export default Footer;

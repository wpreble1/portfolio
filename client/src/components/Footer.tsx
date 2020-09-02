import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
}

const Footer: FC<FooterProps> = (): ReactElement => {

  return (
    <footer className="w-full h-32 mx-auto flex">
      <div className="text-black  text-xs justify-center mx-auto align-middle inline-block p-16 tracking-widest">
        Copyright &copy;
        <Link to="/"> Will Preble 2020</Link>
      </div>
    </footer>
  );
};

export default Footer;

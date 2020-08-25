import React, { FC, ReactElement } from 'react';

import test from '../images/uc/uc-tile.jpg';

const InfoPage: FC = (): ReactElement => {
  return (
    <div className="h-full lg:mx-40">
      <div className="h-full bg-white my-0 mx-auto pt-16 px-6 pb-6 lg:pt-24 lg:px-12">
        <img src={test} alt="" />
        <h1>Will Preble</h1>
        <h2>Bio</h2>
        <p>Will is a full-stack developer currently looking for work in Los Angeles.</p>
        <h2>Contact</h2>
        <ul>
          <li className="text-sm"><a href="mailto:wpreble1@gmail.com" target="_blank" rel="noreferrer noopener">Email</a></li>
          <li className="text-sm"><a href="https://linkedin.com/in/will-preble/" target="_blank" rel="noreferrer noopener">LinkedIn</a></li>
          <li className="text-sm"><a href="https://github.com/wpreble1/" target="_blank" rel="noreferrer noopener">Github</a></li>
        </ul>
      </div>
    </div>
  );
};

export default InfoPage;

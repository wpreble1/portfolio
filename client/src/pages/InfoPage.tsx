import React, { FC, ReactElement } from 'react';

const InfoPage: FC = (): ReactElement => {
  return (
    <div className="wrapper">
      <div className="h-full bg-white my-0 mx-auto section">
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

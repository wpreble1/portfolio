import React, { FC, ReactElement } from 'react';

import { LinkText } from '../components';

import info from '../images/info.jpg';

interface InfoPageProps {
  setFullCover: any;
}

const InfoPage: FC<InfoPageProps> = ({ setFullCover }): ReactElement => {
  setFullCover(false);

  return (
    <div className="h-full lg:mx-40 pb-8">
      <div className="h-full bg-white my-0 mx-auto pt-16 px-6 pb-6 lg:pt-24 lg:px-12">
        <h2 className="uppercase">Bio</h2>
        <p className="pt-4">
          I&apos;m a full-stack developer currently looking for work in Los
          Angeles.
        </p>
        <img className="p-8 lg:pr-64 lg:py-12" src={info} alt="" />
        <h2 className="uppercase pb-1">Contact</h2>
        <ul className="list-none">
          <LinkText
            link="mailto:wpreble1@gmail.com"
            text="Email"
          />
          <LinkText
            link="https://linkedin.com/in/will-preble/"
            text="LinkedIn"
          />
          <LinkText
            link="https://github.com/wpreble1/"
            text="Github"
          />
        </ul>
      </div>
    </div>
  );
};

export default InfoPage;

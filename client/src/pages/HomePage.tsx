import React, { FC, ReactElement, useEffect } from 'react';

import ProjectList from '../components/ProjectList';

interface HomePageProps {
  setFullCover: any;
}

const HomePage: FC<HomePageProps> = ({ setFullCover }): ReactElement => {
  useEffect(() => {
    setFullCover(false);
  }, []);

  return (
    <div className="h-full lg:mx-40">
      <div className="h-full bg-white my-0 mx-auto pt-16 px-6 pb-6 lg:pt-12">
        <ProjectList />
      </div>
    </div>
  );
};

export default HomePage;

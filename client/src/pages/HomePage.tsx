import React, { FC, ReactElement } from 'react';

import ProjectList from '../components/ProjectList';

const HomePage: FC = (): ReactElement => {
  return (
    <div className="wrapper">
      <div className="h-full bg-white my-0 mx-auto section lg:pt-12">
        <ProjectList />
      </div>
    </div>
  );
};

export default HomePage;

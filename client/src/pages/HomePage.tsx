import React, { FC, ReactElement } from 'react';

import ProjectList from '../components/ProjectList';

const HomePage: FC = (): ReactElement => {
  return (
    <div className="h-full lg:mx-40">
      <div className="h-full bg-white my-0 mx-auto pt-16 px-6 pb-6 lg:pt-12">
        <ProjectList />
      </div>
    </div>
  );
};

export default HomePage;

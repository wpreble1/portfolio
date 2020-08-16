import React, { FC, ReactElement } from 'react';

import Nav from '../components/Nav';
import ProjectList from '../components/ProjectList';

const HomePage: FC = (): ReactElement => {
  return (
    <div className="">
      <ProjectList />
    </div>
  );
};

export default HomePage;

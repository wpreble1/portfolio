import React, { FC, ReactElement } from 'react';

import { Project } from '../components/types';

interface InfoPageProps {
  project: Project;
}

const InfoPage: FC<InfoPageProps> = ({
  project,
}): ReactElement => {
  return (
    <div className="">
      <h1>InfoPage</h1>
    </div>
  );
};

export default InfoPage;

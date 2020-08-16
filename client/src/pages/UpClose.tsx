import React, { FC, ReactElement } from 'react';

import { Project } from '../components/types';

interface UpCloseProps {
  project: Project;
}

const UpClose: FC<UpCloseProps> = ({
  project,
}): ReactElement => {
  return (
    <div className="">
      <h1>UpClose</h1>
    </div>
  );
};

export default UpClose;

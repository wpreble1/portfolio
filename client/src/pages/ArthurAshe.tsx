import React, { FC, ReactElement } from 'react';

import { Project } from '../components/types';

interface ArthurAsheProps {
  project: Project;
}

const ArthurAshe: FC<ArthurAsheProps> = ({
  project,
}): ReactElement => {
  return (
    <div className="">
      <h1>ArthurAshe</h1>
    </div>
  );
};

export default ArthurAshe;

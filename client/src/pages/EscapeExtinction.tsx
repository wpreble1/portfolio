import React, { FC, ReactElement } from 'react';

import { Project } from '../components/types';

interface EscapeExtinctionProps {
  project: Project;
}

const EscapeExtinction: FC<EscapeExtinctionProps> = ({
  project,
}): ReactElement => {
  return (
    <div className="">
      <h1>EscapeExtinction</h1>
    </div>
  );
};

export default EscapeExtinction;

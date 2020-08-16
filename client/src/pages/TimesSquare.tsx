import React, { FC, ReactElement } from 'react';

import { Project } from '../components/types';

interface TimesSquareProps {
  project: Project;
}

const TimesSquare: FC<TimesSquareProps> = ({
  project,
}): ReactElement => {
  return (
    <div className="">
      <h1>TimesSquare</h1>
    </div>
  );
};

export default TimesSquare;

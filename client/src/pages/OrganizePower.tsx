import React, { FC, ReactElement } from 'react';

import { Project } from '../components/types';

interface OrganizePowerProps {
  project: Project;
}

const OrganizePower: FC<OrganizePowerProps> = ({
  project,
}): ReactElement => {
  return (
    <div className="">
      <h1>OrganizePower</h1>
    </div>
  );
};

export default OrganizePower;

import React, { FC } from 'react';
import { v4 as uuid } from 'uuid';

import { projects, displayOrder } from '../projectData';
import ProjectIcon from './ProjectTile';

interface ProjectListProps {
}

const ProjectList: FC<ProjectListProps> = () => {
  return (
    <div className="flex flex-wrap my-4 justify-center mx-10">
      {displayOrder.map(project => {
        return (
          <ProjectIcon project={projects[project]} key={uuid()} />
        );
      })}
    </div>
  );
};

export default ProjectList;

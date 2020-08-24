import React, { FC } from 'react';
import { v4 as uuid } from 'uuid';

import { projects, displayOrder } from '../projectData';
import ProjectTile from './ProjectTile';

interface ProjectListProps {
}

const ProjectList: FC<ProjectListProps> = () => {
  return (
    <div className="flex flex-wrap justify-center md:-mx-8">
      {displayOrder.map(project => {
        return (
          <ProjectTile project={projects[project]} key={uuid()} />
        );
      })}
    </div>
  );
};

export default ProjectList;

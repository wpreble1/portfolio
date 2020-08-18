import React, { FC } from 'react';
import { v4 as uuid } from 'uuid';

import projects from '../projectData';
import ProjectIcon from './ProjectIcon';

interface ProjectListProps {
}

const ProjectList: FC<ProjectListProps> = () => {
  return (
    <div className="flex flex-wrap my-4 justify-center mx-10">
      {projects.map(project => {
        return (
          <ProjectIcon project={project} key={uuid()} />
        );
      })}
    </div>
  );
};

export default ProjectList;

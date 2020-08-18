import React, { FC, ReactElement } from 'react';

import { Project } from '../components/types';

interface ProjectPageProps {
  project: Project;
}

const ProjectPage: FC<ProjectPageProps> = ({
  project,
}): ReactElement => {
  const { title, images, text } = project;
  
  return (
    <div className="">
      <h1>{title}</h1>
      <img src={images[0]}></img>
    </div>
  );
};

export default ProjectPage;

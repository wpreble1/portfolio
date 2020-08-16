import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Project } from './types';

interface ProjectIconProps {
  project: Project;
}

const ProjectIcon: FC<ProjectIconProps> = ({ project }) => {
  const { title, src, alt, url } = project;
  return (
    <div className="p-4">
      <Link to={`/${url}`}>
        <img className="min-w-0 min-h-0" src={src} alt={alt} width="300px" />
      </Link>
      <p className="pt-2 uppercase font-mono hover:font-bold text-sm">{title}</p>
    </div>
  );
};

export default ProjectIcon;

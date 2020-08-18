import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Project } from './types';

interface ProjectIconProps {
  project: Project;
}

const ProjectIcon: FC<ProjectIconProps> = ({ project }) => {
  const { title, src, alt, url } = project;
  return (
    <div className="p-4 hover:font-bold w-full md:w-1/2 lg:w-1/3">
      <Link to={`/${url}`}>
        <img className="w-full" src={src} alt={alt} />
      </Link>
      <p className="pt-2 uppercase font-mono text-sm">{title}</p>
    </div>
  );
};

export default ProjectIcon;

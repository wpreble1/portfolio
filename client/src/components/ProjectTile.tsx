import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Project } from './types';

interface ProjectIconProps {
  project: Project;
}

const ProjectIcon: FC<ProjectIconProps> = ({ project }) => {
  const { tile, title, url, role } = project;
  const { alt, src } = tile;
  return (
    <div className="pb-8 w-full md:w-1/2 md:p-8 lg:w-1/3 lg:p-12 hover:text-purple">
      <Link to={`/${url}`}>
        <img className="w-full shadow-md" src={src} alt={alt} />
        <div className="flex items-baseline justify-between">
          <p className="pt-2 font-sans text-lg inline-block">{title}</p>
          <p className="inline-block text-xs">{role}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectIcon;

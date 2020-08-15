import React, { FC } from 'react';

interface Project {
  title: string;
  src: string;
  alt: string;
}

interface ProjectIconProps {
  project: Project;
}

const ProjectIcon: FC<ProjectIconProps> = ({ project }) => {
  const { title, src, alt } = project;
  return (
    <div className="p-4">
      <img className="min-w-0 min-h-0" src={src} alt={alt} width="300px" />
      <p className="pt-2 uppercase font-mono hover:font-bold text-sm">{title}</p>
    </div>
  );
};

export default ProjectIcon;

import React, { FC } from 'react';
import { v4 as uuid } from 'uuid';

import ProjectIcon from './ProjectIcon';
import ees from '../images/ees.gif';
import fts from '../images/4ts-square-1.jpg';
import aas from '../images/aas-square-1.jpg';
import ash from '../images/ash-sq-1.jpg';
import crawl from '../images/crawl square-1.jpg';
import uc from '../images/uc-sq-1.jpg';
import op from '../images/op-sq-1.jpg';

interface ProjectListProps {
}

const ProjectList: FC<ProjectListProps> = () => {
  const projects = [
    {
      title: 'Up Close',
      src: uc,
      alt: '',
      url: 'up-close',
    },
    {
      title: 'Organize Power',
      src: op,
      alt: '',
      url: 'organize-power',
    },
    {
      title: 'Crawl',
      src: crawl,
      alt: '',
      url: 'crawl',
    },
    {
      title: 'Escape Extinction',
      src: ees,
      alt: 'escape extinction sharks gif',
      url: 'escape-extinction',
    },
    {
      title: 'Abita Springs Hotel',
      src: ash,
      alt: '',
      url: 'abita-springs-hotel',
    },
    {
      title: 'Arthur Ashe Stadium',
      src: aas,
      alt: '',
      url: 'arthur-ashe',
    },
    {
      title: '4 Times Square',
      src: fts,
      alt: '',
      url: 'times-square',
      photoCredit: 'https://www.instagram.com/lightsensitivity/',
    },
  ];

  return (
    <div className="flex flex-wrap mb-4">
      {projects.map(project => {
        return (
          <ProjectIcon project={project} key={uuid()} />
        );
      })}
    </div>
  );
};

export default ProjectList;

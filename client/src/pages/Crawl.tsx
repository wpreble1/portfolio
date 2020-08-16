import React, { FC, ReactElement } from 'react';

import { Project } from '../components/types';

interface CrawlProps {
  project: Project;
}

const Crawl: FC<CrawlProps> = ({
  project,
}): ReactElement => {
  return (
    <div className="">
      <h1>Crawl</h1>
    </div>
  );
};

export default Crawl;

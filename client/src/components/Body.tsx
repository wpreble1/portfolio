import React, { FC, ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';

import { projects } from '../projectData';

import {
  HomePage,
  InfoPage,
  ProjectPage,
} from '../pages';

const Body: FC = (): ReactElement => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/projects" component={HomePage} />
      <Route path="/info" component={InfoPage} />
      {/* Project Pages */}
      <Route
        path="/abita-springs-hotel"
        render={(props) => <ProjectPage project={projects.ash} />}
      />
      <Route
        path="/arthur-ashe"
        render={(props) => <ProjectPage project={projects.aas} />}
      />
      <Route
        path="/crawl"
        render={(props) => <ProjectPage project={projects.crawl} />}
      />
      <Route
        path="/escape-extinction"
        render={(props) => <ProjectPage project={projects.ees} />}
      />
      <Route
        path="/organize-power"
        render={(props) => <ProjectPage project={projects.op} />}
      />
      <Route
        path="/times-square"
        render={(props) => <ProjectPage project={projects.fts} />}
      />
      <Route
        path="/up-close"
        render={(props) => <ProjectPage project={projects.uc} />}
      />
    </Switch>
  );
};

export default Body;

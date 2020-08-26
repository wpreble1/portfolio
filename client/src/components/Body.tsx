import React, { FC, ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';

import { projects } from '../projectData';

import {
  HomePage,
  InfoPage,
  ProjectPage,
} from '../pages';

interface BodyProps {
  setFullCover: any;
}

const Body: FC<BodyProps> = ({ setFullCover }): ReactElement => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => <HomePage setFullCover={setFullCover} />}
      />
      <Route
        exact
        path="/projects"
        render={(props) => <HomePage setFullCover={setFullCover} />}
      />
      <Route
        path="/info"
        render={(props) => <InfoPage setFullCover={setFullCover} />}
      />
      {/* Project Pages */}
      <Route
        path="/abita-springs-hotel"
        render={(props) => <ProjectPage project={projects.ash} setFullCover={setFullCover} />}
      />
      <Route
        path="/arthur-ashe"
        render={(props) => <ProjectPage project={projects.aas} setFullCover={setFullCover} />}
      />
      <Route
        path="/crawl"
        render={(props) => <ProjectPage project={projects.crawl} setFullCover={setFullCover} />}
      />
      <Route
        path="/escape-extinction"
        render={(props) => <ProjectPage project={projects.ees} setFullCover={setFullCover} />}
      />
      <Route
        path="/organize-power"
        render={(props) => <ProjectPage project={projects.op} setFullCover={setFullCover} />}
      />
      <Route
        path="/times-square"
        render={(props) => <ProjectPage project={projects.fts} setFullCover={setFullCover} />}
      />
      <Route
        path="/up-close"
        render={(props) => <ProjectPage project={projects.uc} setFullCover={setFullCover} />}
      />
    </Switch>
  );
};

export default Body;

import React, { FC, ReactElement, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import { projects } from '../projectData';

import {
  // AbitaSpringsHotel,
  Crawl,
  EscapeExtinction,
  HomePage,
  InfoPage,
  UpClose,
  OrganizePower,
  ArthurAshe,
  TimesSquare,
  ProjectPage,
} from '../pages';

const Body: FC = (): ReactElement => {
  return (
    <div className="section">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/projects" component={HomePage} />
        <Route path="/info" component={InfoPage} />
        {/* Project Pages */}
        <Route
          path="/abita-springs-hotel"
          render={(props) => <ProjectPage project={projects.ash} />}
        />
        <Route path="/arthur-ashe" component={ArthurAshe} />
        <Route path="/crawl" component={Crawl} />
        <Route path="/escape-extinction" component={EscapeExtinction} />
        <Route path="/organize-power" component={OrganizePower} />
        <Route path="/times-square" component={TimesSquare} />
        <Route path="/up-close" component={UpClose} />
      </Switch>
    </div>
  )
}

export default Body;

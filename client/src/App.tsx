import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Nav, SlideDrawer } from './components';
import projects from './projectData';

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
} from './pages';
import BackDrop from './components/BackDrop';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleSlideDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div>
      <SlideDrawer show={drawerOpen} toggleSlideDrawer={toggleSlideDrawer} />
      {drawerOpen && <BackDrop toggleSlideDrawer={toggleSlideDrawer} />}
      <Nav toggleSlideDrawer={toggleSlideDrawer} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/projects" component={HomePage} />
        <Route path="/info" component={InfoPage} />
        {/* Project Pages */}
        <Route
          path="/abita-springs-hotel"
          render={(props) => <ProjectPage project={projects[4]} />}
        />
        <Route path="/arthur-ashe" component={ArthurAshe} />
        <Route path="/crawl" component={Crawl} />
        <Route path="/escape-extinction" component={EscapeExtinction} />
        <Route path="/organize-power" component={OrganizePower} />
        <Route path="/times-square" component={TimesSquare} />
        <Route path="/up-close" component={UpClose} />
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';

import { Nav } from './components';

import {
  AbitaSpringsHotel,
  Crawl,
  EscapeExtinction,
  HomePage,
  InfoPage,
  UpClose,
  OrganizePower,
  ArthurAshe,
  TimesSquare,
} from './pages';

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/info" component={InfoPage} />
        {/* Project Pages */}
        <Route path="/abita-springs-hotel" component={AbitaSpringsHotel} />
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

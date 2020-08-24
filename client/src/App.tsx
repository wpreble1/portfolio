import React, { FC, ReactElement } from 'react';
// import { Route, Switch } from 'react-router-dom';

import { Body, Header, HeaderXL } from './components';

const App: FC = (): ReactElement => {
  return (
    <div className="">
      <Header />
      <HeaderXL />
      <Body />
    </div>
  );
};

export default App;

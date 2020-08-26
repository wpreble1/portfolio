import React, { FC, ReactElement, useState } from 'react';
// import { Route, Switch } from 'react-router-dom';

import { Body, Header, HeaderXL, HeaderXL2 } from './components';

const App: FC = (): ReactElement => {
  const [fullCover, setFullCover] = useState(false);

  return (
    <div className="">
      <Header />
      {fullCover ? <HeaderXL fullCover={fullCover} /> : <HeaderXL2 fullCover={fullCover} />}
      <Body setFullCover={setFullCover} />
    </div>
  );
};

export default App;

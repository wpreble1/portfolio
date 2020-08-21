import React, { FC, ReactElement } from 'react';
// import { Route, Switch } from 'react-router-dom';

import { Body, Header, HeaderXL } from './components';

const App: FC = (): ReactElement => {
  // const [drawerOpen, setDrawerOpen] = useState(false);

  // const toggleSlideDrawer = () => {
  //   setDrawerOpen(!drawerOpen);
  // };
  return (
    <div className="wrapper">
      {/* <SlideDrawer show={drawerOpen} toggleSlideDrawer={toggleSlideDrawer} />
      {drawerOpen && <BackDrop toggleSlideDrawer={toggleSlideDrawer} />} */}
      {/* <Nav toggleSlideDrawer={toggleSlideDrawer} /> */}
      <Header />
      <HeaderXL />
      <Body />
    </div>
  );
};

export default App;

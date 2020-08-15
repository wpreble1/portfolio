import React from 'react';
import axios from 'axios';

import ProjectList from './ProjectList';

function App() {
  const something = () => {
    console.log('i was clicked');
    axios.get('/resume').then(({ data }) => {
      console.log(data);
    });
  };

  return (
    <div className="">
      <button className="" type="submit" onClick={something}>Will Preble</button>
      <h1>Info</h1>
      <ProjectList />
    </div>
  );
}

export default App;

import React from 'react';
import Parent from './Parent';
import Child from './Child';

const Home = () => {
  return (
    <Parent>
      <Child />
      <Child />
      <Child />
    </Parent>
  );
}

export default Home;
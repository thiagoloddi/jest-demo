import React from 'react';
import Child from './Child';

const Parent = ({ children }) => {
  return (
    <div>
      I'm the parent. These are my children:
      {children}
    </div>
  );
}

export default Parent;
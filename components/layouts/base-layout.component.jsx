/** Dependencies */
import React from 'react';

/** Components */
import Header from '../shared/header.component';

const BaseLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default BaseLayout;

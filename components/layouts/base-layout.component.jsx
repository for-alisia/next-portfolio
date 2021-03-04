/** Dependencies */
import React from 'react';

/** Components */
import Header from '../shared/header.component';

const BaseLayout = (props) => {
  const { className, children } = props;
  return (
    <div className="layout-container">
      <Header />
      <main className={`cover ${className}`}>
        <div className="wrapper">{children}</div>
      </main>
    </div>
  );
};

export default BaseLayout;

import React from 'react';

import NavBar from 'containers/NavBar';
import ActionBar from 'containers/ActionBar';

import PageWrapper from 'components/App/PageWrapper';

const Summary = props => {
  return (
    <PageWrapper>
      <NavBar {...props} />
      <div>summary page content</div>
      <ActionBar {...props} />
    </PageWrapper>
  );
};

export default Summary;

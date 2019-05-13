import React from 'react';

import NavBar from 'containers/NavBar';
import ActionBar from 'containers/ActionBar';

import PageWrapper from 'components/App/PageWrapper';
import ContentWrapper from 'components/Summary/ContentWrapper';

const Summary = props => {
  return (
    <PageWrapper>
      <ContentWrapper>
        <NavBar {...props} />
        <div>summary page content</div>
        <ActionBar {...props} />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Summary;

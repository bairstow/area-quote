import React, { useState } from 'react';

import NavBar from 'containers/NavBar';
import ActionBar from 'containers/ActionBar';
import SectionList from 'containers/SectionList';
import { ContentWrapper } from 'containers/Summary/styles';

import PageWrapper from 'components/PageWrapper';

import { generateUpdateAtom } from 'containers/App/utility';
import { mode } from 'containers/Summary/constants';

const initialState = { mode: mode.PULLUP };

const Summary = props => {
  const [atom, updateAtom] = useState(initialState);
  const updateSummaryAtom = generateUpdateAtom(atom, updateAtom);
  const summaryProps = { summaryAtom: atom, updateSummaryAtom };

  return (
    <PageWrapper>
      <ContentWrapper>
        <NavBar {...summaryProps} {...props} />
        <SectionList {...summaryProps} {...props} />
        <ActionBar {...summaryProps} {...props} />
      </ContentWrapper>
    </PageWrapper>
  );
};

export default Summary;

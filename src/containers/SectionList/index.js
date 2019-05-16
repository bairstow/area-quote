import React from 'react';

import Description from 'components/App/Description';
import { ContentWrapper, Header } from 'containers/SectionList/styles';

import { mode } from 'containers/Summary/constants';

const SectionList = props => {
  const { summaryAtom, sectionData } = props;
  const checkMode = targetMode => summaryAtom.mode === targetMode;
  const hasSectionData = sectionData.length > 0;
  return (
    <ContentWrapper isContracted={checkMode(mode.DROPDOWN)}>
      <Header>SECTION DATA</Header>
      {!hasSectionData && <Description>No sections added yet</Description>}
    </ContentWrapper>
  );
};

export default SectionList;

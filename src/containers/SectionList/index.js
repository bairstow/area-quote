import React from 'react';

import { ContentWrapper, Header } from 'containers/SectionList/styles';

import Description from 'components/Description';

import { mode } from 'containers/Summary/constants';

const SectionList = props => {
  const { summaryAtom, appAtom } = props;
  const checkMode = targetMode => summaryAtom.mode === targetMode;
  const hasSectionData = appAtom.sectionData.length > 0;
  return (
    <ContentWrapper isContracted={!checkMode(mode.NORMAL)}>
      <Header>SECTION DATA</Header>
      {!hasSectionData && <Description>No sections added yet</Description>}
    </ContentWrapper>
  );
};

export default SectionList;

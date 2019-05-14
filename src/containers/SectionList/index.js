import React from 'react';

import ContentWrapper from 'components/SectionList/ContentWrapper';
import Header from 'components/SectionList/Header';
import Description from 'components/App/Description';

const NavBar = props => {
  const { sectionData, areSettingsVisible } = props;
  const hasSectionData = sectionData.length > 0;
  return (
    <ContentWrapper contracted={areSettingsVisible}>
      <Header>SECTION DATA</Header>
      {!hasSectionData && <Description>No sections added yet</Description>}
    </ContentWrapper>
  );
};

export default NavBar;

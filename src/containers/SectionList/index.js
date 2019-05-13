import React from 'react';

import ContentWrapper from 'components/SectionList/ContentWrapper';
import Header from 'components/SectionList/Header';
import Description from 'components/App/Description';

const NavBar = props => {
  const hasSectionData = props.sectionData.length > 0;
  return (
    <ContentWrapper>
      <Header>SECTION DATA</Header>
      {!hasSectionData && <Description>No sections added yet</Description>}
    </ContentWrapper>
  );
};

export default NavBar;

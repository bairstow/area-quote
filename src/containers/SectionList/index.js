import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ContentWrapper, Header, ItemWrapper, DescriptionWrapper, ItemDescription, ItemTotal, Spacer } from 'containers/SectionList/styles';

import Description from 'components/Description';
import Button from 'components/Button';

import { mode } from 'containers/Summary/constants';

const SectionList = props => {
  const { appAtom, summaryAtom } = props;
  const { sectionData } = appAtom;
  const checkMode = targetMode => summaryAtom.mode === targetMode;
  const hasSectionData = appAtom.sectionData.length > 0;

  const renderSectionData = () => {
    return sectionData.map((datum, listIndex) => {
      const { type, data } = datum;
      const { length, width } = data;
      const key = `${listIndex}-${type}`;
      const displayTotal = Number.parseFloat(length) * Number.parseFloat(width);
      return (
        <ItemWrapper key={key}>
          <DescriptionWrapper>
            <FontAwesomeIcon onClick={() => console.log('delete')} icon={['far', 'times-circle']} size="lg" />
            <ItemDescription>
              {type.slice(0, 4)} - ( l{length}, w{width} )
            </ItemDescription>
            <Spacer />
            <Button onClick={() => console.log('edit')} small="true">
              EDIT
            </Button>
          </DescriptionWrapper>
          <ItemTotal>{displayTotal.toFixed(2)} m2</ItemTotal>
        </ItemWrapper>
      );
    });
  };

  return (
    <ContentWrapper isContracted={!checkMode(mode.NORMAL)}>
      <Header>SECTION DATA</Header>
      {!hasSectionData && <Description>No sections added yet</Description>}
      {hasSectionData && renderSectionData()}
    </ContentWrapper>
  );
};

export default SectionList;

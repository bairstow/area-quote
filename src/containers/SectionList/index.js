import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  ContentWrapper,
  Header,
  ItemWrapper,
  DescriptionWrapper,
  ItemSummaryWrapper,
  ItemType,
  InputSummaryWrapper,
  InputMarker,
  ItemTotal,
  Spacer,
} from 'containers/SectionList/styles';

import Description from 'components/Description';
import Button from 'components/Button';

import { mode } from 'containers/Summary/constants';
import { action } from 'containers/ActionBar/constants';
import { calculateAreaValue } from 'containers/App/utility';

const SectionList = props => {
  const { appAtom, updateAppAtom, summaryAtom } = props;
  const { inputUnit, sectionData } = appAtom;
  const checkMode = targetMode => summaryAtom.mode === targetMode;
  const hasSectionData = appAtom.sectionData.length > 0;
  const generateHandleDeleteSection = itemIndex => () => {
    const updatedSectionData = sectionData.slice(0, itemIndex).concat(sectionData.slice(itemIndex + 1));
    updateAppAtom({ sectionData: updatedSectionData });
  };

  const renderItemDescription = datum => {
    const { type, data } = datum;
    const typeSummary = type.slice(0, 3);
    return (
      <ItemSummaryWrapper>
        <ItemType>{typeSummary} -</ItemType>
        {data &&
          Object.keys(data).map(inputKey => (
            <InputSummaryWrapper key={inputKey}>
              <InputMarker>{inputKey[0]}</InputMarker>
              <div>{data[inputKey]}</div>
            </InputSummaryWrapper>
          ))}
      </ItemSummaryWrapper>
    );
  };

  const renderSectionData = () => {
    return sectionData.map((datum, listIndex) => {
      const { type } = datum;
      const key = `${listIndex}-${type}`;
      const signValue = datum.action === action.ADD ? '+' : '-';
      const areaValue = calculateAreaValue(datum, inputUnit);
      const displayTotal = areaValue.toFixed(2);
      const handleDeleteSection = generateHandleDeleteSection(listIndex);
      return (
        <ItemWrapper key={key}>
          <DescriptionWrapper>
            <FontAwesomeIcon onClick={handleDeleteSection} icon={['far', 'times-circle']} size="lg" />
            {renderItemDescription(datum)}
            <Spacer />
            <Button onClick={() => console.log('edit')} small="true">
              EDIT
            </Button>
          </DescriptionWrapper>
          <ItemTotal action={datum.action}>
            {signValue}
            {displayTotal} m<sup>2</sup>
          </ItemTotal>
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

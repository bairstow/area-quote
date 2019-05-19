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
  ItemTotal,
  Spacer,
} from 'containers/SectionList/styles';

import Description from 'components/Description';
import Button from 'components/Button';

import { mode } from 'containers/Summary/constants';
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
    const typeSummary = type.slice(0, 4);
    console.log({ data });
    return (
      <ItemSummaryWrapper>
        <ItemType>{typeSummary}</ItemType>
        {data &&
          Object.keys(data).map(inputKey => (
            <InputSummaryWrapper key={inputKey}>
              <div>{inputKey[0]}</div>
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
          <ItemTotal>{displayTotal} m2</ItemTotal>
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

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ContentWrapper, SectionHeader, ShapeWrapper, SectionWrapper } from 'containers/ActionBar/styles';

import Button from 'components/Button';
import SpacedFlexRow from 'components/SpacedFlexRow';
import Input from 'components/Input';

import { generateUpdateAtom } from 'containers/App/utility';
import { mode } from 'containers/Summary/constants';
import { action, type, measurement } from 'containers/ActionBar/constants';
import { createBlankInputData } from 'containers/ActionBar/utility';
import { generateSummaryValues } from 'containers/App/utility';

const inputTypeDefinitions = {
  [type.RECTANGULAR]: [
    {
      name: 'length',
      measurement: measurement.LENGTH,
    },
    {
      name: 'width',
      measurement: measurement.LENGTH,
    },
  ],
  [type.TRIANGULAR]: [
    {
      name: 'length',
      measurement: measurement.LENGTH,
    },
    {
      name: 'width',
      measurement: measurement.LENGTH,
    },
  ],
  [type.CIRCULAR]: [
    {
      name: 'radius',
      measurement: measurement.LENGTH,
    },
    {
      name: 'angle',
      measurement: measurement.ANGLE,
    },
  ],
  [type.CUSTOM]: [
    {
      name: 'custom',
      measurement: measurement.AREA,
    },
  ],
};

const generateInitialState = () => ({
  action: null,
  type: type.RECTANGULAR,
  typeData: createBlankInputData(inputTypeDefinitions[type.RECTANGULAR]),
});

const ActionBar = props => {
  const { appAtom, updateAppAtom, summaryAtom, updateSummaryAtom } = props;
  const [atom, updateAtom] = useState(generateInitialState());
  const updateActionBarAtom = generateUpdateAtom(atom, updateAtom);
  const checkAction = targetAction => atom.action === targetAction;
  const checkType = targetType => atom.type === targetType;
  const checkMode = targetMode => summaryAtom.mode === targetMode;
  const { areaTotal, costTotal } = generateSummaryValues(appAtom);

  const generateHandleUpdateType = targetType => () => {
    updateActionBarAtom({ type: targetType, typeData: createBlankInputData(inputTypeDefinitions[targetType]) });
  };

  const handleAddAction = () => {
    updateSummaryAtom({ mode: mode.PULLUP });
    updateActionBarAtom({ action: action.ADD });
  };
  const handleSubtractAction = () => {
    updateSummaryAtom({ mode: mode.PULLUP });
    updateActionBarAtom({ action: action.SUBTRACT });
  };
  const handleCancelAction = () => {
    updateSummaryAtom({ mode: mode.NORMAL });
    updateActionBarAtom(generateInitialState());
  };
  const handleConfirm = () => {
    const { sectionData } = appAtom;
    const updatedSectionData = sectionData.concat([
      {
        type: atom.type,
        data: atom.typeData,
        action: atom.action,
      },
    ]);
    updateAppAtom({ sectionData: updatedSectionData });
    handleCancelAction();
  };

  const renderTypeSelector = () => {
    return (
      <SectionWrapper>
        <SectionHeader>Select type:</SectionHeader>
        <SpacedFlexRow>
          <ShapeWrapper isSelected={checkType(type.RECTANGULAR)} onClick={generateHandleUpdateType(type.RECTANGULAR)}>
            <svg viewBox="0 0 64 64" width="32" height="32" xmlns="http://www.w3.org/2000/svg" stroke="#676767" strokeWidth="4" fill="transparent">
              <polygon points="8,0 56,0 56,64 8,64" />
            </svg>
          </ShapeWrapper>
          <ShapeWrapper isSelected={checkType(type.TRIANGULAR)} onClick={generateHandleUpdateType(type.TRIANGULAR)}>
            <svg viewBox="0 0 64 64" width="32" height="32" xmlns="http://www.w3.org/2000/svg" stroke="#676767" strokeWidth="4" fill="transparent">
              <polygon points="0,0 64,0 0,64" />
            </svg>
          </ShapeWrapper>
          <ShapeWrapper isSelected={checkType(type.CIRCULAR)} onClick={generateHandleUpdateType(type.CIRCULAR)}>
            <svg viewBox="0 0 64 64" width="32" height="32" xmlns="http://www.w3.org/2000/svg" stroke="#676767" strokeWidth="4" fill="transparent">
              <path d="M0,0 L64,0 C64,0 64,64 0,64 z" />
            </svg>
          </ShapeWrapper>
          <ShapeWrapper isSelected={checkType(type.CUSTOM)} onClick={generateHandleUpdateType(type.CUSTOM)}>
            <svg viewBox="0 0 64 64" width="32" height="32" xmlns="http://www.w3.org/2000/svg" stroke="#676767" strokeWidth="4" fill="transparent">
              <path d="M0,0 L64,0 C64,0 48,32 64,64 L0,64 C0,64 16,32 0,0 z" />
            </svg>
          </ShapeWrapper>
        </SpacedFlexRow>
      </SectionWrapper>
    );
  };

  const renderInputForm = () => {
    return (
      <SectionWrapper>
        <SectionHeader>Input measurement:</SectionHeader>
        {inputTypeDefinitions[atom.type].map(inputTypeDefinition => {
          const { name } = inputTypeDefinition;
          const handleTypeDataUpdate = event => {
            const typeData = Object.assign({}, atom.typeData, { [name]: event.target.value });
            updateActionBarAtom({ typeData });
          };
          return <Input key={name} inputId={`section_${name}`} label={`${name}:`} handleChange={handleTypeDataUpdate} />;
        })}
      </SectionWrapper>
    );
  };

  const renderConfirm = (handleConfirmAction, confirmText) => {
    return (
      <SpacedFlexRow>
        <Button onClick={handleConfirmAction}>{confirmText}</Button>
        <Button onClick={handleCancelAction}>CANCEL</Button>
      </SpacedFlexRow>
    );
  };

  const renderAddAction = () => {
    return (
      <SectionWrapper>
        {renderTypeSelector()}
        {renderInputForm()}
        {renderConfirm(handleConfirm, 'ADD')}
      </SectionWrapper>
    );
  };
  const renderSubtractAction = () => {
    return (
      <SectionWrapper>
        {renderTypeSelector()}
        {renderInputForm()}
        {renderConfirm(handleConfirm, 'SUBTRACT')}
      </SectionWrapper>
    );
  };

  return (
    <ContentWrapper isExpanded={checkMode(mode.PULLUP)} isContracted={checkMode(mode.DROPDOWN)}>
      {checkAction(action.ADD) && renderAddAction()}
      {checkAction(action.SUBTRACT) && renderSubtractAction()}
      <SpacedFlexRow height="64px">
        <FontAwesomeIcon onClick={handleAddAction} icon={['far', 'plus-circle']} size="lg" />
        <FontAwesomeIcon onClick={handleSubtractAction} icon={['far', 'minus-circle']} size="lg" />
        <div>
          {areaTotal} m<sup>2</sup> | ${costTotal}
        </div>
      </SpacedFlexRow>
    </ContentWrapper>
  );
};

export default ActionBar;

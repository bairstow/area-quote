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

const initialState = {
  action: action.ADD,
  type: type.RECTANGULAR,
  typeData: createBlankInputData(inputTypeDefinitions[type.RECTANGULAR]),
};

const ActionBar = props => {
  const { summaryAtom, updateSummaryAtom } = props;
  const [atom, updateAtom] = useState(initialState);
  const updateActionBarAtom = generateUpdateAtom(atom, updateAtom);
  const checkAction = targetAction => atom.action === targetAction;
  const updateAction = targetAction => updateActionBarAtom({ action: targetAction });
  const checkType = targetType => atom.type === targetType;
  const generateHandleUpdateType = targetType => () => {
    updateActionBarAtom({ type: targetType, typeData: createBlankInputData(inputTypeDefinitions[targetType]) });
  };
  const checkMode = targetMode => summaryAtom.mode === targetMode;
  const updateMode = targetMode => updateSummaryAtom({ mode: targetMode });
  const handleAddAction = () => {
    updateMode(mode.PULLUP);
    updateAction(action.ADD);
  };
  const handleSubtractAction = () => {
    updateMode(mode.PULLUP);
    updateAction(action.SUBTRACT);
  };
  const handleCancelAction = () => {
    updateMode(mode.NORMAL);
    updateActionBarAtom(initialState);
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
        {renderConfirm(() => console.log('add'), 'ADD')}
      </SectionWrapper>
    );
  };
  const renderSubtractAction = () => {
    return (
      <SectionWrapper>
        {renderTypeSelector()}
        {renderInputForm()}
        {renderConfirm(() => console.log('remove'), 'SUBTRACT')}
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
        <div>123 m2| $456.78</div>
      </SpacedFlexRow>
    </ContentWrapper>
  );
};

export default ActionBar;

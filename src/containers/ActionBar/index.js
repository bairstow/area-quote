import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ContentWrapper, SectionHeader, ShapeWrapper } from 'containers/ActionBar/styles';

import Button from 'components/Button';
import SpacedFlexRow from 'components/SpacedFlexRow';
import Input from 'components/Input';

import { generateUpdateAtom } from 'containers/App/utility';
import { mode } from 'containers/Summary/constants';
import { action, type } from 'containers/ActionBar/constants';

const initialState = {
  action: action.ADD,
  type: type.RECTANGULAR,
};

const ActionBar = props => {
  const { summaryAtom, updateSummaryAtom } = props;
  const [atom, updateAtom] = useState(initialState);
  const updateActionBarAtom = generateUpdateAtom(atom, updateAtom);
  const checkAction = targetAction => atom.action === targetAction;
  const updateAction = targetAction => updateActionBarAtom({ action: targetAction });
  const checkType = targetType => atom.type === targetType;
  const generateHandleUpdateType = targetType => () => updateActionBarAtom({ type: targetType });
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
      <Fragment>
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
      </Fragment>
    );
  };

  const renderInputForm = () => {
    const handleChange = () => console.log('input changed');
    return (
      <Fragment>
        <SectionHeader>Input measurement:</SectionHeader>
        <Input inputId="sectionHeight" label="Height:" handleChange={handleChange} />
        <Input inputId="sectionWidth" label="Width:" handleChange={handleChange} />
      </Fragment>
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
      <Fragment>
        {renderTypeSelector()}
        {renderInputForm()}
        {renderConfirm(() => console.log('add'), 'ADD')}
      </Fragment>
    );
  };
  const renderSubtractAction = () => {
    return (
      <Fragment>
        {renderTypeSelector()}
        {renderConfirm(() => console.log('remove'), 'SUBTRACT')}
      </Fragment>
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

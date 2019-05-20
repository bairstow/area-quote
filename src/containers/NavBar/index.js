import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ContentWrapper, UnitValue } from 'containers/NavBar/styles';
import { SectionWrapper, SectionHeader, ShapeWrapper } from 'containers/ActionBar/styles';

import Button from 'components/Button';
import SpacedFlexRow from 'components/SpacedFlexRow';
import Logo from 'components/Logo';
import Input from 'components/Input';

import { mode } from 'containers/Summary/constants';
import { modal, unit } from 'containers/App/constants';

const NavBar = props => {
  const { appAtom, updateAppAtom, summaryAtom, updateSummaryAtom } = props;
  const checkMode = targetMode => summaryAtom.mode === targetMode;
  const updateMode = targetMode => updateSummaryAtom({ mode: targetMode });
  const handleToggleSettings = () => (checkMode(mode.NORMAL) ? updateMode(mode.DROPDOWN) : updateMode(mode.NORMAL));
  const settingsIconDefinition = checkMode(mode.DROPDOWN) ? ['far', 'times'] : ['far', 'bars'];
  const handleNewJobAction = () => updateAppAtom({ modalType: modal.CONFIRM_NEW });
  const handleSendAction = () => updateAppAtom({ modalType: modal.SEND_EMAIL });
  const checkUnit = targetUnit => appAtom.inputUnit === targetUnit;
  const generateHandleUpdateUnit = targetUnit => () => updateAppAtom({ inputUnit: targetUnit });
  const handleCostPerUnitAreaUpdate = event => updateAppAtom({ costPerUnitArea: event.target.value });

  return (
    <ContentWrapper isExpanded={checkMode(mode.DROPDOWN)} isContracted={checkMode(mode.PULLUP)}>
      <SpacedFlexRow height="64px" justifyContent="space-between">
        <Logo height="32" width="32" />
        <Button onClick={handleNewJobAction} small="true">
          NEW
        </Button>
        <Button onClick={handleSendAction} small="true">
          SEND
        </Button>
        <FontAwesomeIcon onClick={handleToggleSettings} icon={settingsIconDefinition} size="lg" />
      </SpacedFlexRow>
      <SectionWrapper>
        <SectionHeader>Select measurement units:</SectionHeader>
        <SpacedFlexRow>
          <ShapeWrapper isSelected={checkUnit(unit.MM)} onClick={generateHandleUpdateUnit(unit.MM)}>
            <UnitValue>mm</UnitValue>
          </ShapeWrapper>
          <ShapeWrapper isSelected={checkUnit(unit.CM)} onClick={generateHandleUpdateUnit(unit.CM)}>
            <UnitValue>cm</UnitValue>
          </ShapeWrapper>
          <ShapeWrapper isSelected={checkUnit(unit.M)} onClick={generateHandleUpdateUnit(unit.M)}>
            <UnitValue>m</UnitValue>
          </ShapeWrapper>
        </SpacedFlexRow>
      </SectionWrapper>
      <SectionWrapper>
        <SectionHeader>Cost setting:</SectionHeader>
        <Input inputId="costPerUnitArea" label="$ per m2:" handleChange={handleCostPerUnitAreaUpdate} />
      </SectionWrapper>
    </ContentWrapper>
  );
};

export default NavBar;

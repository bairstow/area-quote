import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ContentWrapper } from 'containers/NavBar/styles';

import Button from 'components/Button';
import SpacedFlexRow from 'components/SpacedFlexRow';
import Logo from 'components/Logo';

import { mode } from 'containers/Summary/constants';
import { modal } from 'containers/App/constants';

const NavBar = props => {
  const { updateAppAtom, summaryAtom, updateSummaryAtom } = props;
  const checkMode = targetMode => summaryAtom.mode === targetMode;
  const updateMode = targetMode => updateSummaryAtom({ mode: targetMode });
  const handleToggleSettings = () => (checkMode(mode.NORMAL) ? updateMode(mode.DROPDOWN) : updateMode(mode.NORMAL));
  const settingsIconDefinition = checkMode(mode.DROPDOWN) ? ['far', 'times'] : ['far', 'bars'];
  const handleNewJobAction = () => updateAppAtom({ modalType: modal.CONFIRM_NEW });

  return (
    <ContentWrapper isExpanded={checkMode(mode.DROPDOWN)} isContracted={checkMode(mode.PULLUP)}>
      <SpacedFlexRow height="64px">
        <Logo height="32" width="32" />
        <Button onClick={handleNewJobAction} small="true">
          NEW
        </Button>
        <Button onClick={() => console.log('send button')} small="true">
          SEND
        </Button>
        <FontAwesomeIcon onClick={handleToggleSettings} icon={settingsIconDefinition} size="lg" />
      </SpacedFlexRow>
    </ContentWrapper>
  );
};

export default NavBar;

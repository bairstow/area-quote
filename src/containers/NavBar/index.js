import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ContentWrapper } from 'containers/NavBar/styles';
import SpacedFlexRow from 'components/App/SpacedFlexRow';
import Logo from 'components/App/Logo';
import Button from 'components/App/Button';

import { mode } from 'containers/Summary/constants';

const NavBar = props => {
  const { summaryAtom, updateSummaryAtom } = props;
  const checkMode = targetMode => summaryAtom.mode === targetMode;
  const updateMode = targetMode => updateSummaryAtom({ mode: targetMode });
  const handleToggleSettings = () => (checkMode(mode.NORMAL) ? updateMode(mode.DROPDOWN) : updateMode(mode.NORMAL));
  const settingsIconDefinition = checkMode(mode.DROPDOWN) ? ['far', 'times'] : ['far', 'bars'];

  return (
    <ContentWrapper isExpanded={checkMode(mode.DROPDOWN)}>
      <SpacedFlexRow height="64px">
        <Logo height="32" width="32" />
        <Button onClick={() => props.navigateToTitle()} small="true">
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

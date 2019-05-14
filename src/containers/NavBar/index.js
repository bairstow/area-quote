import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ContentWrapper from 'components/NavBar/ContentWrapper';
import SpacedFlexRow from 'components/App/SpacedFlexRow';
import Logo from 'components/App/Logo';
import Button from 'components/App/Button';

const NavBar = props => {
  const { areSettingsVisible, handleToggleSettings } = props;
  return (
    <ContentWrapper expanded={areSettingsVisible}>
      <SpacedFlexRow height="64px">
        <Logo height="32" width="32" />
        <Button onClick={() => props.navigateToTitle()} small="true">NEW</Button>
        <Button onClick={() => console.log('send button')} small="true">SEND</Button>
        <FontAwesomeIcon onClick={handleToggleSettings} icon={['far', 'bars']} size="lg" />
      </SpacedFlexRow>
    </ContentWrapper>
  );
};

export default NavBar;

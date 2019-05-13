import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ContentWrapper from 'components/NavBar/ContentWrapper';
import Logo from 'components/App/Logo';
import Button from 'components/App/Button';

import { mode } from 'constants/App';

const NavBar = props => {
  return (
    <ContentWrapper>
      <Logo height="32" width="32" />
      <Button onClick={() => props.updateAppMode(mode.TITLE)} small="true">NEW</Button>
      <Button onClick={() => console.log('send button')} small="true">SEND</Button>
      <FontAwesomeIcon onClick={() => console.log('settings')} icon={['far', 'bars']} size="lg" />
    </ContentWrapper>
  );
};

export default NavBar;

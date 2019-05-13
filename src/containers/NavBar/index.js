import React from 'react';

import ContentWrapper from 'components/NavBar/ContentWrapper';
import Button from 'components/App/Button';

const NavBar = props => {
  return (
    <ContentWrapper>
      <div>AQ</div>
      <Button onClick={() => console.log('new button')} small="true">NEW</Button>
      <Button onClick={() => console.log('send button')} small="true">SEND</Button>
      <Button onClick={() => console.log('settings button')} small="true">SETTINGS</Button>
    </ContentWrapper>
  );
};

export default NavBar;

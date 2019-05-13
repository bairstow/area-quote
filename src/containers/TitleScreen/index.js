import React from 'react';

import TitleWrapper from 'components/TitleWrapper';

const TitleScreen = props => {
  return (
    <TitleWrapper>
      <div>{props.appMode}</div>
    </TitleWrapper>
  );
};

export default TitleScreen;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ContentWrapper from 'components/ActionBar/ContentWrapper';

const ActionBar = props => {
  const { areSettingsVisible } = props;
  return (
    <ContentWrapper contracted={areSettingsVisible}>
      <FontAwesomeIcon onClick={() => console.log('settings')} icon={['far', 'plus-circle']} size="lg" />
      <FontAwesomeIcon onClick={() => console.log('settings')} icon={['far', 'minus-circle']} size="lg" />
      <div>123 m2| $456.78</div>
    </ContentWrapper>
  );
};

export default ActionBar;

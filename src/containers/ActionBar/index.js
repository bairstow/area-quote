import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ContentWrapper } from 'containers/ActionBar/styles';

import { mode } from 'containers/Summary/constants';

const ActionBar = props => {
  const { summaryAtom, updateSummaryAtom } = props;
  const checkMode = targetMode => summaryAtom.mode === targetMode;
  const updateMode = targetMode => updateSummaryAtom({ mode: targetMode });
  if (checkMode(mode.DROPDOWN)) console.log('dropdown mode');
  return (
    <ContentWrapper isContracted={checkMode(mode.DROPDOWN)}>
      <FontAwesomeIcon onClick={() => console.log('settings')} icon={['far', 'plus-circle']} size="lg" />
      <FontAwesomeIcon onClick={() => console.log('settings')} icon={['far', 'minus-circle']} size="lg" />
      <div>123 m2| $456.78</div>
    </ContentWrapper>
  );
};

export default ActionBar;

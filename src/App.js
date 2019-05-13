import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faPlusCircle, faMinusCircle } from '@fortawesome/pro-regular-svg-icons';

import Title from 'containers/Title';
import Summary from 'containers/Summary';

import Base from 'components/App/Base';

import { mode } from 'constants/App';

library.add(faBars, faPlusCircle, faMinusCircle);

const initialState = {
  appMode: mode.SUMMARY,
  //appMode: mode.TITLE,
  jobName: '',
  sectionData: [],
};

function App() {
  const [atom, setAtom] = useState(initialState);
  const updateAppMode = updatedMode => setAtom(Object.assign({}, atom, { appMode: updatedMode }));
  const updateJobName = updatedJobName => setAtom(Object.assign({}, atom, { jobName: updatedJobName }));
  const checkMode = currentMode => atom.appMode === currentMode;

  const stateUpdateProps = {
    updateAppMode,
    updateJobName,
  };

  return (
    <Base>
      {checkMode(mode.TITLE) && <Title {...stateUpdateProps} />}
      {checkMode(mode.SUMMARY) && <Summary {...stateUpdateProps} />}
    </Base>
  );
}

export default App;

import React, { useState } from 'react';

import Title from 'containers/Title';
import Summary from 'containers/Summary';

import Base from 'components/App/Base';

import { mode } from 'constants/App';

const initialState = {
  appMode: mode.SUMMARY,
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

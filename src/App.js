import React, { useState } from 'react';

import Title from './containers/Title'

import Base from './components/App/Base';

import { appModes } from './constants/App';

function App() {
  const [appMode, setAppMode] = useState(appModes.TITLE);
  const [jobName, setJobName] = useState('');
  const childProps = {
    appMode,
    setAppMode,
    jobName,
    setJobName,
  };

  return (
    <Base>
      <Title {...childProps} />
    </Base>
  );
}

export default App;

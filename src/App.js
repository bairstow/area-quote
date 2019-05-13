import React, { useState } from 'react';

import TitleScreen from './containers/TitleScreen'

import AppBase from './components/AppBase';

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
    <AppBase>
      <TitleScreen {...childProps} />
    </AppBase>
  );
}

export default App;

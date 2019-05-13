import React, { useState } from 'react';

import Title from 'containers/Title'

import Base from 'components/App/Base';

import { mode } from 'constants/App';

function App() {
  const [appMode, setAppMode] = useState(mode.TITLE);
  const [jobName, setJobName] = useState('');
  const titleProps = {
    appMode,
    setAppMode,
    setJobName,
  };

  return (
    <Base>
      <Title {...titleProps} />
    </Base>
  );
}

export default App;

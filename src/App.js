import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faPlusCircle, faMinusCircle } from '@fortawesome/pro-regular-svg-icons';

import Title from 'containers/Title';
import Summary from 'containers/Summary';
import Modal from 'containers/Modal';

import Base from 'components/App/Base';

import { mode, modal } from 'constants/App';

library.add(faBars, faPlusCircle, faMinusCircle);

const initialState = {
  //appMode: mode.SUMMARY,
  appMode: mode.TITLE,
  modalType: null,
  jobName: '',
  sectionData: [],
};

function App() {
  const [atom, setAtom] = useState(initialState);
  const { sectionData, modalType } = atom;
  const updateAppMode = updatedMode => setAtom(Object.assign({}, atom, { appMode: updatedMode }));
  const updateJobName = updatedJobName => setAtom(Object.assign({}, atom, { jobName: updatedJobName }));
  const handleConfirmNew = () => {
    setAtom(Object.assign({}, initialState))
  };
  const navigateToTitle = () => {
    setAtom(Object.assign({}, atom, { modalType: modal.CONFIRM_NEW }));
  };
  const checkMode = currentMode => atom.appMode === currentMode;

  const stateUpdateProps = {
    navigateToTitle,
    updateAppMode,
    updateJobName,
    sectionData,
  };

  return (
    <Base>
      {modalType && <Modal modalType={modalType} handleConfirmNew={handleConfirmNew} />}
      {checkMode(mode.TITLE) && <Title {...stateUpdateProps} />}
      {checkMode(mode.SUMMARY) && <Summary {...stateUpdateProps} />}
    </Base>
  );
}

export default App;

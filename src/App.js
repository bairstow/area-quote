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
  areSettingsVisible: null,
  jobName: '',
  sectionData: [],
};

function App() {
  const [atom, setAtom] = useState(initialState);
  const { sectionData, modalType, areSettingsVisible } = atom;
  const updateAppMode = updatedMode => setAtom(Object.assign({}, atom, { appMode: updatedMode }));
  const updateJobName = updatedJobName => setAtom(Object.assign({}, atom, { jobName: updatedJobName }));
  const handleConfirmNew = () => {
    setAtom(Object.assign({}, initialState));
  };
  const handleCancel = () => {
    setAtom(Object.assign({}, atom, { modalType: null }));
  };
  const navigateToTitle = () => {
    setAtom(Object.assign({}, atom, { modalType: modal.CONFIRM_NEW }));
  };
  const handleToggleSettings = () => {
    const isVisible = atom.areSettingsVisible === 'true';
    setAtom(Object.assign({}, atom, { areSettingsVisible: isVisible ? null : 'true' }));
  };
  const checkMode = currentMode => atom.appMode === currentMode;

  const stateUpdateProps = {
    navigateToTitle,
    updateAppMode,
    updateJobName,
    handleToggleSettings,
    areSettingsVisible,
    sectionData,
  };

  return (
    <Base>
      {modalType && <Modal modalType={modalType} handleConfirmNew={handleConfirmNew} handleCancel={handleCancel} />}
      {checkMode(mode.TITLE) && <Title {...stateUpdateProps} />}
      {checkMode(mode.SUMMARY) && <Summary {...stateUpdateProps} />}
    </Base>
  );
}

export default App;

import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes, faPlusCircle, faMinusCircle, faTimesCircle } from '@fortawesome/pro-regular-svg-icons';

import { Base } from 'containers/App/styles';
import Title from 'containers/Title';
import Summary from 'containers/Summary';
import Modal from 'containers/Modal';

import { mode, unit } from 'containers/App/constants';
import { generateUpdateAtom } from 'containers/App/utility';

library.add(faBars, faTimes, faPlusCircle, faMinusCircle, faTimesCircle);

const initialState = {
  appMode: mode.SUMMARY,
  //appMode: mode.TITLE,
  modalType: null,
  jobName: '',
  inputUnit: unit.MM,
  costPerUnitArea: 12.5,
  sectionData: [
    {
      type: 'rectangular',
      data: {
        length: '1200',
        width: '1200',
      },
      action: 'subtract',
    },
    {
      type: 'rectangular',
      data: {
        length: '3400',
        width: '3400',
      },
      action: 'add',
    },
  ],
};

function App() {
  const [atom, updateAtom] = useState(initialState);
  const { modalType } = atom;
  const updateAppAtom = generateUpdateAtom(atom, updateAtom);
  const resetAppAtom = () => {
    updateAppAtom(Object.assign({}, initialState));
  };
  const appProps = { appAtom: atom, updateAppAtom, resetAppAtom };
  const checkMode = currentMode => atom.appMode === currentMode;

  return (
    <Base>
      {modalType && <Modal modalType={modalType} {...appProps} />}
      {checkMode(mode.TITLE) && <Title {...appProps} />}
      {checkMode(mode.SUMMARY) && <Summary {...appProps} />}
    </Base>
  );
}

export default App;

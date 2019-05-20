import React, { useState } from 'react';

import { BlackScreen, ContentWrapper, ModalWrapper } from 'containers/Modal/styles';

import Button from 'components/Button';
import Description from 'components/Description';
import SpacedFlexRow from 'components/SpacedFlexRow';
import Input from 'components/Input';

import { modal } from 'containers/App/constants';
import { generateUpdateAtom, generateEmailSubject, generateEmailBody } from 'containers/App/utility';

const initialState = {
  editData: null,
  email: '',
};

const Modal = props => {
  const { appAtom, updateAppAtom, resetAppAtom } = props;
  const { modalType } = appAtom;
  const [atom, updateAtom] = useState(initialState);
  const updateModalAtom = generateUpdateAtom(atom, updateAtom);
  const shouldInitialiseEditData = modalType === modal.EDIT_SECTION && !atom.editData;
  if (shouldInitialiseEditData) {
    const { sectionData, modalData } = appAtom;
    const item = sectionData[modalData.itemIndex];
    updateModalAtom({ editData: item });
  }

  const handleCancel = () => {
    updateModalAtom(initialState);
    updateAppAtom({ modalType: null, modalData: null });
  };

  const renderConfirmNew = () => (
    <div>
      <Description>Starting a new job will clear all existing job data.</Description>
      <SpacedFlexRow>
        <Button onClick={resetAppAtom}>CONFIRM</Button>
        <Button onClick={handleCancel}>CANCEL</Button>
      </SpacedFlexRow>
    </div>
  );
  const renderConfirmDelete = () => {
    const handleConfirmDelete = () => {
      const { sectionData, modalData } = appAtom;
      const { itemIndex } = modalData;
      const updatedSectionData = sectionData.slice(0, itemIndex).concat(sectionData.slice(itemIndex + 1));
      updateAppAtom({ sectionData: updatedSectionData, modalType: null, modalData: null });
    };
    return (
      <div>
        <Description>Delete single section item.</Description>
        <SpacedFlexRow>
          <Button onClick={handleConfirmDelete}>CONFIRM</Button>
          <Button onClick={handleCancel}>CANCEL</Button>
        </SpacedFlexRow>
      </div>
    );
  };
  const renderSendEmail = () => {
    const { email } = atom;
    const handleSendEmail = () => {
      const emailSubject = generateEmailSubject(appAtom);
      const emailBody = generateEmailBody(appAtom);
      window.open(`mailto:${email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`);
      handleCancel();
    };
    const handleChange = event => {
      updateModalAtom({ email: event.target.value });
    };
    return (
      <div>
        <Description>Send current job data via email.</Description>
        <Input inputId="email-input" label="email:" value={email} handleChange={handleChange} autoFocus={true} type="modal" />
        <SpacedFlexRow>
          <Button onClick={handleSendEmail}>SEND</Button>
          <Button onClick={handleCancel}>CANCEL</Button>
        </SpacedFlexRow>
      </div>
    );
  };
  const renderEditSection = () => {
    const { editData } = atom;
    if (!editData) return;
    const inputKeys = Object.keys(editData.data);
    const generateHandleInputChange = key => event => {
      const updatedInputData = Object.assign({}, editData.data, { [key]: event.target.value });
      const updatedEditData = Object.assign({}, editData, { data: updatedInputData });
      updateModalAtom({ editData: updatedEditData });
    };
    const handleConfirmSave = () => {
      const { sectionData, modalData } = appAtom;
      const { itemIndex } = modalData;
      const previousSectionData = sectionData.slice(0, itemIndex);
      const trailingSectionData = sectionData.slice(itemIndex + 1);
      const updatedSectionData = previousSectionData.concat([editData]).concat(trailingSectionData);
      updateAppAtom({ sectionData: updatedSectionData, modalType: null, modalData: null });
    };
    return (
      <div>
        <Description>Edit section measurements</Description>
        {inputKeys &&
          inputKeys.map(key => {
            return (
              <Input
                key={key}
                inputId={`section_${key}`}
                label={`${key}:`}
                value={editData.data[key]}
                handleChange={generateHandleInputChange(key)}
                type="modal"
              />
            );
          })}
        <SpacedFlexRow>
          <Button onClick={handleConfirmSave}>SAVE</Button>
          <Button onClick={handleCancel}>CANCEL</Button>
        </SpacedFlexRow>
      </div>
    );
  };
  const renderDefinitions = {
    [modal.CONFIRM_NEW]: renderConfirmNew,
    [modal.CONFIRM_DELETE]: renderConfirmDelete,
    [modal.SEND_EMAIL]: renderSendEmail,
    [modal.EDIT_SECTION]: renderEditSection,
  };
  const renderContent = modalType && renderDefinitions[modalType];

  return (
    <div>
      <BlackScreen />
      <ContentWrapper>
        <ModalWrapper>{renderContent && renderContent()}</ModalWrapper>
      </ContentWrapper>
    </div>
  );
};

export default Modal;

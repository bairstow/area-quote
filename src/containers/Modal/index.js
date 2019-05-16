import React from 'react';

import { BlackScreen, ContentWrapper, ModalWrapper } from 'containers/Modal/styles';

import Button from 'components/Button';
import Description from 'components/Description';
import SpacedFlexRow from 'components/SpacedFlexRow';

import { modal } from 'containers/App/constants';

const Modal = props => {
  const { modalType, handleConfirmNew, handleCancel } = props;
  const checkType = currentType => modalType === currentType;

  const renderConfirm = () => (
    <div>
      <Description>Starting a new job will clear all existing job data.</Description>
      <SpacedFlexRow>
        <Button onClick={handleConfirmNew}>CONFIRM</Button>
        <Button onClick={handleCancel}>CANCEL</Button>
      </SpacedFlexRow>
    </div>
  );

  return (
    <div>
      <BlackScreen />
      <ContentWrapper>
        <ModalWrapper>{checkType(modal.CONFIRM_NEW) && renderConfirm()}</ModalWrapper>
      </ContentWrapper>
    </div>
  );
};

export default Modal;

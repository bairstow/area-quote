import React from 'react';

import BlackScreen from 'components/Modal/BlackScreen';
import ContentWrapper from 'components/Modal/ContentWrapper';
import ModalWrapper from 'components/Modal/ModalWrapper';
import Button from 'components/App/Button';

import { modal } from 'constants/App';

const Modal = props => {
  const { modalType, handleConfirmNew } = props;
  const checkType = currentType => modalType === currentType;

  const renderConfirm = () => (
    <div>
      <div>
        Starting a new job will clear all existing job data.
      </div>
      <Button onClick={handleConfirmNew}>CONFIRM</Button>
    </div>
  );

  return (
    <div>
      <BlackScreen />
      <ContentWrapper>
        <ModalWrapper>
          {checkType(modal.CONFIRM_NEW) && renderConfirm()}
        </ModalWrapper>
      </ContentWrapper>
    </div>
  );
};

export default Modal;


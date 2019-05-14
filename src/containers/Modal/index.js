//import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import BlackScreen from 'components/Modal/BlackScreen';
import ContentWrapper from 'components/Modal/ContentWrapper';
import ModalWrapper from 'components/Modal/ModalWrapper';
import Description from 'components/App/Description';
import Button from 'components/App/Button';

import { modal } from 'constants/App';

const Modal = props => {
  const { modalType, handleConfirmNew, handleCancel } = props;
  const checkType = currentType => modalType === currentType;

  const renderConfirm = () => (
    <div>
      <Description>Starting a new job will clear all existing job data.</Description>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        `}
      >
        <Button onClick={handleConfirmNew}>CONFIRM</Button>
        <Button onClick={handleCancel}>CANCEL</Button>
      </div>
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


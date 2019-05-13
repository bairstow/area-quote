/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const ModalWrapper = props => (
  <div
    css={css`
      width: 280px;
      height: max-content;
      border-radius: 16px;
      background-color: #FFF;
      padding: 24px;
    `}
    {...props}
  />
);

export default ModalWrapper;

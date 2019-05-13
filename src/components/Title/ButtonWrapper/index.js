/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const ButtonWrapper = props => (
  <div
    css={css`
      width: 100%;
      display: flex;
      justify-content: flex-end;
    `}
    {...props}
  />
);

export default ButtonWrapper;

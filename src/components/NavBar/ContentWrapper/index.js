/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const ContentWrapper = props => (
  <div
    css={css`
      width: 100%;
      height: 64px;
      background-color: #EEE;
      margin: 0;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-content: flex-end;
    `}
    {...props}
  />
);

export default ContentWrapper;

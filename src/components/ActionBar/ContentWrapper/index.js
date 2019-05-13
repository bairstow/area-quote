/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const ContentWrapper = props => (
  <div
    css={css`
      width: 100%;
      height: 64px;
      box-shadow: 0 -2px 4px lightgrey;
      margin: 0;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    `}
    {...props}
  />
);

export default ContentWrapper;

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const ContentWrapper = props => (
  <div
    css={css`
      width: 100%;
      height: 100%;
      margin: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}
    {...props}
  />
);

export default ContentWrapper;

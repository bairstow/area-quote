/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const PageWrapper = props => (
  <div
    css={css`
      background-color: #FFF;
      width: 100vw;
      height: 100vh;
    `}
    {...props}
  />
);

export default PageWrapper;


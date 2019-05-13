/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const PageWrapper = props => (
  <div
    css={css`
      background-color: #FFF;
      width: 100%;
      height: 100vh;
      max-height: 1024px;
    `}
    {...props}
  />
);

export default PageWrapper;

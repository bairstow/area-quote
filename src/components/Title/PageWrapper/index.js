/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const PageWrapper = props => (
  <div
    css={css`
      background-color: #FFF;
      width: 100vw;
      height: 100vh;
      opacity: 0;
      transition: opacity 250ms ease-in-out;

      &.visible {
        opacity: 1;
      }
    `}
    {...props}
  />
);

export default PageWrapper;


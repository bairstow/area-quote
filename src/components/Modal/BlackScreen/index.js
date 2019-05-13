/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const BlackScreen = props => (
  <div
    css={css`
      background-color: #121212;
      opacity: 0.6;
      width: 100vw;
      height: 100vh;
      position: absolute;
    `}
    {...props}
  />
);

export default BlackScreen;

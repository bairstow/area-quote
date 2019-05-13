/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const AppBase = props => (
  <div
    css={css`
      max-width: 768px;
      margin: 0 auto;
    `}
    {...props}
  />
);

export default AppBase;

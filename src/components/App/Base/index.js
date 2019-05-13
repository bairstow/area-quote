/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const AppBase = props => (
  <div
    css={css`
      max-width: 768px;
      max-height: 1024px;
    `}
    {...props}
  />
);

export default AppBase;

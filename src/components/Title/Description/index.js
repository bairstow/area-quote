/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Description = props => (
  <p
    css={css`
      color: #AAA;
      font-size: 1em;
      text-align: center;
      margin-bottom: 48px;
    `}
    {...props}
  />
);

export default Description;


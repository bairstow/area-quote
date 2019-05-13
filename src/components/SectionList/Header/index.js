/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Header = props => (
  <div
    css={css`
      height: 36px;
      width: 180px;
      margin: 24px auto;
      text-align: center;
      font-size: 24px;
      border-bottom: 1px solid #AAA;
    `}
    {...props}
  />
);

export default Header;

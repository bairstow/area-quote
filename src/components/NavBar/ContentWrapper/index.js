/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const ContentWrapper = props => (
  <div
    css={css`
      width: 100%;
      margin: 0;
      height: 64px;
      box-shadow: 0 4px 4px lightgrey;
      transition: height 250ms ease-in-out;

      ${props.expanded && 'height: 100%;'}
      ${props.contracted && 'height: 0;'}
    `}
    {...props}
  />
);

export default ContentWrapper;

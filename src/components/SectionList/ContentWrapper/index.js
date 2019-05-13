/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const ContentWrapper = props => (
  <div
    css={css`
      height: 100%;
      width: 100%;
    `}
    {...props}
  />
);

export default ContentWrapper;


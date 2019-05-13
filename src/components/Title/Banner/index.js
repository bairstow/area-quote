/** @jsx jsx */
import { jsx } from '@emotion/core'

const Banner = props => (
  <div
    css={{
      color: '#222',
      fontSize: '32px',
      margin: '0 auto',
    }}
    {...props}
  />
);

export default Banner;


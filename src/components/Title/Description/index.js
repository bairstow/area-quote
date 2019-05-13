/** @jsx jsx */
import { jsx } from '@emotion/core'

const Description = props => (
  <p
    css={{
      color: '#AAA',
      textAlign: 'center',
    }}
    {...props}
  />
);

export default Description;


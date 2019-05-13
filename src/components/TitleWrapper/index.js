/** @jsx jsx */
import { jsx } from '@emotion/core'

const TitleWrapper = props => (
  <div
    css={{
      backgroundColor: 'green',
      width: '100vw',
      height: '100vh',
    }}
    {...props}
  />
);

export default TitleWrapper;


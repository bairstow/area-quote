/** @jsx jsx */
import { jsx } from '@emotion/core'

const PageWrapper = props => (
  <div
    css={{
      backgroundColor: '#FFF',
      width: '100vw',
      height: '100vh',
    }}
    {...props}
  />
);

export default PageWrapper;


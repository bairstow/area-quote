/** @jsx jsx */
import { jsx } from '@emotion/core'

const ContentWrapper = props => (
  <div
    css={{
      width: '325px',
      height: '100%',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}
    {...props}
  />
);

export default ContentWrapper;

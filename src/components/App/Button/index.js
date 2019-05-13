/** @jsx jsx */
import { jsx } from '@emotion/core'

const Button = props => (
  <button
    css={{
      width: '120px',
    }}
    {...props}
  />
);

export default Button;


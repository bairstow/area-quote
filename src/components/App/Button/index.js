/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Button = props => (
  <button
    css={css`
      width: max-content;
      background-color: #888;
      color: #FFF;
      border: none;
      border-radius: 16px;
      margin: 0;
      padding: 0.8rem 1.6rem;
      text-decoration: none;
      cursor: pointer;
      text-align: center;
      transition: background-color 250ms ease-in-out, transform 150ms ease;

      :hover, :focus {
        background-color: #666;
      }

      :active {
        transform: scale(0.98);
      }

      ${props.small && 'height: 48px;'}
      ${props.small && 'min-width: 64px;'}
      ${props.small && 'padding: 0.4rem 0.8rem;'}
      ${props.small && 'border-radius: 8px;'}
    `}
    {...props}
  />
);

export default Button;


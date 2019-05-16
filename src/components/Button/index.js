import styled from '@emotion/styled';

const Button = styled.button`
  width: max-content;
  background-color: #888;
  color: #FFF;
  border: none;
  border-radius: ${props => (props.small ? '8px' : '16px')};
  margin: 0;
  ${props => props.small && 'height: 36px;'}
  ${props => props.small && 'min-width: 64px;'}
  padding: ${props => (props.small ? '0.4rem 0.8rem' : '0.8rem 1.6rem')};
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
`;

export default Button;

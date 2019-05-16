import styled from '@emotion/styled';

export const ContentWrapper = styled.div`
  width: 100%;
  height: ${props => (props.isContracted ? '0' : '100%')};
  overflow: ${props => (props.isContracted ? 'hidden' : 'scroll')};
  transition: height 250ms ease-in-out;
`;

export const Header = styled.div`
  height: 36px;
  width: 180px;
  margin: 24px auto;
  text-align: center;
  font-size: 24px;
  border-bottom: 1px solid #AAA;
`;

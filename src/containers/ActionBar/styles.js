import styled from '@emotion/styled';

export const ContentWrapper = styled.div`
  width: 100%;
  height: ${props => (props.isContracted ? '0' : '64px')};
  overflow: hidden;
  box-shadow: 0 -2px 4px lightgrey;
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  transition: height 250ms ease-in-out;
`;

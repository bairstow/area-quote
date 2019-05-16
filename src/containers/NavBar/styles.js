import styled from '@emotion/styled';

export const ContentWrapper = styled.div`
  width: 100%;
  margin: 0;
  height: ${props => (props.isExpanded ? '100%' : '64px')};
  box-shadow: 0 4px 4px lightgrey;
  transition: height 250ms ease-in-out;
`;

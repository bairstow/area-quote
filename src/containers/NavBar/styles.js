import styled from '@emotion/styled';

export const ContentWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  margin: 0;
  box-shadow: 0 4px 4px lightgrey;

  height: 72px;
  ${props => props.isExpanded && 'height: 100%;'};
  ${props => props.isContracted && 'height: 0;'};
  transition: height 250ms ease-in-out;
`;

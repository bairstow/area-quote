import styled from '@emotion/styled';

export const ContentWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  box-shadow: 0 -2px 4px lightgrey;
  box-sizing: border-box;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  height: 64px;
  ${props => props.isContracted && 'height: 0;'}
  ${props => props.isExpanded && 'height: 100%;'}
  transition: height 250ms ease-in-out;
`;

export const SectionHeader = styled.div`
  width: 100%;
  margin: 16px 0;
  color: #aaa;
`;

export const ShapeWrapper = styled.div`
  width: 32px;
  height: 32px;
  padding: 16px;
  border-radius: 16px;
  border: ${props => (props.isSelected ? '1px solid #444' : 'none')};
`;

export const SectionWrapper = styled.div`
  margin-bottom: 32px;
`;

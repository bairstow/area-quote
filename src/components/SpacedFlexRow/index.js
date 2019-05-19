import styled from '@emotion/styled';

const SpacedFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${props => (props.justifyContent ? props.justifyContent : 'space-around')};
  align-items: center;
  height: ${props => (props.height ? props.height : '')};
`;

export default SpacedFlexRow;

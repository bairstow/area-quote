import styled from '@emotion/styled';

const SpacedFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: ${props => (props.height ? props.height : '')};
`;

export default SpacedFlexRow;

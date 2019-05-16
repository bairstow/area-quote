import styled from '@emotion/styled';

export const BlackScreen = styled.div`
  background-color: #121212;
  opacity: 0.6;
  width: 100vw;
  height: 100vh;
  position: absolute;
`;

export const ContentWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 280px;
  height: max-content;
  border-radius: 16px;
  background-color: #FFF;
  padding: 24px;
`;

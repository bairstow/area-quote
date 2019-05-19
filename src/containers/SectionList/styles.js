import styled from '@emotion/styled';

import { action } from 'containers/ActionBar/constants';

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
  border-bottom: 1px solid #aaa;
`;

export const ItemWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 32px;
`;

export const DescriptionWrapper = styled.div`
  text-align: left;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ItemSummaryWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ItemType = styled.div`
  margin-left: 8px;
  text-align: left;
  text-transform: uppercase;
  color: #444;
`;

export const InputSummaryWrapper = styled.div`
  margin-left: 8px;
  display: flex;
  flex-direction: row;
`;

export const InputMarker = styled.div`
  color: #AAA;
  padding: 0 2px;
`;

export const ItemTotal = styled.div`
  text-align: left;
  font-size: 18px;
  margin: 0 48px;
  color: ${props => (props.action === action.ADD ? 'green' : 'red')};
`;

export const Spacer = styled.div`
  flex: auto;
`;

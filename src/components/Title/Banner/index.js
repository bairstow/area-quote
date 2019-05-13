/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import Logo from 'components/App/Logo';

const BannerWrapper = props => (
  <div
    css={css`
      color: #444;
      font-size: 64px;
      margin: 0 auto;
    `}
    {...props}
  />
);

const FlexRow = props => (
  <div
    css={css`
      display: flex;
      flex-direction: row;
    `}
    {...props}
  />
);

const LogoWrapper = props => (
  <div
    css={css`
      margin-top: 0px;
      margin-left: 12px;
    `}
    {...props}
  />
);

const Banner = props => (
  <BannerWrapper>
    <FlexRow>
      <div>AREA</div>
      <LogoWrapper>
        <Logo width="48" height="48" />
      </LogoWrapper>
    </FlexRow>
    <div>QUOTE</div>
  </BannerWrapper>
);

export default Banner;


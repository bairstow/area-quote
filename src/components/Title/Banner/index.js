/** @jsx jsx */
import { css, jsx } from '@emotion/core'

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

const AppLogo = props => (
  <div
    css={css`
      margin-top: 0px;
      margin-left: 12px;
    `}
    {...props}
  >
    <svg
      viewBox="0 0 64 64"
      width="48"
      height="48"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#676767"
      strokeWidth="2"
      fill="transparent"
    >
      <circle cx="32" cy="32" r="32" />
      <rect height="64" width="64" />
      <rect height="64" width="32" />
    </svg>
  </div>
);

const Banner = props => (
  <BannerWrapper>
    <FlexRow>
      <div>AREA</div>
      <AppLogo />
    </FlexRow>
    <div>QUOTE</div>
  </BannerWrapper>
);

export default Banner;


import React from 'react';

const Logo = props => {
  const { width, height } = props
  return (
    <svg
      viewBox="0 0 64 64"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      stroke="#676767"
      strokeWidth="2"
      fill="transparent"
    >
      <circle cx="32" cy="32" r="30" />
      <polygon points="0,0 32,0 0,64" fill="#FFF" />
      <rect height="64" width="64" />
      <line x1="32" y1="0" x2="32" y2="64" />
      <line x1="42" y1="42" x2="64" y2="64" />
    </svg>
  );
}

export default Logo;

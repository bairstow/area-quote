/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const SpacedFlexRow = props => {
  const heightDefinition = !!props.height ? `height: ${props.height};` : '';
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        ${heightDefinition}
      `}
      {...props}
    />
  );
};

export default SpacedFlexRow;

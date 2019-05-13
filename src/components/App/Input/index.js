/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const InputWrapper = props => (
  <div
    css={css`
      width: 100%;
      margin: 16px 0;
      position: relative;
    `}
    {...props}
  />
);

const StyledLabel = props => (
  <label
    css={css`
      position: absolute;
      background-color: #FFF;
      top: -8px;
      margin-left: 1em;
      padding: 0 0.8em;
      color: #666;
    `}
    {...props}
  />
);

const InputBorder = props => (
  <div
    css={css`
      width: 320px;
      height: 40px;
      border: 2px solid #888;
      border-radius: 8px;
    `}
    {...props}
  />
);

const StyledInput = props => (
  <input
    css={css`
      width: 280px;
      height: 1.6em;
      line-height: 1.6em;
      margin-top: 8px;
      padding-left: 1.8em;
      border: none;
      :focus {
        outline: none;
      }
    `}
    {...props}
  />
);

const Input = props => {
  const { inputId, label, autoFocus, handleChange } = props;
  return (
    <InputWrapper>
      <StyledLabel htmlFor={inputId} >{label}</StyledLabel>
      <InputBorder>
        <StyledInput id={inputId} autoFocus={autoFocus} onChange={handleChange}/>
      </InputBorder>
    </InputWrapper>
  );
};

export default Input;



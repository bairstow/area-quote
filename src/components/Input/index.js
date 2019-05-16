import React from 'react';
import styled from '@emotion/styled';

const InputWrapper = styled.div`
  width: 100%;
  margin: 16px 0;
  position: relative;
`;

const StyledLabel = styled.label`
  position: absolute;
  background-color: #fff;
  top: -8px;
  margin-left: 1em;
  padding: 0 0.8em;
  color: #666;
`;

const InputBorder = styled.div`
  width: 320px;
  height: 40px;
  border: 2px solid #888;
  border-radius: 8px;
`;

const StyledInput = styled.input`
  width: 280px;
  height: 1.6em;
  line-height: 1.6em;
  margin-top: 8px;
  padding-left: 1.8em;
  border: none;
  :focus {
    outline: none;
  }
`;

const Input = props => {
  const { inputId, label, autoFocus, handleChange } = props;
  return (
    <InputWrapper>
      <StyledLabel htmlFor={inputId}>{label}</StyledLabel>
      <InputBorder>
        <StyledInput id={inputId} autoFocus={autoFocus} onChange={handleChange} />
      </InputBorder>
    </InputWrapper>
  );
};

export default Input;

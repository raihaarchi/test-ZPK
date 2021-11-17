import React, { InputHTMLAttributes, forwardRef } from 'react';
import styled from 'styled/styled';

const StyledContainer = styled.div`
  .file__input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  .choose-input {
    padding: 11px 25px;
    background-color: ${({ theme }) => theme.colors.grey};
    border-radius: 8px;
    ${({ theme }) => theme.typography.text14x18};
  }
`;

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...inputProps }, ref) => {
  return (
    <StyledContainer className={className}>
      <label htmlFor="chooseFile">
        <input
          id="chooseFile"
          type="file"
          className="file__input"
          ref={ref}
          {...inputProps}
        />
        <span className="choose-input">Прикрепить файл</span>
      </label>
    </StyledContainer>
  );
});

Input.displayName = 'Input';

export default Input;

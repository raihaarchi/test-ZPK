import React, { forwardRef, TextareaHTMLAttributes } from 'react';
import styled from 'styled/styled';
import cn from 'classnames';

const StyledTextArea = styled.textarea`
  display: flex;
  ${({ theme }) => theme.typography.text16x20};
  position: relative;
  width: 100%;
  resize: vertical;
  height: 113px;
  padding: 15px 20px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.colors.grey};
  outline: none;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.typography.text16x20};

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    padding: 10px 20px;
    border-radius: 8px;
  }

  &::placeholder {
    ${({ theme }) => theme.typography.text16x20};
    color: ${({ theme }) => theme.colors.grey};
  }
`;

const TextArea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...inputProps }, ref) => {
  return (
    <StyledTextArea
      className={cn('input__input', className)}
      ref={ref}
      {...inputProps}
    />
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;

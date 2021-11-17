import React, { FC, InputHTMLAttributes } from 'react';
import cn from 'classnames';

import SearchIconSmall from 'components/icons/searchIconSmall';
import CloseSmall from 'components/icons/closeSmall';

import styled from 'styled/styled';

type StyledContainerProps = {
  isFocus?: boolean;
};

const StyledContainer = styled.div<StyledContainerProps>`
  display: flex;
  .search__input {
    padding-left: 5px;
    padding-right: ${({ isFocus }) => isFocus && '20px'};
    width: 100%;
    outline: none;
    border: none;
    caret-color: ${({ theme }) => theme.colors['dark-grey']};

    &::placeholder {
      color: ${({ theme }) => theme.colors.blue};
      opacity: 1;
      ${({ theme }) => theme.typography.text14x18}
    }
  }

  .label {
    position: relative;
    width: 100%;
    border-bottom: 1px solid
      ${({ theme, isFocus }) =>
        isFocus ? theme.colors['dark-grey'] : 'tranparent'};
  }
  .displayClose--none {
    display: none;
  }

  .search__icon {
    min-width: 12px;
  }

  .search__close {
    position: absolute;
    right: 0;
    height: 10px;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

interface SearchProfileProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  isFocus?: boolean;
  isValue?: boolean;
  onButtonClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onBlur: (e: React.FocusEvent) => void;
}

const SearchProfile: FC<SearchProfileProps> = ({
  className,
  isFocus,
  onButtonClick,
  onBlur,
  ...inputProps
}) => {
  return (
    <StyledContainer className={className} isFocus={isFocus}>
      <SearchIconSmall className="search__icon" />
      <label className="label" onBlur={onBlur}>
        <button className="search__close" onClick={onButtonClick}>
          <CloseSmall className={cn('', { 'displayClose--none': !isFocus })} />
        </button>
        <input className="search__input" {...inputProps} />
      </label>
    </StyledContainer>
  );
};

SearchProfile.displayName = 'SearchProfile';

export default SearchProfile;

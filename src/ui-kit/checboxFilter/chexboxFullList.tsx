import React, { ChangeEvent, FC, HTMLAttributes } from 'react';
import styled from 'styled/styled';
import { CheckboxFilters } from 'types/catalogFilters';
import CheckboxShortList from './checkboxShortList';

const StyledCheckboxFullList = styled.ul`
  border-top: 1px solid ${({ theme }) => theme.colors['dark-grey']};
  border-bottom: 1px solid ${({ theme }) => theme.colors['dark-grey']};
  max-height: 236px;
  overflow-y: scroll;
  margin-bottom: 31px;

  .checkbox-full-list__item {
    margin-bottom: 16px;

    &:first-of-type {
      margin-top: 15px;
    }
  }

  .checkbox-full-list__letter {
    margin-bottom: 6px;
    ${({ theme }) => theme.typography.text14x18};
    font-weight: bold;
  }

  .checkbox-full-list__list {
    margin-bottom: 0;
  }
`;

interface CheckboxProps extends HTMLAttributes<HTMLUListElement> {
  list: CheckboxFilters[];
  name: string;
  handleChange?: (event: ChangeEvent<HTMLInputElement>, id: number) => void;
}

const CheckboxFullList: FC<CheckboxProps> = ({
  className,
  list,
  name,
  handleChange,
}) => {
  const newList = list;

  const sortedList = new Set(
    newList
      .slice()
      .sort((a, b) => (a.name > b.name ? 1 : -1))
      .map((item) => item.name.charAt(0)),
  );

  const letters = Array.from(sortedList);

  return (
    <StyledCheckboxFullList className={className}>
      {letters.map((letter, index) => {
        return (
          <li key={index} className="checkbox-full-list__item">
            <p className="checkbox-full-list__letter">{letter}</p>
            <CheckboxShortList
              className="checkbox-full-list__list"
              list={list.filter((item) => item.name.charAt(0) === letter)}
              name={name}
              handleChange={handleChange}
            />
          </li>
        );
      })}
    </StyledCheckboxFullList>
  );
};

export default CheckboxFullList;

import React, { ChangeEvent, FC, HTMLAttributes } from 'react';
import styled from 'styled/styled';
import { CheckboxFilters } from 'types/catalogFilters';
import Checkbox from 'ui-kit/checkbox/checkbox';

const StyledCheckboxList = styled.ul`
  .checkbox-short-list__item {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

interface CheckboxProps extends HTMLAttributes<HTMLUListElement> {
  elementsCount?: number;
  list: CheckboxFilters[];
  name: string;
  handleChange?: (event: ChangeEvent<HTMLInputElement>, id: number) => void;
}

const CheckboxShortList: FC<CheckboxProps> = ({
  className,
  list,
  elementsCount,
  handleChange,
}) => {
  return (
    <StyledCheckboxList className={className}>
      {list.slice(0, elementsCount).map((item) => (
        <li key={item.id} className="checkbox-short-list__item">
          <Checkbox
            label={item.name}
            name={name}
            id={`${item.id}`}
            checked={item.checked}
            onChange={(e) => handleChange && handleChange(e, item.id)}
          />
        </li>
      ))}
    </StyledCheckboxList>
  );
};

export default CheckboxShortList;

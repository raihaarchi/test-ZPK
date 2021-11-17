import { useRouter } from 'next/router';
import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import styled from 'styled/styled';
import { CheckboxFilters } from 'types/catalogFilters';
import Input from 'ui-kit/input/input';
import CheckboxShortList from './checkboxShortList';
import CheckboxFullList from './chexboxFullList';

const StyledCheckboxWrap = styled.div`
  .checkbox-wrap__title {
    margin-bottom: 16px;
    ${({ theme }) => theme.typography.text14x18};
    font-weight: bold;
  }

  .checkbox-wrap__text {
    color: ${({ theme }) => theme.colors.blue};
    ${({ theme }) => theme.typography.text14x18};
    outline: none;
    cursor: pointer;
    margin-top: 22px;
  }

  .checkbox-wrap__input {
    margin-bottom: 10px;
  }
`;

interface CheckboxProps {
  className?: string;
  title?: string;
  name: string;
  elementsCount?: number;
  list: CheckboxFilters[];
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  forceValues: string[] | null;
}

const CheckboxWrap: FC<CheckboxProps> = ({
  className,
  title,
  name,
  elementsCount = 5,
  list,
  handleChange,
  forceValues,
}) => {
  const [isOpenAll, setIsOpenAll] = useState(false);
  const [newList, setNewList] = useState(
    list.map((item) => ({ ...item, checked: false })),
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredList, setFilteredList] = useState(newList);

  const router = useRouter();
  const { brands } = router.query;

  useEffect(() => {
    const listNew = list.map((item) => ({ ...item, checked: false }));

    setNewList(listNew);
    setFilteredList(listNew);
  }, [list]);

  useEffect(() => {
    brands &&
      typeof brands === 'string' &&
      setNewList(
        list.map((item) =>
          brands.includes(`${item.id}`)
            ? { ...item, checked: true }
            : { ...item, checked: false },
        ),
      );
  }, []);

  useEffect(() => {
    if (forceValues) {
      const froceList = newList.map((item) =>
        forceValues.includes(`${item.id}`)
          ? { ...item, checked: true }
          : { ...item, checked: false },
      );

      setNewList(froceList);
      setFilteredList(froceList);
    }
  }, [forceValues]);

  const newElementsCount =
    newList.filter((item) => item.checked === true).length < elementsCount
      ? elementsCount
      : newList.filter((item) => item.checked === true).length;

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredList(newList);
    } else {
      setFilteredList(
        newList.filter((item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
      );
    }
  }, [searchQuery, newList]);

  const onToggleOpenAll = () => {
    setIsOpenAll(!isOpenAll);
    setSearchQuery('');
    if (isOpenAll) {
      setNewList(newList.sort((a) => (a.checked ? -1 : 1)));
    }
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    handleChange && handleChange(e);
    setNewList(
      newList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  return (
    <StyledCheckboxWrap className={className}>
      {title && <p className="checkbox-wrap__title">{title}</p>}

      {!isOpenAll && (
        <CheckboxShortList
          list={searchQuery ? filteredList : newList}
          elementsCount={newElementsCount}
          name={name}
          handleChange={onChange}
        />
      )}

      {isOpenAll && (
        <>
          <Input
            className="checkbox-wrap__input"
            placeholder="Найти"
            theme="small"
            onChange={(e) => setSearchQuery(e.target.value.trim())}
          />
          <CheckboxFullList
            list={searchQuery ? filteredList : newList}
            name={name}
            handleChange={onChange}
          />
        </>
      )}

      {list.length !== elementsCount && list.length > elementsCount && (
        <button className="checkbox-wrap__text" onClick={onToggleOpenAll}>
          {isOpenAll
            ? 'Свернуть'
            : `Еще ${filteredList.length - newElementsCount}`}
        </button>
      )}
    </StyledCheckboxWrap>
  );
};

export default CheckboxWrap;

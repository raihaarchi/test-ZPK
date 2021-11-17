import { FC, useEffect, useState } from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
import { RootState, useAppDispatch } from 'store';
import { useSelector } from 'react-redux';
import {
  setFiltering,
  getOrders,
  getFile,
  OrdersState,
  setSorting,
} from 'reducers/ordersSlice';

import { useDebounce } from 'hooks/useDebounce';

import SearchProfile from 'ui-kit/searchProfile/searchProfile';
import ReloadIcon from 'components/icons/reloadIcon';
import useSearch from 'hooks/OrdersAndShipmentsPages/useSearch';
import XlsIcon from 'components/icons/xlsIcon';

import styled from 'styled/styled';
import { downloadFile } from 'utils/file';

type StyledOrdersSearchProps = {
  isFocus?: boolean;
};

const StyledOrdersSearch = styled.div<StyledOrdersSearchProps>`
  margin-top: 61px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    margin-top: 40px;
  }

  .orders-search__input {
    height: 18px;
    display: flex;
    align-items: baseline;
    width: 290px;

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      width: ${({ isFocus }) => (isFocus ? '100%' : '60px')};
    }
  }

  .buttons {
    display: flex;
  }

  .orders-search__button {
    display: flex;
    color: ${({ theme }) => theme.colors.blue};
    ${({ theme }) => theme.typography.text14x18};
  }

  .orders-search__dowland {
    display: flex;
    color: ${({ theme }) => theme.colors.blue};
    ${({ theme }) => theme.typography.text14x18};
    margin-left: 20px;
    width: max-content;

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      margin-left: 10px;
    }
  }

  .icon {
    margin-right: 5px;
  }
`;

const longNamePreloader = 'Поиск по номеру заказа';

const OrdersSearch: FC = () => {
  const { filtering } = useSelector<RootState, OrdersState>(
    ({ orders }) => orders,
  );
  const { documentNumber } = filtering;
  const documentNumberString = documentNumber || '';

  const [searchValue, setSearchValue] = useState<string>(documentNumberString);

  const { isFocus, placeholderInput, isMobile, setFocusInput } = useSearch(
    filtering,
    searchValue,
    setSearchValue,
    longNamePreloader,
  );

  const debounceSearchValue = useDebounce(searchValue, 1200);
  const removeFilteringSearch = async () => {
    const initialFiler = { ...filtering };
    delete initialFiler.documentNumber;

    await dispatch(setFiltering({ ...initialFiler }));
    setSearchValue('');
    setFocusInput(false);
  };

  useEffect(() => {
    if (documentNumberString === debounceSearchValue) {
      return;
    }
    if (debounceSearchValue) {
      dispatch(
        setFiltering({
          ...filtering,
          documentNumber: debounceSearchValue,
        }),
      );
    } else {
      removeFilteringSearch();
    }
  }, [debounceSearchValue]);

  useEffect(() => {
    if (documentNumberString !== debounceSearchValue) {
      setSearchValue(documentNumberString);
    }
  }, [documentNumberString]);

  const dispatch = useAppDispatch();

  const setValueInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleFocus = () => setFocusInput(true);

  const handleBlur = (e: React.FocusEvent) =>
    !e.currentTarget.contains(e.relatedTarget as Node) && setFocusInput(false);

  const rerenderTable = () => {
    dispatch(setSorting(''));
    dispatch(getOrders());
  };

  const handleFile = async () => {
    downloadFile(unwrapResult(await dispatch(getFile())));
  };

  return (
    <StyledOrdersSearch isFocus={isFocus}>
      <SearchProfile
        className="orders-search__input"
        placeholder={placeholderInput}
        isFocus={isFocus}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={setValueInput}
        onButtonClick={removeFilteringSearch}
        value={searchValue}
      />
      {(!isMobile || !isFocus) && (
        <div className="buttons">
          <button onClick={rerenderTable} className="orders-search__button">
            <ReloadIcon className="icon" />
            Обновить
          </button>
          <button onClick={handleFile} className="orders-search__dowland">
            <XlsIcon className="icon" />
            Скачать .XLS
          </button>
        </div>
      )}
    </StyledOrdersSearch>
  );
};

export default OrdersSearch;

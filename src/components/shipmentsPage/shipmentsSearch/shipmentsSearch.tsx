import { FC, useEffect, useState } from 'react';
import { unwrapResult } from '@reduxjs/toolkit';
import { RootState, useAppDispatch } from 'store';
import { useSelector } from 'react-redux';
import {
  setFiltering,
  getShipments,
  getFile,
  ShipmentsState,
  setSorting,
} from 'reducers/shipmentsSlice';

import { useDebounce } from 'hooks/useDebounce';

import SearchProfile from 'ui-kit/searchProfile/searchProfile';
import XlsIcon from 'components/icons/xlsIcon';
import useSearch from 'hooks/OrdersAndShipmentsPages/useSearch';
import ReloadIcon from 'components/icons/reloadIcon';

import styled from 'styled/styled';
import { downloadFile } from 'utils/file';

type StyledShipmentsSearchProps = {
  isFocus?: boolean;
};

const StyledShipmentsSearch = styled.div<StyledShipmentsSearchProps>`
  margin-top: 61px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    margin-top: 40px;
  }

  .shipments-search__input {
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

  .shipments-search__button {
    display: flex;
    color: ${({ theme }) => theme.colors.blue};
    ${({ theme }) => theme.typography.text14x18};
  }

  .shipments-search__dowland {
    display: flex;
    color: ${({ theme }) => theme.colors.blue};
    ${({ theme }) => theme.typography.text14x18};
    margin-left: 20px;
    width: max-content;
  }

  .icon {
    margin-right: 5px;
  }
`;

const longNamePreloader = 'Поиск по номеру заказа';

const ShipmentsSearch: FC = () => {
  const { filtering } = useSelector<RootState, ShipmentsState>(
    ({ shipments }) => shipments,
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

  const dispatch = useAppDispatch();

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

  const setValueInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleFocus = () => setFocusInput(true);

  const handleBlur = (e: React.FocusEvent) =>
    !e.currentTarget.contains(e.relatedTarget as Node) && setFocusInput(false);

  const rerenderTable = () => {
    dispatch(setSorting(''));
    dispatch(getShipments());
  };

  const handleFile = async () => {
    downloadFile(unwrapResult(await dispatch(getFile())));
  };

  return (
    <StyledShipmentsSearch isFocus={isFocus}>
      <SearchProfile
        className="shipments-search__input"
        placeholder={placeholderInput}
        isFocus={isFocus}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={setValueInput}
        onButtonClick={removeFilteringSearch}
        value={searchValue}
      />
      {!isMobile || !isFocus ? (
        <div className="buttons">
          <button onClick={rerenderTable} className="shipments-search__button">
            <ReloadIcon className="icon" />
            Обновить
          </button>
          <button onClick={handleFile} className="shipments-search__dowland">
            <XlsIcon className="icon" />
            Скачать .XLS
          </button>
        </div>
      ) : null}
    </StyledShipmentsSearch>
  );
};

export default ShipmentsSearch;

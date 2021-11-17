import { FC, useEffect, useState } from 'react';
import { RootState, useAppDispatch } from 'store';
import { useSelector } from 'react-redux';
import { OrderState, setFilterProducts } from 'reducers/orderSlice';

import SearchProfile from 'ui-kit/searchProfile/searchProfile';

import useSearch from 'hooks/OrdersAndShipmentsPages/useSearch';
import { useDebounce } from 'hooks/useDebounce';

const longNamePreloader = 'Поиск по наименованию товара';

type ProductsSearchProps = {
  className: string;
};

const ProductsSearch: FC<ProductsSearchProps> = ({ className }) => {
  const { filterProducts } = useSelector<RootState, OrderState>(
    ({ order }) => order,
  );

  const [searchValue, setSearchValue] = useState(filterProducts?.filter || '');

  const { isFocus, placeholderInput, setFocusInput } = useSearch(
    filterProducts,
    searchValue,
    setSearchValue,
    longNamePreloader,
  );

  const debounceSearchValue = useDebounce(searchValue, 1200);
  const dispatch = useAppDispatch();

  const removeFiltering = () => {
    setSearchValue('');
    dispatch(setFilterProducts({}));
    setFocusInput(false);
  };

  useEffect(() => {
    if (debounceSearchValue) {
      dispatch(setFilterProducts({ filter: debounceSearchValue }));
    } else {
      removeFiltering();
    }
  }, [debounceSearchValue]);

  const setValueInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleBlurOnInput = () => {
    if (!searchValue) {
      setFocusInput(false);
    }
  };

  return (
    <SearchProfile
      className={className}
      placeholder={placeholderInput}
      isFocus={isFocus}
      onFocus={() => setFocusInput(true)}
      onBlur={handleBlurOnInput}
      onChange={setValueInput}
      onButtonClick={() => removeFiltering()}
      value={searchValue}
    />
  );
};

export default ProductsSearch;

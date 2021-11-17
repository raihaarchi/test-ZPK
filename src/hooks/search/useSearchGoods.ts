import { fetchGoods } from 'api/sveta';
import { useEffect, useState } from 'react';
import { Good } from 'types/good';
import axios, { CancelToken } from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { ShopState } from 'reducers/shopSlice';

const useSearchGoods = (searchValue: string) => {
  const [searchResults, setSearchResults] = useState<Good[]>([]);

  const { selected: shop } = useSelector<RootState, ShopState>((s) => s.shop);

  const getSearchGoods = async (
    searchValue: string,
    shop = -1,
    cancelToken: CancelToken | undefined,
  ) => {
    try {
      const response = await fetchGoods({
        page: 1,
        department: shop,
        category: 0,
        brands: [],
        sort: 'countlabel%7Cdesc',
        cancelToken,
        limit: 20,
        filter: searchValue,
      });
      setSearchResults(response.data);
    } catch (e) {
      if (!axios.isCancel(e)) {
        console.log(`Произошла ошибка при загрузке товаров`);
      }
    }
  };

  useEffect(() => {
    const { CancelToken } = axios;
    const sourceGoods = CancelToken.source();
    setSearchResults((prev) => (searchValue ? prev : []));
    if (!!searchValue) {
      getSearchGoods(searchValue, shop?.id, sourceGoods.token);
    }

    return () => {
      sourceGoods.cancel();
    };
  }, [searchValue]);

  return {
    searchResults,
  };
};

export default useSearchGoods;

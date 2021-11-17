import { useEffect } from 'react';
import { RootState, useAppDispatch } from 'store';
import { getGoods, GoodsState } from 'reducers/goodsSlice';
import { useSelector } from 'react-redux';
import { ShopState } from 'reducers/shopSlice';
import { getGoodsFilters, GoodsFilterState } from 'reducers/goodsFilterSlice';
import { useRouter } from 'next/router';
import axios from 'axios';
import { setGoodsLoading } from 'reducers/goodsSlice';

const useCatalogGoods = () => {
  const router = useRouter();
  const {
    rcat,
    cat,
    brands: brandsString,
    price_from: priceFromString,
    price_to: priceToString,
    page: pageString,
    sort: sortString,
    filter: filterString,
  } = router.query;
  const dispatch = useAppDispatch();
  const { selected: shop, isShopsLoading } = useSelector<RootState, ShopState>(
    (s) => s.shop,
  );
  const { goods, pagination, isGoodsLoading } = useSelector<
    RootState,
    GoodsState
  >((s) => s.goods);
  const { filters, selected: category, isCategoriesLoading } = useSelector<
    RootState,
    GoodsFilterState
  >((s) => s.goodsFilter);
  const isDataLoading =
    (isShopsLoading || isCategoriesLoading || isGoodsLoading) &&
    !category &&
    !shop &&
    !goods.length;

  useEffect(() => {
    const { CancelToken } = axios;
    const sourceGoods = CancelToken.source();

    const brands =
      typeof brandsString === 'string' ? brandsString.split(',') : undefined;
    const priceFrom =
      typeof priceFromString === 'string' ? priceFromString : undefined;
    const priceTo =
      typeof priceToString === 'string' ? priceToString : undefined;
    const page = typeof pageString === 'string' ? +pageString : undefined;
    const sort = typeof sortString === 'string' ? sortString : 'price';
    const filter = typeof filterString === 'string' ? filterString : undefined;

    if (shop) {
      dispatch(
        getGoods({
          shop,
          brands,
          priceFrom,
          priceTo,
          page,
          sort,
          cancelToken: sourceGoods.token,
          categoryId: category?.id,
          filter,
        }),
      );
    }

    return () => {
      sourceGoods.cancel();
    };
  }, [
    brandsString,
    priceFromString,
    priceToString,
    pageString,
    sortString,
    rcat,
    cat,
    category,
    filterString,
    shop,
  ]);

  useEffect(() => {
    if (shop) {
      const filterQuery = router.query.filter
        ? { filter: router.query.filter }
        : {};

      const newQuery = router.query.cat
        ? {
            rcat: router.query.rcat,
            cat: router.query.cat,
            shop: shop.id,
            ...filterQuery,
          }
        : {
            rcat: router.query.rcat || 0,
            shop: shop.id,
            ...filterQuery,
          };
      router.push({
        pathname: router.pathname,
        query: newQuery,
      });
    }
  }, [shop, filterString]);

  useEffect(() => {
    const rootCategory = typeof rcat === 'string' ? +rcat : undefined;

    shop && dispatch(getGoodsFilters({ shop, rootCategory: rootCategory }));
  }, [category, filterString, rcat]);

  useEffect(() => {
    dispatch(setGoodsLoading(true));
  }, [shop]);

  return {
    goods,
    isGoodsLoading,
    pagination,
    filters,
    isDataLoading,
  };
};

export default useCatalogGoods;

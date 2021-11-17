import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  GoodsFilterState,
  setSelectedCategory,
} from 'reducers/goodsFilterSlice';
import { ShopState } from 'reducers/shopSlice';
import { RootState, useAppDispatch } from 'store';

type Links = {
  name: string;
  link: { pathname: string; query: unknown };
  active?: boolean;
};

const useCategoriesFilter = () => {
  const { categories } = useSelector<RootState, GoodsFilterState>(
    (state) => state.goodsFilter,
  );
  const { selected: shop } = useSelector<RootState, ShopState>(
    (state) => state.shop,
  );
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [rootLinks, setRootLinks] = useState<Links[]>();
  const [childrenLinks, setChildrenLinks] = useState<Links[]>();
  const { rcat, cat, filter } = router.query;

  useEffect(() => {
    const isRootCategory = rcat && !cat;
    const rootCategory = rcat && categories.find((el) => el.id === +rcat);
    const isCategory = rcat && Boolean(cat);
    const category =
      cat && rootCategory && rootCategory.children.find((el) => el.id === +cat);
    const filterQuery = router.query.filter
      ? { filter: router.query.filter }
      : {};
    if (rootCategory && isRootCategory) {
      const newChildrenLinks = rootCategory.children.map((el) => {
        return {
          name: el.name,
          link: {
            pathname: '/catalog',
            query: {
              shop: shop?.id,
              rcat: rootCategory.id,
              cat: el.id,
              ...filterQuery,
            },
          },
        };
      });

      setRootLinks([
        {
          name: rootCategory.name,
          link: {
            pathname: '/catalog',
            query: {
              shop: shop?.id,
              rcat: rootCategory.id,
              ...filterQuery,
            },
          },
          active: true,
        },
      ]);
      setChildrenLinks(newChildrenLinks);
      dispatch(setSelectedCategory(rootCategory));
    } else if (category && rootCategory && isCategory) {
      setRootLinks([
        {
          name: rootCategory.name,
          link: {
            pathname: '/catalog',
            query: {
              shop: shop?.id,
              rcat: rootCategory.id,
              ...filterQuery,
            },
          },
        },
      ]);
      setChildrenLinks([
        {
          name: category.name,
          link: {
            pathname: '/catalog',
            query: {
              shop: shop?.id,
              rcat: rootCategory.id,
              cat: category.id,
              ...filterQuery,
            },
          },
          active: true,
        },
      ]);
      dispatch(setSelectedCategory(category));
    } else {
      const allRootLinks = categories.map(({ id, name }) => ({
        name: name,
        link: {
          pathname: '/catalog',
          query: {
            shop: shop?.id,
            rcat: id,
            ...filterQuery,
          },
        },
      }));
      setRootLinks(allRootLinks);
      setChildrenLinks([]);
    }
  }, [router, rcat, cat, shop, categories, filter]);

  return { rootLinks, childrenLinks };
};

export default useCategoriesFilter;

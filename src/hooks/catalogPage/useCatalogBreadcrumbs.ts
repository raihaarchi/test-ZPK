import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { GoodsFilterState } from 'reducers/goodsFilterSlice';
import { ShopState } from 'reducers/shopSlice';
import { RootState } from 'store';
import { BreadcrumbsLink } from 'ui-kit/breadcrumbs/breadcrumbs';

const useBreadcrumbs = () => {
  const { categories } = useSelector<RootState, GoodsFilterState>(
    (state) => state.goodsFilter,
  );
  const { selected: shop } = useSelector<RootState, ShopState>(
    (state) => state.shop,
  );
  const router = useRouter();
  const breadcrumbs: BreadcrumbsLink[] = [
    {
      name: 'Главная',
      link: {
        pathname: '/',
      },
    },
  ];
  const { rcat, cat } = router.query;

  if (rcat) {
    const rootCategory = categories.find((el) => el.id === +rcat);

    rootCategory &&
      breadcrumbs.push({
        name: rootCategory.name,
        link: {
          pathname: '/catalog',
          query: {
            shop: shop?.id,
            rcat: rootCategory.id,
          },
        },
      });

    if (rootCategory && cat) {
      const category = rootCategory.children.find((el) => el.id === +cat);

      category &&
        breadcrumbs.push({
          name: category.name,
          link: {
            pathname: '/catalog',
            query: {
              shop: shop?.id,
              rcat: rootCategory.id,
              cat: category.id,
            },
          },
        });
    }
  }

  return { breadcrumbs };
};

export default useBreadcrumbs;

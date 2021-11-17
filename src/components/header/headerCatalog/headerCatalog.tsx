import { FC, useEffect, useState } from 'react';
import cn from 'classnames';
import styled from 'styled/styled';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { GoodsFilterState } from 'reducers/goodsFilterSlice';
import { FilterCategory } from 'types/filterCategory';
import { ShopState } from 'reducers/shopSlice';

const StyledCatalog = styled.div`
  position: relative;
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  min-height: 420px;

  .header-catalog__list {
    max-width: 35%;
    width: 100%;
    flex: 1;
    padding: 34px 0 106px 100px;
  }

  .header-catalog__item {
    cursor: pointer;
    transition: 0.3s;
    padding: 12px 27px 8px;
  }

  .header-catalog__item_active {
    transition: 0.3s;
    background-color: ${({ theme }) => theme.colors['light-grey']};

    .header-catalog__number {
      opacity: 0.5;
    }
  }

  .header-catalog__sublist {
    display: none;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors['light-grey']};
    border-bottom-right-radius: 15px;
    max-width: 65%;
    width: 100%;
    flex: 1;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 45px 87px 45px;
  }

  .header-catalog__sublist_active {
    display: flex;
  }

  .header-catalog__subitem {
    max-width: 50%;
    width: 100%;
  }

  .header-catalog__link {
    ${({ theme }) => theme.typography.text14x30};
    color: ${({ theme }) => theme.colors.black};

    &:hover {
      color: ${({ theme }) => theme.colors.blue};
    }
  }

  .header-catalog__title {
    position: relative;
    width: fit-content;
    ${({ theme }) => theme.typography.text16x20Bold};
  }

  .header-catalog__number {
    ${({ theme }) => theme.typography.text10x12};
    position: absolute;
    top: 0;
    right: -1px;
    transform: translateX(100%);
    opacity: 0;
    transition: 0.3s;
  }

  .header-catalog__no-categories {
    align-self: center;
    text-align: center;
    width: 100%;
  }
`;

const HeaderCatalog: FC<{ className?: string }> = ({ className }) => {
  const [activeElement, setActiveElement] = useState(0);
  const { categories } = useSelector<RootState, GoodsFilterState>(
    (state) => state.goodsFilter,
  );
  const { selected: shop } = useSelector<RootState, ShopState>(
    (state) => state.shop,
  );

  useEffect(() => {
    setActiveElement(categories[0]?.id);
  }, [categories]);

  return (
    <StyledCatalog className={className}>
      {Boolean(categories.length) && (
        <ul className="header-catalog__list">
          {categories.map((rootCategory: FilterCategory) => (
            <li
              className={cn('header-catalog__item', {
                'header-catalog__item_active':
                  activeElement === rootCategory.id,
              })}
              key={rootCategory.id}
              onMouseOver={() => setActiveElement(rootCategory.id)}>
              <p className="header-catalog__title">
                {rootCategory.name}
                <span className="header-catalog__number">
                  {rootCategory.children.length}
                </span>
              </p>
              <ul
                className={cn('header-catalog__sublist', {
                  'header-catalog__sublist_active':
                    activeElement === rootCategory.id,
                })}>
                {rootCategory.children.map((category) => (
                  <li className="header-catalog__subitem" key={category.id}>
                    <Link
                      href={{
                        pathname: '/catalog',
                        query: {
                          shop: shop?.id,
                          rcat: rootCategory.id,
                          cat: category.id,
                        },
                      }}>
                      <a className="header-catalog__link">{category.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
      {!Boolean(categories.length) && (
        <p className="header-catalog__no-categories">Категории отсутствуют</p>
      )}
    </StyledCatalog>
  );
};

export default HeaderCatalog;

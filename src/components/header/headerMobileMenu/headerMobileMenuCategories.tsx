import { FC } from 'react';
import cn from 'classnames';
import styled from 'styled/styled';
import ArrowLeft from 'components/icons/arrowLeft';
import { FilterCategory } from 'types/filterCategory';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { ShopState } from 'reducers/shopSlice';

const StyledMobileCategories = styled.div`
  display: flex;
  height: 100%;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  max-height: 440px;
  padding: 15px 30px 25px;

  @media (max-width: ${({ theme }) => theme.screens.tablet}) {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    flex: 1;
    padding: 20px 15px;
    overflow: auto;
    max-height: initial;
    padding: 20px 15px;
  }

  &.header-mobile-menu-categories__not-root-category {
    max-height: 400px;

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      max-height: initial;
    }
  }

  .header-mobile-menu-categories__back-button {
    color: ${({ theme }) => theme.colors.blue};
    outline: none;
    flex: 1;
    align-self: flex-start;
    text-align: left;
    width: fit-content;

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      display: none;
    }
  }

  .header-mobile-menu-categories__back-button_mobile {
    display: none;
    position: absolute;
    z-index: 1;

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      display: flex;
      flex: 1;
    }
  }

  .header-mobile-menu-categories__title-wrapper {
    display: flex;
  }

  .header-mobile-menu-categories__title {
    position: relative;
    text-align: center;
    ${({ theme }) => theme.typography.text16x20Bold};
    margin-bottom: 50px;

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      flex: 2;
      max-width: 70%;
      margin: 0 auto 20px;
    }
  }

  .header-mobile-menu-categories__title-number {
    ${({ theme }) => theme.typography.text10x12};
    opacity: 0.5;
    position: absolute;
    top: 0;
    right: -3px;
    transform: translateX(100%);

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      bottom: 0;
      right: 50%;
      transform: translate(50%, 100%);
    }
  }

  .header-mobile-menu-categories__no-categories {
    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      text-align: center;
    }
  }

  .header-mobile-menu-categories__list-wrapper {
    flex: 2;
    padding-top: 10px;
    display: flex;
    flex-direction: column;

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      padding-top: 0;
    }
  }

  .header-mobile-menu-categories__list {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex: 1;
    overflow: auto;

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      align-items: flex-start;
      flex-wrap: nowrap;
    }
  }

  .header-mobile-menu-categories__item {
    cursor: pointer;
    transition: 0.3s;
    width: 50%;
    margin-bottom: 27px;

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      border-bottom: 1px solid ${({ theme }) => theme.colors['dark-grey']};
      width: 100%;
      padding: 10px 0 8px;
      margin-bottom: 0;
    }
  }

  .header-mobile-menu-categories__item_mobile {
    display: none;

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      display: block;
    }
  }

  .header-mobile-menu-categories__item_tablet {
    display: block;

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      display: none;
    }
  }

  .header-mobile-menu-categories__button {
    display: block;
    ${({ theme }) => theme.typography.text14x18};
    color: ${({ theme }) => theme.colors.black};
  }

  .header-mobile-menu-categories__list-inner {
    display: flex;

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      flex-direction: column-reverse;
    }
  }

  .header-mobile-menu-categories__link {
    ${({ theme }) => theme.typography.text14x18};
    color: ${({ theme }) => theme.colors.blue};
  }
`;

interface MenuCategoriesProps {
  className?: string;
  title: string;
  rootId?: number;
  categories: FilterCategory[];
  handleBack: () => void;
  handleCategoryClick: (categoryId: number, rootId?: number) => void;
}

const HeaderMobileMenuCategories: FC<MenuCategoriesProps> = ({
  className,
  title,
  categories,
  rootId,
  handleBack,
  handleCategoryClick,
}) => {
  const isRootCategory = title === 'Каталог';
  const renderElements = isRootCategory ? categories : categories.slice(0, 6);
  const { selected: shop } = useSelector<RootState, ShopState>(
    (state) => state.shop,
  );

  return (
    <StyledMobileCategories
      className={cn(className, {
        'header-mobile-menu-categories__not-root-category': !isRootCategory,
      })}>
      <button
        className="header-mobile-menu-categories__back-button"
        onClick={handleBack}>
        <ArrowLeft />
      </button>
      <div className="header-mobile-menu-categories__list-wrapper">
        <div className="header-mobile-menu-categories__title-wrapper">
          <button
            className="header-mobile-menu-categories__back-button header-mobile-menu-categories__back-button_mobile"
            onClick={handleBack}>
            <ArrowLeft />
          </button>
          <p className="header-mobile-menu-categories__title">
            {title}
            <span className="header-mobile-menu-categories__title-number">
              {categories.length}
            </span>
          </p>
        </div>
        {isRootCategory && !Boolean(renderElements.length) && (
          <p className="header-mobile-menu-categories__no-categories">
            Категории отсутствуют
          </p>
        )}
        <ul className="header-mobile-menu-categories__list">
          {!isRootCategory && (
            <li
              className={cn(
                'header-mobile-menu-categories__item',
                'header-mobile-menu-categories__item_mobile',
              )}>
              <Link
                href={{
                  pathname: '/catalog',
                  query: {
                    shop: shop?.id,
                    rcat: rootId,
                  },
                }}>
                <a className="header-mobile-menu-categories__link">
                  Смотреть все
                </a>
              </Link>
            </li>
          )}
          {renderElements.map((el: FilterCategory) => (
            <li className="header-mobile-menu-categories__item" key={el.id}>
              <button
                className="header-mobile-menu-categories__button"
                onClick={() => handleCategoryClick(el.id, rootId)}>
                {el.name}
              </button>
            </li>
          ))}
          {!isRootCategory && (
            <li
              className={cn(
                'header-mobile-menu-categories__item',
                'header-mobile-menu-categories__item_tablet',
              )}>
              <Link
                href={{
                  pathname: '/catalog',
                  query: {
                    shop: shop?.id,
                    rcat: rootId,
                  },
                }}>
                <a className="header-mobile-menu-categories__link">
                  Смотреть все
                </a>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </StyledMobileCategories>
  );
};

export default HeaderMobileMenuCategories;

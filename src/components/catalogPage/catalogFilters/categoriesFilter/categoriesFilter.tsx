import Link from 'next/link';
import cn from 'classnames';
import { FC } from 'react';
import styled from 'styled/styled';
import useCategoriesFilter from 'hooks/catalogPage/useCategoriesFilter';
import { Url } from 'url';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { ShopState } from 'reducers/shopSlice';
import { useRouter } from 'next/router';

const StyledCategoriesFilter = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors['dark-grey']};
  padding-bottom: 35px;

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    padding-bottom: 25px;
  }

  .categories-filter__title-link {
    ${({ theme }) => theme.typography.text14x18Bold}
    color: ${({ theme }) => theme.colors.blue};
    display: inline-flex;
    margin-bottom: 11px;
  }

  .categories-filter__root-list {
    margin-bottom: 12px;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      margin-bottom: 15px;
    }
  }

  .categories-filter__root-item {
    margin-bottom: 12px;

    &:last-of-type {
      margin-bottom: 0;
    }

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      margin-bottom: 15px;
    }
  }

  .categories-filter__children-list {
    margin-left: 20px;
  }

  .categories-filter__children-item {
    margin-bottom: 12px;

    &:last-of-type {
      margin-bottom: 0;
    }

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      margin-bottom: 15px;
    }
  }

  .categories-filter__link {
    ${({ theme }) => theme.typography.text14x18};
    color: ${({ theme }) => theme.colors.blue};
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text12x15};
    }

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      color: ${({ theme }) => theme.colors.black};
    }
  }

  .categories-filter__link_active {
    color: ${({ theme }) => theme.colors.black};

    .categories-filter__mobile-radio {
      border: none;
      background-image: url('/images/radio.svg');
    }
  }

  .categories-filter__mobile-radio {
    display: none;

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      display: flex;
      width: 20px;
      height: 20px;
      border: 2px solid ${({ theme }) => theme.colors['dark-grey']};
      border-radius: 100%;
    }
  }
`;

interface CategoriesFilterProps {
  className?: string;
}

const CategoriesFilter: FC<CategoriesFilterProps> = ({ className }) => {
  const { rootLinks, childrenLinks } = useCategoriesFilter();

  const { selected } = useSelector<RootState, ShopState>((s) => s.shop);
  const router = useRouter();
  const filterQuery = router.query.filter
    ? { filter: router.query.filter }
    : {};

  return !!rootLinks?.length ? (
    <StyledCategoriesFilter className={className}>
      <Link
        href={{
          pathname: '/catalog',
          query: { rcat: 0, shop: selected?.id, ...filterQuery },
        }}>
        <a className="categories-filter__title-link">Категория</a>
      </Link>
      {rootLinks && (
        <ul className="categories-filter__root-list">
          {rootLinks.map(({ name, link, active }) => (
            <li className="categories-filter__root-item" key={name}>
              <Link href={link as Url}>
                <a
                  className={cn('categories-filter__link', {
                    'categories-filter__link_active': active,
                  })}>
                  {name}
                  <span className="categories-filter__mobile-radio" />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {childrenLinks && (
        <ul className="categories-filter__children-list">
          {childrenLinks.map(({ name, link, active }) => (
            <li className="categories-filter__children-item" key={name}>
              <Link href={link as Url}>
                <a
                  className={cn('categories-filter__link', {
                    'categories-filter__link_active': active,
                  })}>
                  {name}
                  <span className="categories-filter__mobile-radio" />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </StyledCategoriesFilter>
  ) : null;
};

export default CategoriesFilter;

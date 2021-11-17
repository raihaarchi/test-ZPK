import { FC, useState } from 'react';
import cn from 'classnames';
import favoritesFilters from 'data/favoritesFilters';
import styled from 'styled/styled';

const StyledList = styled.ul`
  display: flex;
  overflow-x: auto;
  margin-bottom: 15px;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    padding-left: 40px;
    padding-right: 40px;
    margin-right: -40px;
    margin-left: -40px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      padding-left: 15px;
      padding-right: 15px;
      margin-right: -15px;
      margin-left: -15px;
    }
  }

  .favorites-filters__item {
    display: flex;
    margin-right: 40px;

    &:last-child {
      margin-right: 0;
    }

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-right: 30px;
    }
  }

  .favorites-filters__button {
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: flex-start;
    outline: none;
  }

  .favorites-filters__button_active {
    .favorites-filters__button-text {
      opacity: 0;
    }

    .favorites-filters__button-text-bold {
      opacity: 1;
    }
  }

  .favorites-filters__button-text {
    ${({ theme }) => theme.typography.text14x18};
    position: absolute;
    white-space: nowrap;
    opacity: 1;
    display: inline-flex;
  }

  .favorites-filters__button-text-bold {
    ${({ theme }) => theme.typography.text14x18Bold};
    white-space: nowrap;
    opacity: 0;
    display: inline-flex;
  }

  .favorites-filters__button-count {
    ${({ theme }) => theme.typography.text12x15};
    opacity: 0.5;
    margin-left: 5px;
  }
`;

export const FavoritesFiltes: FC = () => {
  const [activeFilter, setActiveFilter] = useState<number>(
    favoritesFilters[0].id | 0,
  );
  const handleActiveFilterChange = (id: number) => setActiveFilter(id);

  return (
    <StyledList className="favorites-filters__list">
      {favoritesFilters.map(({ id, name, count }) => (
        <li className="favorites-filters__item" key={id}>
          <button
            className={cn('favorites-filters__button', {
              'favorites-filters__button_active': id === activeFilter,
            })}
            onClick={() => handleActiveFilterChange(id)}>
            <span className="favorites-filters__button-text-bold">
              {name}
              <span className="favorites-filters__button-count">{count}</span>
            </span>
            <span className="favorites-filters__button-text">
              {name}
              <span className="favorites-filters__button-count">{count}</span>
            </span>
          </button>
        </li>
      ))}
    </StyledList>
  );
};

export default FavoritesFiltes;

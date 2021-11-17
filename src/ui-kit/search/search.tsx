import React, {
  InputHTMLAttributes,
  FC,
  ChangeEvent,
  useState,
  useRef,
  FormEvent,
} from 'react';
import SearchIcon from 'components/icons/searchIcon';
import styled from 'styled/styled';
import { Good } from 'types/good';
import Link from 'next/link';
import { useRootClose } from 'react-overlays';
import TickRightIcon from 'components/icons/tickRightIcon';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { ShopState } from 'reducers/shopSlice';
import { useRouter } from 'next/router';

interface StyledContainerProps {
  isResultShow: boolean;
}

const StyledContainer = styled.form<StyledContainerProps>`
  ${({ theme }) => theme.typography.text16x20};
  position: relative;

  color: ${(props) => props.theme.colors.blue};
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 90;

  @media (max-width: ${({ theme }) => theme.screens.tablet}) {
    max-width: 100%;
  }

  .search__input {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    outline: none;
    border: none;
    width: 85%;
    padding: 0 60px 0 20px;
    border-radius: 15px;
    border-bottom-right-radius: ${({ isResultShow }) =>
      isResultShow ? '0' : '15px'};
    border-bottom-left-radius: ${({ isResultShow }) =>
      isResultShow ? '0' : '15px'};
    width: 100%;
    height: 50px;
    z-index: 1;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      padding: 0 55px 0 20px;
      border-radius: 8px;
      height: 40px;
    }

    &::placeholder {
      ${({ theme }) => theme.typography.text16x20};
      color: ${({ theme }) => theme.colors.blue};
    }
  }

  .search__button {
    position: absolute;
    right: 20px;
    z-index: 1;
    display: flex;
    align-items: center;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.blue};
    outline: none;
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      right: 15px;
    }
  }

  .search__results {
    position: absolute;
    top: 100%;
    right: 0;
    left: 0;
    background: ${({ theme }) => theme.colors.white};
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
    max-height: 410px;
    overflow: auto;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.2);

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      border-radius: 8px;
      max-height: 298px;
      margin-top: 10px;
    }

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      max-height: 190px;
    }
  }

  .search__result-item {
    border-top: 1px solid ${({ theme }) => theme.colors['dark-grey']};
  }

  .search__result-link {
    padding: 12px 15px 12px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      padding: 11px 20px 11px 20px;
    }
  }

  .search__tick-icon {
    color: ${({ theme }) => theme.colors['lighter-grey']};
    margin-right: 15px;

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      margin-right: 10px;
    }
  }

  .search__result-text-wrapper {
    display: flex;
    margin-right: 15px;
    flex: 1;
    overflow: hidden;

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      margin-right: 0;
    }
  }

  .search__text {
    overflow: hidden;
    flex: 1;
  }

  .search__result-name {
    ${({ theme }) => theme.typography.text14x18};
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 8px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      margin-bottom: 3px;
    }
  }

  .search__result-price {
    ${({ theme }) => theme.typography.text14x18};
    color: ${({ theme }) => theme.colors.black};
  }

  .search__result-image-wrapper {
    width: 57px;
    height: 57px;
    border: 1px solid ${({ theme }) => theme.colors['dark-grey']};
    border-radius: 8px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      display: none;
    }
  }

  .search__result-image {
    max-height: 100%;
    max-width: 100%;
  }
`;

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  searchResults?: Good[];
  handleSubmitSearch: () => void;
}

const Search: FC<SearchProps> = ({
  className,
  onChange = () => null,
  value,
  handleSubmitSearch = () => null,
  searchResults = [],
  ...inputProps
}) => {
  const [isValueChanged, setIsValueChanged] = useState(false);

  const { selected: shop } = useSelector<RootState, ShopState>((s) => s.shop);

  const ref = useRef(null);

  const hideResult = () => setIsValueChanged(false);

  const router = useRouter();

  useRootClose(ref, hideResult, {
    disabled: !isValueChanged,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    setIsValueChanged(true);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsValueChanged(false);
    if (value) {
      handleSubmitSearch();
    } else {
      await router.push({
        pathname: '/catalog',
        query: { rcat: 0, shop: shop?.id },
      });
    }
  };

  const isResultShow = isValueChanged && !!searchResults.length && !!value;

  return (
    <StyledContainer
      className={className}
      isResultShow={isResultShow}
      onSubmit={handleSubmit}
      ref={ref}>
      <input
        className="search__input"
        onChange={handleChange}
        value={value}
        {...inputProps}
      />
      <button className="search__button">
        <SearchIcon />
      </button>
      {isResultShow && (
        <ul className="search__results">
          {searchResults.map(({ id, name, photos, price }) => (
            <li key={id} className="search__result-item">
              <Link
                href={{
                  pathname: '/good/[id]',
                  query: {
                    id,
                    shop: shop?.id,
                  },
                }}>
                <a className="search__result-link" onClick={hideResult}>
                  <div className="search__result-text-wrapper">
                    <TickRightIcon className="search__tick-icon" />
                    <div className="search__text">
                      <p className="search__result-name">{name}</p>
                      <p className="search__result-price">{`${price} ₽`}</p>
                    </div>
                  </div>
                  <div className="search__result-image-wrapper">
                    <img
                      className="search__result-image"
                      src={photos[0].previewUrl}
                      alt={name}
                    />
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </StyledContainer>
  );
};

export default Search;

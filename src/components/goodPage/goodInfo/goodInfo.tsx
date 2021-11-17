import styled from 'styled/styled';
import GoodImages from 'components/goodPage/goodImages/goodImages';
import OffIcon from 'components/icons/off';
import { FC, useState } from 'react';
import cn from 'classnames';
import { Good } from 'types/good';

const StyledContainer = styled.div`
  flex: 1;
  margin-right: 20px;
  max-width: 845px;
  width: 100%;
  display: flex;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    flex-direction: column;
    margin-right: 59px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    margin-right: 0;
  }

  .good-info__images {
    width: 50%;
    margin-right: 25px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      width: 100%;
      margin-right: 0;
      display: flex;
    }
  }

  .good-info__description-wrapper {
    width: 50%;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      width: 100%;
    }
  }

  .good-info__favourite-wrapper {
    margin-bottom: 93px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      display: none;
    }
  }

  .good-info__favourite-wrapper-tablet {
    display: none;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      display: block;
      margin-left: 20px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-left: 15px;
    }
  }

  .good-info__favourite {
    display: flex;
    align-items: center;
    ${({ theme }) => theme.typography.text12x15};
    margin-bottom: 36px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-bottom: 38px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-bottom: 12px;
    }
  }

  .good-info__favourite-button {
    display: flex;
    cursor: pointer;
    outline: none;
    color: ${({ theme }) => theme.colors['dark-grey']};
    margin-right: 10px;
  }

  .good-info__favourite-button-active {
    color: ${({ theme }) => theme.colors.blue};
  }

  .good-info__brand-image {
    height: 68px;
    display: flex;

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      height: 40px;
    }
  }

  .good-info__row {
    display: flex;
  }

  .good-info__column {
    width: 50%;

    &:first-of-type {
      margin-right: 10px;
      width: 46%;

      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        width: 50%;
        margin-right: 39px;
      }

      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        margin-right: 15px;
      }
    }
  }

  .good-info__description {
    margin-bottom: 89px;
    ${({ theme }) => theme.typography.text14x30};

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-bottom: 54px;
      margin-top: 17px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-bottom: 38px;
      margin-top: 27px;
      ${({ theme }) => theme.typography.text12x20};
    }
  }

  .good-info__subtitle {
    ${({ theme }) => theme.typography.text18x26Bold};
  }

  .good-info__description-text {
    ${({ theme }) => theme.typography.text14x25};
    margin-top: 18px;
    margin-bottom: 60px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-top: 17px;
      margin-bottom: 58px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-top: 18px;
      margin-bottom: 40px;
    }
  }

  .good-info__documents {
    display: flex;
    align-items: center;
    margin-top: 20px;

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      flex-direction: column;
      align-items: flex-start;
      margin-top: 30px;
    }
  }

  .good-info__document {
    margin-right: 20px;

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-right: 0;
      margin-bottom: 12px;
    }

    &:last-child {
      margin-right: 0;

      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        margin-bottom: 0;
      }
    }
  }

  .good-info__price-wrapper {
    display: none;

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      display: block;
      margin-bottom: 17px;
    }
  }

  .good-info__price-current {
    ${({ theme }) => theme.typography.text30x30Bold};
    margin-bottom: 3px;
  }

  .good-info__price-old {
    ${({ theme }) => theme.typography.text16x20LineThrough};
    opacity: 0.3;
    margin-top: 3px;
    margin-bottom: 18px;
  }

  .good-info__availability {
    ${({ theme }) => theme.typography.text14x18};
    color: ${({ theme }) => theme.colors.emerald};
  }

  .good-info__green {
    color: ${({ theme }) => theme.colors.emerald};
  }

  .good-info__orange {
    color: ${({ theme }) => theme.colors.california};
  }

  .good-info__red {
    color: ${({ theme }) => theme.colors.red};
  }
`;

type GoodInfoProps = {
  isShelf?: boolean;
  good: Good;
};

const GoodInfo: FC<GoodInfoProps> = ({ isShelf = false, good }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const {
    price,
    oldPrice,
    uniqueCode,
    category,
    country,
    vatKind,
    unitKind,
    minQuantity,
    restQuantity,
  } = good;

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <StyledContainer>
      <div className="good-info__images">
        <GoodImages good={good} />

        <div className="good-info__favourite-wrapper-tablet">
          {!isShelf && (
            <div className="good-info__favourite">
              <button
                onClick={toggleFavorite}
                className={cn('good-info__favourite-button', {
                  'good-info__favourite-button-active': isFavorite,
                })}>
                <OffIcon />
              </button>
              <p>В избранное</p>
            </div>
          )}
          <div className="good-info__price-wrapper">
            <div className="good-info__price">
              <p className="good-info__price-current">{price} ₽</p>
              {!!oldPrice && <p className="good-info__price-old">300 ₽</p>}
            </div>
            {restQuantity > 3 && (
              <p className="good-info__availability good-info__green">
                в наличии
              </p>
            )}
            {restQuantity < 3 && restQuantity > 0 && (
              <p className="good-info__availability good-info__orange">
                скоро закончится
              </p>
            )}
            {!restQuantity && (
              <p className="good-info__availability good-info__red">
                закончился
              </p>
            )}
          </div>
          {/* <img // добавить, когда будет апи
            className="good-info__brand-image"
            src="/images/temp-image-4.png"
            alt=""
          /> */}
        </div>
      </div>
      <div className="good-info__description-wrapper">
        <div className="good-info__favourite-wrapper">
          <div className="good-info__favourite">
            <button
              onClick={toggleFavorite}
              className={cn('good-info__favourite-button', {
                'good-info__favourite-button-active': isFavorite,
              })}>
              <OffIcon />
            </button>
            <p>В избранное</p>
          </div>
          {/* <img // добавить, когда будет апи
            className="good-info__brand-image"
            src="/images/temp-image-4.png"
            alt=""
          /> */}
        </div>

        <div className="good-info__description">
          <div className="good-info__row">
            <div className="good-info__column">
              <p>Уникальный код товара</p>
            </div>
            <div className="good-info__column">
              <p>{uniqueCode}</p>
            </div>
          </div>
          <div className="good-info__row">
            <div className="good-info__column">
              <p>Тип</p>
            </div>
            <div className="good-info__column">
              <p>{category.name}</p>
            </div>
          </div>
          {/* <div className="good-info__row"> // добавить, когда будет апи
            <div className="good-info__column">
              <p>Форма выпуска</p>
            </div>
            <div className="good-info__column">
              <p>Порошок</p>
            </div>
          </div>
          <div className="good-info__row">
            <div className="good-info__column">
              <p>Назначение</p>
            </div>
            <div className="good-info__column">
              <p>Для одежды</p>
            </div>
          </div> */}
          <div className="good-info__row">
            <div className="good-info__column">
              <p>Страна производства</p>
            </div>
            <div className="good-info__column">
              <p>{country.name}</p>
            </div>
          </div>
          {/* <div className="good-info__row"> // добавить, когда будет апи
            <div className="good-info__column">
              <p>Срок годности</p>
            </div>
            <div className="good-info__column">
              <p>2 года</p>
            </div>
          </div>
          <div className="good-info__row">
            <div className="good-info__column">
              <p>Вес упаковки</p>
            </div>
            <div className="good-info__column">
              <p>9 кг</p>
            </div>
          </div> */}
          <div className="good-info__row">
            <div className="good-info__column">
              <p>Ставка НДС</p>
            </div>
            <div className="good-info__column">
              <p>{vatKind.name}</p>
            </div>
          </div>
          <div className="good-info__row">
            <div className="good-info__column">
              <p>Минимальная партия</p>
            </div>
            <div className="good-info__column">
              <p>{`${minQuantity} ${unitKind.name.toLowerCase()}`}</p>
            </div>
          </div>
        </div>

        {/* <p className="good-info__subtitle">О бренде</p> // добавить, когда будет апи
        <p className="good-info__description-text">
          Мягкий состав шампуня хорошо увлажняет волосы не перегружая их.
          Подходит для ежедневного применения не сушит концы. делает волосы
          струящимися. придает видимый блеск и объем. Бережно ухаживает за
          вашими волосами. Хорошо пенится при намыливании. Обогощает ваши волосы
          полезными компонентами.
        </p>
        <p className="good-info__subtitle">Состав</p>
        <p className="good-info__description-text">
          Вода, лаурет сульфат натрия, кокамидопропилбетаин, сорбит, гуаровая
          камедь, масло семян камелии, поликватерний-11, таурин, камелии
          экстракт семян лауриновая кислота PEG-2, изостеариловый спирт, DPG,
          кокоил метил таурин Na, лимонная кислота, EDT-2Na, БГ, токоферол,
          феноксиэтанол, бензойная кислота Na
        </p>

        <p className="good-info__subtitle">Документация</p>
        <div className="good-info__documents">
          <DownloadLink
            href=""
            name="Сертификат .PDF"
            className="good-info__document"
          />
          <DownloadLink
            href=""
            name="Другой документ .PDF"
            className="good-info__document"
          />
        </div> */}
      </div>
    </StyledContainer>
  );
};

export default GoodInfo;

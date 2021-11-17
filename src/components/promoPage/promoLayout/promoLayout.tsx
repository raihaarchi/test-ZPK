import { FC } from 'react';
import { format } from 'date-fns';
import styled from 'styled/styled';
import { ru } from 'date-fns/locale';
import { PromoDataType } from 'types/promo';
import Star from 'components/icons/promo-star';
import Circle from 'components/icons/promo-circle';
import PromotionCard from 'components/indexPage/promotionCard/promotionCard';
import Breadcrumbs, { BreadcrumbsLink } from 'ui-kit/breadcrumbs/breadcrumbs';

interface StyledPromoLayoutProps {
  circleColor: string;
}

const StyledPromoLayout = styled.div<StyledPromoLayoutProps>`
  padding-top: 220px;
  @media (max-width: ${({ theme }) => theme.screens.tablet}) {
    padding-top: 116px;
  }
  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    padding-top: 70px;
  }

  .promo__bread-crumbs {
    margin: 0 0 17px 40px;
    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      margin: 0 0 17px 0;
    }
    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      margin: 0 0 10px 15px;
    }
  }
  .condition {
    padding: 30px 40px 120px 40px;
    display: flex;
    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      padding: 50px 0px 70px 0px;
    }
    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      padding: 20px 15px 70px 15px;
      flex-direction: column;
    }
  }
  .condition__images {
    display: flex;
    height: fit-content;
    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      flex-direction: column;
    }
    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      width: 100%;
      flex-direction: row;
      justify-content: center;
    }
  }
  .circle {
    padding: 11px 0;
    width: 265px;
    height: 287px;
    position: relative;
    z-index: 2;
    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      margin-top: 10px;
      width: 155px;
      height: 155px;
      padding: 0px;
    }
    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      margin-top: 0px;
      padding: 6px 0;
    }
    &__icon {
      width: 265px;
      height: 265px;
      circle {
        fill: ${({ circleColor }) => circleColor};
      }
      @media (max-width: ${({ theme }) => theme.screens.tablet}) {
        width: 155px;
        height: 155px;
      }
    }
    &__text {
      color: ${({ theme }) => theme.colors.white};
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -60%);
      @media (max-width: ${({ theme }) => theme.screens.mobile}) {
        transform: translate(-50%, -50%);
      }
    }
    &__title {
      ${({ theme }) => theme.typography.text14x18}
      @media (max-width: ${({ theme }) => theme.screens.tablet}) {
        ${({ theme }) => theme.typography.text12x15}
      }
    }
    &__subtitle {
      margin-top: 15px;
      ${({ theme }) => theme.typography.text30x30}
      width: 177px;
      @media (max-width: ${({ theme }) => theme.screens.tablet}) {
        margin-top: 10px;
        ${({ theme }) => theme.typography.text18x20}
        width: 110px;
      }
    }
  }
  .inputfile {
    display: none;
  }
  .star {
    width: 287px;
    height: 287px;
    position: relative;
    z-index: 1;
    margin-left: -50px;
    cursor: pointer;
    color: unset;
    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      margin-left: 0px;
      margin-top: -30px;
      width: 167px;
      height: 167px;
    }
    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      margin-left: -30px;
      margin-top: 0px;
    }
    &__icon {
      width: 287px;
      height: 287px;
      path {
        fill: ${({ theme }) => theme.colors['dark-grey']};
      }
      @media (max-width: ${({ theme }) => theme.screens.tablet}) {
        width: 167px;
        height: 167px;
      }
    }
    &__text {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -70%);
      text-align: center;
      @media (max-width: ${({ theme }) => theme.screens.tablet}) {
        transform: translate(-50%, -60%);
      }
    }
    &__title {
      ${({ theme }) => theme.typography.text14x18};
      margin-bottom: 20px;
    }
    &__subtitle {
      ${({ theme }) => theme.typography.text18x20};
      @media (max-width: ${({ theme }) => theme.screens.tablet}) {
        margin-top: 7px;
        ${({ theme }) => theme.typography.text14x18}
      }
    }
  }
  .text {
    margin-left: 8%;
    margin-top: 30px;
    ${({ theme }) => theme.typography.text18x25}
    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      margin-top: 0px;
      ${({ theme }) => theme.typography.text16x20}
    }
    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      margin-top: 25px;
      margin-left: 0;
      ${({ theme }) => theme.typography.text14x25}
    }
    &__title {
      ${({ theme }) => theme.typography.text30x30}
      @media (max-width: ${({ theme }) => theme.screens.mobile}) {
        ${({ theme }) => theme.typography.text16x20Bold}
      }
    }
    &__list {
      margin-top: 50px;
      @media (max-width: ${({ theme }) => theme.screens.mobile}) {
        margin-top: 20px;
      }
      & > ol {
        margin-left: 20px;
        & > li {
          padding-left: 10px;
        }
        span {
          width: 16px;
          margin-right: 10px;
          @media (max-width: ${({ theme }) => theme.screens.mobile}) {
            width: 12px;
          }
        }
      }
    }
    &__description {
      margin-top: 45px;
      @media (max-width: ${({ theme }) => theme.screens.mobile}) {
        margin-top: 20px;
      }
    }
  }
`;

const breadcrumbsLink: BreadcrumbsLink[] = [
  { name: 'Главная', link: { pathname: '/' } },
  { name: 'Акции', link: { pathname: '/promo' } },
];

interface PromoLayoutProps {
  promo: PromoDataType;
}

const PromoLayout: FC<PromoLayoutProps> = ({ promo }) => {
  const getDate = (str: string) =>
    format(new Date(str), 'd MMMM yyyy', {
      locale: ru,
    });

  const createMarkup = () => ({ __html: promo.conditions });

  return (
    <>
      <StyledPromoLayout className="promo-wrapper" circleColor={promo.color}>
        <Breadcrumbs className="promo__bread-crumbs" links={breadcrumbsLink} />
        <PromotionCard
          title={promo.name}
          percent={promo.discount}
          background={promo.color}
          backgroundImage={promo.pic_path}
          isButtonHidden={true}
        />
        <div className="condition">
          <div className="condition__images">
            <div className="circle">
              <Circle className="circle__icon" />
              <div className="circle__text">
                <p className="circle__title">Сроки проведения акции</p>
                <p className="circle__subtitle">
                  C {getDate(promo.start_date).slice(0, -4)} до{' '}
                  {getDate(promo.end_date)}
                </p>
              </div>
            </div>
            <a href={promo.conditions_path} className="star">
              <Star className="star__icon" />
              <div className="star__text">
                <p className="star__title">
                  <img src="/images/pdf.svg" alt="pdf" />
                  .PDF
                </p>
                <span className="star__subtitle">Условие проведения акции</span>
              </div>
            </a>
          </div>
          <div className="condition__text text">
            <p className="text__title">Условия акции</p>
            <div
              className="text__list"
              dangerouslySetInnerHTML={createMarkup()}
            />
            <p className="text__description">{promo.delivery}</p>
          </div>
        </div>
      </StyledPromoLayout>
    </>
  );
};

export default PromoLayout;

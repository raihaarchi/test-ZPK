import React, { FC } from 'react';
import styled from 'styled/styled';
import Button from 'ui-kit/button/button';
import ArrowRightIcon from 'components/icons/arrowRight';

interface StyledContainerProps {
  color: string;
  image: string;
}

const StyledContainer = styled.div<StyledContainerProps>`
  border-radius: 15px;
  height: 540px;
  background: ${(props) => props.color};
  padding: 54px 87px 60px 87px;
  background-image: url(${(props) => props.image});
  background-position: right bottom;
  background-repeat: no-repeat;
  background-size: auto calc(100% - 70px);

  @media (max-width: ${(props) => props.theme.screens.desktop}) {
    padding: 54px 87px 60px 40px;
    background-size: auto calc(75% - 70px);
  }

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    height: 280px;
    padding: 30px;
    background-size: auto 70%;
  }
  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    height: 360px;
    padding: 25px 11px 20px 25px;
    background-size: auto 50%;
  }

  .promotionCard__text-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;

    .promotionCard__percent-wrapper {
      position: relative;
      display: block;

      .promotionCard__outline-icon {
        position: absolute;
        top: -20px;
        left: -20px;
        transform: rotate(-2.27deg);
        @media (max-width: ${(props) => props.theme.screens.tablet}) {
          height: 48px;
          top: -12px;
          left: -6px;
        }
      }
    }

    .promotionCard__title {
      ${({ theme }) => theme.typography.text55x60}
      color: ${(props) => props.theme.colors.black};
      max-width: 500px;
      margin-bottom: 42px;
      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        ${({ theme }) => theme.typography.text30x30}
        margin-bottom: 25px;
        max-width: 310px;
      }
    }

    .promotionCard__percent {
      ${({ theme }) => theme.typography.text80x80}
      color: ${(props) => props.theme.colors.black};
      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        ${({ theme }) => theme.typography.text30x30}
      }
    }

    .promotionCard__arrow-icon {
      margin-left: 10px;
      color: ${(props) => props.theme.colors.blue};
      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        height: 15px;
        width: 20px;
        margin-left: 15px;
      }
    }
  }

  .promotionCard__button {
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      display: none;
    }
  }
`;

interface PromotionCardPropsType {
  className?: string;
  background: string;
  title: string;
  percent: number | string;
  backgroundImage: string;
  isButtonHidden?: boolean;
}

const PromotionCard: FC<PromotionCardPropsType> = ({
  className,
  background,
  title,
  percent,
  backgroundImage,
  isButtonHidden,
}) => {
  return (
    <StyledContainer
      className={className}
      color={background}
      image={backgroundImage}>
      <div className="promotionCard__text-wrapper">
        <div>
          <h2 className="promotionCard__title">{title}</h2>
          <span className="promotionCard__percent-wrapper">
            <p className="promotionCard__percent">- {percent}%</p>
            <img
              className="promotionCard__outline-icon"
              src="/images/outline.svg"
              alt="обводка"
            />
          </span>
        </div>
        {!isButtonHidden && (
          <Button
            theme="secondary-accent"
            onClick={() => null}
            className="promotionCard__button">
            Подробнее
            <ArrowRightIcon className="promotionCard__arrow-icon" />
          </Button>
        )}
      </div>
    </StyledContainer>
  );
};

export default PromotionCard;

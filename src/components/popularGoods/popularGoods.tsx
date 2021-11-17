import GoodItem from 'components/goodItem/goodItem';
import React, { FC } from 'react';
import styled from 'styled/styled';
import theme from 'styled/theme';
import { Good } from 'types/good';
import Carousel from 'ui-kit/carousel/carousel';

interface StyledContainerProps {
  background: string;
}

const StyledContainer = styled.section<StyledContainerProps>`
  background: ${({ background }) => background};
  padding-top: 60px;
  padding-bottom: 80px;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    margin-bottom: 30px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    margin-bottom: 0;
  }

  .popular-goods__title {
    ${({ theme }) => theme.typography.text55x60};
    text-align: center;
    margin-bottom: 45px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      ${({ theme }) => theme.typography.text30x30};
      margin-bottom: 38px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      text-align: start;
      padding-right: 137px;
      margin-bottom: 30px;
    }
  }

  .popular-goods__carousel_desktop {
    @media (max-width: ${(props) => props.theme.screens.desktop}) {
      display: none;
    }
  }

  .popular-goods__carousel_tablet {
    display: none;

    @media (max-width: ${(props) => props.theme.screens.desktop}) {
      display: block;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      display: none;
    }
  }

  .popular-goods__carousel_mobile {
    display: none;

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      display: block;
    }
  }
`;

interface PopularGoodsProps {
  goods: Good[];
  className?: string;
  title: string;
  background?: string;
}

const PopularGoods: FC<PopularGoodsProps> = ({
  goods,
  className,
  title,
  background = theme.colors.grey,
}) => {
  return (
    <StyledContainer className={className} background={background}>
      <div className="wrapper">
        <h2 className="popular-goods__title">{title}</h2>
        <Carousel
          className="popular-goods__carousel_desktop"
          customSettings={{ slidesToShow: 5 }}
          cellSpacing={25}
          frameOverflow="hidden">
          {goods.map((item) => (
            <GoodItem good={item} key={item.id} />
          ))}
        </Carousel>
        <Carousel
          className="popular-goods__carousel_tablet"
          customSettings={{ slidesToShow: 4 }}
          cellSpacing={20}
          frameOverflow="hidden">
          {goods.map((item) => (
            <GoodItem good={item} key={item.id} />
          ))}
        </Carousel>
        <Carousel
          className="popular-goods__carousel_mobile"
          customSettings={{ slidesToShow: 2 }}
          cellSpacing={14}
          frameOverflow="hidden">
          {goods.map((item) => (
            <GoodItem good={item} key={item.id} />
          ))}
        </Carousel>
      </div>
    </StyledContainer>
  );
};

export default PopularGoods;

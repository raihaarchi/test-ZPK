import React from 'react';
import PromotionCard from 'components/indexPage/promotionCard/promotionCard';
import styled from 'styled/styled';
import theme from 'styled/theme';
import Carousel from 'ui-kit/carousel/carousel';

const StyledContainer = styled.section`
  margin-bottom: 120px;

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    margin-bottom: 100px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    margin-bottom: 80px;
  }

  .promotions__carousel-wrapper {
    overflow: hidden;
  }

  .promotions__carousel_desktop {
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      display: none;
    }
  }

  .promotions__carousel_tablet {
    display: none;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      display: block;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      display: none;
    }
  }

  .promotions__carousel_mobile {
    display: none;

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      display: block;
    }
  }
`;

const Promotions = () => {
  return (
    <StyledContainer
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-duration="500">
      <div className="promotions__carousel-wrapper">
        <div className="wrapper">
          <Carousel
            className="promotions__carousel_desktop"
            cellSpacing={20}
            customSettings={{ arrows: true }}
            frameOverflow="visible">
            <PromotionCard
              title="Весь сентябрь на все макаронные изделия"
              percent="25"
              background={theme.colors['light-blue']}
              backgroundImage="/images/pasta.png"
            />
            <PromotionCard
              title="До конца осени на все моющие средства"
              percent="15"
              background={theme.colors.violet}
              backgroundImage="/images/detergents.png"
            />
          </Carousel>

          <Carousel
            className="promotions__carousel_tablet"
            cellSpacing={15}
            customSettings={{ arrows: false }}
            frameOverflow="visible">
            <PromotionCard
              title="Весь сентябрь на все макаронные изделия"
              percent="25"
              background={theme.colors['light-blue']}
              backgroundImage="/images/pasta.png"
            />
            <PromotionCard
              title="До конца осени на все моющие средства"
              percent="15"
              background={theme.colors.violet}
              backgroundImage="/images/detergents.png"
            />
          </Carousel>

          <Carousel
            className="promotions__carousel_mobile"
            cellSpacing={5}
            customSettings={{ arrows: false }}
            frameOverflow="visible">
            <PromotionCard
              title="Весь сентябрь на все макаронные изделия"
              percent="25"
              background={theme.colors['light-blue']}
              backgroundImage="/images/pasta.png"
            />
            <PromotionCard
              title="До конца осени на все моющие средства"
              percent="15"
              background={theme.colors.violet}
              backgroundImage="/images/detergents.png"
            />
          </Carousel>
        </div>
      </div>
    </StyledContainer>
  );
};

export default Promotions;

import { FC } from 'react';
import Slider, { Settings } from 'react-slick';
import styled from 'styled/styled';
import Button from 'ui-kit/button/button';

interface StyledContainerProps {
  cellSpacing: number;
  frameOverflow: string;
}

const StyledContainer = styled.div<StyledContainerProps>`
  position: relative;

  .slick-track {
    display: flex;
    touch-action: pan-y;
  }

  .slick-slider {
    margin: 0 ${({ cellSpacing }) => `-${cellSpacing / 2}px`};
  }

  .slick-list {
    overflow: ${({ frameOverflow }) => frameOverflow};
  }

  .slick-slide {
    margin-right: ${({ cellSpacing }) => `${cellSpacing / 2}px`};
    margin-left: ${({ cellSpacing }) => `${cellSpacing / 2}px`};
    display: flex;
    align-items: flex-end;
    width: 100%;

    & > div {
      width: 100%;
    }
  }

  .slick-prev {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: 1;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      left: auto;
      top: -30px;
      right: 16px;
      transform: translateX(-100%) translateY(-100%);
    }
  }

  .slick-next {
    position: absolute;
    top: 50%;
    transform: translateX(50%) translateY(-50%);
    right: 0;
    z-index: 1;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      left: auto;
      top: -30px;
      right: 0;
      transform: translateX(0) translateY(-100%);
    }
  }

  .slick-disabled {
    visibility: hidden;
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      visibility: visible;
    }
  }

  .carousel__arrow-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .carousel__arrow-icon {
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      width: 20px;
      height: 15px;
    }
  }
`;

interface CarouselProps {
  customSettings?: Settings;
  className?: string;
  cellSpacing?: number;
  frameOverflow?: 'hidden' | 'visible';
}

const Carousel: FC<CarouselProps> = ({
  children,
  customSettings,
  className,
  cellSpacing = 10,
  frameOverflow = 'hidden',
}) => {
  const settings: Settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <Button theme="round">
        <div className="carousel__arrow-wrapper">
          <img
            className="carousel__arrow-icon"
            src="/images/arrow-right.svg"
            alt="следующий"
          />
        </div>
      </Button>
    ),
    prevArrow: (
      <Button theme="round">
        <div className="carousel__arrow-wrapper">
          <img
            className="carousel__arrow-icon"
            src="/images/arrow-left.svg"
            alt="предыдущий"
          />
        </div>
      </Button>
    ),
    swipeToSlide: true,
    ...customSettings,
  };

  return (
    <StyledContainer
      className={className}
      cellSpacing={cellSpacing}
      frameOverflow={frameOverflow}>
      <Slider {...settings}>{children}</Slider>
    </StyledContainer>
  );
};

export default Carousel;

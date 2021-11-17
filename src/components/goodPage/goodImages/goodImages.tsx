import { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled/styled';
import cn from 'classnames';
import { useWindowScroll } from 'react-use';
import { Good } from 'types/good';

const StyledContainer = styled.div`
  height: 100%;

  .good-images__image-wrapper {
    border: 1px solid ${({ theme }) => theme.colors['dark-grey']};
    border-radius: 8px;
    padding: 40px;
    height: 540px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      height: 286px;
      width: 216px;
      padding: 16px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      height: 160px;
      width: 138px;
    }
  }

  .good-images__image-wrapper-small {
    border: 1px solid ${({ theme }) => theme.colors['dark-grey']};
    border-radius: 8px;
    padding: 25px;
    height: 240px;
    width: 236px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .good-images__image {
    max-width: 100%;
    max-height: 100%;
    height: auto;
    width: auto;
  }

  .good-images__discount {
    position: absolute;
    top: 15px;
    left: 15px;
    width: 60px;
    height: 60px;
    ${({ theme }) => theme.typography.text16x20};
    border-radius: 100%;
    background: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      width: 40px;
      height: 40px;
      ${({ theme }) => theme.typography.text12x15Bold};
      top: 5px;
      left: 5px;
    }
  }

  .good-images__discount-small {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 40px;
    height: 40px;
    ${({ theme }) => theme.typography.text12x15Bold};
    border-radius: 100%;
    background: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  .good-images__dots {
    display: flex;
    margin-top: 20px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-top: 14px;
    }

    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      margin-top: 17px;
    }

    .good-images__dot {
      height: 5px;
      width: 100%;
      background: ${({ theme }) => theme.colors['dark-grey']};
      border-radius: 8px;
      margin-right: 23px;
      cursor: pointer;
      outline: none;

      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        margin-right: 12px;
      }

      @media (max-width: ${(props) => props.theme.screens.mobile}) {
        margin-right: 7px;
      }

      &:last-child {
        margin-right: 0;
      }
    }

    .good-images__dot_active {
      background: ${({ theme }) => theme.colors.blue};
    }
  }

  .good-images__name {
    ${({ theme }) => theme.typography.text20x30};
    max-width: 350px;
    margin-bottom: 20px;
  }

  .good-images__sticky-element {
    position: sticky;
    top: 40px;

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      display: none;
    }
  }
`;

interface GoodImagesProps {
  className?: string;
  good: Good;
}

const GoodImages: FC<GoodImagesProps> = ({ className, good }) => {
  const { photos, name, discount } = good;
  const [activeImageId, setActiveImageId] = useState(photos[0].id);

  const [goodImagesPosition, setGoodImagesPosition] = useState(0);

  const onDotClick = (i: number) => {
    setActiveImageId(i);
  };

  const goodImagesRef = useRef<HTMLDivElement>(null);
  const { y } = useWindowScroll();
  const goodImagesRefPosition = goodImagesRef.current?.getBoundingClientRect()
    .bottom;

  useEffect(() => {
    setGoodImagesPosition(goodImagesRefPosition || 0);
  }, [y]);

  const activeImage = photos.filter(({ id }) => id === activeImageId)[0];

  return (
    <StyledContainer className={className}>
      <div ref={goodImagesRef}>
        <div className="good-images__image-wrapper">
          {!!discount && (
            <div className="good-images__discount">{`-${discount}%`}</div>
          )}

          <img
            data-aos="fade-in"
            data-aos-once="true"
            key={`good-images__${activeImageId}`}
            className="good-images__image"
            src={activeImage.fullSizeUrl}
            alt={name}
          />
        </div>
        {photos.length > 1 && (
          <div className="good-images__dots">
            {photos.map(({ id }) => (
              <button
                key={id}
                onClick={() => onDotClick(id)}
                className={cn('good-images__dot', {
                  'good-images__dot_active': activeImageId === id,
                })}
              />
            ))}
          </div>
        )}
      </div>
      {/* {goodImagesPosition < 0 && ( // добавить, когда будет апи
        <div
          className="good-images__sticky-element"
          data-aos="fade-in"
          data-aos-once="true">
          <p className="good-images__name">{name}</p>
          <div className="good-images__image-wrapper-small">
            {!!discount && (
              <div className="good-images__discount-small">{`-${discount}%`}</div>
            )}

            <img
              key={`good-images__${activeImage}`}
              className="good-images__image"
              src={photos[0].previewUrl}
              alt={name}
            />
          </div>
        </div>
      )} */}
    </StyledContainer>
  );
};

export default GoodImages;

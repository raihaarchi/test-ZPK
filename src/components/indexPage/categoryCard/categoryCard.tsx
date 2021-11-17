import React, { FC } from 'react';
import Button from 'ui-kit/button/button';
import ArrowRightIcon from 'components/icons/arrowRight';
import styled from 'styled/styled';

const StyledContainer = styled.div`
  height: 260px;
  background: ${(props) => props.color};
  border-radius: 15px;
  padding: 25px 40px;
  position: relative;

  @media (max-width: ${(props) => props.theme.screens.desktop}) {
    padding: 25px 25px;
  }

  @media (max-width: ${(props) => props.theme.screens.tablet}) {
    padding: 13px 14px;
    height: 137px;
  }

  @media (max-width: ${(props) => props.theme.screens.mobile}) {
    height: 143px;
  }

  .categoryCard__title {
    ${({ theme }) => theme.typography.text30x30}
    color: ${(props) => props.theme.colors.black};
    max-width: 170px;
    @media (max-width: ${(props) => props.theme.screens.desktop}) {
      font-size: 22px;
      line-height: 24px;
    }

    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      font-weight: bold;
      font-size: 14px;
      line-height: 18px;
    }
  }

  .categoryCard__image {
    position: absolute;
    bottom: 15px;
    right: 15px;
    transform: scale(1);
    transition: all 0.5s;
    max-height: 65%;
    max-width: 70%;
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      bottom: 10px;
      right: 10px;
      max-height: 65%;
      max-width: 70%;
    }
  }

  .categoryCard__button {
    position: absolute;
    bottom: 20px;
    left: 0;
    transition: all 0.5s;
    opacity: 0;

    .categoryCard__arrow-icon {
      @media (max-width: ${(props) => props.theme.screens.tablet}) {
        height: 15px;
        width: 20px;
      }
    }
  }

  &:hover {
    .categoryCard__image {
      transform: scale(1.1);
    }

    .categoryCard__button {
      left: 20px;
      opacity: 1;
    }
  }
`;

interface CategoryCardPropsType {
  name: string;
  image: string;
  background: string;
  onClick: () => void;
  className?: string;
}

const CategoryCard: FC<CategoryCardPropsType> = ({
  name,
  image,
  background,
  onClick,
  className,
}) => {
  return (
    <StyledContainer color={background} className={className}>
      <h3 className="categoryCard__title">{name}</h3>
      <img src={image} alt={name} className="categoryCard__image" />
      <Button theme="round" onClick={onClick} className="categoryCard__button">
        <ArrowRightIcon className="categoryCard__arrow-icon" />
      </Button>
    </StyledContainer>
  );
};

export default CategoryCard;

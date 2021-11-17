import React, { FC } from 'react';
import styled from 'styled/styled';

interface StyledContainerProps {
  color: string;
  image: string;
  position: string;
}

const StyledContainer = styled.div<StyledContainerProps>`
  .item__img {
    border-radius: 15px;
    height: 319px;
    background: ${(props) => props.color};
    background-image: url(${(props) => props.image});
    background-position: ${(props) => `bottom ${props.position}`};
    background-repeat: no-repeat;
    background-size: auto 100%;
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      height: 175px;
    }
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      width: 100%;
      padding: 25% 0;
      height: auto;
    }
  }
  .item__title {
    ${(props) => props.theme.typography.text30x30};
    margin-top: 40px;
    padding-right: 25px;
    @media (max-width: ${(props) => props.theme.screens.tablet}) {
      margin-top: 20px;
      ${({ theme }) => theme.typography.text18x20};
    }
    @media (max-width: ${(props) => props.theme.screens.mobile}) {
      ${({ theme }) => theme.typography.text16x20};
    }
  }
`;

interface PromotionCardPropsType {
  className?: string;
  background: string;
  backgroundImage: string;
  bgPosition: string;
  title: string;
}

const PromotionCard: FC<PromotionCardPropsType> = ({
  className,
  background,
  backgroundImage,
  bgPosition,
  title,
}) => {
  return (
    <StyledContainer
      className={className}
      color={background}
      image={backgroundImage}
      position={bgPosition}>
      <div className="item__img" />
      <p className="item__title">{title}</p>
    </StyledContainer>
  );
};

export default PromotionCard;

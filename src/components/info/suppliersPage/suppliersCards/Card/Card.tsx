import React, { FC } from 'react';
import OtlineSuppliers from 'components/icons/outlineSuppliers';
import styled from 'styled/styled';

interface StyledCardProps {
  color: string;
  className: string;
  marginTopTablet: string;
  marginTop: string;
}

const StyledCard = styled.div<StyledCardProps>`
  margin-top: ${({ marginTop }) => marginTop};
  :not(:last-child) {
    margin-right: 25px;
  }
  height: 340px;
  padding: 40px 20px;
  background-color: ${({ color }) => color};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: calc(100% / 5);
  &:nth-of-type(3) {
    line-height: 200%;
  }

  @media (max-width: ${({ theme }) => theme.screens.tablet}) {
    margin-top: ${({ marginTopTablet }) => marginTopTablet};
    height: 180px;
    width: calc(100% / 3 - 25px);
    padding: 20px 10px 10px;
    &:nth-of-type(3) {
      margin-right: 0;
    }
  }

  @media (max-width: ${({ theme }) => theme.screens.mobile}) {
    width: 100%;
    height: 100px;
    padding: 20px 20px 20px 30px;
    flex-direction: row-reverse;
    text-align: left;
  }

  .block-card__text {
    margin-bottom: 30px;

    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      margin-bottom: 0;
    }
    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      ${({ theme }) => theme.typography.text16x20};
    }
  }

  .block-vector {
    position: relative;
    display: flex;
    align-self: center;
    ${({ theme }) => theme.typography.text30x30};

    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      margin-left: 20px;
      width: 60px;
      ${({ theme }) => theme.typography.text18x25};
    }
  }

  .block-vector__order {
    position: absolute;
    top: 56%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }

  .card-vector {
    @media (max-width: ${({ theme }) => theme.screens.tablet}) {
      height: 50px;
    }
    @media (max-width: ${({ theme }) => theme.screens.mobile}) {
      height: 40px;
    }
  }
`;

interface CardProps extends StyledCardProps {
  order: number;
  title: string;
}

const Card: FC<CardProps> = ({
  order,
  title,
  className,
  color,
  marginTop,
  marginTopTablet,
}) => {
  return (
    <StyledCard
      className={className}
      color={color}
      marginTop={marginTop}
      marginTopTablet={marginTopTablet}>
      <div className="block-vector">
        <OtlineSuppliers />
        <span className="block-vector__order">{order}</span>
      </div>
      <p className="block-card__text">{title}</p>
    </StyledCard>
  );
};

export default Card;
